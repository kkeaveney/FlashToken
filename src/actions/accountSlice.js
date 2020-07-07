import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { get } from 'lodash'

export const accountSlice = createSlice({
  name: 'Account',
  initialState: {
    tokenBalance: '',
  },
  reducers: {
    accountTokenBalanceLoaded: (state, action) => {
      state.tokenBalance = action.payload
    },
  },
})
export const { accountTokenBalanceLoaded } = accountSlice.actions

export default accountSlice.reducer

// Selectors ///

const accountTokenBalance = (state) => get(state, 'account.tokenBalance')
export const accountTokenBalanceSelector = createSelector(
  accountTokenBalance,
  (t) => t,
)
