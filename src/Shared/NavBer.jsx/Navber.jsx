import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navber = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((err) => {
       console.log(err);
     });
  }
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="manu">Our Manu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
     {user ?  <li>
        <Link onClick={handleLogOut} >LogOut</Link>
      </li> : <li>
        <Link to="/login">LogIn</Link>
      </li>}
    </>
  );
  return (
    <div className="navbar fixed z-10 container bg-opacity-30 text-white  bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          GoruKHOre
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navber;
