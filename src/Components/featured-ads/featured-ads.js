import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VerticalSwiper from "../vertical-swiper/vertical-swiper";
import strings from "../../localization/localization";
import Button from "react-bootstrap/Button";
import './featured-ads.css';
const FeaturedAds = () => {
  return (
    <>
    <div className="bt ">eldogsh</div>
      <Row>
      <Col lg={3} >
          <div className="explantionOfUse d-lg-block d-none ">
            <h1 className=" m-2 my-5 p-5 text-white font-bolder ">
              {strings.howToUseTheSouqCar}
            </h1>

            <div className="m-5 d-flex justify-content-center " style={{backgroundColor:"orange",borderRadius:"10px"}}>
              <Button variant=" p-3 text-white " style={{fontSize:"30px",fontWeight:"900"}}>{strings.howToUse}</Button>
            </div>
          </div>
        </Col>
        <Col  lg={9}>
          <div className="spanClass m-2">{strings.featuredAds} </div>
          <VerticalSwiper />{" "}
        </Col>
      </Row>
    </>
  );
};
export default FeaturedAds;