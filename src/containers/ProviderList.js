import Provider from "../components/Provider";
import { connect } from "react-redux";
import { webProviderSelector } from "../actions/web3Slice";

const mapStateToProps = (state) => ({
  provider: webProviderSelector(state),
});

export default connect(mapStateToProps)(Provider);
