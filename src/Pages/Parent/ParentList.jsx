import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import img from './image1.jpg';
import './ParentList.css';
import {faPlus, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ParentList = () => {



    const [parents, setParents] = useState([
        {
            id: 2901,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        },
        {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        },
        {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        },
        {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
        }, {
            id: 2905,
            name: 'Richi Rozario',
            gender: 'Female',
            occupation: 'House Wife',
            address: 'TA-110, North Sydney',
            mobile: '+8812 00 5098',
            email: 'edisons@gmail.com'
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

    const filteredParents = parents.filter((parent) => {
        if (searchTerm) {
            return parent.name.toLowerCase().includes(searchTerm.toLowerCase());
        }

        if (filterType && filterValue) {
            return parent[filterType.toLowerCase()] === filterValue;
        }

        return true;
    });

    const handleView = (parent) => {
        // Handle the view action, e.g., display a modal with parent details
        console.log('Viewing parent:', parent);
        // You can implement your desired view logic here
    };
    const [show, setShow] = useState(false);
    const [selectedParent, setSelectedParent] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (parent) => {
        setSelectedParent(parent);
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
                                All Parents List
                                <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <input type="text" className="form-control" placeholder="Type ID, Name, Mobile Number..." onChange={handleSearch} />
                                    <select className="form-select mx-2" onChange={handleFilterTypeChange}>
                                        <option value="">Filter by</option>
                                        <option value="ID">ID</option>
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
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>ID</th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>Occupation</th>
                                            <th>Address</th>
                                            <th>Mobile No</th>
                                            <th>E-mail</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredParents.map((parent, index) => (
                                            <tr key={index}>
                                                <td><input type="checkbox" /></td>
                                                <td>{parent.id}</td>
                                                <td>
                                                    <div className="circle-container">
                                                        <img src={img} alt="Parent's Photo" />
                                                    </div>
                                                </td>
                                                <td>{parent.name}</td>
                                                <td>{parent.gender}</td>
                                                <td>{parent.occupation}</td>
                                                <td>{parent.address}</td>
                                                <td>{parent.mobile}</td>
                                                <td>{parent.email}</td>
                                                <td><Button variant="primary" className='btn btn-sm' onClick={() => handleShow(parent)}>
                                                    <FontAwesomeIcon icon={faEye} /> View
                                                </Button>
                                                    <Button variant="warning" className='btn btn-sm m-1' onClick={() => handleEdit(parent)} >
                                                        <FontAwesomeIcon icon={faEdit} /> Edit

                                                    </Button>
                                                    <Button variant="danger" className='btn btn-sm' onClick={() => handleDelete(parent)}>
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
                    <Modal.Title>Parents Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {selectedParent && (
                        <div className='d-flex'>
                            <div className='d-inline m-4'>
                                <p>ID : {selectedParent.id}</p>
                                <p>Name : {selectedParent.Name}</p>
                                <p>Gender : {selectedParent.Gender}</p>
                                <p>Occupation : {selectedParent.occupation}</p>
                                <p>Address : {selectedParent.address}</p>
                                <p>Mobile No : {selectedParent.mobile}</p>
                                <p>Email : {selectedParent.email}</p>
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

export default ParentList;