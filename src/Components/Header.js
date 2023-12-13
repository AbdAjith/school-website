import React from 'react'
import './Header.css';

function Header() {
  return (
<div className='hero'>
    <img className='hero-img' alt='helper img' src='https://plus.unsplash.com/premium_photo-1690479511787-9ab4cd183a30?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <div className='hero-text'>
        <h1>Building a Better World <br></br>One Student at a Time.</h1>
        <button className='hero-button'>Virtual Tour of SCISM</button>
    </div>
</div>
  )
}

export default Header