import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ManuItem from "../../../Shared/ManuItem/ManuItem";

const PopularManu = () => {
  const [ manu, setManu ] = useState([]);
  useEffect(() => {
    fetch("Manu.json")
      .then((res) => res.json())
      .then(data => {
          const popularItems = data.filter(item => item.category === "popular");
          console.log(popularItems);
        setManu(popularItems)
      });
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our manu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {
            manu.map(item =><ManuItem key={item._id} item={item}></ManuItem>)
        }
      </div>
    </div>
  );
};

export default PopularManu;
