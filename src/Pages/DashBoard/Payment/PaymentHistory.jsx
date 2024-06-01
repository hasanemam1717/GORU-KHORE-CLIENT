import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSequre();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/payments/${user.email}`);

      return response.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl">Total payments : {payments.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Price</th>
                <th>TranjectionId</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((item,index) => <tr key={item._id}>
                <th>{index+1}</th>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
                <td>{item.status}</td>
              </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
