import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/NavBer.jsx/Navber";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;