
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Home/Manu/Manu/Manu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "manu",
          element: <Manu></Manu>
        },
        {
          path: "order/:category",
          element:<Order></Order>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute> 
        }
      ]
    },
    {
      path:'/dash',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'/dash/cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);