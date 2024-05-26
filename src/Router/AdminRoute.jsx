import {  useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    console.log(children);
  const {user,loading} = useAuth();
  const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation()
    const navigate = useNavigate()
    console.log(user,isAdmin);
    if(loading || isAdminLoading){
        return  <progress className=' progress w-56'></progress>
    }
    if(user && isAdmin){
        return children
    }
    navigate("/" ,{ state: { from:location }, replace: true})
    // <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;