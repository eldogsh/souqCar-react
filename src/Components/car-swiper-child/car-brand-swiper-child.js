import React from "react";
import "./car-brand-swiper-child.css";

const CarSwiperChild = (props) => {
  const { name, imgUrl } = props.car;
  return (
    <>
      <div className="brandCard mt-4 me-auto ms-auto">
        <div className="textBrandCard ">
          <img src={imgUrl} alt="" width={60} height={40} className="ms-5"/>
          <p style={{paddingLeft:"40%"}}>{name}</p>
        </div>
      </div>
    </>
  );
};
export default CarSwiperChild;
