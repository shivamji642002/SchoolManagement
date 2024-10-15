import React from 'react';
import './Header.css';
import logo from './campus365-logo.svg'
import { IoSearchSharp } from "react-icons/io5";


const Header = () => {
  return (
    
      <nav className="navbar shadow container-fluid sticky-sm-top">
      <div className='navbar-logo'>
        <a href='#'>
          <img src={logo} alt="Campus365 Logo" className='navbar-logo' />
        </a>
      </div>
      <div class="navbar-links-container">
        <ul class="navbar-links">
          <li><a href="#">ERP </a></li>
          <li><a href="#">LMS </a></li>
          <li><a href="#">Academics <i class="bi bi-house-door-fill"></i></a></li>
          <li><a href="#">Reports <i class="bi bi-calendar2-range"></i></a></li>
          <li><a href="#">Settings <i class="bi bi-gear-fill"></i></a></li>
          
        </ul>
        
        <div className='Search'>
        <a href="#" ><IoSearchSharp /></a>
        </div>
        <div className='notification'>
          <a><i class="bi bi-bell-fill"></i></a>
        </div>
        <div className='chat'>
          <a><i class="bi bi-chat-right-dots-fill"></i></a> 
        </div>
        <div className='book'>
          <a><i class="bi bi-book-half"></i></a>
        </div>
      </div>    
    </nav> 
  );
};

export default Header;