
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManuItem from "../../../Shared/ManuItem/ManuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularManu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === "popular");
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our manu"}
      ></SectionTitle>
      <div className="grid grid-cols-1  md:grid-cols-2 ">
        {
            popular.map(item =><ManuItem key={item._id} item={item}></ManuItem>)
        }
      </div>
    </div>
  );
};

export default PopularManu;
