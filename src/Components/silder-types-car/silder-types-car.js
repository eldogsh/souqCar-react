
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CardCarTypes from "../card-car-types/card-car-types";

const SliderTypesItem = (props) => {
  const carTypes = props.carTypes;
  const titleName=props.titleName;
  return (
    <>
      <div className="my-3">
      <div  className="brandText my-2"> {titleName} </div>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          bosition
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 1,
            },

            1000: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
            1050: {
              slidesPerView: 7,
              spaceBetween: 1,
            },
          }}
        >
          {carTypes.map((carType) => (
            <SwiperSlide>
              <CardCarTypes key={carType.id} car={carType}></CardCarTypes>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default SliderTypesItem;
