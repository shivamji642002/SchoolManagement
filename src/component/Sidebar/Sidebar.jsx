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
    </div>
  );
};

export default Sidebar;
