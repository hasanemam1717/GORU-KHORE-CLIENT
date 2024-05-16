import { Helmet } from "react-helmet-async";
import Slider from "../../../../Slider/Slider";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import PopularManu from "../PopularManu/PopularManu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GORU | Home</title>
      </Helmet>
      <Slider></Slider>
      <Category></Category>
      <PopularManu></PopularManu>
      <Fetured></Fetured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
