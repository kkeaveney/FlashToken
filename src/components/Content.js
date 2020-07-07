import React from 'react'
import AccountList from '../containers/AccountList'
import ProviderList from '../containers/ProviderList'
import NewTransaction from '../containers/NewTransactionList'
import TransactionHistory from '../containers/TransactionHistoryList'

const Content = () => {
  return (
    <div className="content">
      <div className="vertical-split">
        <AccountList />
        <ProviderList />
      </div>
      <TransactionHistory />
      <div className="vertical-split"></div>
      <NewTransaction />
    </div>
  )
}

export default Content
