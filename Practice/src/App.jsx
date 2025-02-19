import NumericStates from "./components/NumericState";
import Counter from "./components/UseReducer";

function App(){
  return<>
  <div className="container mt-3">
    <NumericStates/>
    <Counter/>
  </div>
  </>
}
export default App;























// import { Component } from "react";
// import First from "./components/First";
// import Second from "./components/Second";
// import Third from "./components/Third";

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       arr :[10,12,44,63,23],
//       student:{name: "john", age: 22, marks: 99}
//     }
//   }
//   render(){
//     return(
//     <>
//     <h3>Hello guys</h3>
//     {/* <First/>
//     <Second/>
//     <Third/> */}
//     <div>
//       <select>
//         <option>Select Numbers</option>
//         {this.state.arr.map((a)=>(
//           <option value="">{a}</option>
//         ))}
//       </select>
//     </div>
//     </>
//     )
//   }
// }
// export default App;