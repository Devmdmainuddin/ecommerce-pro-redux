import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
    return (
        <div className="overflow-hidden">
           <div className="main ">
            <Header></Header>
            <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default Layout;