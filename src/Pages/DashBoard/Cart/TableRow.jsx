import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
// import useCart from "../../../Hooks/useCart";

const TableRow = ({ item ,refetch}) => {
  const { name, image, price, _id } = item;
  const axiosSecure = useAxiosSequre();
  // const [refetch] = useCart();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch(),
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
          }
        });
      }
    });
  };
  return (
    <div>
      <tbody className="table table-zebra w-full">
        {/* row 1 */}
        <tr className="flex justify-between">
          <th>
            <img className="w-24 rounded" src={image} alt="" />
          </th>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-lg btn-outline"
            >
              <FaTrashAlt></FaTrashAlt>
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default TableRow;
