import { connect } from "react-redux";
import TransactionHistory from "../components/TransactionHistory";
import { transactionsSelector, tokenSelector } from "../actions/tokenSlice";

const mapStateToProps = (state) => ({
  transactions: transactionsSelector(state),
  token: tokenSelector(state),
});

export default connect(mapStateToProps)(TransactionHistory);
