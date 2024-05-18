import { Link } from "react-router-dom";
import ManuItem from "../../ManuItem/ManuItem";
import Cover from "../Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="space-y-10">
      {title && <Cover title={title} img={coverImg}></Cover>}
   
      <div className="grid grid-cols-1  md:grid-cols-2 ">
        {items.map((item) => (
          <ManuItem key={item._id} item={item}></ManuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 rounded-md border-gray-800 mb-4 mt-5">
          Order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
