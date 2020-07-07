import React from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'

export const showAccounts = (accounts) => {
  return (
    <tbody>
      {accounts.map((account) => {
        return (
          <tr key={account}>
            <td className="text-muted">{account}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

class TransactionBlock extends Component {
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
              {showAccounts(this.props.walletAccounts)}
            </table>
          </div>
        </div>
      </div>
    )
  }
}

TransactionBlock.defaultProps = {
  web3: {},
  walletAccounts: [],
}

TransactionBlock.propTypes = {
  web3: PropTypes.object.isRequired,
  walletAccounts: PropTypes.array.isRequired,
}

export default TransactionBlock
