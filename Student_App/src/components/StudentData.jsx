import { useRef, useState } from "react";
import Data from "./Data"; 

const StudentManagement = () => {
  const rollRef = useRef(null);
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const branchRef = useRef(null);
  const locationRef = useRef(null);

  const [branchList] = useState(["CS", "IT", "ECE", "Mechanical"]);
  const [studentList, setStudentList] = useState(Data); 

  
  const addStudent = () => {
    const studentData = {
      roll: rollRef.current.value,
      name: nameRef.current.value,
      gender: genderRef.current.value,
      branch: branchRef.current.value,
      location: locationRef.current.value,
    };

    setStudentList([...studentList, studentData]);

  };

  return (
    <div className="container mt-3">
    

      {/* Input Fields */}
      <div className="row">
        <div className="col-md-6">
          <input ref={rollRef} type="text" className="form-control" placeholder="Enter roll number" />
        </div>
        <div className="col-md-6">
          <input ref={nameRef} type="text" className="form-control" placeholder="Enter student name" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <select ref={genderRef} className="form-control">
            <option value="0">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="col-md-6">
          <select ref={branchRef} className="form-control">
            <option value="0">Select branch</option>
            {branchList.map((branch, index) => (
              <option value={branch} key={index}>{branch}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-2">
          <input ref={locationRef} type="text" className="form-control" placeholder="Enter student location" />
        </div>
      </div>

      {/* Add Button */}
      <div className="row mt-2">
        <div className="col-md-6">
          <button onClick={addStudent} className="btn btn-success">ADD</button>
        </div>
      </div>

      {/* Student List Table */}
      <div className="mt-3">
        <h3 className="text-center">Student List</h3>
        
          <table className="table table-striped table-hover table-bordered shadow-lg">
            <thead className="bg-dark text-white text-center">
              <tr>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Gender</th>
                <th>Location</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {studentList.map((student, index) => (
                <tr key={index}>
                  <td>{student.roll}</td>
                  <td>{student.name}</td>
                  <td>{student.branch}</td>
                  <td>{student.gender}</td>
                  <td>{student.location}</td>
                  <td>
                    <button onClick={() => removeStudent(index)} className="btn btn-outline-danger">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    </div>
  );
};

export default StudentManagement;
