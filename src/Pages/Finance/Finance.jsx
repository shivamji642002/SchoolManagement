import React from 'react';
import './Finance.css'; // If you want to add separate CSS file
import Header from '../../component/Header/Header';

const Finance = () => {
  return (
    <>
    <Header/>
    <div className="menu-container">
      {/* Fee Collection Section */}
      <div className="menu-section">
        <h3>Fee Collection</h3>
        <ul>
          <li>Collect Fee</li>
          <li>Demand Notice</li>
          <li>Search Payment</li>
          <li>Fee Carry Forward</li>
          <li>Advance Fee</li>
        </ul>
      </div>

      {/* Fee Setup Section */}
      <div className="menu-section">
        <h3>Fee Setup</h3>
        <ul>
          <li>Fee Master</li>
          <li>Fee Group</li>
          <li>Fee Heads</li>
          <li>Fee Discount</li>
          <li>Accounts</li>
        </ul>
      </div>

      {/* Income Manager Section */}
      <div className="menu-section">
        <h3>Income Manager</h3>
        <ul>
          <li>Add Income</li>
          <li>Search Income</li>
          <li>Income Heads</li>
          <li>Cash Manager</li>
        </ul>
      </div>

      {/* Expense Manager Section */}
      <div className="menu-section">
        <h3>Expense Manager</h3>
        <ul>
          <li>Add Expense</li>
          <li>Search Expense</li>
          <li>Expense Heads</li>
          <li>Bills</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Finance;
