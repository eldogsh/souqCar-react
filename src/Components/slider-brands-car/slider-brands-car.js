import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from 'prop-types'; // Add PropTypes for type checking

import CardCarBrands from "../card-car-brands/card-car-brands";

const SliderBrandsItem = (props) => {
  const { carBrand } = props; // Destructure props for cleaner code

  return (
    <>
      <div className="m-2">
        <div style={{ fontSize: 20, marginBottom: 7, fontWeight: "bold" }}>
          بحث بماركات السيارات
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            400: { slidesPerView: 1, spaceBetween: 5 },
            900: { slidesPerView: 2, spaceBetween: 10 },
            1000: { slidesPerView: 4, spaceBetween: 20 },
            1050: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {Array.isArray(carBrand) && carBrand.length > 0 ? (
            carBrand.map((brand) => (
              <SwiperSlide key={brand.id}>
                <CardCarBrands car={brand} />
              </SwiperSlide>
            ))
          ) : (
            <div className="no-brands">No brands available</div> // Show message if no data
          )}
        </Swiper>
      </div>
    </>
  );
};

// Add PropTypes to validate props
SliderBrandsItem.propTypes = {
  carBrand: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Assuming `id` is string
      // Add other fields as needed, like `name`, `imageUrl`, etc.
    })
  ).isRequired,
};

export default SliderBrandsItem;
