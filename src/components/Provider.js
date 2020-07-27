import React from 'react'
import PropTypes from 'prop-types'

const Provider = ({ provider }) => {
  let network = { provider }.provider
  if (network === '1') {
    network = 'Main Ethereum Network'
  } else if (network === '3') {
    network = 'Ropsten'
  } else if (network === '4') {
    network = 'Rinkeby'
  } else if (network === '42') {
    network = 'Kovan'
  }
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Provider</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Network Version</th>
                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className={`order-$`}>
                <td>{network}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

Provider.defaultProps = {
  provider: '',
}

Provider.propTypes = {
  provider: PropTypes.string,
}

export default Provider
