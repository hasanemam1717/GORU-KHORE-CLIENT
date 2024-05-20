import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const {name,image,price,recipe ,_id} = item;
    const location = useLocation()
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSequre = useAxiosSequre()
    const [,refetch] = useCart()
    const handleAddToCart = () =>{
     if(user && user.email){
      // send item to database
      const cartItem ={
        menuId :_id,
        email : user.email,
        name,
        image,
        price,
      }
      axiosSequre.post('/carts',cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          })
          refetch()
        }
      })

     }
     else{
      Swal.fire({
        title: "You have to be logged in",
        text: "Please logIn to the add to the cart ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,logIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login" ,{ state: { from:location } })
        }
      });
     }
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="bg-slate-900 absolute top-0 text-white right-0  mr-2 mt-5">${price}</p>
      <div className="card-body items-center flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 rounded-md border-gray-800 bg-slate-100 mt-5">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
