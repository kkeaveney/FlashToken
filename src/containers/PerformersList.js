import Performers from '../components/Performers'
import { connect } from 'react-redux'
import { transactionsSelector } from '../actions/tokenSlice'

const mapStateToProps = (state) => ({
  transactions: transactionsSelector(state),
})

export default connect(mapStateToProps)(Performers)
