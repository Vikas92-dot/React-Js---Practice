import { useState } from "react";
import Data from "./components/Data";
import Header from './components/Header';
import InputField from "./components/InputField";
import StudentTable from "./components/StudentTable";
import StudentManagement from "./components/StudentData";


const AppFunction = () =>{
    return (
        <>
        <Header/>
        {/* <InputField/>
        <StudentTable/> */}
        <StudentManagement/>
        </>
        
    )
}
export default AppFunction;