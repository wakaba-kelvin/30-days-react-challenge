import React from 'react'
import './Main.css'
import Expenditure from '../components/Expenditure'
import History from '../components/History'

function Main() {
  return (
    <div className="container">
        <div className="header">
            <h3>YOUR BALANCE</h3>
            <h3>$260.00</h3>
        </div>
        <Expenditure/>
        <History/>
        {/* <NewTransaction/> */}
    </div>
  )
}

export default Main