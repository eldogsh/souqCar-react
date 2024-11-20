import CarSearch from "../Components/car-search/car-search";
import CarCard from "../Components/car-card/car-card";
import ExploreSection from "../Components/explore-section/explore-section";
import CarSwiper from "../Components/car-swiper/car-brand-swiper-child";
import Edit from "../Components/edit/edit";
import "./main-page.css";
import strings from "../localization/localization";
import FeaturedAds from "../Components/featured-ads/featured-ads";
const MainPage = () => {
  const carBrand = [
    {
      id: 1,
      name: `${strings.audi}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453006/covers%20and%20logos/download_d2yqfz.jpg",
    },
    {
      id: 2,
      name: `${strings.mercedesBenz}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453005/covers%20and%20logos/d_h1lsop.jpg",
    },
    {
      id: 3,
      name: `${strings.peugeot}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453001/covers%20and%20logos/ggg_xhdecp.jpg",
    },
    {
      id: 4,
      name: `${strings.rangeRover}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453011/covers%20and%20logos/fff_uto9zs.jpg",
    },
    {
      id: 5,
      name: `${strings.jeep}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453003/covers%20and%20logos/r_pnqznf.jpg",
    },
    {
      id: 6,
      name: `${strings.porsche}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453008/covers%20and%20logos/bhh_pex1ef.jpg",
    },
    {
      id: 7,
      name: `${strings.karry}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453004/covers%20and%20logos/1YWpfKQu9lSfrcUHX5xlwRa6IesMmG8zNuW8hhw5_gqtq0a.png",
    },
    {
      id: 8,
      name: `${strings.gac}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453010/covers%20and%20logos/ff_cznoj2.jpg",
    },
    {
      id: 9,
      name: `${strings.toyota}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453014/covers%20and%20logos/ffff_h1ou0m.jpg",
    },
    {
      id: 10,
      name: `${strings.kia}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453005/covers%20and%20logos/gggggg_iqvbx1.jpg",
    },
    {
      id: 11,
      name: `${strings.mg}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453009/covers%20and%20logos/bbbbb_tcabpc.jpg",
    },
    {
      id: 12,
      name: `${strings.bmw}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453003/covers%20and%20logos/hhhh_anqisx.jpg",
    },
    {
      id: 13,
      name: `${strings.hyundai}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453003/covers%20and%20logos/hhhhhhhh_yz48kt.jpg",
    },
    {
      id: 14,
      name: `${strings.ford}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453017/covers%20and%20logos/r4_qynjzs.jpg",
    },
    {
      id: 15,
      name: `${strings.volvo}`,
      imgUrl: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453004/covers%20and%20logos/vvvv_uqgtbl.jpg",
    },
  ];
 const carTypes = [
    {
      id: 1,
      name: `${strings.sedan}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694467246/341-3410849_thumb-image-toyota-yaris-2017-sedan-hd-png_bdi10d.jpg",
    },
    {
      id: 2,
      name: `${strings.quarterTransfer}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453074/covers%20and%20logos/gggg_aybnzq.png",
    },
    {
      id: 3,
      name: `${strings.convertible}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453077/covers%20and%20logos/hhhhhh_crxvri.png",
    },
    {
      id: 4,
      name: `${strings.hatchback}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453076/covers%20and%20logos/hhhhhdd_w3hu2a.png",
    },
    {
      id: 5,
      name: `${strings.coupe}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453078/covers%20and%20logos/r_mooran.png",
    },
    {
      id: 6,
      name: `${strings.crossover}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453070/covers%20and%20logos/5_hyilae.png",
    },
 
    {
      id: 9,
      name: `${strings.pickup}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453072/covers%20and%20logos/ff_r2uose.png",
    },
    {
      id: 10,
      name: `${strings.stationWagon}`,
      imgUrl:
        "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453076/covers%20and%20logos/gggjjj_j73ueb.png",
    },
  ];

  return (
    <>
      <div className="mainDiv p-3">
        {/* <Edit/> */}
        <CarSearch />
        <ExploreSection />
  
        <FeaturedAds />
        <CarCard />
      </div>
    </>
  );
};
export default MainPage;
