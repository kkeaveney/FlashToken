import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import _ from "lodash";
import { recipientAccountSelector } from "../actions/accountSlice";

export const showTransactions = (transactions) => {
  // var transactionValues = _.map(
  //   transactions,
  //   _.partialRight(_.pick, ["transactionHash", "returnValues"])
  // );

  return (
    <tbody>
      {transactions
        .slice()
        .reverse()
        .map((transaction) => {
          const sender = transaction.returnValues.sender;
          const senderReduced = sender.substr(0, 24) + "...";
          const recipent = transaction.returnValues.recipent;
          const recipentReduced = recipent.substr(0, 24) + "...";
          const transactionHash = transaction.transactionHash;
          return (
            <tr
              className={`order-${transaction.returnValues.id}`}
              key={transaction.returnValues.id}
            >
              <td className="text-muted">{transaction.returnValues.id}</td>
              <td>{senderReduced}</td>
              <td>{recipentReduced}</td>
              <td>{transactionHash}</td>
              <td className={`text-${transaction.returnValues.id}`}>
                {transaction.returnValues.amount}
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

class TransactionHistory extends Component {
  render() {
    return (
      <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">Transaction History</div>
          <div className="card-body">
            <table className="table table-dark table-sm small">
              <thead>
                <tr>
                  <th></th>
                  <th>From</th>
                  <th>To</th>
                  {/* <th>Tx</th> */}
                  <th>FLX</th>
                </tr>
              </thead>
              {showTransactions(this.props.transactions)}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

TransactionHistory.defaultProps = {
  transactions: [],
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
