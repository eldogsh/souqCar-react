import React from "react";
import Filter from "../../Components/filter/filter";
import ViewNav from "../../Components/view_nav/view_nav";
import strings from "../../localization/localization";
import CarCart from '../../Components/car-cart/car-cart'
import { useEffect, useContext,useState } from "react";
import { CarContext } from "../../Contexts/car.cotnext";
import Spinner from 'react-bootstrap/Spinner';
const CarRental = (props) => {
 
  const { filteredCars,  setpage  } = useContext(CarContext);
  const [value, setValue] = useState();
  useEffect(()=>{
  
    setpage("rent")
    // setFilteredCars(cars)
    // setCarsMap(cars)
   },[])
   const order = (value) => {
    switch (value) {
      case "2":
        filteredCars.sort(function (a, b) {
          return b.price - a.price;
        });
  
        setValue(value);
        break;
      case "3":
        filteredCars.sort(function (a, b) {
          return a.price - b.price;
        });

        setValue(value);

        break;
      default:
      // code block
    }
  };
  return (
    <>
      <div className="row px-3 theme1 ">
      <div
          className="m-0"
          style={{
            borderRadius: "10px",
            color: "white",
            height: "90px",
            width: "100%",
            position: "relative",
            background: '#888 url("https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694470944/fiery-drift-racing-car-motion_985323-9188_oukwdg.jpg") no-repeat center/cover ',

            backgroundBlendMode:"multiply",
        
            
          }}
        >
          <h1 style={{ position:"absolute ",
        top:"45%",
        transform:"translateY(-50%)"}}> {strings.carRental}</h1>
        </div>
        <Filter 
        state = 'rent'
        />
        <div className="col-sm-12 col-lg-9">
          <ViewNav order={order} />
          {filteredCars?filteredCars.map((car) => (
            <CarCart key={car.id} car={car}  />
          )): <div style={{height:"100%" , textAlign:"center"}}> <Spinner style={{marginTop:"25%" , padding:25}} animation="border" /></div>}
        </div>
      </div>
    </>
  );
};

export default CarRental;