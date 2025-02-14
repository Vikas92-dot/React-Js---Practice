import { useState } from "react";
import Data from "./Data";


const StudentTable = () => {
    const [studentList , setStudentList ]  = useState(Data);
  return (
    <div className="container mt-3">
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
          {studentList.map((individual , index)=>{return <tr key={index}>
            <td>{individual.roll}</td>
            <td>{individual.name}</td>
            <td>{individual.branch}</td>
            <td>{individual.gender}</td>
            <td>{individual.location}</td>
            <td>
                <button className="btn btn-outline-danger">Remove</button>
            </td>
          </tr>})}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
