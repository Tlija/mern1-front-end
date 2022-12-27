import React from 'react';
import { Link } from 'react-router-dom';
import './c.css'

export const NavBar = () => {
  return (
   <div>
  <div className="page">
  
   
    <nav className="page__menu page__custom-settings menu">
      <ul className="menu__list r-list">
        <li className="menu__group"><Link to='/'  className="menu__link r-link text-underlined">Home</Link></li>
        <li className="menu__group"><Link to='/products'  className="menu__link r-link text-underlined">Products</Link></li>
      </ul>
    </nav>
  </div>
  
</div>


  )
}
