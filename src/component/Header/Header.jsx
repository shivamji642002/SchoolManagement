import React, { useState } from 'react';
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
        { title: "RCEPTION DESK", items: [{name:"Student Registation", link:"/student-registration"},
          {name:"Parents Dashboard", link:"/Parents"},
          {name:"Parent List  ", link:"/ParentList"},
          {name:"Teacher Registation", link:"/teacher-registration"},
          {name:"Student List", link:"/StudentList"},
          {name:"Vendors", link:"/student-registration"},
          {name:"Request", link:"/student-registration"},] },

          { title: "COMMUNICATION", items: [
            {name:"Teacher List", link:"/TeachertList"},
            {name:"Attendence Sheet", link:"/attandance"},
            {name:"Notice Board", link:"/student-registration"},
            {name:"Bulk Email", link:"/student-registration"},
            {name:"Bulk SMS", link:"/student-registration"},
            {name:"Email/SMS Logs", link:"/student-registration"},] },
            
            { title: "HUMAN RESOURCE", items: [
              {name:"Employees", link:"/student-registration"},
              {name:"Attendence", link:"/student-registration"},
              {name:"Payroll", link:"/student-registration"},
              {name:"Approve Leave", link:"/student-registration"},
              {name:"Apply Leave", link:"/student-registration"},
              {name:"Teacher's Rating", link:"/student-registration"},
              {name:"Archived Employee", link:"/student-registration"},] },

              { title: "COMMUNICATION", items: [
                {name:"Notice Board", link:"/student-registration"},
                {name:"Bulk Email", link:"/student-registration"},
                {name:"Bulk SMS", link:"/student-registration"},
                {name:"Email/SMS Logs", link:"/student-registration"},
                ] },

                { title: "LIBRARY", items: [
                  {name:"Manager", link:"/student-registration"},
                  {name:"Issue/Books", link:"/student-registration"},
                  {name:"Student Mambership", link:"/student-registration"},
                  {name:"Employee Mamber", link:"/student-registration"},
                  ] },

                  { title: "HOSTEL", items: [
                    {name:"Room Info", link:"/student-registration"},
                    {name:"Room Type", link:"/student-registration"},
                    {name:"Hostal Master", link:"/student-registration"},
                    {name:"Items Category", link:"/student-registration"},
                    ] },

                    { title: "TRANSPORTATION", items: [
                      {name:"Routes Transport", link:"/student-registration"},
                      {name:"Vehicles Transport", link:"/student-registration"},
                      {name:"Transport Masteryyy", link:"/student-registration"},
                      {name:"Bus Tracking", link:"/student-registration"},
                      ] },
                      { title: "INVENTORY", items: [
                        
                        {name:"Stocks Items", link:"/student-registration"},
                        {name:"Manager Itemsdddd", link:"/student-registration"},
                        {name:"Issue Itemsggww", link:"/student-registration"},
                        
                        {name:"Stores  wwwww", link:"/student-registration"},
                        
                        ] },

      ],
    },

    {
      title: "LMS",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "STUDENTS", items: 
          [{name:"Search Student", link:"/student-registration"},
          {name:"Admit Students", link:"/student-registration"},
          {name:"Online Admitions", link:"/student-registration"},
          {name:"Student Categories", link:"/student-registration"},
          {name:"School Houses", link:"/student-registration"},
          {name:"Archived Students", link:"/student-registration"},
          {name:"Bulk Delete Students", link:"/student-registration"},
          {name:"Archiving Reasons", link:"/student-registration"},
          {name:"Multi Course/class", link:"/student-registration"},] },

          { title: "LIVE CLASSES", items: [
            {name:"Schedule & Take Class", link:"/student-registration"},
            {name:"Live Class Report", link:"/student-registration"},
            ] },
            
            { title: "HOME WORk", items: [
              {name:"Homework/Classwork", link:"/student-registration"},
              {name:"Homework Evalution", link:"/student-registration"},
              ] },

              { title: "ATTENDANCE", items: [
                {name:"Take Attendance", link:"/student-registration"},
                {name:"Attendace Overview", link:"/student-registration"},
                {name:"Approve Leaves", link:"/student-registration"},
                ] },

                { title: "CONTENT CENTER", items: [
                  {name:"Upload Content", link:"/student-registration"},
                  {name:"Assignments", link:"/student-registration"},
                  {name:"Study Materials", link:"/student-registration"},
                  {name:"Syllabus college", link:"/student-registration"},
                  {name:"Study Materials", link:"/student-registration"},
                  {name:"Syllabus college", link:"/student-registration"},
                  {name:"Others", link:"/student-registration"},
                  ] },

                  { title: "ALUMNI", items: [
                    {name:"Alumni States", link:"/student-registration"},
                    {name:"Events", link:"/student-registration"},
                    ] },

      ],
    },
    {
      title: "Academics",
      icons:<i className="bi bi-chevron-down"></i>,
      sections: [
        { title: "ACADEMICS", items: 
          [{name:"Batch/Section", link:"/student-registration"},
          {name:"Course/Classes", link:"/student-registration"},
          {name:"Subjects", link:"/student-registration"},
          {name:"Student Groups", link:"/student-registration"},
          {name:"Time Table", link:"/student-registration"},
          {name:"Teachers Time Table", link:"/student-registration"},
          {name:"Allot Class Teacher", link:"/student-registration"},
          {name:"Student Promotions", link:"/student-registration"},
          {name:"Allot Class Teacher", link:"/student-registration"},
          {name:"Student Promotions", link:"/student-registration"},
      ] },
      { title: "EXAMINATIONS", items: [
        {name:"Exam Groups", link:"/student-registration"},
        {name:"Marks and Grades", link:"/student-registration"},
        {name:"Exam Schedule", link:"/student-registration"},
        {name:"Exam Results", link:"/student-registration"},
        {name:"Print Admit Card", link:"/student-registration"},
        {name:"Print Marksheet", link:"/student-registration"},
        {name:"Design Marksheet", link:"/student-registration"},
        ] },

        { title: "LESSON PLANNING", items: [
          {name:"Lessons Chapter", link:"/"},
          {name:"Topics    ", link:"/student-registration"},
          {name:"Lession Planning", link:"/student-registration"},
          {name:"Syllabus Status", link:"/student-registration"},
         ] },
          
            
            

              

                { title: "ONLINE EXAM", items: [
                  {name:"Question Bank", link:"/student-registration"},
                  {name:"Online Exam", link:"/student-registration"},
                  ] },
                  { title: "CERTIFICATES", items: [
                    {name:"Certification", link:"/student-registration"},
                    {name:"Design Certification", link:"/student-registration"},
                    {name:"Print Certificates", link:"/student-registration"},
                    ] },
                    { title: "ID CARD", items: [
                      {name:"Dedign ID Card", link:"/student-registration"},
                      {name:"Print ID Card", link:"/student-registration"},
                      ] },
                      { title: "PLACEMENTS", items: [
                        {name:"Placement Events", link:"/student-registration"},
                        
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
          ] },
          { title: "Fee Setup", items: [
            {name:"Fee Master", link:"/Fee-Master"},
            {name:"Fee Group", link:"/Fee-Group"},
            {name:"Fee Heads", link:"/Fee-Heads"},
            {name:"Fee Discount", link:"/Fee-Discount"},
            {name:"Accounts", link:"/Accounts"},
            ] },
            { title: "Fee Setup", items: [
              {name:"Fee Master", link:"/Fee-Master"},
              {name:"Fee Group", link:"/Fee-Group"},
              {name:"Fee Heads", link:"/Fee-Heads"},
              {name:"Fee Discount", link:"/Fee-Discount"},
              {name:"Accounts", link:"/Accounts"},
              ] },{ title: "Fee Setup", items: [
            {name:"Fee Master", link:"/Fee-Master"},
            {name:"Fee Group", link:"/Fee-Group"},
            {name:"Fee Heads", link:"/Fee-Heads"},
            {name:"Fee Discount", link:"/Fee-Discount"},
            {name:"Accounts", link:"/Accounts"},
            ] },

          { title: "Income Manager", items: [
            {name:"Add Income", link:"/Add-Income"},
            {name:"Search Income", link:"/Search-Income"},
            {name:"Income Heads", link:"/Income-Heads"},
            
            ] },
            { title: "Income Manager", items: [
              {name:"Add Income", link:"/Add-Income"},
              {name:"Search Income", link:"/Search-Income"},
              {name:"Income Heads", link:"/Income-Heads"},
              
              ] },

              { title: "Expense Manager", items: [
                {name:"Add Expense", link:"/Add-Expense"},
                {name:"Search Expensewwh", link:"/Search-Expense"},
                {name:"Expense Headshhddkkkkkkkk    ", link:"/Expense-Heads"},
                {name:"Bills ", link:"/Bills-Section"},
                ] },

                { title: "Donation Manager", items: [
                  {name:"Add Donationddd", link:"/Add-Expense"},
                  {name:"Donation Heads", link:"/Search-Expense"},
                  ] },
      ],
    },
   

    // Add other categories like Academics, Finance, etc.
  ];

  return (
    <>
     

<nav className="navbar shadow container-fluid sticky-sm-top">
<div className="navbar-logo pt-1">
  <NavLink to="/">
    <img src={logo} alt="Campus365 Logo" className="navbar-logo ms-2 w-4" />
  </NavLink>
</div>


{/* Navbar Link */}
<div className={`navbar-links-container ${isMobileMenuOpen ? 'show' : ''}`}>
  <ul className="navbar-links pt-2">
    {menuData.map((menu, index) => (
      <li className="dropdown" key={index}>
        <NavLink to="#" onClick={() => toggleDropdown(index)} aria-expanded={isDropdownOpen === index}>
          <span>{menu.title} {menu.icons}</span>
        </NavLink>

        {/* Mega Menu - Only show if the dropdown is open */}
        {isDropdownOpen === index && (
          <div className="dropdown-content mega-menu show">
            <div className="menu-container">
              {menu.sections.map((section, secIndex) => (
                <div className="menu-section" key={secIndex}>
                  <h5>{section.title}</h5>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <NavLink to={item.link}>{item.name}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
    ))}
    <li className="dark"><a href="#">Report</a></li>
    <li className="dark"><a href="#">Setting</a></li>
  </ul>
</div>
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
