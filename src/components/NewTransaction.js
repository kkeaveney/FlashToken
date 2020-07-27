import React from 'react'
import PropTypes from 'prop-types'
import { transferTokens } from '../interactions'

const handleSubmit = async (account, token) => {
  await transferTokens(
    token,
    account,
    '0x9d750A55aB2dCFA89fc69d448B9450Db1ADb60d2',
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
          {/* <form className="row">
            <div className="col-12 col-sm pr-sm-2">
              <input
                type="text"
                placeholder="Recipent Address"
                onChange={(e) => console.log('Change')}
                className="form-control-xs"
                value="0xA328e27b22d27a9Afdbc2A330a736382dB721656"
              />
            </div>
          </form> */}
          <table className="table table-dark table-sm small">
            <tbody></tbody>
          </table>
          <form
            className="row"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(account, token)
            }}
          >
            <div className="col-0 col-sm">
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
}

NewTransaction.propTypes = {
  token: PropTypes.object.isRequired,
}

export default NewTransaction
