import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import DashBoard from "./Dashboard";
import CreateNewTask from "./CreateNewTask";
import AllTask from "./AllTask";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";


function RoutesConfig(){
    return<>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/create-new-task" element={<CreateNewTask/>}/>
            <Route path="/view-all-task" element={<AllTask/>}/>
            <Route path="/completed-task" element={<CompletedTask/>}/>
            <Route path="/pending-task" element={<PendingTask/>}/>
        </Routes>
    </>
}
export default RoutesConfig;