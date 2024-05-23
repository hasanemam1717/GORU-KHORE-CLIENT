import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../Hooks/useAxiosSequre";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSequre();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const result = await axiosSecure.get("allUsers");
      return result.data;
    },
  });

 


  const handleDelete = user => {
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
          axiosSecure.delete(`/allUsers/${user._id}`)
          .then((res) => {
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
  }


  const handleMakeAdmin = user => {
    axiosSecure.patch(`/allUsers/admin/${user._id}`)
   .then(res => {
    console.log(res.data);
    if (res.data.modifiedConunt > 0){
        Swal.fire({
            position: "center",
            icon: "success",
            title: "User name is admin now.",
            showConfirmButton: false,
            timer: 1500
          });
          
    }
   })}
 
  return (
    <div>
      <div>
        <div className="flex justify-evenly mr-3 text-xl font-semibold ">
          <h1>ALl Users</h1>
          <h1>Total :{users.length}</h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {" "}
                      { user.role === 'admin ' ? "Admin" :  <button
                          onClick={() => handleMakeAdmin(user)}
                        className="btn bg-white btn-outline"
                      >
                       <FaUsers></FaUsers>
                      </button>}
                    </td>
                    <td>
                      {" "}
                      <button
                          onClick={() => handleDelete(user)}
                        className="btn bg-red-600 text-white btn-outline"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td> 
                  </tr>
                ))}
                {/* row 1 */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
