
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Manu from "../Pages/Home/Manu/Manu/Manu";
import Order from "../Pages/Order/Order/Order";

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
        }
      ]
    },
  ]);