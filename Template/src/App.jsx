import { Component } from "react";
import MultiCounter from "./MultiCounter";
import Product from "./Category";

class App extends Component{
  constructor(){
   super();
   this.state = {
    counter:500
   }
  }
  incrementCounter = ()=>{
    this.state.counter = this.state.counter + 1;
    this.setState({counter: this.state.counter + 1});
    //this.forceUpdate();
  }
  render(){
    return <>
      <Product />
     
    </>
  }
}

export default App;

