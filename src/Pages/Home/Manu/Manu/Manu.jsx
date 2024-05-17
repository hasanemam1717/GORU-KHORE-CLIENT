import { Helmet } from "react-helmet-async";
import Cover from "../../../../Shared/Cover/Cover";
import manuImg from "../../../../../src/assets/menu/dessert-bg.jpeg"
import useMenu from "../../../../Hooks/UseMenu";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../../../../Shared/Cover/MenuCategory/MenuCategory";
import dessertImg  from "../../../../assets/menu/salad-bg.jpg"
import saldImg from "../../../../assets/menu/banner3.jpg"
import pizzImg from "../../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../../assets/menu/soup-bg.jpg"

const Manu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const offered = menu.filter(item => item.category === "offered")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
  return (
    <div>
      <Helmet>
        <title>GORU | manu</title>
      </Helmet>
      <Cover title={"OUR MENU"}  img={manuImg}></Cover>
      {/* Main cover */}
      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss our offer"}></SectionTitle>
      {/* {Offerd manu items} */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desart manu items */}
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
      {/* Salad manu items */}
      <MenuCategory items={salad} title={"salad"} coverImg={saldImg}></MenuCategory>
      {/* Soup manu items */}
      <MenuCategory items={soup} title={"soup"} coverImg={pizzImg}></MenuCategory>
      {/* Pizza manu items */}
      <MenuCategory items={pizza} title={"sizza"} coverImg={soupImg}></MenuCategory>

    </div>
  );
};

export default Manu;
