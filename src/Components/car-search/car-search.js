
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./car-search.css";
import { Button, Form } from "react-bootstrap";
import Dropdown from "../drop-down/drop-down";
import strings from "../../localization/localization";

const CarSearch = () => {
  const options = [
    { key: "1", value: " تويوتا" },
    { key: "2", value: " هوينداي" },
    { key: "3", value: " مرسيدس" },
    { key: "4", value: " كيا" },
  ];

  const options2 = [
    { key: "5", value: " no resulte found" },
    { key: "6", value: " " },
    { key: "7", value: " " },
    { key: "8", value: " " },
  ];
  const options3 = [
    { key: "9", value: " القاهره" },
    { key: "10", value: " الجيزه" },
    { key: "11", value: " الاسكندريه" },
    { key: "12", value: " سوهاج" },
  ];

  const options4 = [
    { key: "13", value: "بيع و شراء السيارات " },
    { key: "14", value: "تاجير السيارات" },
  ];

  return (
    <>
      <div className="parentContainer mb-4">
        <Row className="py-3 carouselRow">
          <Col>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item aria-hidden="false">
                <img
                  className="d-block w-100 carouselImge"
                  src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694452333/covers%20and%20logos/gg_xubjnj.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carouselImge"
                  src="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694452296/covers%20and%20logos/c_jyxiu4.png"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        {/* <Row className="mb-3 inputRow justify-content-md-cente">
          <Col xs={12} md={12}>
            <Row>
              <Col xs={5} md={3} className="titleOfInputs">
                <i class="fa-solid fa-car "></i>{" "}
                <p className="me-2">{strings.SearchForCar}</p>{" "}
              </Col>
            </Row>
            <div className=" divInput">
              <Row>
                <Col className="mt-3">
                  {" "}
                  <div className=" w-100 buttonClass">{strings.new}</div>
                </Col>
                <Col className="mt-3">
                  <div className=" w-100 buttonClass">{strings.AlmostNew}</div>
                </Col>
                <Col className="mt-3">
                  <div className=" w-100 buttonClass">{strings.used}</div>
                </Col>
              </Row>
               <Row className="my-3">
                <Col xs={12} md={3}>
                  <div className="mb-2">
                    <Dropdown
                      options={options}
                      placeHolder={strings.carMarker}
                    />
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="mb-2">
                    <Dropdown
                      options={options2}
                      placeHolder={strings.carModel}
                    />
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="mb-2">
                    <Dropdown
                      options={options3}
                      placeHolder={strings.selectGovernorate}
                    />
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="mb-2">
                    <Dropdown
                      options={options4}
                      placeHolder={strings.buyCars}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="my-2">
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder={strings.maxPrice}
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder={strings.lowestPrice}
                      className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                </Col>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button>{strings.searchForACar}</Button>
                  </Form>
                </Col>
              </Row> 
            </div>
          </Col>
        </Row> */}
      </div>
    </>
  );
};
export default CarSearch;
