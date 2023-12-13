import React, {useState} from 'react'
import './Navbar.css';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'>SCISM GROUP OF SCHOOLS</h1>
        <div className='menu-icons' onClick={handleClick}>
          <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={`nav-menu ${clicked ? 'active' : ''}`}>
            <li className='nav-links'>
                Home             
            </li>
            <li className='nav-links'>
            Our Schools 
            </li>
            <li className='nav-links'>
            Blogs
            </li>
            <li className='nav-link'>
            Contact Us
            </li>
        </ul>
    </nav>
  )
}

export default Navbar