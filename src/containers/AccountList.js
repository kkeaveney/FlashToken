import Account from '../components/Account'
import { connect } from 'react-redux'
import { accountBalanceSelector, web3Selector } from '../actions/web3Slice'
import { tokenNameSelector } from '../actions/tokenSlice'
import { accountTokenBalanceSelector } from '../actions/accountSlice'

const mapStateToProps = (state) => ({
  balance: accountBalanceSelector(state),
  web3: web3Selector(state),
  tokenName: tokenNameSelector(state),
  accountTokenBalance: accountTokenBalanceSelector(state),
})

export default connect(mapStateToProps)(Account)
