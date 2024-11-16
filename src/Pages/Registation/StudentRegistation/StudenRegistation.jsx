import React, { useState } from 'react';
import Header from '../../../component/Header/Header'
import { Modal, Button } from 'react-bootstrap';

function StudenRegistation() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        className: '',
        section: '',
        gender: '',
        dateOfBirth: '',
        rollNo: '',
        admissionNo: '',
        religion: '',
        email: '',
        fatherName: '',
        motherName: '',
        fatherOccupation: '',
        motherOccupation: '',
        phoneNumber: '',
        nationality: '',
        presentAddress: '',
        permanentAddress: '',
        studentPhoto: null,
        parentPhoto: null,
    });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    // Validate form data
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        try {
            // Send the form data to the backend
            const response = await fetch('http://localhost:5000/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Student registered successfully!');
                // Reset form data
                setFormData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    className: '',
                    section: '',
                    gender: '',
                    dateOfBirth: '',
                    rollNo: '',
                    admissionNo: '',
                    religion: '',
                    email: '',
                    fatherName: '',
                    motherName: '',
                    fatherOccupation: '',
                    motherOccupation: '',
                    phoneNumber: '',
                    nationality: '',
                    presentAddress: '',
                    permanentAddress: '',
                    studentPhoto: null,
                    parentPhoto: null,
                });
            } else {
                alert('Failed to register student.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Header></Header>
            <div className="container  mt-5 " style={{ color:' #133E87' }}>
                <div className=' p-0'>
                    <h4>Add Student</h4>
                </div>

                <div className='p-5'>

                    <h4>Student information</h4>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control"
                                        id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                                         {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="middleName" className="form-label">Middle Name</label>

                                    <input type="text"
                                        className="form-control" id="middleName" name="middleName" value={formData.middleName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>

                                    <input type="text"
                                        className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                                        {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="className"
                                        className="form-label">Class</label>
                                    <input type="text" className="form-control" id="className" name="className" value={formData.className} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="section" className="form-label">Section</label>
                                    <input type="text" className="form-control" id="section"
                                        name="section" value={formData.section} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-select" id="gender" name="gender"
                                        value={formData.gender} onChange={handleChange}>
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">

                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" id="dateOfBirth"
                                        name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="rollNo" className="form-label">Roll No.</label>
                                    <input type="number" className="form-control" id="rollNo" name="rollNo" value={formData.rollNo} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="admissionNo" className="form-label">Admission No.</label>
                                    <input type="text" className="form-control" id="admissionNo" name="admissionNo" value={formData.admissionNo} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="religion" className="form-label">Religion.</label>
                                    <input type="text" className="form-control" id="religion" name="religion" value={formData.admissionNo} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">E-mail.</label>
                                    <input type="emsil" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}
                                    
                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="studentPhoto" className="form-label">Upload Student Photo(150px X 150px)</label>
                                    <input type="file" className="form-control" id="studentPhoto" name="studentPhoto" onChange={(event) => setFormData({ ...formData, studentPhoto: event.target.files[0] })} />
                                </div>
                            </div>


                        </div>
                        <div className="row">
                        <h4>Parents information</h4>
                        <br />

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="fatherName" className="form-label">Father's Name</label>
                                <input type="text" className="form-control" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="motherName" className="form-label">Mother's Name</label>
                            <input type="text" className="form-control"
                                id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} />
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="fatherOccupation" className="form-label">Father's Occupation</label>
                            <input type="text" className="form-control" id="fatherOccupation" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} />
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="motherOccupation" className="form-label">Mother's Occupation</label>
                            <input type="text" className="form-control" id="motherOccupation" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} />
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel"
                                className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">

                            <label htmlFor="nationality" className="form-label">Nationality</label>
                            <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
                        </div>
                        </div>
                        
                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="presentAddress" className="form-label">Present Address</label>
                            <textarea className="form-control" id="presentAddress" name="presentAddress" value={formData.presentAddress} onChange={handleChange}></textarea>
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="permanentAddress" className="form-label">Permanent Address</label>
                            <textarea className="form-control" id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange}></textarea>
                        </div>
                        </div>

                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="parentPhoto" className="form-label">Parent Photo</label>
                            <input type="file" className="form-control" id="parentPhoto" name="parentPhoto" onChange={(event) => setFormData({ ...formData, parentPhoto: event.target.files[0] })} />
                        </div>
                        </div>
                 

                        
                        </div>
                        <button type="submit" className="btn btn-warning">Save</button>
                        <button type="Reset" className="btn btn-primary ms-2 right" onClick={() => setFormData({
                            firstName: '',
                            middleName: '',
                            lastName: '',
                            className: '',
                            section: '',
                            gender: '',
                            dateOfBirth: '',
                            rollNo: '',
                            admissionNo: '',
                            religion: '',
                            email: '',
                            fatherName: '',
                            motherName: '',
                            fatherOccupation: '',
                            motherOccupation: '',
                            phoneNumber: '',
                            nationality: '',
                            presentAddress: '',
                            permanentAddress: '',
                            studentPhoto: null,
                            parentPhoto: null,
                        })}>Reset</button>
                    </form>
                </div>
            </div>
             {/* Modal for Form Data Confirmation */}
             <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Student Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Personal Information:</h5>
                    <p><strong>First Name:</strong> {formData.firstName}</p>
                    <p><strong>Middle Name:</strong> {formData.middleName}</p>
                    <p><strong>Last Name:</strong> {formData.lastName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    {/* Add more fields to review */}
                    <h5>Parent Information:</h5>
                    <p><strong>Father's Name:</strong> {formData.fatherName}</p>
                    <p><strong>Mother's Name:</strong> {formData.motherName}</p>
                    {/* Add more parent information fields */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Edit</Button>
                    <Button variant="primary" onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default StudenRegistation