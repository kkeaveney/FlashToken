import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { get } from "lodash";
import _ from "lodash";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    tokenLoaded: false,
    transactionsLoaded: false,
    transactions: [],
    tokenAmount: "",
    ownerAccounts: [],
    tokenBalance: [],
  },
  reducers: {
    tokenLoaded: (state, action) => {
      state.tokenLoaded = true;
      state.contract = action.payload;
    },
    tokenNameLoaded: (state, action) => {
      state.name = action.payload;
    },
    transactionsLoaded: (state, action) => {
      state.transactions = action.payload;
      state.transactionsLoaded = true;
    },
    transactionComplete: (state, action) => {
      state.transactions.push(action.payload);
    },
    tokenAmountChanged: (state, action) => {
      state.tokenAmount = action.payload;
    },
    tokenOwnerAccountsLoaded: (state, action) => {
      state.ownerAccounts = action.payload;
    },
  },
});
export const {
  tokenLoaded,
  tokenNameLoaded,
  transactionsLoaded,
  transactionComplete,
  tokenAmountChanged,
  tokenOwnerAccountsLoaded,
} = tokenSlice.actions;

export default tokenSlice.reducer;

// Selectors ///

const token = (state) => get(state, "token.contract");
export const tokenSelector = createSelector(token, (t) => t);

const tokenName = (state) => get(state, "token.name");
export const tokenNameSelector = createSelector(tokenName, (n) => n);

const tokenbalance = (state) => get(state, "token.balance");
export const tokenBalanceSelector = createSelector(tokenbalance, (t) => t);

const transactions = (state) => get(state, "token.transactions");
export const transactionsSelector = createSelector(transactions, (t) => {
  //var transactionValues = _.map(t, _.partialRight(_.pick, ["returnValues"]));
  return t;
});

const tokenAmount = (state) => get(state, "token.tokenAmount");
export const tokenAmountSelector = createSelector(tokenAmount, (t) => t);

const tokenAccounts = (state) => get(state, "token.ownerAccounts");
export const tokenAccountSelector = createSelector(tokenAccounts, (t) => {
  // t = _.uniqBy(t, "recipent");
  return t;
});
