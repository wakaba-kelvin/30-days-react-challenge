import React from 'react'
import './Expenditure.css'

function Expenditure() {
  return (
  <div className="Expenditure">
    <div className="income">
        <p>INCOME</p>
        <p className='incom'>$500.00</p>
    </div>
    <div className="expense">
        <p>EXPENSE</p>
        <p className='expens'>$240.00</p>
    </div>
  </div>
  )
}

export default Expenditure