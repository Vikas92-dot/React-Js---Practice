import { useSelector } from "react-redux";

function First(){
    const{counter,evenCounter} = useSelector((store)=>store.DataCounter);
    const{m1,m2,m3}= useSelector((store)=>store.WishMessages);
    return<>
    <h3>First Component..</h3>
    <label>Counter: {counter}, EvenCounter: {evenCounter}</label>
    <br></br>
    <label>Messages:{m1}</label>
    </>
}
export default First;