import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { accountSelector, web3Selector } from "../actions/web3Slice";

const mapStateToProps = (state) => ({
  account: accountSelector(state),
  web3: web3Selector(state),
});

export default connect(mapStateToProps)(NavBar);
