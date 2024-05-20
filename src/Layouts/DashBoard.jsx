import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu">
                    <li><Link to='/dashboard/home'><FaHome></FaHome>Home </Link></li>
                    <li><Link to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation </Link></li>
                    <li><Link to='/dashboard/review'><FaAd></FaAd> Review </Link></li>
                    <li><Link to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My cart  </Link></li>
                    <li><Link to='/dashboard/booking'><FaList></FaList> My Booking  </Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'><FaHome></FaHome>Home </Link></li>
                    <li><Link to='/manu'><FaSearch></FaSearch>Menu </Link></li>
                    
                </ul>

            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;