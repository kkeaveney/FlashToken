import React from 'react'
import PropTypes from 'prop-types'
import { transferTokens } from '../interactions'
import { tokenAmountChanged } from '../actions/tokenSlice'
import { recipientAccountLoaded } from '../actions/accountSlice'

const handleSubmit = async (account, token, tokenAmount, recipient) => {
  await transferTokens(token, account, recipient, tokenAmount)
}

const NewTransaction = ({
  account,
  token,
  dispatch,
  tokenAmount,
  recipient,
}) => {
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
          <form
            className="row"
            // onSubmit={(event) => {
            //   event.preventDefault()
            //   // handleSubmit(account, token, tokenAmount)
            // }}
          >
            <div className="col-0 col-sm m-1">
              <input
                type="text"
                placeholder="Recipient address"
                onChange={(e) =>
                  dispatch(recipientAccountLoaded(e.target.value))
                }
                className="form-control form-control-sm bg-dark text-white"
                required
              />
            </div>
          </form>

          <form
            className="row"
            onSubmit={(event) => {
              event.preventDefault()
              handleSubmit(account, token, tokenAmount, recipient)
            }}
          >
            <div className="col-0 col-sm m-1">
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
