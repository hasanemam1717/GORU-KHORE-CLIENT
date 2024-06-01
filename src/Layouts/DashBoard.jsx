import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  const isAdmin = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              
              <li>
                <Link to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/additem">
                  <FaUtensils></FaUtensils> Add Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageitems">
                 <FaList></FaList> Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/managebookings">
                  <FaBook></FaBook> Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My cart ({cart.length})
                </Link>
              </li>
              <li>
                <Link to="/paymentHistory">
                  <FaShoppingCart></FaShoppingCart> Payment History
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FaUsers></FaUsers> All users
                </Link>
              </li>
            </>
          ) : (
            <>
              
              <li>
                <Link to="/dashboard/home">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </Link>
              </li>
              <li>
                <Link to="/dashboard/review">
                  <FaAd></FaAd> Review
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My cart
                </Link>
              </li>
              <li>
                <Link to="/dashboard/booking">
                  <FaList></FaList> My Booking
                </Link>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>Home
            </Link>
          </li>
          <li>
            <Link to="/manu">
              <FaSearch></FaSearch>Menu
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaEnvelope></FaEnvelope>Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
