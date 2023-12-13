import React from 'react'
import './Secondcomponent.css';

function Secondcomponent() {
  return (
<div className='Secondcomponent'>
    <img className='Secondcomponent-img' alt='helper img' src='https://images.unsplash.com/photo-1454418747937-bd95bb945625?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    <div className='Secondcomponent-text'>
        <h1>Welocome from the Head <br></br>Master</h1>
        <p>
            It is nigh impossible to capture the spirit of Trinity on the pages of a website. Glowing words on a digital screen, photographs of smiling, engaged boys - they are what ypu'd expect from a webite of a school like ours.<br></br>
            You would expect to see academic rigour. To see a range of co-curricular activities. Athriving Preparatory and junior school, where boys from pre-k to Year 6
        </p>
        <button className='Secondcomponent-button'>Read More</button>
    </div>
</div>
  )
}

export default Secondcomponent