import React from 'react';
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import strings from "../localization/localization";
const RescueWinch = () => {
    const car =[];
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

          }}
        >
          <h1> {strings.rescueWinch}</h1>
        </div>
        <Filter />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />

        </div>
      </div>
</>
    );
}

export default RescueWinch;
