import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_imgaebb
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`



const UpdateItem = () => {
    const { name, recipe,category, price,_id } = useLoaderData()
    const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosOpen();
  const axiosSecure = useAxiosSequre();

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.image[0];
    const imageFile = new FormData();
    imageFile.append("image", image);
    const res = await axiosPublic.patch(image_hosting_api, imageFile)
    console.log(res.data)
    if(res.data.success){
        const menuItem = {
            name:data.name,
            category:data.category,     
            price:parseFloat(data.price),
            image:res.data.data.display_url,
            recipe: data.recipe,
        }
        const menuRes = await axiosSecure.patch(`/menu${_id}` ,menuItem)
        console.log(menuRes.data)
        if( menuRes.data.modifiedCount > 0){
            reset()
            Swal.fire({
                icon:'success',
                title: 'Item updated to the menu',
                showConfirmButton: false,
                timer: 1500
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
  };
    return (
        <div>
            <SectionTitle heading={"Update item"} subHeading={"Refresh info"}></SectionTitle>
            <div>
            <div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">Recipe Name ...</span>
          </label>
          <input
            {...register("name") }
            type="text"
            defaultValue={name}
            className="input input-bordered w-full "
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
              defaultValue="default"
                {...register("category")}
                className="select select-bordered w-full "
              >
                <option disabled value={category}>
                  Select a category ...!
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Price...</span>
              </label>
              <input
                {...register("price")}
                type="number"
                defaultValue={price}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
            {...register("recipe")}
              className="textarea w-1/2 textarea-bordered"
              defaultValue={recipe}
            ></textarea>
          </div>
          <div>
            <input
            {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-outline">
            Update Menu Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
            </div>
        </div>
    );
};

export default UpdateItem;