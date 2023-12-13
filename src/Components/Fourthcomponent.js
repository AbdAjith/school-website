import React from 'react'
import './Fourthcomponent.css';

function Fourthcomponent() {
  return (
<div className='Fourthcomponent'>
    <div className='Fourthcomponent-text'>
        <h1>Why<br></br>SCISM</h1>
        <div className='Fourthcomponent-value'>
        <div class="Fourthcomponent-circle"></div>
        <div class="Fourthcomponent-circle2"></div>
        </div>
        <div class="youtube-container">
        <video width="400" controls>
  <source src={process.env.PUBLIC_URL + "/mov_bbb.mp4"} type="video/mp4" />
  <source src={process.env.PUBLIC_URL + "/mov_bbb.ogg"} type="video/ogg" />
</video>
<video width="400" controls>
  <source src={process.env.PUBLIC_URL + "/mov_bbb.mp4"} type="video/mp4" />
  <source src={process.env.PUBLIC_URL + "/mov_bbb.ogg"} type="video/ogg" />
</video>       
 <video width="400" controls>
  <source src={process.env.PUBLIC_URL + "/mov_bbb.mp4"} type="video/mp4" />
  <source src={process.env.PUBLIC_URL + "/mov_bbb.ogg"} type="video/ogg" />
</video>
<video width="400" controls>
  <source src={process.env.PUBLIC_URL + "/mov_bbb.mp4"} type="video/mp4" />
  <source src={process.env.PUBLIC_URL + "/mov_bbb.ogg"} type="video/ogg" />
</video>
    </div>
        </div>
    </div>
  )
}

export default Fourthcomponent