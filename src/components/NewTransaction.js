import React from 'react'
import PropTypes from 'prop-types'
import { transferTokens } from '../interactions'

const handleSubmit = async (token, dispatch) => {
  await transferTokens(
    token,
    '0x59AF190f808697938B99a23cb537A266b7F0b6aE',
    '0x627306090abaB3A6e1400e9345bC60c78a8BEf57',
    '1',
  )
}

const NewTransaction = ({ account, token, dispatch }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">New Transaction</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Account</th>

                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="form">
                <td>{account}</td>
              </tr>
            </tbody>
          </table>
          <form className="row">
            <div className="col-12 col-sm pr-sm-8 ">
              <input
                type="text"
                placeholder="Recipent Address"
                onChange={(e) => console.log('Change')}
                className="form-control form-control-sm bg-dark text-white"
                required
                value="0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
              />
            </div>
          </form>
          <table className="table table-dark table-sm small">
            <tbody></tbody>
          </table>
          <form
            className="row"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(token, dispatch)
            }}
          >
            <div className="col-12 col-sm pr-sm-8">
              <input
                type="text"
                placeholder="FLX Amount"
                onChange={(e) => console.log('Help')}
                className="form-control form-control-sm bg-dark text-white"
                required
                value="1"
              />
            </div>
            <div className="col-12 col-sm-auto pl-sm-0">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-sm"
              >
                Transfer
              </button>
            </div>
            <div className="col-12 col-sm pr-sm-8"></div>
          </form>
        </div>
      </div>
    </div>
  )
}

NewTransaction.defaultProps = {
  token: {},
}

NewTransaction.propTypes = {
  token: PropTypes.object.isRequired,
}

export default NewTransaction
