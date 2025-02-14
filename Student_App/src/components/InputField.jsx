import { useRef, useState } from "react";

const InputField = () => {
  
  const rollRef = useRef(null);
  const nameRef = useRef(null);
  const genderRef = useRef(null);
  const branchRef = useRef(null);
  const locationRef = useRef(null);

  
  const [branchList] = useState(["CS", "IT", "ECE", "Mechanical"]);
  const [studentList, setStudentList] = useState([]);

  
  const addStudent = () => {
    const studentData = {
      roll: rollRef.current.value,
      name: nameRef.current.value,
      gender: genderRef.current.value,
      branch: branchRef.current.value,
      location: locationRef.current.value,
    };
    setStudentList([...studentList, studentData]);
    console.log("Student List Updated:", [...studentList, studentData]);
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <input ref={rollRef} id="roll" type="text" className="form-control" placeholder="Enter roll number" />
        </div>
        <div className="col-md-6">
          <input ref={nameRef} id="name" type="text" className="form-control" placeholder="Enter student name" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <select ref={genderRef} id="gender" className="form-control">
            <option value="0">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="col-md-6">
          <select ref={branchRef} id="branch" className="form-control">
            <option value="0">Select branch</option>
            {branchList.map((branch, index) => (
              <option value={branch} key={index}>{branch}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mt-2">
          <input ref={locationRef} id="location" type="text" className="form-control" placeholder="Enter student location" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <button onClick={addStudent} className="btn btn-success">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
