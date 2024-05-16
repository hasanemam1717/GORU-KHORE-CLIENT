import Slider from "../../../../Slider/Slider";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import PopularManu from "../PopularManu/PopularManu";


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Category></Category>
           <PopularManu></PopularManu>
           <Fetured></Fetured>
        </div>
    );
};

export default Home;