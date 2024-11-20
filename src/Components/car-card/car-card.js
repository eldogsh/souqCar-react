import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import strings from "../../localization/localization";
import { Link } from "react-router-dom";
import "./car-card.css";

const ArticleCard = ({ imageSrc, title, link }) => {
  return (
    <Col>
      <div className="articlesCard m-2">
        <div className="parentImg">
          <img
            src={imageSrc}
            className="w-100 articlesCard-img"
            style={{ height: "200px" }}
            alt="Article"
          />
        </div>
        <p className="articlesCard-taxt p-2">
          <Link to={link}>{title}</Link>
        </p>
      </div>
    </Col>
  );
};

const CarCard = () => {
  return (
    <>
      <div>
        <Row xs={1} lg={2}>
          <Col>
            <div className="m-2 autoNews imgBackGroundOne">
              <p className="textCard fs-2">
                {strings.lookingForABuyerForYourCar}
                <br />
                <Link to="/sell-car">
                  <Button variant="outline-warning m-2 mt-3" style={{ fontSize: "20px" }}>
                    {strings.sellMyCar} <i className="fa-solid fa-plus " />
                  </Button>
                </Link>
              </p>
            </div>
          </Col>

          <Col>
            <div className="m-2 autoNews imgBackGroundTwo">
              <p className="textCard fs-2">
                {strings.CarNewsInEgypt}
                <br />
                <Link to="/car-news">
                  <Button variant="outline-primary m-2 mt-3" style={{ color: "white", fontSize: "20px" }}>
                    <i className="fa-solid fa-newspaper mx-2" /> {strings.carNews}
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row className="cardsRow mt-5">
          <span className="spanClass">
            <span>{strings.latestArticles}</span>
            <Link to="/all-articles">{strings.allArticles}</Link>
          </span>
        </Row>

        <Row className="my-4" xs={1} md={4}>
          <ArticleCard
            imageSrc="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453309/articals%20cars/download_bnvbfa.jpg"
            title="هل حقا الشركات تبيعنا سيارات رخيصة تفتقر لمعايير السلامة؟"
            link="/article/1"
          />
          <ArticleCard
            imageSrc="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453310/articals%20cars/ffff_e1d9s2.jpg"
            title="ما مدى صعوبة بناء سيارة من الصفر؟ تعرف على VF8 الفيتنامية"
            link="/article/2"
          />
          <ArticleCard
            imageSrc="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453312/articals%20cars/WhatsApp_Image_2023-09-11_at_20.15.14_wgfnti.jpg"
            title="ماذا تعرف عن أنواع ناقل الحركة Transmission؟"
            link="/article/3"
          />
          <ArticleCard
            imageSrc="https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453317/articals%20cars/cc_l0zx8k.jpg"
            title="مالكوري الجنوبي يحرز اللقب ويؤكد لن نستبدل المفاتيح الصلبة بشاشات اللمس"
            link="/article/4"
          />
        </Row>
      </div>
    </>
  );
};

export default CarCard;
