import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MASTER from "../Master/master";
import "./admission.css";
import logo from "./eSchools (2).png";

const Adimition = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Father_Name: "",
    phone: "",
    dob: "",
    address: "",
    photo: null,
    signature: null,
  });
  const [isPrintPreview, setIsPrintPreview] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPrintPreview(true);
    navigate("/thank-you");
  };

  // Extra form fields to be passed to the MASTER component
  const extraFormFields = [
    { label: "Guardian Name", id: "guardianName", name: "guardianName", type: "text", placeholder: "Guardian's Name" },
    { label: "Occupation", id: "occupation", name: "occupation", type: "text", placeholder: "Guardian's Occupation" },
    { label: "Income", id: "income", name: "income", type: "number", placeholder: "Guardian's Income" },
  ];

  const PrintPreview = (
    <div id="printPreview" className="mt-4">
      <h4>Print Preview</h4>
      <p><strong>Full Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Father Name:</strong> {formData.Father_Name}</p>
      <p><strong>Phone Number:</strong> {formData.phone}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      {formData.photo && (
        <div className="mt-2">
          <strong>Photo:</strong>
          <img src={URL.createObjectURL(formData.photo)} alt="User Photo" width="100" />
        </div>
      )}
      {formData.signature && (
        <div className="mt-2">
          <strong>Signature:</strong>
          <img src={URL.createObjectURL(formData.signature)} alt="User Signature" width="100" />
        </div>
      )}
      <button className="btn btn-secondary mt-2" onClick={() => window.print()}>Print</button>
    </div>
  );

  return (
    <MASTER extraFormFields={extraFormFields}> {/* Pass extra fields dynamically */}
      <div className="container mt-5 border border-blue p-4 border-2 rounded shadow p-3 mb-5 bg-light-subtle rounded">
        <div className="text-center">
          <img src={logo} alt="School Logo" height="50px" />
        </div>

        {!isPrintPreview ? (
          <>
            <h2 className="text-center mb-4">Admission Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fatherName">Father Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fatherName"
                  name="Father_Name"
                  value={formData.Father_Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  rows="4"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="photo">Upload Photo:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="signature">Upload Signature:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="signature"
                  name="signature"
                  accept="image/*"
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mt-4" >Submit</button>
            </form>
          </>
        ) : (
          PrintPreview
        )}
      </div>
    </MASTER>
  );
};

export default Adimition;
