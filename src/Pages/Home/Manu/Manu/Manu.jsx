import { Helmet } from "react-helmet-async";
import Cover from "../../../../Shared/Cover/Cover";
import manuImg from "../../../../../src/assets/menu/dessert-bg.jpeg"

const Manu = () => {
  return (
    <div>
      <Helmet>
        <title>GORU | manu</title>
      </Helmet>
      <Cover subHeading={"OUR MENU"} heading={"Would you like to try a dish?"} img={manuImg}></Cover>

    </div>
  );
};

export default Manu;
