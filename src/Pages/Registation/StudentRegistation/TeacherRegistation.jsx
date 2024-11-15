import React, { useState } from 'react';
import Header from '../../../component/Header/Header'

function TeacherRegistation() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName:'',
        lastName: '',
        className: '',
        section: '',
        gender: '',
        dateOfBirth: '',
        idNo:'', 
        subject:'',
        religion: '',
        email: '',
        phoneNumber: '',
        nationality: '',
        Address: '',
        teacherPhoto: null,
        
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
                    <h4>Add New Teacher</h4>
                </div>

                <div className='p-5'>

                    <h4>Teacher Information</h4>
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
                                    <label htmlFor="ClassName" className="form-label">Class </label>
                                    <select className="form-select" id="ClassName" name="ClassName"
                                        value={formData.gender} onChange={handleChange}>
                                        <option value="">Please Select Class</option>
                                        <option value="Male">Math</option>
                                        <option value="Female">Science</option>

                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="section" className="form-label">Section </label>
                                    <select className="form-select" id="section" name="section"
                                        value={formData.section} onChange={handleChange}>
                                        <option value="">Please Select Section</option>
                                        <option value="Male">Sction A</option>
                                        <option value="Female">Section B</option>

                                        <option value="Other">Other</option>
                                    </select>
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
                                    <label htmlFor="idNo" className="form-label">Id No.</label>
                                    <input type="text" className="form-control" id="idNo" name="idNo" value={formData.idNo} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject </label>
                                    <select className="form-select" id="subject" name="subject"
                                        value={formData.subject} onChange={handleChange}>
                                        <option value="">Please Select Subject</option>
                                        <option value="Male">Math</option>
                                        <option value="Female">Science</option>

                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="religion" className="form-label">Religion.</label>
                                    <input type="text" className="form-control" id="religion" name="religion" value={formData.religion} onChange={handleChange}
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
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="tel"
                                className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                        </div>
                        </div>

                        
                        
                        <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label">Address</label>
                            <textarea className="form-control" id="Address" name="Address" value={formData.Address} onChange={handleChange}></textarea>
                        </div>
                        </div>


                       
                 
                        <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="teacherPhoto" className="form-label">Upload Teacher Photo(150px X 150px)</label>
                                    <input type="file" className="form-control" id="teacherPhoto" name="teacherPhoto" onChange={(event) => setFormData({ ...formData, teacherPhotoPhoto: event.target.files[0] })} />
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

export default TeacherRegistation