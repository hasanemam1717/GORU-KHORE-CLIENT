import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/NavBer.jsx/Navber";


const Root = () => {
    const location = useLocation()
    // console.log(location);
    const noHeraderFooter = location.pathname.includes("login") || location.pathname.includes("register")
    return (
        <div className="container mx-auto">
           { noHeraderFooter || <Navber></Navber>}
            <Outlet></Outlet>
           { noHeraderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;