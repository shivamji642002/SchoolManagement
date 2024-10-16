import React from 'react';
import './Header.css';
import logo from './campus365-logo.svg'
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    
      <nav className="navbar shadow container-fluid sticky-sm-top">
      <div className='navbar-logo pt-1'>
        
        <Link to='/'> {/* Use Link instead of a for routing */}
          <img src={logo} alt="Campus365 Logo" className='navbar-logo' />
        </Link>
      </div>
      <div class="navbar-links-container">
        <ul class="navbar-links pt-3">
        <li><Link to="/reports">Home</Link></li> {/* Use Link for routing */}
          <li><Link to="/settings"> LMS</Link></li>
          <li><a href="#">Academics <i class="bi bi-house-door-fill"></i></a></li>
          <li><a href="#">Reports <i class="bi bi-calendar2-range"></i></a></li>
          <li><a href="#">Settings <i class="bi bi-gear-fill"></i></a></li>
          
        </ul>
        
        <div className='Search mt-2'>
        <a href="#" ><IoSearchSharp /></a>
        </div>
        <div className='notification mt-2'>
          <a><i class="bi bi-bell-fill"></i></a>
        </div>
        <div className='chat mt-2'>
          <a><i class="bi bi-chat-right-dots-fill"></i></a> 
        </div>
        <div className='book mt-2'>
          <a><i class="bi bi-book-half"></i></a>
        </div>
      </div>    
    </nav> 
  );
};

export default Header;