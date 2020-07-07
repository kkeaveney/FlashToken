import { combineReducers } from 'redux'
import web3 from '../actions/web3Slice'
import token from '../actions/tokenSlice'
import account from '../actions/accountSlice'

export default combineReducers({
  web3,
  token,
  account,
})
