import CarCart from "../../Components/car-cart/car-cart";
import Filter from "../../Components/filter/filter";
import ViewNav from "../../Components/view_nav/view_nav";
import strings from "../../localization/localization";
import "./buy-cars.css";
import { useEffect, useState, useContext, useMemo } from "react";
import Spinner from "react-bootstrap/Spinner";
import { CarContext } from "../../Contexts/car.cotnext";
import SliderItems from "../../Components/slider/slider";  // Assuming SliderItems is a separate component

function BuyCarsPage() {
  // استيراد السيارات من السياق
  const { filteredCars, setpage } = useContext(CarContext);

  const [sortValue, setSortValue] = useState("1"); // Default value for sorting

  // إعداد الصفحة عند التحميل
  useEffect(() => {
    setpage("sale");
  }, [setpage]);

  // دالة الترتيب باستخدام useMemo لتحسين الأداء
  const sortedCars = useMemo(() => {
    let sortedCars;
    switch (sortValue) {
      case "2": // ترتيب تنازلي
        sortedCars = [...filteredCars].sort((a, b) => b.price - a.price);
        break;
      case "3": // ترتيب تصاعدي
        sortedCars = [...filteredCars].sort((a, b) => a.price - b.price);
        break;
      default:
        sortedCars = [...filteredCars];
    }
    return sortedCars;
  }, [filteredCars, sortValue]);

  // دالة الترتيب عند تغيير الخيار
  const order = (value) => {
    setSortValue(value);
  };

  return (
    <>
      <div className="row px-3 theme1">
        {/* العنوان */}
        <div
          className="m-0"
          style={{
            borderRadius: "10px",
            color: "white",
            height: "90px",
            width: "100%",
            position: "relative",
            background:
              '#888 url("https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694470944/fiery-drift-racing-car-motion_985323-9188_oukwdg.jpg") no-repeat center/cover',
            backgroundBlendMode: "multiply",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: "45%",
              transform: "translateY(-50%)",
            }}
          >
            {strings.buyCars}
          </h1>
        </div>

        {/* عرض السيارات باستخدام SliderItems */}
        {filteredCars && filteredCars.length > 0 ? (
          <SliderItems cars={sortedCars} />
        ) : (
          <div style={{ height: "100%", textAlign: "center" }}>
            <Spinner style={{ marginTop: "25%", padding: 25 }} animation="border" />
          </div>
        )}

        {/* الفلتر */}
        <Filter state="buy" />

        {/* عرض السيارات بشكل فردي */}
        <div className="col-sm-12 col-lg-9">
          <ViewNav order={order} />
          {filteredCars && filteredCars.length > 0 ? (
            sortedCars.map((car) => (
              <CarCart key={car.id} car={car} />
            ))
          ) : (
            <div style={{ height: "100%", textAlign: "center" }}>
              <Spinner style={{ marginTop: "25%", padding: 25 }} animation="border" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BuyCarsPage;
