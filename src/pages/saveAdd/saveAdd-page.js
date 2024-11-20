import React, { useEffect, useContext, useState } from "react";
import CarCart from "../../Components/car-cart/car-cart";
import ViewNav from "../../Components/view_nav/view_nav";
import { saveAddContext } from "../../Contexts/saveAdd";
import '../buy-cars/buy-cars.css';

function SaveAddPage(props) {
  const { saveAdd, setSaveAdd } = useContext(saveAddContext);
  const [value, setValue] = useState();

  const order = (value) => {
    let sortedCars = [...saveAdd]; // إنشاء نسخة من المصفوفة لتجنب التعديل المباشر
    switch (value) {
      case "2":
        sortedCars.sort((a, b) => b.price - a.price);
        setSaveAdd(sortedCars); // تحديث الـ state بعد التعديل
        setValue(value);
        break;
      case "3":
        sortedCars.sort((a, b) => a.price - b.price);
        setSaveAdd(sortedCars); // تحديث الـ state بعد التعديل
        setValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="row px-3 theme1">
        <div className="mt-3">
          <ViewNav order={order} />
          {saveAdd && saveAdd.length > 0 ? (
            saveAdd.map((car) => (
              <CarCart key={car.id} car={car} />
            ))
          ) : (
            <p>No cars available</p> // رسالة عندما تكون المصفوفة فارغة
          )}
        </div>
      </div>
    </>
  );
}

export default SaveAddPage;
