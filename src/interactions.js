import Web3 from "web3";
import _, { times } from "lodash";
import Token from "./abis/Token.json";
import {
  web3Loaded,
  web3AccountLoaded,
  balanceLoaded,
} from "./actions/web3Slice";
import {
  tokenLoaded,
  tokenNameLoaded,
  transactionsLoaded,
  tokenOwnerAccountsLoaded,
} from "./actions/tokenSlice";
import { accountTokenBalanceLoaded } from "./actions/accountSlice";
import { getAccount } from "./helpers";
import { relativeTimeRounding } from "moment";

////// Web3 Interactions /////////

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  web3.givenProvider.setMaxListeners(300);
  dispatch(web3Loaded(web3));
  return web3;
};

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(web3AccountLoaded(account));
  return account;
};

export const loadAccountBalance = async (web3, dispatch) => {
  const account = await getAccount();
  const balanceAsWei = await web3.eth.getBalance(account);
  const balance = web3.utils.fromWei(balanceAsWei, "ether");
  dispatch(balanceLoaded(balance));
  return balance;
};

////// Token Interactions ///////

export const loadToken = async (web3, networkId, dispatch) => {
  try {
    const token = web3.eth.Contract(
      Token.abi,
      Token.networks[networkId].address
    );

    dispatch(tokenLoaded(token));

    return token;
  } catch (error) {
    console.log("Contract not deployed to the current network");
    return null;
  }
};

export const loadTokenName = async (token, dispatch) => {
  const name = await token.methods.name().call();
  dispatch(tokenNameLoaded(name));
  return name;
};

export const loadAccountTokenBalance = async (address, token, dispatch) => {
  const tokenBalance = await token.methods.balanceOf(address).call();
  dispatch(accountTokenBalanceLoaded(tokenBalance));
};

export const transferTokens = async (
  token,
  senderAddress,
  receiverAddress,
  value
) => {
  try {
    await token.methods
      .makeTransaction(receiverAddress, value)
      .send({ from: senderAddress });
  } catch (err) {
    console.log(err);
  }
};

export const loadAllTransactions = async (token, dispatch) => {
  const transactionStream = await token.getPastEvents("Transfer", {
    fromBlock: 0,
    toBlock: "latest",
  });

  const transactions = transactionStream.map((event) => event);
  dispatch(transactionsLoaded(transactions));
};

export const loadAllAccounts = async (token, dispatch) => {
  const transactionStream = await token.getPastEvents("Transfer", {
    fromBlock: 0,
    toBlock: "latest",
  });
  const transactions = transactionStream.map((event) => event);
  const returnValues = _.map(transactions, "returnValues");

  const functionWithPromise = (item) => {
    //a function that returns a promise

    return Promise.resolve(item);
  };

  const anAsyncFunction = async (item) => {
    return functionWithPromise(
      (item.balance = await token.methods.balanceOf(item.recipent).call())
    );
  };

  const getData = async () => {
    return Promise.all(returnValues.map((item) => anAsyncFunction(item)));
  };

  getData().then((data) => {
    dispatch(tokenOwnerAccountsLoaded(returnValues));
  });
};

export const subscribeToEvents = async (token, dispatch, web3, address) => {
  if (token) {
    token.events.Transfer({}, (error, event) => {
      if (error) {
        console.log(error);
      } else {
        //activeAccounts(event, dispatch, token);
        loadAllTransactions(token, dispatch);
        loadAccountTokenBalance(address, token, dispatch);
        loadAccountBalance(web3, dispatch);
        loadAllAccounts(token, dispatch);
      }
    });
  }
};
