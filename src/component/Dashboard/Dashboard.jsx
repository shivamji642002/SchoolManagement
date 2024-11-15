import React from 'react';
import './Dashboard.css';
import LineChart from '../Charts/LineChart/LineChart';

function Dashboard() {
  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-4 mt-4">

          <div className="col">
            <div className="p-3 border border-dark-subtle border-3 rounded bg-transparent d-flex flex-column align-items-center">
              <i className="bi bi-person fs-1" style={{ color: '#133E87' }}></i>
              <p className="mb-1">STUDENTS</p>
              <h4>149</h4>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border border-dark-subtle border-3 rounded bg-transparent d-flex flex-column align-items-center">
              <i className="bi bi-check-circle-fill fs-1" style={{ color: '#133E87' }}></i>
              <p className="mb-1">STUDENTS ATTENDANCE</p>
              <h4>2/149</h4>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border border-dark-subtle border-3 rounded bg-transparent d-flex flex-column align-items-center">
              <i className="bi bi-people fs-1" style={{ color: '#133E87' }}></i>
              <p className="mb-1">EMPLOYEES</p>
              <h4>87</h4>
            </div>
          </div>

          <div className="col">
            <div className="p-3 border border-dark-subtle border-3 rounded bg-transparent d-flex flex-column align-items-center">
              <i className="bi bi-person-vcard-fill fs-1" style={{ color: '#133E87' }}></i>
              <p className="mb-1">EMPLOYEE ATTENDANCE</p>
              <h4>2/82</h4>
            </div>
          </div>

        </div>

        <LineChart/>
      </div>
    </>
  );
}

export default Dashboard;
