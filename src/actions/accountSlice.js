import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { get } from 'lodash'

export const accountSlice = createSlice({
  name: 'Account',
  initialState: {
    tokenBalance: '',
    recipientAccount: '',
  },
  reducers: {
    accountTokenBalanceLoaded: (state, action) => {
      state.tokenBalance = action.payload
    },
    recipientAccountLoaded: (state, action) => {
      state.recipientAccount = action.payload
    },
  },
})
export const {
  accountTokenBalanceLoaded,
  recipientAccountLoaded,
} = accountSlice.actions

export default accountSlice.reducer

// Selectors ///

const accountTokenBalance = (state) => get(state, 'account.tokenBalance')
export const accountTokenBalanceSelector = createSelector(
  accountTokenBalance,
  (t) => t,
)

const recipientAccount = (state) => get(state, 'account.recipientAccount')
export const recipientAccountSelector = createSelector(
  recipientAccount,
  (a) => a,
)
