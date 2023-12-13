import React from 'react'
import './Fivethcomponent.css';

function Fivethcomponent() {
  return (
<div className='Fivethcomponent'>
    <div className='Fivethcomponent-text'>
        <h1>Our<br></br>Schools</h1>
        <div className='Fivethcomponent-value'>
        <div class="Fivethcomponent-circle"></div>
        <div class="Fivethcomponent-circle2"></div>
        </div>
        <div className='tripcard'>
        <div className="t-card">
            <div className="t-image">
            <img alt='helper img' src='https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <h4>Kids Schools</h4>
            <button className='Fivethcomponent-but'>View</button>
        </div>
        <div className="t-card">
            <div className="t-image">
            <img alt='helper img' src='https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <h4>Matric Schools</h4>
            <button className='Fivethcomponent-but'>View</button>
        </div>
        <div className="t-card">
            <div className="t-image">
            <img alt='helper img' src='https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
            <h4>Public Schools</h4>
            <button className='Fivethcomponent-but'>View</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Fivethcomponent