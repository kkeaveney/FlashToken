import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import NavBarList from "../containers/NavBarList";
import Content from "./Content";
import { tokenLoadedSelector } from "../actions/tokenSlice";

import {
  loadWeb3,
  loadAccount,
  loadAccountBalance,
  loadToken,
  loadTokenName,
  loadAccountTokenBalance,
  loadAllTransactions,
  subscribeToEvents,
  loadAllAccounts,
} from "../interactions";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch);
    const networkId = await web3.eth.net.getId();
    const account = await loadAccount(web3, dispatch);
    await loadAccountBalance(web3, dispatch);

    const token = await loadToken(web3, networkId, dispatch);

    if (!token) {
      window.alert("Token smart contract not detected on the current network");
      return;
    }

    await loadTokenName(token, dispatch);
    await loadAccountTokenBalance(account, token, dispatch);
    await loadAllTransactions(token, dispatch);

    window.ethereum.on("accountsChanged", async function(accounts) {
      await loadAccount(dispatch);
      await loadAccountBalance(web3, dispatch);
      await loadAccountTokenBalance(accounts[0], token, dispatch);
    });

    await loadAllAccounts(token, dispatch);
    await subscribeToEvents(token, dispatch, web3, account);

    // setTimeout(async function() {
    //   await subscribeToEvents(token, dispatch, web3, account);
    // }, 2000);
  }

  render() {
    return (
      <div>
        <NavBarList />

        <Content />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tokenLoaded: tokenLoadedSelector(state) };
}

export default connect(mapStateToProps)(App);
