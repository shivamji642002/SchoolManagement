import React, { useState } from 'react';
import Header from '../../component/Header/Header';

function Parent() {
  const [student1, setStudent1] = useState({
    name: 'Richi Hassan',
    gender: 'Female',
    roll: 2901,
    // ... other student details
  });

  const [student2, setStudent2] = useState({
    name: 'Mark Willy',
    gender: 'Male',
    roll: 2959,
    // ... other student details
  });

  const [notices, setNotices] = useState([
    { name: 'Jennyfar Lopez', date: '16 May, 2017', message: 'Great School management...' },
    // ... other notices
  ]);

  const [expenses, setExpenses] = useState([
    { id: 3055, type: 'Salary', amount: 300, status: 'Due', email: 'kazifahim93@gmail.com', date: '20/06/2017' },
    // ... other expenses
  ]);

  return (
    <>
    <Header></Header>
    <div className="container mt-5"> 
     
      <div className="row">
        <div className="col-md-6">
          {/* Student 1 Information */}
          <div className="card">
            <div className="card-header">
              My Children 01
            </div>
            <div className="card-body">
              {/* Display student details using Bootstrap cards and tables */}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          {/* Upcoming Exams, Due Fees, Result Published, Total Expenses */}
          <div className="card">
            {/* Display information using Bootstrap cards and tables */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          {/* Student 2 Information */}
          <div className="card">
            {/* Display student details using Bootstrap cards and tables */}
          </div>
        </div>

        <div className="col-md-6">
          {/* Notice Board */}
          <div className="card">
            <div className="card-header">
              Notice Board
            </div>
            <div className="card-body">
              <ul className="list-group">
                {notices.map((notice, index) => (
                  <li key={index} className="list-group-item">
                    {notice.name} - {notice.date}
                    <br />
                    {notice.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {/* All Expenses */}
          <div className="card">
            <div className="card-header">
              All Expenses
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Expense Type</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Email</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.id}</td>
                      <td>{expense.type}</td>
                      <td>{expense.amount}</td>
                      <td>{expense.status}</td>
                      <td>{expense.email}</td>
                      <td>{expense.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Parent;