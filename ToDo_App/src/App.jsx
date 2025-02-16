import React, { useRef, useState } from "react";
import Header from "./components/Header";
import AllTask from './components/Data';

function App(){
  const[priority,setPriority] = useState(["High","Medium","Low"]);
  const [Tasks,setTask] = useState(AllTask);
  const[taskDate, setTaskDate] = useState(new Date().toLocaleDateString("en-GB"));
  const[defaultStatus,setDefaultStatus] = useState("Active");

  let titleInput = useRef();
  let priorityInput = useRef();


  const addTask =()=>{
    let title = titleInput.current.value;
    let priority = priorityInput.current.value;
    

    setTask([...Tasks,{title,Date:taskDate,Status: "Active",priority}]);
  }
  const toggleStatus = (taskTitle) => {
    setTask(
      Tasks.map((task) =>
        task.title === taskTitle ? { ...task, Status: task.Status === "Active" ? "Deactive" : "Active" } : task
      )
    );
  };

  
  return<>
        <div className="bg-primary p-3" >
            <h3 className="bg-primary text-white text-center">ToDo App</h3>
        </div>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6">
              <input ref={titleInput} className="form-control" type="text" placeholder="Enter Title" />
            </div>
            <div className="col-md-6">
              <select ref={priorityInput} className="form-control">
                <option  value="0">Select priority</option>
                {priority.map((prior)=><option value={prior}>{prior}</option>)}
              </select>
            </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <button onClick={addTask} className="btn btn-outline-success">Add</button>
          </div>
        </div>
        <div className="row mt-2 mb-3">
          <div className="col-md-6">
            <button onClick={()=>setDefaultStatus("Active")} className="btn btn-success">Active: {Tasks.filter((task)=>task.Status === "Active").length}</button>
            <button onClick={()=>setDefaultStatus("Deactive")} className="btn btn-danger ml-2">Deactive: {Tasks.filter((task)=>task.Status === "Deactive").length}</button>
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
          {Tasks.filter((task)=>{return task.Status == defaultStatus}).map((task,index)=><tr key={index} 
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
            <td>
              <button onClick={()=> toggleStatus(task.title)} className={task.Status == "Active" ? "btn btn-danger" : "btn btn-success"}>{task.Status == "Active" ? "Deactive" : "Active"}</button>
            </td>      


          </tr>)}
      </tbody>
    </table>
    </div>
  </>
}
export default App;