import useCart from "../../../Hooks/useCart";
import TableRow from "./TableRow";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-evenly">
        <div className="text-4xl font-semibold">Total items:{cart.length}</div>
        <div className="text-4xl font-semibold">Total Price:{totalPrice}</div>
        <button className="btn btn-outline">Pay</button>
      </div>
      <div className="">
        <table >
          {/* head */}
          <thead className="table">
        <tr >
          <th>Image</th>
          <th>Price</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
          <tbody >
            {/* row 1 */}
            {
                cart.map( item => <TableRow key={item._id} item={item}></TableRow>)
            }
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
