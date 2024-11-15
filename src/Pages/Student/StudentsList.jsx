import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import img from './image.png';
import '../../Pages/Parent/ParentList.css';
import {faPlus, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudentsList = () => {



    const [student, setStudents] = useState([
        {
            Roll: '10290',
            //  Photo:'',
            Name: 'jhon',
            Gender: 'male',
            ParentsName: 'manoj singh',
            Class: '10',
            Section: 'b',
            Address: 'sasaram rohtas',
            DateOfBirth: '05/2/2004',
            MobileNo: '+91 9110750977',
            Email: 'jhon@gmail.com',
            //  Action:'',            
        },
        {
            Roll: '10290',
            //  Photo:'',
            Name: 'jhon',
            Gender: 'male',
            ParentsName: 'manoj singh',
            Class: '10',
            Section: 'b',
            Address: 'sasaram rohtas',
            DateOfBirth: '05/2/2004',
            MobileNo: '+91 9110750977',
            Email: 'jhon@gmail.com',
            //  Action:'',            
        }, {
            Roll: '10290',
            //  Photo:'',
            Name: 'jhon',
            Gender: 'male',
            ParentsName: 'manoj singh',
            Class: '10',
            Section: 'b',
            Address: 'sasaram rohtas',
            DateOfBirth: '05/2/2004',
            MobileNo: '+91 9110750977',
            Email: 'jhon@gmail.com',
            //  Action:'',            
        }, {
            Roll: '10290',
            //  Photo:'',
            Name: 'jhon',
            Gender: 'male',
            ParentsName: 'manoj singh',
            Class: '10',
            Section: 'b',
            Address: 'sasaram rohtas',
            DateOfBirth: '05/2/2004',
            MobileNo: '+91 9110750977',
            Email: 'jhon@gmail.com',
            //  Action:'',            
        }, {
            Roll: '10290',
            //  Photo:'',
            Name: 'jhon',
            Gender: 'male',
            ParentsName: 'manoj singh',
            Class: '10',
            Section: 'b',
            Address: 'sasaram rohtas',
            DateOfBirth: '05/2/2004',
            MobileNo: '+91 9110750977',
            Email: 'jhon@gmail.com',
            //  Action:'',            
        },

        // ... other parent data
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const handleFilterValueChange = (e) => {
        setFilterValue(e.target.value);
    };

    const filteredStudent = student.filter((student) => {
        if (searchTerm) {
            return student.name.toLowerCase().includes(searchTerm.toLowerCase());
        }

        if (filterType && filterValue) {
            return student[filterType.toLowerCase()] === filterValue;
        }

        return true;
    });

    const handleView = (student) => {
        // Handle the view action, e.g., display a modal with parent details
        console.log('Viewing parent:', student);
        // You can implement your desired view logic here
    };

    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (student) => {
        setSelectedStudent(student);
        setShow(true);

    };

    return (
        <>
            <Header></Header>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header pb-2">
                                All Students List
                                <div className='d-flex justify-content-between'>
                                    <div className="d-flex">
                                        <input type="text" className="form-control" placeholder="Type ID, Name, Mobile Number..." onChange={handleSearch} />
                                        <select className="form-select mx-2" onChange={handleFilterTypeChange}>
                                            <option value="">Filter by</option>
                                            <option value="ID">Roll</option>
                                            <option value="Name">Name</option>
                                            <option value="Mobile No">Mobile No</option>
                                        </select>
                                        <input type="text" className="form-control" placeholder="Filter Value" onChange={handleFilterValueChange} />
                                        <button className="btn btn-primary mx-2">Search</button>
                                    </div>
                                    <Button
                    variant="success"
                    onClick={() => setShowAddModal(true)}
                  >
                    <FontAwesomeIcon icon={faPlus} /> Add Teacher
                  </Button>
                                </div>
                               
                            </div>
                            
                            <div className="card-body ">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Roll</th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Parents Name</th>
                                            <th>Class</th>
                                            <th>Section</th>
                                            <th>Address</th>
                                            <th>Date of Birth</th>
                                            <th>Mobile No</th>
                                            <th>Email </th>
                                            <th>Action </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredStudent.map((student, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" /></td>

                                                <td>
                                                    <div className="circle-container">
                                                        <img src={img} alt="Parent's Photo" />
                                                    </div>
                                                </td>
                                                <td>{student.Roll}</td>
                                                <td>{student.Name}</td>
                                                <td>{student.Gender}</td>
                                                <td>{student.ParentsName}</td>
                                                <td>{student.Class}</td>
                                                <td>{student.Section}</td>
                                                <td>{student.Address}</td>
                                                <td>{student.DateOfBirth}</td>
                                                <td>{student.MobileNo}</td>
                                                <td>{student.Email}</td>
                                                <td><Button variant="primary" className='btn btn-sm' onClick={() => handleShow(student)}>
                                                    <FontAwesomeIcon icon={faEye} /> View
                                                </Button>
                                                    <Button variant="warning" className='btn btn-sm m-1' onClick={() => handleEdit(student)} >
                                                        <FontAwesomeIcon icon={faEdit} /> Edit

                                                    </Button>
                                                    <Button variant="danger" className='btn btn-sm' onClick={() => handleDelete(student)}>
                                                        <FontAwesomeIcon icon={faTrash} /> Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {selectedStudent && (
                        <div className='d-flex'>
                            <div className='d-inline m-4'>
                                <p>ID : {selectedStudent.Roll}</p>
                                <p>Name : {selectedStudent.Name}</p>
                                <p>Subject : {selectedStudent.Gender}</p>
                                <p>Class : {selectedStudent.ParentsName}</p>
                                <p>Section : {selectedStudent.Class}</p>
                                <p>Address : {selectedStudent.Section}</p>
                                <p>DateOfBirth : {selectedStudent.DateOfBirth}</p>
                                <p>MobileNo : {selectedStudent.MobileNo}</p>
                                <p>Email : {selectedStudent.Email}</p>
                            </div>

                            <div className='d-inline mt-4'>
                                <img src={img} alt="Teacher Photo" width={"150px"} height={"150px"} />



                            </div>


                        </div>


                    )}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default StudentsList;