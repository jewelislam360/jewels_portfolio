import { Outlet } from "react-router-dom";
import NavBar from "../Components/sheard/NavBar";


const Main = () => {
    return (
        <div className="bg-purple-900">
            <NavBar></NavBar>
            <Outlet></Outlet>
           
           
            
        </div>
    );
};

export default Main;