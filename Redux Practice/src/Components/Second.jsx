import { useSelector } from "react-redux";

function Second(){
    const {counter,evenCounter} = useSelector((store)=>store.DataCounter);
    const {m2} = useSelector((store)=>store.WishMessages)
    return <>
      <h3>Second Component...</h3>
      <label>Counter : {counter}, Even counter : {evenCounter}</label>
      <br />
      <label>{m2}</label>
    </>
}

export default Second;