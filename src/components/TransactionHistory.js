import React from "react";
import PropTypes from "prop-types";
import { Component } from "react";
import _ from "lodash";

export const showTransactions = (transactions) => {
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
          const transactionHashReduced = transactionHash.substr(0, 42) + "...";
          return (
            <React.Fragment key={transaction.returnValues.id}>
              <tr>
                <td>{senderReduced}</td>
                <td>{recipentReduced}</td>

                <td className={`text-${transaction.returnValues.id}`}>
                  {transaction.returnValues.amount}
                </td>
              </tr>

              <tr>
                <td>
                  <a
                    className="transactionHash"
                    href={`https://kovan.etherscan.io/tx/${transactionHash}`}
                    //target=""
                  >
                    {transactionHashReduced}
                  </a>
                </td>
              </tr>
            </React.Fragment>
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
