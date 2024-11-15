import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './logo2.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(null);                 // Track which dropdown is open
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  // object media data 
  const menuData = [
    {
      title: "ERP",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "Menu 1", items: [{name:"Student Registation", link:"/student-registration"},
          {name:"Parents Dashboard", link:"/Parents"},
          {name:"Parent List", link:"/ParentList"},
          {name:"Teacher Registation", link:"/teacher-registration"},
          {name:"Student List", link:"/StudentList"},] },

          { title: "Menu 2", items: [
            {name:"Teacher List", link:"/TeachertList"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},] },
            
            { title: "Menu 3", items: [
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},] },

              { title: "Menu 4", items: [
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},] },

      ],
    },

    {
      title: "LMS",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "Menu 1", items: 
          [{name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},] },

          { title: "Menu 2", items: [
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            ] },
            
            { title: "Menu 3", items: [
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},] },

              { title: "Menu 4", items: [
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                ] },

      ],
    },
    {
      title: "Academics",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "Menu 1", items: 
          [{name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},
          {name:"Student Registation", link:"/student-registration"},] },

          { title: "Menu 2", items: [
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            {name:"Student Registation", link:"/student-registration"},
            ] },
            
            { title: "Menu 3", items: [
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},
              {name:"Student Registation", link:"/student-registration"},] },

              { title: "Menu 4", items: [
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                {name:"Student Registation", link:"/student-registration"},
                ] },

      ],
    },

    {
      title: "Finance ",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "Fee Collection", items: [
          {name:"Collect Fee", link:"/Collect-fee"},
          {name:"Demand Notice", link:"/Demand-Notice"},
          {name:"Search Payment", link:"/Search-Payment"},
          {name:"Fee Carry Forward", link:"/Fee-Carry-Forward"},
          {name:"Advance Fee", link:"/Advance-Fee"},
          ] },

          { title: "Income Manager", items: [
            {name:"Add Income", link:"/Add-Income"},
            {name:"Search Income", link:"/Search-Income"},
            {name:"Income Heads", link:"/Income-Heads"},
            {name:"Cash Manager", link:"/Cash-Manager"},
            ] },

            { title: "Fee Setup", items: [
              {name:"Fee Master", link:"/Fee-Master"},
              {name:"Fee Group", link:"/Fee-Group"},
              {name:"Fee Heads", link:"/Fee-Heads"},
              {name:"Fee Discount", link:"/Fee-Discount"},
              {name:"Accounts", link:"/Accounts"},
              ] },
                
              { title: "Expense Manager", items: [
                {name:"Add Expense", link:"/Add-Expense"},
                {name:"Search Expense", link:"/Search-Expense"},
                {name:"Expense Heads", link:"/Expense-Heads"},
                {name:"Bills Section", link:"/Bills-Section"},
                ] },
      ],
    },
   

    // Add other categories like Academics, Finance, etc.
  ];

  return (
    <>
      <nav className="navbar shadow container-fluid sticky-sm-top">
        <div className='navbar-logo pt-1'>
          <NavLink to='/'>
            <img src={logo} alt="Campus365 Logo" className='navbar-logo ms-2 w-4' />
          </NavLink>
        </div>

        {/* mobile view button */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen}>
          <i className={isMobileMenuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        {/* navbar Link */}
        <div className={`navbar-links-container  ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-links pt-2">
            {menuData.map((menu, index) => (
              <li className="dropdown" key={index}>
                <NavLink to="#" onClick={() => toggleDropdown(index)} aria-expanded={isDropdownOpen === index}>
                  <span>{menu.title} {menu.icons}</span>
                </NavLink>

                {isDropdownOpen === index && (
                  <div className="dropdown-content mega-menu show">
                    <div className="menu-container mt-0">
                      {menu.sections.map((section, secIndex) => (
                        <div className="menu-section" key={secIndex}>
                          <h5>{section.title}</h5>
                          <ul>
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavLink to={item.link}>{item.name}</NavLink></li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li className="dark"> <a href="#">Report</a></li>
            <li className="dark"><a href="#">Setting</a></li>
            
          </ul>
        </div>

        {/* Icons and Search */}

        <div className="icons-container">
          <div className='Search mt-2'>
            <a href="#" aria-label="Search"><i className="bi bi-search" style={{ color: '#133E87' }}></i></a>
          </div>
          <div className='notification mt-2'>
            <a href="#" aria-label="Notifications"><i className="bi bi-bell-fill" style={{ color: '#133E87' }}></i></a>
          </div>
          <div className='chat mt-2'>
            <a href="#" aria-label="Chat"><i className="bi bi-chat-right-dots-fill" style={{ color: '#133E87' }}></i></a>
          </div>
          <div className='book mt-2'>
            <a href="#" aria-label="Books"><i className="bi bi-book-half" style={{ color: '#133E87' }}></i></a>
          </div>

        </div>

      </nav>
    </>
  );
}
export default Header;
