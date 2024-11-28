import React, { useState } from 'react';
import './studentRegistration.css'
import Header from '../../../component/Header/Header';
import { Modal, Button, Form } from "react-bootstrap"
function StudenRegistation() {
    // Initial data for classes and sections
    // const classesAndSections = {
    //     "Class 1": ["Section A", "Section B", "Section C"],
    //     "Class 2": ["Section D", "Section E", "Section F"],
    //     "Class 3": ["Section G", "Section H", "Section I"],
    // };

    // // Initial data for classes and sections
    // const classesAndHouse = {
    //     "Class 1": ["house A", "house  B", "house  C"],
    //     "Class 2": ["house  D", "house  E", "house  F"],
    //     "Class 3": ["house  G", "house  H", "house  I"],
    // };


    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        className: '',
        section: '',
        gender: '',
        studentType: '',
        dateOfBirth: '',
        rollNo: '',
        admissionNo: '',
        mobileNo: '',
        AlternativeMobileNo: '',
        house: '',
        religion: '',
        cast: '',
        email: '',
        bloodGroup: '',
        transport: '',
        parentName: '',
        fatherName: '',
        fatherOccupation: '',
        fMobileNo: '',
        fEmail: '',
        motherName: '',
        motherOccupation: '',
        phoneNumber: '',
        mEmail: '',
        nationality: '',
        presentAddress: '',
        permanentAddress: '',
        studentPhoto: null,
        parentPhoto: null,
        studentPhotoPreview: null,
        fatherPhotoPreview: null,
        parentPhotoPreview: null,
    });

    const [errors, setErrors] = useState({});
    // Initial classes
    const [newClass, setNewClass] = useState(""); // Temporary state for new class input
    const [newSection, setNewSection] = useState("");
    const [newHouse, setNewHouse] = useState("");
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [fileError, setFileError] = useState(""); // For displaying validation error
    const [remarks, setRemarks] = useState("");

    const [classes, setClasses] = useState(["Class 1", "Class 2", "Class 3"]);
    const [classesAndSections, setClassesAndSections] = useState({});
    const [classesAndHouse, setClassesAndHouse] = useState({});

    // const handleSectionChange = (e) => {
    //     const selectedSection = e.target.value;
    //     setFormData({ ...formData, section: selectedSection });
    // };

    // const handleHouseChange = (e) => {
    //     const selectedHouse = e.target.value;
    //     setFormData({ ...formData, house: selectedHouse });
    // }

    // Validate form data
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.fatherName) newErrors.fatherName = 'Father name is required';
        if (!formData.motherName) newErrors.motherName = 'Mother name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        return newErrors;
    };



    const handleAddClass = () => {
        // Add the new class and initialize sections and houses for it
        if (newClass.trim() === "") return;

        setClasses((prev) => [...prev, newClass]);
        setClassesAndSections((prev) => ({ ...prev, [newClass]: [] }));
        setClassesAndHouse((prev) => ({ ...prev, [newClass]: [] }));

        setNewClass("");
        setRemarks("");
        setShowModal(false); // Close modal
    };

    const handleAddSection = () => {
        // Add the new section for the selected class
        if (!formData.className || newSection.trim() === "") return;

        setClassesAndSections((prev) => ({
            ...prev,
            [formData.className]: [...prev[formData.className], newSection],
        }));

        setNewSection("");
        setShowModal(false); // Close modal
    };

    const handleAddHouse = () => {
        // Add the new house for the selected class
        if (!formData.className || newHouse.trim() === "") return;

        setClassesAndHouse((prev) => ({
            ...prev,
            [formData.className]: [...prev[formData.className], newHouse],
        }));

        setNewHouse("");
        setShowModal(false); // Close modal
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

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key] instanceof File) {
                formDataToSend.append(key, formData[key]);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('http://localhost:5000/api/students', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                setShowSuccessModal(true);
                setFormData({
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    className: '',
                    section: '',
                    gender: '',
                    studentType: '',
                    dateOfBirth: '',
                    rollNo: '',
                    admissionNo: '',
                    mobileNo: '',
                    religion: '',
                    email: '',
                    parentName: '',
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
                    studentPhotoPreview: null,
                    parentPhotoPreview: null,
                });
            } else {
                alert('Failed to register student.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const validExtensions = ['image/jpeg', 'image/jpg'];

        if (file && validExtensions.includes(file.type)) {
            setFileError(""); // Clear any previous error
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({
                    ...formData,
                    studentPhoto: file,
                    studentPhotoPreview: reader.result,
                    fatherPhotoPreview: reader.result,
                });
            };
            reader.readAsDataURL(file);
        } else {
            setFileError("Only JPG and JPEG files are allowed.");
            setFormData({
                ...formData,
                studentPhoto: null,
                studentPhotoPreview: null,
            });
        }
    };



    return (
        <>
            <Header></Header>
            <div className="container  mt-5 " style={{ color: ' #133E87' }}>
                <div className=' p-0'>
                    <h4>Add Student</h4>
                </div>

                <div className='p-5'>

                    <h4>Student information</h4>
                    <br />

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control"
                                        id="firstName" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} />
                                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="mb-4">
                                    <label htmlFor="middleName" className="form-label">Middle Name</label>

                                    <input type="text"
                                        className="form-control" id="middleName" name="middleName" placeholder='Middle Name' value={formData.middleName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>

                                    <input type="text"
                                        className="form-control" id="lastName" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                                </div>
                            </div>


                            {/* Class Dropdown */}
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="className" className="form-label">Class</label>
                                    <select
                                        className="form-select"
                                        id="className"
                                        name="className"
                                        value={formData.className}
                                        onChange={(e) => {
                                            if (e.target.value === "addNewClass") {
                                                setShowModal("addClass");
                                            } else {
                                                handleChange(e);
                                            }
                                        }}
                                    >
                                        <option value="" disabled>Select a class</option>
                                        {classes.map((className, index) => (
                                            <option key={index} value={className}>
                                                {className}
                                            </option>
                                        ))}
                                        <option value="addNewClass">+ Add New Class</option>
                                    </select>
                                </div>
                            </div>

                            {/* Section Dropdown */}
                            <div className="col-md-3 mb-0">
                                <div className="mb-3">
                                    <label htmlFor="section" className="form-label">Section</label>
                                    <select
                                        className="form-select"
                                        id="section"
                                        name="section"
                                        value={formData.section}
                                        onChange={(e) => {
                                            if (e.target.value === "addNewSection") {
                                                setShowModal("addSection");
                                            } else {
                                                handleChange(e);
                                            }
                                        }}
                                        disabled={!formData.className} // Disable until a class is selected
                                    >
                                        <option value="" disabled>Select a section</option>
                                        {formData.className &&
                                            classesAndSections[formData.className]?.map((section, index) => (
                                                <option key={index} value={section}>
                                                    {section}
                                                </option>
                                            ))}
                                        <option value="addNewSection" onClick={() => setShowModal("addSection")}>
                                            + Add New Section
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* House Dropdown */}
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="house" className="form-label">House</label>
                                    <select
                                        className="form-select"
                                        id="house"
                                        name="house"
                                        value={formData.house}
                                        onChange={(e) => {
                                            if (e.target.value === "addNewHouse") {
                                                setShowModal("addHouse");
                                            } else {
                                                handleChange(e);
                                            }
                                        }}
                                        disabled={!formData.className} // Disable until a class is selected
                                    >
                                        <option value="" disabled>Select a house</option>
                                        {formData.className &&
                                            classesAndHouse[formData.className]?.map((house, index) => (
                                                <option key={index} value={house}>
                                                    {house}
                                                </option>
                                            ))}
                                        <option value="addNewHouse" onClick={() => setShowModal("addHouse")}>
                                            + Add New House
                                        </option>
                                    </select>
                                </div>

                                <div className="container mt-5">
                                    <div className="row">
                                        {/* Your dropdowns here */}
                                    </div>

                                    {/* Modal to show at the top-right corner */}
                                    <Modal
                                        show={!!showModal}
                                        onHide={() => setShowModal(null)} // Close modal on backdrop click

                                        dialogClassName="top-right-modal"
                                        backdrop="static" // Ensure backdrop is active

                                        className='top-right-modal'
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>
                                                {showModal === "addClass" && "Add New Class"}
                                                {showModal === "addSection" && "Add New Section"}
                                                {showModal === "addHouse" && "Add New House"}
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            {showModal === "addClass" && (
                                                <>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>New Class</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter new class"
                                                            value={newClass}
                                                            onChange={(e) => setNewClass(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Remarks</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            placeholder="Enter remarks (optional)"
                                                            value={remarks}
                                                            onChange={(e) => setRemarks(e.target.value)}
                                                            rows={4}
                                                        />
                                                    </Form.Group>
                                                </>
                                            )}
                                            {showModal === "addSection" && (
                                                <>
                                                    <Form.Group>
                                                        <Form.Label>New Section</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter new section"
                                                            value={newSection}
                                                            onChange={(e) => setNewSection(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Remarks</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            placeholder="Enter remarks (optional)"
                                                            value={remarks}
                                                            onChange={(e) => setRemarks(e.target.value)}
                                                            rows={4}
                                                        />
                                                    </Form.Group>
                                                </>
                                            )}
                                            {showModal === "addHouse" && (
                                                <>
                                                    <Form.Group>
                                                        <Form.Label>New House</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter new house"
                                                            value={newHouse}
                                                            onChange={(e) => setNewHouse(e.target.value)}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Remarks</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            placeholder="Enter remarks (optional)"
                                                            value={remarks}
                                                            onChange={(e) => setRemarks(e.target.value)}
                                                            rows={4}
                                                        />
                                                    </Form.Group>
                                                </>
                                            )}
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => setShowModal(null)}>
                                                Close
                                            </Button>
                                            <Button
                                                variant="primary"
                                                onClick={
                                                    showModal === "addClass"
                                                        ? handleAddClass
                                                        : showModal === "addSection"
                                                            ? handleAddSection
                                                            : handleAddHouse
                                                }
                                            >
                                                Save
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="studentType" className="form-label">Student Type</label>
                                    <select className="form-select" id="gender" name="gender"
                                        value={formData.studentType} onChange={handleChange}>
                                        <option value="">Select Student Type</option>
                                        <option value="Male">Hosteler</option>
                                        <option value="Female">Scholar</option>

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
        <div className="input-group">
            <input
                type="text" // Use text to enable custom placeholder
                className="form-control"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="MM/DD/YYYY" // Custom placeholder
                value={formData.dateOfBirth}
                onFocus={(e) => (e.target.type = "date")} // Switch to date on focus
                onBlur={(e) => {
                    if (!e.target.value) e.target.type = "text"; // Switch back if no value
                }}
                onChange={handleChange}
            />
            <span
                className="input-group-text"
                onClick={() => document.getElementById("dateOfBirth").focus()} // Focus the input on icon click
                style={{ cursor: "pointer" }}
            >
                <i className="bi bi-calendar-date"></i> {/* Bootstrap Icons */}
            </span>
        </div>
    </div>
</div>




                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="rollNo" className="form-label">Roll No</label>
                                    <input type="number" className="form-control" id="rollNo" placeholder='Roll No' name="rollNo" value={formData.rollNo} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="admissionNo" className="form-label">Admission No</label>
                                    <input type="text" className="form-control" id="admissionNo" placeholder='Admission' name="admissionNo" value={formData.admissionNo} onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="moblieNo" className="form-label">Mobile No</label>
                                    <input type="text" placeholder='+91 ' className="form-control" id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="AlternativeMoblieNo" className="form-label"> Alternative Mobile No</label>
                                    <input type="text" className="form-control" placeholder='+91 ' id="AlternativeMobileNo" name="AlternativeMobileNo" value={formData.AlternativeMobileNo} onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="religion" className="form-label">Religion</label>
                                    <select
                                        className="form-select"
                                        id="religion"
                                        name="religion"
                                        value={formData.religion}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select a religion</option>
                                        <option value="Hinduism">Hinduism</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Christianity">Christianity</option>
                                        <option value="Sikhism">Sikhism</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="cast" className="form-label">Cast</label>
                                    <select className="form-select" id="cast" name="cast"
                                        value={formData.cast} onChange={handleChange}>
                                        <option value="">Select Cast</option>
                                        <option value="General">General</option>
                                        <option value="OBC">OBC</option>
                                        <option value="SC">SC</option>
                                        <option value="ST">ST</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="emsil" className="form-control" id="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}

                                    />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="bloodGroup" className="form-label">Blood Group</label>
                                    <select
                                        className="form-select" // Use Bootstrap's form-select class
                                        id="bloodGroup"
                                        name="bloodGroup"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </select>

                                </div>
                            </div>


                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="transport" className="form-label">Transport</label>
                                    <select className="form-select" id="transport" name="transport"
                                        value={formData.transport} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>

                                    </select>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="studentPhoto" className="form-label">
                                        Upload Student Photo (150px X 150px)
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="studentPhoto"
                                        name="studentPhoto"
                                        accept=".jpg, .jpeg" // Restrict selectable files to jpg and jpeg
                                        onChange={handleFileChange}
                                    />
                                    <div className="text-danger">  Support format : jpg / jpeg</div>
                                    {formData.studentPhotoPreview && (
                                        <img
                                            src={formData.studentPhotoPreview}
                                            alt="Student Preview"
                                            className="img-thumbnail mt-2"
                                            style={{ width: '150px', height: '150px' }}
                                        />
                                    )}
                                    {fileError && (
                                        <div className="text-danger mt-2">
                                            {fileError}
                                        </div>
                                    )}
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
                                    {errors.fatherName && <div className="text-danger">{errors.fatherName}</div>}
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
                                    <label htmlFor="fMobileNo" className="form-label">Father's Mobile Number</label>
                                    <input type="tel"
                                        className="form-control" id="fMobileNo" name="fMobileNo" value={formData.fMobileNo} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="fEmail" className="form-label">Father's Email</label>
                                    <input type="tel"
                                        className="form-control" id="fEmail" name="fEmail" value={formData.fEmail} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3">

                                    <label htmlFor="Fnationality" className="form-label">Father's Nationality</label>
                                    <input type="text" className="form-control" id="Fnationality" name="Fnationality" value={formData.Fnationality} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="FpresentAddress" className="form-label">Father's Present Address</label>
                                    <textarea className="form-control" id="FpresentAddress" name="FpresentAddress" value={formData.FpresentAddress} onChange={handleChange}></textarea>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="FpermanentAddress" className="form-label">Father's Permanent Address</label>
                                    <textarea className="form-control" id="FpermanentAddress" name="FpermanentAddress" value={formData.FpermanentAddress} onChange={handleChange}></textarea>
                                </div>
                            </div>



                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="motherName" className="form-label">Mother's Name</label>
                                    <input type="text" className="form-control"
                                        id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} />
                                    {errors.motherName && <div className="text-danger">{errors.motherName}</div>}
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
                                    <label htmlFor="phoneNumber" className="form-label">Mother's Mobile Number</label>
                                    <input type="tel"
                                        className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="mEmail" className="form-label">Mother's Email</label>
                                    <input type="tel"
                                        className="form-control" id="mEmail" name="mEmail" value={formData.mEmail} onChange={handleChange} />
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
                                    <label htmlFor="parentName" className="form-label">Parent's Name</label>
                                    <input type="text" className="form-control"
                                        id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} />

                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="mb-3">
                                    <label htmlFor="parentPhoto" className="form-label">Upload Parent Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="parentPhoto"
                                        name="parentPhoto"
                                        onChange={handleFileChange}
                                    />
                                    {formData.parentPhotoPreview && (
                                        <img
                                            src={formData.parentPhotoPreview}
                                            alt="Parent Preview"
                                            className="img-thumbnail mt-2"
                                            style={{ width: '150px', height: '150px' }}
                                        />
                                    )}
                                </div>
                            </div>




                        </div>
                        <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Save</button>
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
                    </form >
                </div >
            </div >


        </>
    )
}

export default StudenRegistation