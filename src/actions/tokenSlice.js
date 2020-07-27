import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { get } from 'lodash'

let lastId = 0

export const tokenSlice = createSlice({
  name: 'FlxToken',
  initialState: {
    tokenLoaded: false,
    transactionsLoaded: false,
    transactions: [],
  },
  reducers: {
    tokenLoaded: (state, action) => {
      state.tokenLoaded = true
      state.contract = action.payload
    },
    tokenNameLoaded: (state, action) => {
      state.name = action.payload
    },
    transactionsLoaded: (state, action) => {
      state.transactions = action.payload
      state.transactionsLoaded = true
    },
    transactionComplete: (state, action) => {
      state.transactions.push(action.payload)
    },
  },
})
export const {
  tokenLoaded,
  tokenNameLoaded,
  accountTokenBalanceLoaded,
  transactionsLoaded,
  transactionComplete,
} = tokenSlice.actions

export default tokenSlice.reducer

// Selectors ///

const token = (state) => get(state, 'token.contract')
export const tokenSelector = createSelector(token, (t) => t)

const tokenName = (state) => get(state, 'token.name')
export const tokenNameSelector = createSelector(tokenName, (n) => n)

const tokenbalance = (state) => get(state, 'token.balance')
export const tokenBalanceSelector = createSelector(tokenbalance, (t) => t)

const transactions = (state) => get(state, 'token.transactions')
export const transactionsSelector = createSelector(transactions, (t) => t)
