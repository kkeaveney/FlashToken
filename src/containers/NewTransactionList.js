import NewTransaction from '../components/NewTransaction'
import { connect } from 'react-redux'
import { web3Selector, accountSelector } from '../actions/web3Slice'
import { tokenSelector } from '../actions/tokenSlice'

const mapStateToProps = (state) => ({
  web3: web3Selector(state),
  account: accountSelector(state),
  token: tokenSelector(state),
})

export default connect(mapStateToProps)(NewTransaction)
