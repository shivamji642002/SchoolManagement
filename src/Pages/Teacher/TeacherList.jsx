import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal, Form , Row,Col } from 'react-bootstrap';
import './Teacher.css';
import { faEye, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const TeacherList = () => {
  // Static teacher data for demo purposes
  const [teacherData, setTeacherData] = useState(
    [
      {
        Id: 'T001',
        Photo: 'https://randomuser.me/api/portraits/women/1.jpg',
        Name: 'Alice Johnson',
        Gender: 'Female',
        Subject: 'Mathematics',
        Class: '10',
        Section: 'A',
        Address: '123 Street, City',
        DateOfBirth: '1990-05-15',
        MobileNo: '1234567890',
        Email: 'alice.johnson@example.com',
      },
      {
        Id: 'T002',
        Photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        Name: 'John Smith',
        Gender: 'Male',
        Subject: 'Science',
        Class: '9',
        Section: 'B',
        Address: '456 Avenue, City',
        DateOfBirth: '1988-10-20',
        MobileNo: '0987654321',
        Email: 'john.smith@example.com',
      },
      {
        Id: 'T003',
        Photo: 'https://randomuser.me/api/portraits/women/2.jpg',
        Name: 'Emma Brown',
        Gender: 'Female',
        Subject: 'English',
        Class: '8',
        Section: 'C',
        Address: '789 Boulevard, City',
        DateOfBirth: '1992-03-12',
        MobileNo: '2345678901',
        Email: 'emma.brown@example.com',
      },
      {
        Id: 'T004',
        Photo: 'https://randomuser.me/api/portraits/men/2.jpg',
        Name: 'Michael Davis',
        Gender: 'Male',
        Subject: 'History',
        Class: '7',
        Section: 'D',
        Address: '101 Parkway, City',
        DateOfBirth: '1985-09-10',
        MobileNo: '3456789012',
        Email: 'michael.davis@example.com',
      },
      {
        Id: 'T005',
        Photo: 'https://randomuser.me/api/portraits/women/3.jpg',
        Name: 'Sophia Wilson',
        Gender: 'Female',
        Subject: 'Geography',
        Class: '6',
        Section: 'E',
        Address: '202 Lane, City',
        DateOfBirth: '1993-07-25',
        MobileNo: '4567890123',
        Email: 'sophia.wilson@example.com',
      },
      {
        Id: 'T006',
        Photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        Name: 'James Martinez',
        Gender: 'Male',
        Subject: 'Chemistry',
        Class: '11',
        Section: 'F',
        Address: '303 Street, City',
        DateOfBirth: '1987-04-18',
        MobileNo: '5678901234',
        Email: 'james.martinez@example.com',
      },
      {
        Id: 'T007',
        Photo: 'https://randomuser.me/api/portraits/women/4.jpg',
        Name: 'Olivia Garcia',
        Gender: 'Female',
        Subject: 'Physics',
        Class: '12',
        Section: 'G',
        Address: '404 Avenue, City',
        DateOfBirth: '1995-11-05',
        MobileNo: '6789012345',
        Email: 'olivia.garcia@example.com',
      },
      {
        Id: 'T008',
        Photo: 'https://randomuser.me/api/portraits/men/4.jpg',
        Name: 'William Rodriguez',
        Gender: 'Male',
        Subject: 'Biology',
        Class: '5',
        Section: 'H',
        Address: '505 Road, City',
        DateOfBirth: '1986-12-30',
        MobileNo: '7890123456',
        Email: 'william.rodriguez@example.com',
      },
      {
        Id: 'T009',
        Photo: 'https://randomuser.me/api/portraits/women/5.jpg',
        Name: 'Charlotte Anderson',
        Gender: 'Female',
        Subject: 'Art',
        Class: '4',
        Section: 'I',
        Address: '606 Lane, City',
        DateOfBirth: '1991-08-22',
        MobileNo: '8901234567',
        Email: 'charlotte.anderson@example.com',
      },
      {
        Id: 'T010',
        Photo: 'https://randomuser.me/api/portraits/men/5.jpg',
        Name: 'Benjamin Thomas',
        Gender: 'Male',
        Subject: 'Computer Science',
        Class: '3',
        Section: 'J',
        Address: '707 Drive, City',
        DateOfBirth: '1989-06-16',
        MobileNo: '9012345678',
        Email: 'benjamin.thomas@example.com',
      },
    ]

    // Add more sample teachers as needed
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleFilterTypeChange = (e) => {
  //   setFilterType(e.target.value);
  // };

  // const handleFilterValueChange = (e) => {
  //   setFilterValue(e.target.value);
  // };

  // Search modal start 
  const filteredTeacher = teacherData.filter((teacher) => {
    if (searchTerm) {
      // Search logic
      return (
        teacher.Id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.MobileNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (filterType && filterValue) {
      // Ensure the filter type matches the key in teacher data
      const normalizedFilterType = filterType
        .replace(' ', '') // Remove spaces from 'Mobile No'
        .replace('ID', 'Id') // Match 'ID' to 'Id'
        .toLowerCase();
  
      return teacher[normalizedFilterType]?.toLowerCase() === filterValue.toLowerCase();
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
    setIsEditing(true);  // Set editing state to true
    setShowConfirmModal(true);  // Show confirmation modal
  };
  // Save the teacher after confirmation
  const handleSaveTeacher = () => {
    setTeacherData((prevData) =>
      prevData.map((teacher) =>
        teacher.Id === currentTeacher.Id ? currentTeacher : teacher
      )
    );
    setShowEditModal(false);
  };


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => setImagePreview(reader.result);
  //     reader.readAsDataURL(file);
  //   }
  // };

  // Add Teacher Logic
  const [showAddModal, setShowAddModal] = useState(false);


  const handleAddTeacher = () => {
    setIsEditing(false);  // Set editing state to false (for adding)
    setShowConfirmModal(true);  // Show confirmation modal
  };

  // Add a new teacher after confirmation
  const handleAddTeacherRecord = () => {
    const newTeacher = {
      ...currentTeacher,
      Id: `T${teacherData.length + 1}` // Generate a new ID dynamically
    };

    setTeacherData((prevData) => [...prevData, newTeacher]);
    handleCloseModal(); // Close the modal after adding the teacher
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const handleDelete = (teacher) => {
    setTeacherToDelete(teacher); // Store the teacher to be deleted
    setShowDeleteConfirmModal(true); // Show the confirmation modal
  };
  const handleDeleteTeacher = () => {
    setTeacherData((prevData) =>
      prevData.filter((teacher) => teacher.Id !== teacherToDelete.Id) // Remove the teacher from the list
    );
  };



  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowEditModal(false);
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
                      className="form-control mx-2"
                      placeholder="Type ID, Name, Mobile Number..."
                      onChange={handleSearch}
                    />
                    {/* <select
                      className="form-select mx-2"
                      onChange={handleFilterTypeChange}
                    >
                      <option value="">Filter by</option>
                      <option value="ID">ID</option>
                      <option value="Name">Name</option>
                      <option value="Mobile No">Mobile No</option>
                    </select> */}
                    {/* <input
                      type="text"
                      className="form-control"
                      placeholder="Filter Value"
                      onChange={handleFilterValueChange}
                    /> */}
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
                              src={teacher.Photo || imagePreview}
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
  onHide={handleCloseModal}
  centered
  dialogClassName="custom-modal-width" // Custom class for width
>
  <Modal.Header closeButton>
    <Modal.Title>{showAddModal ? 'Add New Teacher' : 'Edit Teacher'}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      {/* Row 1 */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="Id"
              value={currentTeacher.Id}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={currentTeacher.Name}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              name="Gender"
              value={currentTeacher.Gender}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="Subject"
              value={currentTeacher.Subject}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              name="Class"
              value={currentTeacher.Class}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Section</Form.Label>
            <Form.Control
              type="text"
              name="Section"
              value={currentTeacher.Section}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="DateOfBirth"
              value={currentTeacher.DateOfBirth}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="text"
              name="MobileNo"
              value={currentTeacher.MobileNo}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              value={currentTeacher.Email}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="Address"
              value={currentTeacher.Address}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="Photo"
              value={currentTeacher.Photo}
              onChange={handleInputChange}
              placeholder="Enter image URL"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          {currentTeacher.Photo && (
            <div className="mt-2">
              <img src={currentTeacher.Photo} alt="Preview" width="100" height="100" />
            </div>
          )}
        </Col>
      </Row>
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
                <p>Date Of Birth : {selectedTeacher.DateOfBirth}</p>
                <p>MobileNo : {selectedTeacher.MobileNo}</p>
                <p>Email : {selectedTeacher.Email}</p>
              </div>
              <div className="d-inline mt-4 p-4">
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

      
      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want to {isEditing ? 'edit' : 'add'} this teacher record ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (isEditing) {
                handleSaveTeacher(); // Call the save function for editing
              } else {
                handleAddTeacherRecord(); // Call the add function for adding a new teacher
              }
              setShowConfirmModal(false); // Close the confirmation modal
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal
        show={showDeleteConfirmModal}
        onHide={() => setShowDeleteConfirmModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want to delete the teacher <strong>{teacherToDelete?.Name}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteTeacher(); // Call the delete function
              setShowDeleteConfirmModal(false); // Close the delete modal
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
};

export default TeacherList;
