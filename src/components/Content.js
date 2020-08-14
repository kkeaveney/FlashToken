import React, { Component } from "react";
import { connect } from "react-redux";
import AccountList from "../containers/AccountList";
import Performers from "../containers/PerformersList";
import NewTransaction from "../containers/NewTransactionList";
import TransactionHistory from "../containers/TransactionHistoryList";

class Content extends Component {
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
  return {};
}

export default connect(mapStateToProps)(Content);
