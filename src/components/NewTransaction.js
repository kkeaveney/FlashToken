import React from 'react'
import PropTypes from 'prop-types'
import { transferTokens } from '../interactions'
import { tokenAmountChanged } from '../actions/tokenSlice'

const handleSubmit = async (account, token, tokenAmount) => {
  await transferTokens(
    token,
    account,
    '0xA328e27b22d27a9Afdbc2A330a736382dB721656',
    tokenAmount,
  )
}

const NewTransaction = ({ account, token, dispatch, tokenAmount }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">New Transaction</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Account</th>
              </tr>
            </thead>
            <tbody>
              <tr className="form ">
                <td>{account}</td>
              </tr>
            </tbody>
          </table>
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Recipient</th>
              </tr>
            </thead>
            <tbody>
              <tr className="form ">
                <td>0xA328e27b22d27a9Afdbc2A330a736382dB721656</td>
              </tr>
            </tbody>
          </table>

          <table className="table table-dark table-sm small">
            <tbody></tbody>
          </table>
          <form
            className="row"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(account, token, tokenAmount)
            }}
          >
            <div className="col-0 col-sm">
              <input
                type="text"
                placeholder="FLX Amount"
                onChange={(e) => dispatch(tokenAmountChanged(e.target.value))}
                className="form-control form-control-sm bg-dark text-white"
                required
              />
            </div>
            <div className="col-12 col-sm-auto pl-sm-0">
              <button
                type="submit"
                className="btn btn-secondary btn-block btn-sm"
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
  tokenAmount: '0',
}

NewTransaction.propTypes = {
  token: PropTypes.object.isRequired,
  tokenAmount: PropTypes.string.isRequired,
}

export default NewTransaction
