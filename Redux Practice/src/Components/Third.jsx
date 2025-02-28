import { useDispatch } from "react-redux";
import { decrementCounter, decrementEvenCounter, decrementPayload, incrementCounter, incrementEvenCounter, incrementPayload } from "../redux-config/DataSlice";

function Third(){
    const dispatch = useDispatch()
    return<>
    <button onClick={()=>dispatch(incrementCounter())}>Increment Counter</button>
    <button onClick={()=>dispatch(decrementCounter())}>Decrement Counter</button>
    <br />
    <button onClick={()=>dispatch(incrementEvenCounter())}>Increment EvenCounter</button>
    <button onClick={()=>dispatch(decrementEvenCounter())}>Decrement EvenCounter</button>
    <br />
    <button onClick={()=>dispatch(incrementPayload(5))}>Increment by 5</button>
    <button onClick={()=>dispatch(decrementPayload(3))}>Decrement by 3</button>

    </>
}
export default Third;