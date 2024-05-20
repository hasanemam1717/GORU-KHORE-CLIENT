const TableRow = ({ item }) => {
  const { name, image, price } = item;
  return (
    <div>
     
      <tr className="table w-full">
        <td>
          <div className=" ">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{name}</button>
        </th>
      </tr>
    </div>
  );
};

export default TableRow;
