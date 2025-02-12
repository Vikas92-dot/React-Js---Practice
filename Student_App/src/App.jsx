import { Component } from "react";
import Data from "./components/Data";
import Header from './components/Header';

class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS","IT","CV","Mech"], 
      buttonDecoration:{
       width: "100px"
      },
      defaultBranch: "All",
      defaultGender: "All"
    }
    
  }
  addStudent = ()=>{
    let roll = this.roll.value;//We get this values from input field with the help of 'ref'
    let name = this.name.value;
    let gender = this.gender.value;
    let branch = this.branch.value;
    let location = this.location.value;
    this.setState({studentList: [...this.state.studentList,{roll,name,gender,branch,location}]})

 }
 remove = (rollNumber)=>{
  if(window.confirm("Do you want to delete it ?")){ 
   let index = this.state.studentList.findIndex((student)=>{return student.roll == rollNumber})
   this.state.studentList.splice(index,1);
   this.setState({studentList:[...this.state.studentList]});
  } 
 }
  render(){
    return <>
    <Header/>
    <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={(obj)=>this.roll=obj} id="roll" type="text" className="form-control" placeholder="Enter roll number"/>
          </div>
          <div className="col-md-6">
            <input ref={(obj)=>this.name=obj} id="name" type="text" className="form-control" placeholder="Enter student name"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <select ref={(obj)=>this.gender = obj} id="gender" className="form-control">
              <option value="0">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="col-md-6">
            <select ref={(obj)=>this.branch=obj} id="branch" className="form-control">
              <option value="0">Select branch</option>
              {this.state.branchList.map((branch,index)=>{return <option value={branch} key={index}>{branch}</option>})}
            </select>
          </div>
          <div className="col-md-6 mt-2">
            <input ref={(obj)=>this.location=obj} id="location" type="text" className="form-control" placeholder="Enter student location"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={this.addStudent} className="btn btn-success">ADD</button>
            
          </div>
          
          <div className="col-md-6">
            <button onClick={()=>this.setState({defaultBranch:"CS"})}  className="btn btn-primary" style={this.state.buttonDecoration}>CS ({this.state.studentList.filter((student)=>{return student.branch == "CS"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch: "IT"})} className="btn btn-warning ml-2" style={this.state.buttonDecoration}>IT ({this.state.studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"CV"})} className="btn btn-dark ml-2" style={this.state.buttonDecoration}>CV ({this.state.studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"Mech"})} className="btn btn-info ml-2" style={this.state.buttonDecoration}>Mech ({this.state.studentList.filter((student)=>{return student.branch=="Mech"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch: "All"})} className="btn btn-secondary ml-2" style={this.state.buttonDecoration}>Total ({this.state.studentList.length})</button>
          </div>
          <div className="col-md-6 mt-2">
            <p>Filter by:</p>
          <button onClick={()=>this.setState({defaultGender: "Male"})} className="btn btn-primary">Male</button>
          <button onClick={()=>this.setState({defaultGender: "Female"})} className="btn btn-danger ml-3">Female</button>
          <button onClick={()=>this.setState({defaultGender: "All"})} className="btn btn-dark ml-3">All</button>
          </div>
        </div>
       </div>
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
    {this.state.studentList
      .filter(
        (student) =>
          (student.branch === this.state.defaultBranch || this.state.defaultBranch === "All") &&
          (student.gender === this.state.defaultGender || this.state.defaultGender === "All")
      )
      .map((student, index) => (
        <tr key={index}>
          <td>{student.roll}</td>
          <td>{student.name}</td>
          <td>{student.branch}</td>
          <td>{student.gender}</td>
          <td>{student.location}</td>
          <td>
            <button onClick={() => this.remove(student.roll)} className="btn btn-outline-danger btn-sm">
              Remove
            </button>
          </td>
        </tr>
      ))}
  </tbody>
</table>


      </div>
    </>
  }
}
export default App;