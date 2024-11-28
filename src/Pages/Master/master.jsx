import React from 'react';
import './master.css';
import Button from 'react-bootstrap/Button';
import Navbar from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar';

const master = ({ children, extraFormFields }) => {
  return (
    <>
       <Navbar></Navbar> 
      <div className='Hero'>
        <div>
          <h5 style={{color:'blue'}}>DASHBOARD MASTER</h5>
        </div>
        <div className='main'>       
          <h3>Welcome to eSchool Demo</h3>
          <div className="d-flex flex-row-reverse" id='absolute'>
            <div className="p-1" id='second'><Button variant="primary"><i className="bi bi-blockquote-left"></i> PUBLISH NOTICE</Button></div>
            <div className="p-1" id='third'><button type="button" className="btn btn-outline-secondary" ><i className="bi bi-chat"></i> SEND SMS</button></div>
            <div className="p-1" id='four'><button type="button" className="btn btn-outline-secondary" ><i className="bi bi-envelope-at"></i> SEND EMAIL</button></div>
          </div>
        </div>
      </div>

      {/* Placeholder to inject content */}
      <div className="container mt-4">
        {children}

        {/* Rendering extra form fields dynamically if provided */}
        {extraFormFields && (
          <div className="extra-fields mt-4">
            <h5>Additional Form Fields:</h5>
            {extraFormFields.map((field, index) => (
              <div key={index} className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                
                {/* Handle different types of input fields */}
                {field.type === 'select' ? (
                  <select className="form-control" id={field.id} name={field.name} required={field.required}>
                    <option value="">Select {field.label}</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'radio' ? (
                  field.options.map((option, idx) => (
                    <div key={idx} className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name={field.name}
                        id={`${field.id}-${idx}`}
                        value={option.value}
                        required={field.required}
                      />
                      <label className="form-check-label" htmlFor={`${field.id}-${idx}`}>
                        {option.label}
                      </label>
                    </div>
                  ))
                ) : (
                  <input
                    type={field.type}
                    className="form-control"
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder || ''}
                    required={field.required}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      
    </>
  );
};

export default master;