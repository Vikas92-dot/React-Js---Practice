import { useState } from "react";

function NumericStates(){
    const[count,setCounter] = useState(100);
    return <>
    <h4>Numeric state:{count}</h4>
    <button onClick={()=>setCounter(count+1)}>Increment</button>
    <button onClick={()=>setCounter(count-1)}>Decrement</button>

    </>
}
export default NumericStates;