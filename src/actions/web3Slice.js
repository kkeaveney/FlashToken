import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { get } from 'lodash'

export const web3Slice = createSlice({
  name: 'web3',
  initialState: {
    connection: {},
    accounts: [],
  },
  reducers: {
    web3Loaded: (state, action) => {
      state.connection = action.payload
    },
    web3AccountLoaded: (state, action) => {
      const account = action.payload
      state.account = account

      const exsistsInArray = state.accounts.some((l) => l === action.payload)
      if (exsistsInArray) return state

      state.accounts = state.accounts.concat(account)
    },
    balanceLoaded: (state, action) => {
      state.balance = action.payload
    },
    providerLoaded: (state, action) => {
      state.provider = action.payload
    },
    currentProviderLoaded: (state, action) => {
      state.currentProvider = action.payload
    },
  },
})

export const {
  web3Loaded,
  web3AccountLoaded,
  balanceLoaded,
  providerLoaded,
  currentProviderLoaded,
} = web3Slice.actions

export default web3Slice.reducer

///// Selectors ////////

const web3 = (state) => get(state, 'web3.connection')
export const web3Selector = createSelector(web3, (w) => w)

const account = (state) => get(state, 'web3.account')
export const accountSelector = createSelector(account, (a) => a)

const walletAccounts = (state) => get(state, 'web3.accounts')
export const walletAccountsSelector = createSelector(walletAccounts, (a) => a)

const accountBalance = (state) => get(state, 'web3.balance')
export const accountBalanceSelector = createSelector(accountBalance, (ab) => ab)

const web3Provider = (state) => get(state, 'web3.provider')
export const webProviderSelector = createSelector(web3Provider, (w) => w)

const web3CurrentProvider = (state) => get(state, 'web3.currentProvider')
export const currentProviderSelector = createSelector(
  web3CurrentProvider,
  (w) => w,
)

// const token = (state) => get(state, 'token.contract')
// export const tokenSelector = createSelector(token, (t) => t)

// const tokenbalance = (state) => get(state, 'token.balance')
// export const tokenBalanceSelector = createSelector(tokenbalance, (t) => t)
