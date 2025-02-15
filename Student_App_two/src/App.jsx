import { useRef, useState } from "react";
import StudentData from "./Data";

function App(){
  const [studentList,setStudentList] = useState(StudentData);
  const [branchList,setBranchList] = useState(["CS","CV","IT","MECH"]);
  const [defaultBranch,setDefaultBranch] = useState("All");

  let rollInput = useRef();
  let nameInput = useRef();
  let genderInput = useRef();
  let branchInput = useRef();
  
  const addStudent = ()=>{
    let roll = rollInput.current.value;
    let name = nameInput.current.value;
    let gender = genderInput.current.value;
    let branch = branchInput.current.value;
    setStudentList([...studentList,{roll,name,gender,branch}]);
  }
  
  return <>
    <div className="bg-primary">
        <h3 className="text-white text-center p-3">Student App</h3>
    </div>
      <div className="container mt-3">
      <div className="row">
          <div className="col-md-6">
            <input ref={rollInput} type="text" className="form-control" placeholder="Enter roll number" />
          </div>
          <div className="col-md-6">
            <input ref={nameInput} type="text" className="form-control" placeholder="Enter student name" />
          </div>
        </div>
        <div className="row mt-2">
            <div className="col-md-6">
              <select ref={genderInput} className="form-control">
                <option value="0">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <select ref={branchInput} className="form-control">
                <option value="0">Select branch</option>
                {branchList.map((branch,index)=>{return <option key={index}>{branch}</option>})}
              </select>
            </div>
        </div>
        <div className="row mt-2 mb-3">
          <div className="col-md-6">
              <button onClick={addStudent} className="btn btn-success">Add</button>
          </div>
          <div className="col-md-6 d-flex">
          <button onClick={()=>setDefaultBranch("CV")} className="btn btn-primary ml-2">CV ({studentList.filter((student)=>{return student.branch == "CV"}).length})</button>
          <button onClick={()=>setDefaultBranch("IT")} className="btn btn-dark ml-2">IT ({studentList.filter((student)=>{return student.branch == "IT"}).length})</button>
          <button onClick={()=>setDefaultBranch("CS")} className="btn btn-danger ml-2">CS ({studentList.filter((student)=>{return student.branch == "CS"}).length})</button>
          <button onClick={()=>setDefaultBranch("MECH")} className="btn btn-secondary ml-2">MECH ({studentList.filter((student)=>{return student.branch == "MECH"}).length})</button>
          <button onClick={()=>setDefaultBranch("All")} className="btn btn-warning ml-2">All ({studentList.length})</button>
          </div>
        </div>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Roll no.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Branch</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {studentList.filter((student)=>{return student.branch == defaultBranch || defaultBranch == "All"}).map((student,index)=>
            (  <tr key={index}>
                <td>{index+1}</td>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.branch}</td>
                <td>
                  <button className="btn btn-outline-danger">Remove</button>
                </td>
              </tr>))}
          </tbody>
      </table>
      </div>
    
      
  </>
}
export default App;