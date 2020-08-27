import Performers from "../components/Performers";
import { connect } from "react-redux";
import { tokenAccountSelector } from "../actions/tokenSlice";

const mapStateToProps = (state) => ({
  accounts: tokenAccountSelector(state),
});

export default connect(mapStateToProps)(Performers);
