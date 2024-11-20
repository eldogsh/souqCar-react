import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderCard from "../slider_card/slider_card.js";

const SliderItems = (props) => {
  const cars = props.cars;
  
  return (
    <>
      <div className="my-2" style={{ position: "relative", zIndex: "5" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            400: { slidesPerView: 1, spaceBetween: 5 },
            800: { slidesPerView: 2, spaceBetween: 5 },
            1100: { slidesPerView: 4, spaceBetween: 5 },
            1200: { slidesPerView: 5, spaceBetween: 5 },
          }}
          style={{ width: "100%" }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <SliderCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderItems;
