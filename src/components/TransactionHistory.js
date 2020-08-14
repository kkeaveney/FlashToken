import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";

export const showTransactions = (transactions) => {
  return (
    <tbody>
      {transactions
        .slice()
        .reverse()
        .map((transaction) => {
          const sender = transaction.sender;
          const senderReduced = sender.substr(0, 24) + "...";
          const recipent = transaction.recipent;
          const recipentReduced = recipent.substr(0, 24) + "...";
          return (
            <tr className={`order-${transaction.id}`} key={transaction.id}>
              <td className="text-muted">{transaction.id}</td>
              <td>{senderReduced}</td>
              <td>{recipentReduced}</td>
              <td className={`text-${transaction.id}`}>{transaction.amount}</td>
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
