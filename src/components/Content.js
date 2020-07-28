import React from 'react'
import AccountList from '../containers/AccountList'
import Performers from '../containers/PerformersList'
import NewTransaction from '../containers/NewTransactionList'
import TransactionHistory from '../containers/TransactionHistoryList'

const Content = () => {
  return (
    <div className="content">
      <div className="vertical-split">
        <AccountList />
        <Performers />
      </div>
      <TransactionHistory />
      <div className="vertical-split"></div>
      <NewTransaction />
    </div>
  )
}

export default Content
