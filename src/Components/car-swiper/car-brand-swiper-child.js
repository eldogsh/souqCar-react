import React from "react";
import "./car-brand-swiper-child.css";

  import carImage from '../../img/gg_xubjnj.png';

const CardCarBrands = (props) => {
  const { name, imgUrl } = props.car;
    console.log("Car brand data:", props.car); // تحقق من البيانات التي تم تمريرها

  return (
    <div className="brandCard mt-4 me-auto ms-auto">
      <div className="textBrandCard">
        <img src={imgUrl||carImage} alt="Car brand" width={60} height={40} className="ms-5" />
        <p style={{ paddingLeft: "40%" }}>{name}</p>
      </div>
    </div>
  );
};

export default CardCarBrands;
