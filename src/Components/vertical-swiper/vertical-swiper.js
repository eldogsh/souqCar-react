import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCart from "../car-cart/car-cart";
import { CarContext } from "../../Contexts/car.cotnext";

export default function VerticalSwiper() {
  const { filteredCars, setpage } = useContext(CarContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  useEffect(() => {
    setpage("sale");
  }, [setpage]);

  return (
    <>
      <Slider {...settings} className="m-3">
        {Array.isArray(filteredCars) && filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="slide">
              <CarCart car={car} />
            </div>
          ))
        ) : (
          <div>No cars available</div>
        )}
      </Slider>
    </>
  );
}
