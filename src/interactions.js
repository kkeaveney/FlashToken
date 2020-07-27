import Web3 from 'web3'
import Token from './abis/Token.json'
import {
  web3Loaded,
  web3AccountLoaded,
  balanceLoaded,
  providerLoaded,
  currentProviderLoaded,
} from './actions/web3Slice'
import {
  tokenLoaded,
  tokenNameLoaded,
  transactionsLoaded,
  transactionComplete,
} from './actions/tokenSlice'
import { accountTokenBalanceLoaded } from './actions/accountSlice'
import { getAccount } from './helpers'

////// Web3 Interactions /////////

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
  web3.givenProvider.setMaxListeners(300)
  dispatch(web3Loaded(web3))
  dispatch(currentProviderLoaded(web3._currentProvider.host))
  return web3
}

export const loadAccount = async (dispatch) => {
  let account = await getAccount()
  dispatch(web3AccountLoaded(account))
  return account
}

export const loadAccountBalance = async (web3, dispatch) => {
  const account = await getAccount()
  const balanceAsWei = await web3.eth.getBalance(account)
  const balance = web3.utils.fromWei(balanceAsWei, 'ether')
  dispatch(balanceLoaded(balance))
  return balance
}

export const loadProvider = async (web3, dispatch) => {
  const provider = web3._currentProvider.connection.networkVersion
  dispatch(providerLoaded(provider))
}

////// Token Interactions ///////

export const loadToken = async (web3, networkId, dispatch) => {
  try {
    const token = web3.eth.Contract(
      Token.abi,
      Token.networks[networkId].address,
    )

    dispatch(tokenLoaded(token))

    return token
  } catch (error) {
    console.log('Contract not deployed to the current network')
    return null
  }
}

export const loadTokenName = async (token, dispatch) => {
  const name = await token.methods.name().call()
  dispatch(tokenNameLoaded(name))
  return name
}

export const loadAccountTokenBalance = async (address, token, dispatch) => {
  const tokenBalance = await token.methods.balanceOf(address).call()
  dispatch(accountTokenBalanceLoaded(tokenBalance))
}

export const transferTokens = async (
  token,
  senderAddress,
  receiverAddress,
  value,
) => {
  try {
    await token.methods
      .makeTransaction(receiverAddress, value)
      .send({ from: senderAddress })
  } catch (err) {
    console.log(err)
  }
}

export const loadAllTransactions = async (token, dispatch) => {
  const transactionStream = await token.getPastEvents('Transfer', {
    fromBlock: 0,
    toBlock: 'latest',
  })

  const transactions = transactionStream.map((event) => event.returnValues)
  dispatch(transactionsLoaded(transactions))
}

export const subscribeToEvents = async (token, dispatch, web3, address) => {
  token.events.Transfer({}, (error, event) => {
    dispatch(transactionComplete(event.returnValues))
    loadAccountTokenBalance(address, token, dispatch)
    loadAccountBalance(web3, dispatch)
  })
}
