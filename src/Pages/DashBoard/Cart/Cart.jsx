import useCart from "../../../Hooks/useCart";
import TableRow from "./TableRow";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="text-4xl font-semibold">Total items:{cart.length}</div>
        <div className="text-4xl font-semibold">Total Price:{totalPrice}</div>
        <button className="btn btn-outline">Pay</button>
      </div>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-gray-200 rounded-xl font-bold text-xl text-orange-600">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>#</th>
              </tr>
            </thead>
          {
            cart.map((item) => (
              <TableRow key={item.id} refetch={refetch} item={item}></TableRow>
            ))
          }
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
