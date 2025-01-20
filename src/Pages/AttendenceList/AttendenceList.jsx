import React, { useState } from "react";
import Header from "../../component/Header/Header";

const AttendanceList = () => {
  // Sample students list
  const students = ["Alice", "Bob", "Charlie", "Diana"];

  // Initialize attendance: P for Present
  const initialAttendance = students.map(() =>
    Array(7).fill("P")
  );

  const [attendance, setAttendance] = useState(initialAttendance);

  // Handle attendance toggle
  const toggleAttendance = (studentIndex, dayIndex) => {
    const updatedAttendance = attendance.map((row, i) =>
      i === studentIndex
        ? row.map((status, j) =>
          j === dayIndex ? (status === "P" ? "A" : "P") : status
        )
        : row
    );
    setAttendance(updatedAttendance);
  };

  // Calculate totals
  const totalStudents = students.length;
  const presentCount = attendance.flat().filter((status) => status === "P").length;
  const absentCount = attendance.flat().filter((status) => status === "A").length;

  return (
    <>
      <Header></Header>
      <div className="container mt-4">
  {/* Header Section */}
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h4 className="mb-0"><strong>Attendance Sheet</strong></h4>
    <div className="d-flex">
      <h4 className="mb-0"><strong>Class: 10</strong></h4>
      <h4 className="ms-3 mb-0"><strong>Section: A</strong></h4>
    </div>
  </div>

  {/* Attendance Table */}
  <div className="table-responsive">
    <table className="table table-bordered text-center">
      <thead className="thead-dark">
        <tr>
          <th>Student Name</th>
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
            (day) => (
              <th key={day}>{day}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {students.map((student, studentIndex) => (
          <tr key={student}>
            <td>{student}</td>
            {attendance[studentIndex].map((status, dayIndex) => (
              <td
                key={dayIndex}
                className={status === "P" ? "text-success" : "text-danger"}
                style={{ cursor: "pointer" }}
                onClick={() => toggleAttendance(studentIndex, dayIndex)}
              >
                {status}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      <div>
        {/* Main Content */}
        {/* Footer */}
        <div className="card-footer text-body-secondary">
          <footer className="bg-white shadow text-dark py-3 position-fixed bottom-0 w-100">
            <div className="d-flex justify-content-between align-items-center px-3">
              {/* First line: Left aligned */}
              <p className="m-1 text-start">
                <strong>Total No. of Students:</strong> {totalStudents}
              </p>

              {/* Second line: Center aligned */}
              <p className="m-2 text-center flex-grow-1">
                <strong>No. of Present Entries:</strong> {presentCount}
              </p>

              {/* Third line: Right aligned */}
              <p className="m-2 text-end">
                <strong>No. of Absent Entries:</strong> {absentCount}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AttendanceList;
