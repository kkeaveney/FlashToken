import { connect } from 'react-redux'
import TransactionHistory from '../components/TransactionHistory'
import { transactionsSelector } from '../actions/tokenSlice'

const mapStateToProps = (state) => ({
  transactions: transactionsSelector(state),
})

export default connect(mapStateToProps)(TransactionHistory)
