// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div>
            <SectionTitle subHeading={'From 11.00 pm to 10.00 pm'} heading={"Order online"}></SectionTitle>
        <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper my-24"
        >
          <SwiperSlide><img src={slider1} /><h1 className="text-3xl uppercase ml-10 -mt-10 text-white">Salads</h1> </SwiperSlide>
          <SwiperSlide><img src={slider2} /><h1 className="text-3xl uppercase ml-10 -mt-10 text-white">Pizza</h1></SwiperSlide>
          <SwiperSlide><img src={slider3} /><h1 className="text-3xl uppercase ml-10 -mt-10 text-white">Beef</h1></SwiperSlide>
          <SwiperSlide><img src={slider4} /><h1 className="text-3xl uppercase ml-10 -mt-10 text-white">Thai soup</h1></SwiperSlide>
          <SwiperSlide><img src={slider5} /><h1 className="text-3xl uppercase ml-10 -mt-10 text-white">Barger</h1></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Category;
