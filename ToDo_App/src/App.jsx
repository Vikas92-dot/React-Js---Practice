import React, { useState } from "react";
import Header from "./components/Header";
import AllTask from './components/Data';

function App(){
  const[priority,setPriority] = useState(["High","Medium","Low"]);
  const [Tasks,setTask] = useState(AllTask);
  const[defaultStatus,setDefaultStatus] = useState("Active");
  
  return<>
        <div className="bg-primary p-3" >
            <h3 className="bg-primary text-white text-center">ToDo App</h3>
        </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
              <input className="form-control" type="text" placeholder="Enter Title" />
            </div>
            <div className="col-md-6">
              <select className="form-control">
                <option value="0">Select priority</option>
                {priority.map((prior)=><option>{prior}</option>)}
              </select>
            </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <button className="btn btn-outline-success">Add</button>
          </div>
        </div>
        <div className="row mt-2 mb-3">
          <div className="col-md-6">
            <button className="btn btn-success">Active: {Tasks.filter((task)=>task.Status === "Active").length}</button>
            <button className="btn btn-danger ml-2">Deactive: {Tasks.filter((task)=>task.Status === "Deactive").length}</button>
          </div>
        </div>
    
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th >Sr.no.</th>
          <th >Title</th>
          <th >Date</th>
          <th >Priority</th>
          <th >Operation</th>
        </tr>
      </thead>
      <tbody>
          {Tasks.map((task,index)=><tr key={index} 
          style={{ backgroundColor:
            task.priority === "High"
              ? "#ed5a5a"
              : task.priority === "Medium"
              ? "#f7d065"
              : task.priority === "Low"
              ? "#90ee90"
              : "transparent",}}  >
            <td>{index+1}</td>
            <td>{task.title}</td>
            <td>{task.Date}</td>
            <td>{task.priority}</td>
            <td>{task.Status}</td>      


          </tr>)}
      </tbody>
    </table>
    </div>
  </>
}
export default App;