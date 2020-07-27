import NewTransaction from '../components/NewTransaction'
import { connect } from 'react-redux'
import { accountSelector } from '../actions/web3Slice'
import { tokenSelector } from '../actions/tokenSlice'

const mapStateToProps = (state) => ({
  account: accountSelector(state),
  token: tokenSelector(state),
})

export default connect(mapStateToProps)(NewTransaction)
