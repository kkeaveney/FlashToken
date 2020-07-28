import NewTransaction from '../components/NewTransaction'
import { connect } from 'react-redux'
import { accountSelector } from '../actions/web3Slice'
import { tokenSelector, tokenAmountSelector } from '../actions/tokenSlice'
import { recipientAccountSelector } from '../actions/accountSlice'

const mapStateToProps = (state) => ({
  account: accountSelector(state),
  token: tokenSelector(state),
  tokenAmount: tokenAmountSelector(state),
  recipient: recipientAccountSelector(state),
})

export default connect(mapStateToProps)(NewTransaction)
