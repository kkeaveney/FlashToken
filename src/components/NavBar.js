import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ account, balance, web3 }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="p">
      FlashX
    </a>
    <a className="navbar-brand sm" href="p">
      {balance}
    </a>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a
          className="nav-link small"
          href={`https://etherscan.io/address/${account}`}
          target=""
        >
          {account}
        </a>
        {/* <a className="nav-link small">{balance}</a> */}
      </li>
    </ul>
  </nav>
)

NavBar.defaultProps = {
  account: '',
  web3: {},
}

NavBar.propTypes = {
  account: PropTypes.string.isRequired,
  web3: PropTypes.object.isRequired,
}

export default NavBar
