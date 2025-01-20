import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-white text-secondary-emphasis shadow p-3 position-fixed top-0 ${
          isOpen ? "start-0" : "start-[-250px]"
        }`}
        style={{
          width: "250px",
          height: "100vh",
          transition: "transform 0.3s ease",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          zIndex: 1050,
        }}
      >
        <button
          className="btn btn-close mb-3"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></button>
        <h3>Sidebar Menu</h3>
        <ul className="list-unstyled">
          <li className="my-2">Home</li>
          <li className="my-2">About</li>
          <li className="my-2">Services</li>
          <li className="my-2">Contact</li>
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50"
          style={{ zIndex: 1040 }}
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isOpen ? "250px" : "0",
          transition: "margin 0.3s ease",
        }}
      >
        <button
          className="btn btn-secondary m-3"
          onClick={toggleSidebar}
          aria-expanded={isOpen}
        >
          {isOpen ? "Hide Sidebar" : "Show Sidebar"}
        </button>
        <div className="p-3">
          <h1>Main Content</h1>
          <p>
            This is the main content area. The sidebar can be toggled to show or hide.
          </p>
        </div>
      </div>
      /* <nav className="navbar shadow container-fluid sticky-sm-top">
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

      </nav>  */
    </div>
  );
};

export default Sidebar;
