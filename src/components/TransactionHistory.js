import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'

export const showTransactions = (transactions) => {
  return (
    <tbody>
      {transactions.map((transaction) => {
        return (
          <tr className={`order-${transaction.id}`} key={transaction.id}>
            <td className="text-muted">{transaction.id}</td>
            <td>{transaction.sender}</td>
            <td className={`text-${transaction.id}`}>{transaction.amount}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

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
                  {/* <th>DAPP</th>
                  <th>DAPP/ETH</th> */}
                </tr>
              </thead>
              {showTransactions(this.props.transactions)}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

TransactionHistory.defaultProps = {
  web3: {},
}

TransactionHistory.propTypes = {
  web3: PropTypes.object.isRequired,
}

export default TransactionHistory
