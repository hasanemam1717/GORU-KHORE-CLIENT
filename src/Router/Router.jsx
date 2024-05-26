
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
import AllUsers from "../Pages/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import AdminRoute from "./AdminRoute";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";

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
      path:'/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },
        {
          path:'/payment',
          element:<Payment></Payment>
        },
        // adimin routes
        {
          path:'/dashboard/allusers',
          // element:<AllUsers></AllUsers>
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          
        },
        {
          path:"/dashboard/updatedItem/:id",
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'/dashboard/additem',
          // element:<AddItems></AddItems>
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'/dashboard/manageitems',
          element:<ManageItem></ManageItem>
        }
        
      ]
    }
  ]);