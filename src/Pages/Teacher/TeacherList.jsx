import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Form } from 'react-bootstrap';
import './Teacher.css';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const TeacherList = () => {
  // Store teacher data in an object using IDs as keys
  const [teacherData, setTeacherData] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

   // Fetch teachers from the backend
   useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/teachers');
        setTeacherData(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };
    fetchTeachers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredTeacher = teacherData.filter((teacher) => {
    if (searchTerm) {
      return teacher.Name.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (filterType && filterValue) {
      return teacher[filterType.toLowerCase()] === filterValue;
    }

    return true;
  });

  
  

  // View Teacher Details Logic
  const [show, setShow] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (teacher) => {
    setSelectedTeacher(teacher);
    setShow(true);
  };

  // Edit Teacher Data Logic
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState({
    Id: '',
    Photo: '',
    Name: '',
    Gender: '',
    Subject: '',
    Class: '',
    Section: '',
    Address: '',
    DateOfBirth: '',
    MobileNo: '',
    Email: '',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleEdit = (teacher) => {
    setCurrentTeacher(teacher);
    setImagePreview(teacher.Photo);
    setShowEditModal(true);
  };

  const handleSave = () => {
    setTeacherData((prevData) => ({
      ...prevData,
      [currentTeacher.Id]: currentTeacher,
    }));
    setShowEditModal(false);
  };

  // Handle Image File Input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setCurrentTeacher({ ...currentTeacher, Photo: imageUrl });
    }
  };

  // Add Teacher Logic
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTeacher = () => {
    setTeacherData((prevData) => ({
      ...prevData,
      [currentTeacher.Id]: currentTeacher,
    }));
    setShowAddModal(false);
    setCurrentTeacher({
      Id: '',
      Photo: '',
      Name: '',
      Gender: '',
      Subject: '',
      Class: '',
      Section: '',
      Address: '',
      DateOfBirth: '',
      MobileNo: '',
      Email: '',
    });
    setImagePreview(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  // Delete Teacher Logic
  const handleDelete = async (teacher) => {
    try {
      await axios.delete(`http://localhost:5000/teachers/${teacher.Id}`);
      setTeacherData(teacherData.filter((t) => t.Id !== teacher.Id));
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header pb-2">
                All Teachers List
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type ID, Name, Mobile Number..."
                      onChange={handleSearch}
                    />
                    <select
                      className="form-select mx-2"
                      onChange={handleFilterTypeChange}
                    >
                      <option value="">Filter by</option>
                      <option value="ID">Roll</option>
                      <option value="Name">Name</option>
                      <option value="Mobile No">Mobile No</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Filter Value"
                      onChange={handleFilterValueChange}
                    />
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
                      <th>Subject</th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Address</th>
                      <th>Date of Birth</th>
                      <th>Mobile No</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTeacher.map((teacher, index) => (
                      <tr key={index}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{teacher.Id}</td>
                        <td>
                          <div className="circle-container">
                            <img
                              src={teacher.Photo}
                              alt={`Teacher ${teacher.Name} Photo`}
                              width="50"
                              height="50"
                              style={{ borderRadius: '50%' }}
                            />
                          </div>
                        </td>
                        <td>{teacher.Name}</td>
                        <td>{teacher.Gender}</td>
                        <td>{teacher.Subject}</td>
                        <td>{teacher.Class}</td>
                        <td>{teacher.Section}</td>
                        <td>{teacher.Address}</td>
                        <td>{teacher.DateOfBirth}</td>
                        <td>{teacher.MobileNo}</td>
                        <td>{teacher.Email}</td>
                        <td>
                          <Button
                            variant="primary"
                            onClick={() => handleShow(teacher)}
                          >
                            <FontAwesomeIcon icon={faEye} /> View
                          </Button>
                          <Button
                            variant="warning"
                            className='m-2'
                            onClick={() => handleEdit(teacher)}
                          >
                            <FontAwesomeIcon icon={faEdit} /> Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(teacher)}
                          >
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

      {/* Add/Edit Teacher Modal */}
      <Modal
        show={showAddModal || showEditModal}
        onHide={() => {
          setShowAddModal(false);
          setShowEditModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{showAddModal ? 'Add New Teacher' : 'Edit Teacher'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="Id"
                value={currentTeacher.Id}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
              {imagePreview && (
                <div className="mt-2">
                  <img src={imagePreview} alt="Preview" width="100" height="100" />
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                value={currentTeacher.Name}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Other form fields go here */}
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="Gender"
                value={currentTeacher.Gender}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="Subject"
                value={currentTeacher.Subject}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                name="Class"
                value={currentTeacher.Class}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Section</Form.Label>
              <Form.Control
                type="text"
                name="Section"
                value={currentTeacher.Section}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="Address"
                value={currentTeacher.Address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="DateOfBirth"
                value={currentTeacher.DateOfBirth}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="MobileNo"
                value={currentTeacher.MobileNo}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="Email"
                value={currentTeacher.Email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShowAddModal(false);
              setShowEditModal(false);
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={showAddModal ? handleAddTeacher : handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Teacher Modal */}
      {/* View Teacher Details Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Teacher Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTeacher && (
            <div className="d-flex">
              <div className="d-inline m-4">
                <p>ID : {selectedTeacher.Id}</p>
                <p>Name : {selectedTeacher.Name}</p>
                <p>Subject : {selectedTeacher.Subject}</p>
                <p>Class : {selectedTeacher.Class}</p>
                <p>Section : {selectedTeacher.Section}</p>
                <p>Address : {selectedTeacher.Address}</p>
                <p>DateOfBirth : {selectedTeacher.DateOfBirth}</p>
                <p>MobileNo : {selectedTeacher.MobileNo}</p>
                <p>Email : {selectedTeacher.Email}</p>
              </div>
              <div className="d-inline mt-4">
                <img
                  src={selectedTeacher.Photo}
                  alt="Teacher Photo"
                  width={'150px'}
                  height={'150px'}
                />
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

export default TeacherList;
