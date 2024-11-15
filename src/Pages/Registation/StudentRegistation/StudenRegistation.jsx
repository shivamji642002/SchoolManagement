import React, { useState } from 'react';
import Header from '../../../component/Header/Header'

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission   

        console.log(formData);
    };
    return (
        <>
            <Header></Header>
            <div className="container  mt-5  ">
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
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Middle Name</label>

                                    <input type="text"
                                        className="form-control" id="middleName" name="middleName" value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>

                                    <input type="text"
                                        className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
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
                        <button type="Reset" className="btn btn-primary ms-2 right">Reset</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudenRegistation