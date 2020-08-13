import React, { Component } from "react";
import { connect } from "react-redux";
import { accountSelector, web3Selector } from "../actions/web3Slice";
import { tokenSelector } from "../actions/tokenSlice";
import AccountList from "../containers/AccountList";
import Performers from "../containers/PerformersList";
import NewTransaction from "../containers/NewTransactionList";
import TransactionHistory from "../containers/TransactionHistoryList";
import { subscribeToEvents } from "../interactions";

class Content extends Component {
  // componentWillMount() {
  //   this.loadBlockchainData(this.props);
  // }

  // async loadBlockchainData({ token, dispatch, web3, account }) {
  //   await subscribeToEvents(token, dispatch, web3, account);
  //   console.log(token, web3, account);
  // }
  render() {
    return (
      <div className="content">
        <div className="vertical-split">
          <AccountList />
          <Performers />
        </div>
        <TransactionHistory />
        <div className="vertical-split"></div>
        <NewTransaction />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // token: tokenSelector(state),
    // account: accountSelector(state),
    // web3: web3Selector(state),
  };
}

export default connect(mapStateToProps)(Content);
