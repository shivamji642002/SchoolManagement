import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../component/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal , Form,Row, Col } from 'react-bootstrap';
import '../../Pages/Parent/ParentList.css';
import { faPlus, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudentsList = () => {



    const [studentData, setStudentData] = useState([
       
        {
          Roll: '10290',
          Photo: 'https://randomuser.me/api/portraits/men/5.jpg',
          Name: 'Jhon Singh',
          Gender: 'male',
          ParentsName: 'Manoj Singh',
          Class: '10',
          Section: 'B',
          Address: 'Sasaram, Rohtas',
          DateOfBirth: '05/02/2004',
          MobileNo: '+91 9110750977',
          Email: 'jhon.singh@gmail.com'
        },
        {
          Roll: '10291',
          Photo: 'https://randomuser.me/api/portraits/women/10.jpg',
          Name: 'Priya Sharma',
          Gender: 'female',
          ParentsName: 'Rajesh Sharma',
          Class: '10',
          Section: 'A',
          Address: 'Patna, Bihar',
          DateOfBirth: '15/08/2004',
          MobileNo: '+91 9876543210',
          Email: 'priya.sharma@example.com'
        },
        {
          Roll: '10292',
          Photo: 'https://randomuser.me/api/portraits/men/15.jpg',
          Name: 'Aman Verma',
          Gender: 'male',
          ParentsName: 'Suresh Verma',
          Class: '10',
          Section: 'C',
          Address: 'Gaya, Bihar',
          DateOfBirth: '12/03/2004',
          MobileNo: '+91 9123456789',
          Email: 'aman.verma@example.com'
        },
        {
          Roll: '10293',
          Photo: 'https://randomuser.me/api/portraits/women/22.jpg',
          Name: 'Nikita Das',
          Gender: 'female',
          ParentsName: 'Anil Das',
          Class: '10',
          Section: 'B',
          Address: 'Darbhanga, Bihar',
          DateOfBirth: '24/05/2004',
          MobileNo: '+91 9134567890',
          Email: 'nikita.das@example.com'
        },
        {
          Roll: '10294',
          Photo: 'https://randomuser.me/api/portraits/men/25.jpg',
          Name: 'Rohan Gupta',
          Gender: 'male',
          ParentsName: 'Vikas Gupta',
          Class: '10',
          Section: 'A',
          Address: 'Muzaffarpur, Bihar',
          DateOfBirth: '30/01/2004',
          MobileNo: '+91 9145678901',
          Email: 'rohan.gupta@example.com'
        },
        {
          Roll: '10295',
          Photo: 'https://randomuser.me/api/portraits/women/35.jpg',
          Name: 'Pooja Singh',
          Gender: 'female',
          ParentsName: 'Kamal Singh',
          Class: '10',
          Section: 'C',
          Address: 'Bhagalpur, Bihar',
          DateOfBirth: '18/11/2004',
          MobileNo: '+91 9156789012',
          Email: 'pooja.singh@example.com'
        },
        {
          Roll: '10296',
          Photo: 'https://randomuser.me/api/portraits/men/40.jpg',
          Name: 'Ravi Kumar',
          Gender: 'male',
          ParentsName: 'Mahesh Kumar',
          Class: '10',
          Section: 'B',
          Address: 'Purnea, Bihar',
          DateOfBirth: '22/07/2004',
          MobileNo: '+91 9167890123',
          Email: 'ravi.kumar@example.com'
        },
        {
          Roll: '10297',
          Photo: 'https://randomuser.me/api/portraits/women/45.jpg',
          Name: 'Sneha Roy',
          Gender: 'female',
          ParentsName: 'Naresh Roy',
          Class: '10',
          Section: 'A',
          Address: 'Chapra, Bihar',
          DateOfBirth: '02/09/2004',
          MobileNo: '+91 9178901234',
          Email: 'sneha.roy@example.com'
        },
        {
          Roll: '10298',
          Photo: 'https://randomuser.me/api/portraits/men/50.jpg',
          Name: 'Arjun Mehta',
          Gender: 'male',
          ParentsName: 'Rajesh Mehta',
          Class: '10',
          Section: 'C',
          Address: 'Ara, Bihar',
          DateOfBirth: '08/04/2004',
          MobileNo: '+91 9189012345',
          Email: 'arjun.mehta@example.com'
        },
        {
          Roll: '10299',
          Photo: 'https://randomuser.me/api/portraits/women/55.jpg',
          Name: 'Anjali Yadav',
          Gender: 'female',
          ParentsName: 'Ashok Yadav',
          Class: '10',
          Section: 'B',
          Address: 'Hajipur, Bihar',
          DateOfBirth: '10/06/2004',
          MobileNo: '+91 9190123456',
          Email: 'anjali.yadav@example.com'
        },
        {
          Roll: '10300',
          Photo: 'https://randomuser.me/api/portraits/men/60.jpg',
          Name: 'Vikash Thakur',
          Gender: 'male',
          ParentsName: 'Ramesh Thakur',
          Class: '10',
          Section: 'A',
          Address: 'Samastipur, Bihar',
          DateOfBirth: '14/12/2004',
          MobileNo: '+91 9201234567',
          Email: 'vikash.thakur@example.com'
        },
        {
          Roll: '10301',
          Photo: 'https://randomuser.me/api/portraits/women/65.jpg',
          Name: 'Kajal Pandey',
          Gender: 'female',
          ParentsName: 'Dinesh Pandey',
          Class: '10',
          Section: 'C',
          Address: 'Madhubani, Bihar',
          DateOfBirth: '19/01/2004',
          MobileNo: '+91 9212345678',
          Email: 'kajal.pandey@example.com'
      
            //  Action:'',            
        },

        // ... other parent data
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    

    // Search modal start 
    const filteredStudent = studentData.filter((student) => {
        if (searchTerm) {
            // Search logic
            return (
                student.Roll.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                student.MobileNo.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterType && filterValue) {
            // Ensure the filter type matches the key in teacher data
            const normalizedFilterType = filterType
                .replace(' ', '') // Remove spaces from 'Mobile No'
                .replace('Roll', 'Roll') // Match 'ID' to 'Id'
                .toLowerCase();

            return student[normalizedFilterType]?.toLowerCase() === filterValue.toLowerCase();
        }

        return true;
    });

    // View student Details Logic
    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (student) => {
        setSelectedStudent(student);
        setShow(true);

    };

    // Edit Teacher Data Logic
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentStudent, setCurrentStudent] = useState({

        Roll: '',
        Photo: '',
        Name: '',
        Gender: '',
        ParentsName: '',
        Class: '',
        Section: '',
        Address: '',
        DateOfBirth: '',
        MobileNo: '',
        Email: '',
    });
    const [imagePreview, setImagePreview] = useState(null);

    const handleEdit = (student) => {
        setCurrentStudent(student);
        setImagePreview(student.Photo);
        setShowEditModal(true);
    };

    const handleSave = () => {
        setIsEditing(true);  // Set editing state to true
        setShowConfirmModal(true);  // Show confirmation modal
    };

    // Save the student after confirmation
    const handleSaveTeacher = () => {
        setStudentData((prevData) =>
            prevData.map((student) =>
                student.Roll === currentStudent.Roll ? currentStudent : student
            )
        );
        setShowEditModal(false);
    };

    // Add Student Logic
    const [showAddModal, setShowAddModal] = useState(false);


    const handleAddStudent = () => {
        setIsEditing(false);  // Set editing state to false (for adding)
        setShowConfirmModal(true);  // Show confirmation modal
    };

    // Add a new Student after confirmation
    const handleAddTeacherRecord = () => {
        const newStudent = {
            ...currentStudent,
            Roll: `1800${studentData.length + 1}` // Generate a new ID dynamically
        };

        setStudentData((prevData) => [...prevData, newStudent]);
        handleCloseModal(); // Close the modal after adding the teacher
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    const handleDelete = (student) => {
        setStudentToDelete(student); // Store the student to be deleted
        setShowDeleteConfirmModal(true); // Show the confirmation modal
    };
    const handleDeleteStudent = () => {
        setStudentData((prevData) =>
            prevData.filter((student) => student.Roll !== studentToDelete.Roll) // Remove the student from the list
        );
    };


    const handleCloseModal = () => {
        setShowAddModal(false);
        setShowEditModal(false);
        setCurrentStudent({
            Roll: '',
            Photo: '',
            Name: '',
            Gender: '',
            ParentsName: '',
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
            <Header></Header>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header pb-2">
                                All Students List
                                <div className='d-flex justify-content-between'>
                                    <div className="d-flex">
                                        <input type="text" className="form-control" placeholder="Type Roll no, Name, Mobile Number..." onChange={handleSearch} />
                                        {/* <select className="form-select mx-2" onChange={handleFilterTypeChange}>
                                            <option value="">Filter by</option>
                                            <option value="ID">Roll</option>
                                            <option value="Name">Name</option>
                                            <option value="Mobile No">Mobile No</option>
                                        </select> */}
                                        {/* <input type="text" className="form-control" placeholder="Filter Value" onChange={handleFilterValueChange} /> */}
                                        <button className="btn btn-primary mx-2">Search</button>
                                    </div>
                                    <Button
                                        variant="success"
                                        onClick={() => setShowAddModal(true)}
                                    >
                                        <FontAwesomeIcon icon={faPlus} /> Add Student
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

                                                
                                                <td>{student.Roll}</td>
                                                <td><div className="circle-container">
                                                    <img
                                                        src={student.Photo || imagePreview}
                                                        alt={`Student ${student.Name} Photo`}
                                                        width="50"
                                                        height="50"
                                                        style={{ borderRadius: '50%' }}
                                                    />
                                                </div></td>
                                                <td>{student.Name}</td>
                                                <td>{student.Gender}</td>
                                                <td>{student.ParentsName}</td>
                                                <td>{student.Class}</td>
                                                <td>{student.Section}</td>
                                                <td>{student.Address}</td>
                                                <td>{student.DateOfBirth}</td>
                                                <td>{student.MobileNo}</td>
                                                <td>{student.Email}</td>
                                            
                                                <td>
                                                    <Button
                                                        variant="primary"
                                                        className='btn btn-sm'
                                                        onClick={() => handleShow(student)}
                                                    >
                                                        <FontAwesomeIcon icon={faEye} /> View
                                                    </Button>
                                                    <Button
                                                        variant="warning"
                                                        className='btn btn-sm m-1'
                                                        onClick={() => handleEdit(student)}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        className='btn btn-sm'
                                                        onClick={() => handleDelete(student)}
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
                    <Modal.Title>{showAddModal ? 'Add New Student' : 'Edit Student'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Row 1 */}
                        <Row className="mb-4">
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Roll No</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="RollNo"
                                        value={currentStudent.Roll}
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
                                        value={currentStudent.Name}
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
                                        value={currentStudent.Gender}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>ParentsName</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="ParentsName"
                                        value={currentStudent.ParentsName}
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
                                        value={currentStudent.Class}
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
                                        value={currentStudent.Section}
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
                                        value={currentStudent.Address}
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
                                        value={currentStudent.DateOfBirth}
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
                                        value={currentStudent.MobileNo}
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="Email"
                                        value={currentStudent.Email}
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
                                        value={currentStudent.Photo}
                                        onChange={handleInputChange}
                                        placeholder="Enter image URL"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                {currentStudent.Photo && (
                                    <div className="mt-2">
                                        <img src={currentStudent.Photo} alt="Preview" width="100" height="100" />
                                    </div>
                                )}
                            </Col>
                        </Row>

                        {/* Row 3
                        <Row className="mb-4">
                           
                        </Row> */}
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
                    <Button variant="primary" onClick={showAddModal ? handleAddStudent : handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
           

            {/* View Student Details Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedStudent && (
            <div className="d-flex">
              <div className="d-inline m-4">
                <p>Roll: {selectedStudent.Roll}</p>
                <p>Name : {selectedStudent.Name}</p>
                <p>Gender : {selectedStudent.Gender}</p>
                <p>Parents Name : {selectedStudent.ParentsName}</p>
                <p>Class : {selectedStudent.Class}</p>
                <p>Section : {selectedStudent.Section}</p>
                <p>Address : {selectedStudent.Address}</p>
                <p>Date Of Birth : {selectedStudent.DateOfBirth}</p>
                <p>MobileNo : {selectedStudent.MobileNo}</p>
                <p>Email : {selectedStudent.Email}</p>
              </div>
              <div className="d-inline mt-4 p-4">
                <img
                  src={selectedStudent.Photo}
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
          <p>Are you sure want to {isEditing ? 'edit' : 'add'} this student record ?</p>
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
          <p>Are you sure want to delete the student <strong>{studentToDelete?.Name}</strong>?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirmModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteStudent(); // Call the delete function
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

export default StudentsList;