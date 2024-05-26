import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";

const SocialLogIn = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosOpen()
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
           console.log( res.user);
           const userInfo ={email:res.user?.email,name: res.user?.displayName}
           axiosPublic.post('dataUsers', userInfo)
           .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle className="mr-4"></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogIn;
