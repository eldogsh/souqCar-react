import { useState, useEffect, useContext,useCallback } from "react";
import "./filter.css";
import strings from "../../localization/localization";
import { CarContext } from "../../Contexts/car.cotnext";

function Filter(props) {
  const {state} = props 

  const localLang = localStorage.getItem("lang");

  const [togel, setTogel] = useState({ place: false, carMaker: false, color: false,rentalPeriod:false , driver:false,service:false,productState:false , productType:false });
  const [carBody, SetCarBody] = useState(false);
  const [fuel, setFuel] = useState(false);
  const [control, setControl] = useState(false);
  const [distance, setDistance] = useState(false);
  const [status, setStatus] = useState(false);
  const [engine, setEngine] = useState(false);
  const [feature, setFeature] = useState(false);
  const [price, setPrice] = useState(false);
  const [year, setYear] = useState(false);
  
 
  const yearList = [];
   
  //console.log(carBody);

  for (let year = 2024; year >= 1968; year--) {
    yearList.push(year);
  }
  
  const  plases= [
    {  name_en:"All" , name_ar:"الجميع"}, 
    {id:2 , name_en:"Cairo" , name_ar:"القاهرة"},
 {id:3 , name_en:"Giza" , name_ar:"الجيزه"}, 
 {id:4 , name_en:"Alexandria" , name_ar:"الاسكنداريه"}, 
 {id:5 , name_en:"Minia" , name_ar:"المنيا"},
]
const carMakerList=[
  {id:1,name_ar:"الجميع",name_en:"All"},
  {id:2,name_ar:"لادا",name_en:"Lada"},
  {id:3,name_ar:"شاهين",name_en:"Shaheen"},
  {id:4,name_ar:"اسبيرانزا",name_en:"Speranza"},
  {id:5,name_ar:"ام جى",name_en:"MG"},
  {id:6,name_ar:"تويوتا",name_en:"Toyota"},
  {id:7,name_ar:"جيب",name_en:"JEEP"},
  {id:8,name_ar:"جيلى",name_en:"Geely"},
  {id:9,name_ar:"رينو",name_en:"Renault"},
  {id:10,name_ar:"سكودا",name_en:"Skoda"},
  {id:11,name_ar:"شيفروليه",name_en:"CHEVROLET"},
  {id:12,name_ar:"فورد",name_en:"Ford"},
  {id:13,name_ar:"هونداى",name_en:"Hyundai"},
  {id:14,name_ar:"كيا",name_en:"KIA"},
  {id:15,name_ar:"نيسان",name_en:"NISSAN"},
  {id:16,name_ar:"اوبل",name_en:"OPEL"},
  {id:17,name_ar:"بي واي دي",name_en:"BYD"},
  {id:18,name_ar:"جيلى",name_en:"GEELY"},
  {id:19,name_ar:"رنج روفر",name_en:"Range Rover"},
]
const carBodyList = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453076/covers%20and%20logos/hhhhhdd_w3hu2a.png",
    name_ar: "هاتشباك",
    name_en: "Hatchback",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453078/covers%20and%20logos/r_mooran.png",
    name_ar: "كوبيه",
    name_en: "Coupe",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694467246/341-3410849_thumb-image-toyota-yaris-2017-sedan-hd-png_bdi10d.jpg",
    name_ar: "سيدان",
    name_en: "Sedan",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453077/covers%20and%20logos/hhhhhh_crxvri.png",
    name_ar: "سياره مكشوفه",
    name_en: "Convertible",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453076/covers%20and%20logos/gggjjj_j73ueb.png",
    name_ar: "ستيشن واجن",
    name_en: "Station wagon",
  },

  {
    id: 7,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453072/covers%20and%20logos/ff_r2uose.png",
    name_ar: "بيك اب ",
    name_en: "Pickup",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694453074/covers%20and%20logos/gggg_aybnzq.png",
    name_ar: "ربع نقل",
    name_en: "Quarter transfer",
  },

];
 
  const carFuelList= [
    {id:1,name_en:"Petrol",name_ar:"بنزين"}, 
    {id:1,name_en:"Diesel",name_ar:"ديزيل(سولار)"}, 
    {id:1,name_en:"Electric",name_ar:"كهرباء"}, 
    {id:1,name_en:"Gas",name_ar:"الغاز الطبيعى"}, 
    {id:1,name_en:"Other",name_ar:"اخرى"}, 
    ]
  const carTransmissionList= [
    {id:1, name_en:"Automatic" , name_ar:"أوتوماتيك"}, 
    {id:2, name_en:"Manual" , name_ar:"يدوى"}, 
    {id:3, name_en:"CVT" ,name_ar:"CVT" }, 
  ]
  const colorList = [
    {id:1, color: "#000000", name_ar: "اسود", name_en: "black" },
    {id:2, color: "#808080", name_ar: "رمادى", name_en: "grey" },
    {id:3, color: "#0000FF", name_ar: "ازرق", name_en: "blue" },
    {id:4, color: "#FF0000", name_ar: "احمر", name_en: "red" },
    {id:5, color: "#FFFFFF", name_ar: "ابيض", name_en: "white" },
    {id:6, color: "#00008B", name_ar: "كحلى", name_en: "Navy" },
  ];

 const engineList= [
  {id:1,name_en:"cc 1-999"},
  {id:2,name_en:"cc 1000-1399"},
  {id:3,name_en:"cc 1400-1599"},
  {id:4,name_en:"cc 1600"},
  {id:5,name_en:"cc 1601-2000"},
  {id:6,name_en:"cc 2001-2800"},
  {id:7,name_en:"cc 2800-7500"},
  {id:8,name_en:"cc 4000"},
  {id:9,name_en:"cc 3000"},
  {id:10,name_en:"cc 5700"},
  {id:11,name_en:"cc 4400"},
  {id:12,name_en:"miles 350"},
]

const carConditionList= [
    {id:1 ,name_ar:"جديد", name_en:"New"},
    {id:2 ,name_ar:"كسر زيرو" , name_en:"Almost New"},
    {id:3 ,name_ar:"مستعمل", name_en:"Used"},
    {id:4 ,name_ar:"خرده", name_en:"Scrap"},
   ];
  
 const extraFeaturesList= [
{id:1,name_ar:"نطام فرامل ABS", name_en:"ABS brake system",},
{id:2,name_ar:"كاميرا خلفية", name_en:"Back camera",},
{id:3,name_ar:"شاشه تعمل باللمس", name_en:"Touch screen",},
{id:4,name_ar:"مثبت سرعه", name_en:"Cruise control",},
{id:5,name_ar:"حساس ركن", name_en:"corner sensors",},
{id:6,name_ar:"EBD", name_en: "EBD",},
{id:7,name_ar: "اطارات خاصه", name_en: "Special frames",},
{id:8,name_ar: "تنيه/نضام مضاد للسرقة", name_en: "Alarm/Anti-thefh system",},
{id:9,name_ar: "وسائد هوائيه", name_en:  "Airbags",},
{id:10,name_ar: "مرايا كهربائيه", name_en: "Electric mirrors",},
{id:11,name_ar: "زجاج كهربائى", name_en: "EBD",},
{id:12,name_ar: "مقاعد جلد", name_en: "leather seats",},
{id:13,name_ar: "شاحن يو اس بس", name_en: "USB charger",},
{id:14,name_ar: "مصابيح ضبابيه", name_en: "Mist lanterns",},
{id:15,name_ar: "باور ستيرينج", name_en: "Power steering",},
{id:16,name_ar: "بلوتوث", name_en:  "Bluetooth",},
{id:17,name_ar: "مدخل aux", name_en: "Aux audio input",},
{id:18,name_ar:    "قفل مركزى", name_en: "Center locl",},
{id:19,name_ar:  "تكييف", name_en: "Conditioning",},
{id:20,name_ar: "راديو اف ام", name_en: "FM radio",}
  ]
  
  const rentalTermList=[
    {id:1,name_ar:"الجميع",name_en:"All" },
    {id:2,name_ar:"يومى",name_en:"Daily" },
    {id:3,name_ar:"أسبوعى",name_en:"Weekly" },
    {id:4,name_ar:"شهرى",name_en:"Monthly" },
    {id:5,name_ar:"سنوى",name_en:"Yearly" },
  ]
  
  const driverStatusList=[
    {id:1, name_ar:'الجميع' , name_en:"All"},
    {id:2, name_ar:'مع سائق' , name_en:'With a Driver'},
    {id:3, name_ar:'بدون سائق' , name_en:'Without Driver'},
    ];
   
   const serviceList=[
      {id:1, name_en:'Car ekectrical maintenance',name_ar:"صيانة كهربائيه"},
      {id:2, name_en:'Polishing and finishing',name_ar:"التلميع والتشطيبات"},
      {id:3, name_en:'Mechanical',name_ar:"ميكانيكا"},
      {id:4, name_en:'Tire maintenance',name_ar:"صيانة اطارات"},
      {id:5, name_en:'Car smithing and painting',name_ar:"حدادة و دهان سيارات"},
      {id:6, name_en:'Refrigeration & Air Conditioning',name_ar:"تبريد و تكييف"},
      {id:7, name_en:'Car glass maintenance',name_ar:"صيانة زجاج السيارة"},
      {id:8, name_en:'Gearbox',name_ar:"علبة السرعة"},
      {id:9, name_en:'test',name_ar:"تيست"},
      

    ];
 
  const productTypeList= [
    {id:1,name_ar:'كاوتش(عجلات)', name_en:"Wheels"},
    {id:2,name_ar:'بطاريات', name_en:"Batteries"},
    {id:3,name_ar:'زيوت', name_en:"Oils"},
    {id:4,name_ar:'اكسسوارات', name_en:"Accessories"},
    {id:5,name_ar:'جسم السيارة', name_en:"Car body"},
    {id:6,name_ar:'فوانيس', name_en:"Lanterns"},
    {id:7,name_ar:'مواتير وفتيس', name_en:"Motors and fuses"},
    {id:8,name_ar:'فرامل وعفشة', name_en:"Brakes and furniture"},
    {id:9,name_ar:'صالون واجزاء داخليه', name_en:'Salon and interior parts'},
    {id:10,name_ar:'حساسات و الكترونيات', name_en:"Sensors and electronics"},
    {id:11,name_ar:'زجاج السيارة', name_en:"Car glass"},
    {id:12,name_ar:'فلاتر', name_en:"filters"},
    {id:13,name_ar:' انصاف سيارات', name_en:"Half cars"},
    {id:14,name_ar:'جنوط اصلية', name_en:"Orginal rims"},
    ]
  const productStatuslist=[
    {id:1,name_en:'New', name_ar:"جديد"}, 
    {id:2,name_en:'Used', name_ar:"مستعمل"},
  ]; 
 const { carFilters ,setCarFilters  } = useContext(CarContext);
 
 const cancelFilter=()=>{
  var element = document.getElementById("filter");
element.classList.remove("activeFilter");
}
  function handleCarFiltration(selectedFilter, filterType) {
    var element = document.getElementById(selectedFilter.name_en);
    element&&element.classList.toggle("checkbox-container-active");
    
    // Loop over all of the existing car filters in the car context. ex: carBodyFilters or carColorFilters
    setCarFilters((selectedExistingCarFilter) => {
      
      // Get the required car filters list by using the filter type. ex: carBodyFilters or carColorFilters
      const filterToChange = selectedExistingCarFilter[filterType];
    console.log(filterToChange);
      // Get the index to check if the selected filter exists or not
      const index = filterToChange.findIndex((filter) => filter.id === selectedFilter.id);

      if (index !== -1) {
        // Filter already exists, remove it
        const updatedFilter = filterToChange.filter((filter) => filter.id !== selectedFilter.id);
        return {
          // return the old data
          ...selectedExistingCarFilter,
          // return the changed data to the changed filterType. ex: carBodyFilters or carColorFilters 
          [filterType]: updatedFilter,
        };
      } else {
        return {
          // return the old data
          ...selectedExistingCarFilter,
          // add the new selectedFilter and return it to the car filters
          [filterType]: [...filterToChange, selectedFilter],
        };
      }
    });
  }
 
  
  return (
    <>
      <aside className="col-lg-3 col-9  display overflow-auto overflow-x-hidden" id="filter">
        <div className=" cancelFiler" >
          <h5>{strings.advancedSearch}</h5>
          <h5 onClick={()=>{cancelFilter()}}><i class="fa-regular fa-circle-xmark pointer"></i></h5>
        </div>
        <div className=" p-3 mx-2 w-100 border-0 theme " style={{ textAlign: "center" }}>
          <p>{strings.Keywords}</p>
          
          <input className="w-100 d-flex"  onChange={(el) => setCarFilters({...carFilters ,carNameFilters:el.target.value})} />
          
          </div>
          
        
        <div>
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, place: !togel.place })}>
            <i style={{ fontSize: "21px" }} className={`fa-sharp fa-solid fa-location-dot  icon ${togel.place ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.place ? "active" : ""}>
                <div className="me-2 ms-2">{strings.location}</div>
                <div className="me-2 ms-2">{strings.egypt}</div>
              </div>
              <i className={togel.place ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.place && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select className="w-100 border-0 p-2" style={{ background: "rgb(206, 224, 248)" }} onChange={(el) => setCarFilters({...carFilters ,carPlaceFilters:[el.target.value]})}>
                {plases.map((item) => (
                  <option value={item.name_ar} >{localLang === "ar" ? item.name_ar : item.name_en}</option>
                ))} 
              </select>
            </div>
          )}

          <div className=" w-100 mt-3 d-flex me-2 rounded theme" onClick={() => setTogel({ ...togel, carMaker: !togel.carMaker })}>
            <i
              className={`fa-solid fa-car-on iconfont icon
              ${togel.carMaker ? "active" : ""}`}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className={`me-2 ms-2 ${togel.carMaker ? "active" : ""}`}>{strings.carMaker}</div>

              <i className={togel.carMaker ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.carMaker && (
            <div className="p-4 me-2 w-100 justify-content-center theme">
              <select className="w-100 border-0 p-2" style={{ background: "rgb(206, 224, 248)" }} onChange={(el) => setCarFilters({...carFilters ,carMakerFilters:[el.target.value]})}>
                {carMakerList.map((item) => (
                  <option value={item.name_ar}>{localLang === "ar" ? item.name_ar : item.name_en}</option>
                ))}
              </select>
              {/* <Dropdown options={strings.carMakerList} placeHolder="المصنع" /> */}
            </div>
          )}
          {(state === 'buy' ||state === 'rent' )&&<div>
          <div className="w-100 mt-3 d-flex me-2 rounded theme" onClick={() => SetCarBody(carBody ? false : true)}>
            <div>
              <i  className={`fa-solid fa-car-side icon  ${carBody ? "active" : ""}`}></i>
            </div>
            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className={`me-2 ms-2 ${carBody ? "active" : ""}`}>{strings.carBody}</div>
              <i className={carBody ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {carBody && (
            <div className=" p-3 me-2 w-100 theme ">
              {carBodyList.map((item) => (
                <div className="col-xxl-4 col-6 mt-2 mb-2 ps-2 pe-2 d-inline-flex ">
                  <label className=" h-100" id={item.name_en}>
                    <input className="checkbox input-pos" type="checkbox" name="bodies[]" value="" onClick={() => handleCarFiltration(item ,'carBodyFilters')} />
                    <div className="input-cont">
                      <div className="catItem bodyType">
                        <div className=" text-center w-100   pt-2 pb-2">
                          <div className="   w-100">
                            <img className="w-75 " src={item.img} alt="" />
                          </div>
                          <div>{localLang === "ar" ? item.name_ar : item.name_en}</div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          )}
          <div className="w-100 mt-3 d-flex me-2 rounded theme" onClick={() => setFuel(fuel ? false : true)}>
            <i className={`fa-solid fa-gas-pump iconfont  icon ${fuel ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center ">
              <div className={`me-2 ms-2 ${fuel ? "active" : ""}`}>{strings.carFuel}</div>

              <i className={fuel ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {fuel && (
            <div className=" p-3 me-2 w-100 theme ">
              {carFuelList.map((item, index) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input  type="checkbox" name="transmission[]" value=''  onClick={() => handleCarFiltration(item ,'carFuelFilters')} />
                  <span className="p-1" >{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
          <div className="w-100 mt-3 d-flex me-2 rounded theme" onClick={() => setControl(control ? false : true)}>
            <i style={{ fontSize: "25px" }} className={`fa-solid fa-map-pin icon ${control ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${control ? "active" : ""}`}>{strings.carTransmission}</div>

              <i className={control ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {control && (
            <div className=" p-3 me-2 w-100 theme ">
              {carTransmissionList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input  type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item ,'carTransmissionList')} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
          <div className="w-100 mt-3 d-flex me-2 rounded theme" onClick={() => setTogel({ ...togel, color: !togel.color })}>
            <i
              style={{
                padding: "11px",
              }}
              className={`fa-solid fa-palette icon ${togel.color ? "active" : ""} `}
            ></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${togel.color ? "active" : ""}`}>{strings.color}</div>

              <i className={togel.color ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.color && (
            <div className=" p-3 me-2 w-100 theme ">
              {colorList.map((item) => (
                <label className="d-inline-block m-2 " id={item.name_en}>
                  <input className="input-pos " type="checkbox" name="" value="" onClick={() => handleCarFiltration(item,'carColorFilters')} />
                  <div className="input-cont">
                    <div className="w-100 colorItem text-center p-3">
                      <div className="color" style={{ backgroundColor: item.color }}></div>
                      <div className="color-title d-block f-small f-w-700">{localLang === "ar" ? item.name_ar : item.name_en}</div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}
            </div>}
          

          {state==='rent'&&<div>
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, rentalPeriod: !togel.rentalPeriod })}>
            <i style={{ fontSize: "21px" }} className={`fa-solid fa-calendar-week  icon ${togel.rentalPeriod ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.rentalPeriod ? "active" : ""}>
                <div className="mx-2 ">{strings.rentalTerm}</div>

              </div>
              <i className={togel.rentalPeriod ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.rentalPeriod && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select className="w-100 border-0 p-2" style={{ background: "rgb(206, 224, 248)" }} onChange={(el) => setCarFilters({...carFilters ,rentalTermFilters:[el.target.value]})}>
                {rentalTermList.map((item) => (
                  <option value={item.name_ar}>{localLang === "ar" ? item.name_ar : item.name_en}</option>
                ))}
              </select>
            </div>
          )}
          </div>}
          
          {state ==='rent'&&<div>
          
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, driver: !togel.driver })}>
            <i style={{ fontSize: "21px" }} className={`fa-solid fa-user-tie icon ${togel.driver ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.driver ? "active" : ""}>
                <div className="me-2 ms-2">{strings.driverStatus}</div>
  
              </div>
              <i className={togel.driver ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.driver && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select className="w-100 border-0 p-2" style={{ background: "rgb(206, 224, 248)" }} onChange={(el) => setCarFilters({...carFilters ,driverStatusFilters:[el.target.value]})}>
                {driverStatusList.map((item) => (
                  <option value={item.name_ar}>{localLang === "ar" ? item.name_ar : item.name_en}</option>
                ))}
              </select>
            </div>
          )}
          </div>
          }
          {state==='buy'&&<div>
          <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setDistance(distance ? false : true)}>
            <i className={`fa-solid fa-gauge-high iconfont icon ${distance ? "active" : ""} `}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`${distance ? "active" : ""} , me-2 ms-2`}>{strings.kilometerage}</div>

              <i className={distance ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {distance && (
            <div className="p-3 me-2 w-100 theme">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">{strings.from}</label>
                <div className="input-group ">
                  <input
                    className="form-control grey only-numbers"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="kilometerage_from"
                    placeholder="مثال: 150"
                    onChange={(el) => setCarFilters({...carFilters ,carLowDistanceFilters:el.target.value!==''?el.target.value:'0'})}
                  />
                  <span className="input-group-text">{strings.km}</span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">{strings.to}</label>
                <div className="input-group ">
                  <input
                    className="form-control grey only-numbers"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    name="kilometerage_to"
                    placeholder="مثال: 180"
                    onChange={(el) => setCarFilters({...carFilters ,carHeighDistanceFilters:el.target.value!==''?el.target.value:'10000000000000'})}
                  />
                  <span className="input-group-text">{strings.km}</span>
                </div>
              </div>
            </div>
          )}
            </div>}
          {state ==='buy'&&<div>
          <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setStatus(status ? false : true)}>
            <i className={`fa-solid fa-car-burst  icon ${status ? "active" : ""} `}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ${status ? "active" : ""} ms-2 me-2`}>{strings.carCondition} </div>

              <i className={status ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {status && (
            <div className=" p-3 me-2 w-100 theme ">
              {carConditionList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input className="ms-1 " type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item , "carConditionFilters")} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
            </div>}
          
        {state==='buy'&&<div>
        <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setEngine(engine ? false : true)}>
            <i className={`fa-solid fa-gears rounded icon ${engine ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${engine ? "active" : ""}`}>{strings.engine}</div>

              <i className={engine ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {engine && (
            <div className=" p-3 me-2 w-100 theme">
              {engineList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item}>
                  <input className="ms-1 " type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item ,'carEngineFilters')} />
                  <span className="p-1">{item.name_en}</span>
                </label>
              ))}
            </div>
          )}
          </div>}

          {(state === 'buy' ||state === 'rent') &&<div>
          <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setYear(year ? false : true)}>
            <i className={`fa-regular fa-calendar-days iconfont icon ${year ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${year ? "active" : ""} `}>{strings.productionYear} </div>

              <i className={year ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 pe-2 ps-2"}></i>
            </div>
          </div>
          {year && (
            <div className="p-4 me-2 w-100  d-flex justify-content-center theme">
              <select className="w-100  p-2" onChange={(el) => setCarFilters({...carFilters ,carManufactureDateFilters:[el.target.value]})}>
              <option value="All"> {localLang === "ar" ? "الجميع" : "All"}</option>
                {yearList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            </div>
          )}
            </div>}
            {(state === 'buy' ||state === 'rent') &&<div>
            <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setFeature(feature ? false : true)}>
            <i className={`fa-regular fa-square-plus iconfont icon ${feature ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${feature ? "active" : ""} `}>{strings.extraFeatures}</div>

              <i className={feature ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 pe-2 ps-2"}></i>
            </div>
          </div>
          {feature && (
            <div className=" p-3 me-2 w-100 theme ">
              {extraFeaturesList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input className="ms-1 " type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item ,'carExtraFeaturesFilters')} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
              </div>}
          {state ==='maintenance' &&  <div>
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, service: !togel.service })}>
            <i  className={`fa-solid fa-car-burst  icon ${togel.service ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.service ? "active" : ""}>
                <div className="me-2 ms-2">{strings.service}</div>
                
              </div>
              <i className={togel.service ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.service && (
            <div className=" p-3 me-2 w-100 theme ">
              {serviceList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input  type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item , 'serviceFilters')} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
            </div>}

            {state ==='spare' &&  <div>
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, productType: !togel.productType })}>
            <i className={`fa-solid fa-car-burst  icon ${togel.productType ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.productType ? "active" : ""}>
                <div className="me-2 ms-2">{strings.productType}</div>
                
              </div>
              <i className={togel.productType ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.productType && (
            <div className=" p-3 me-2 w-100 theme ">
              {productTypeList.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input  type="checkbox" name="transmission[]" value="" onClick={() => handleCarFiltration(item ,"productTypeFilters")} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
            </div>}  
            {state ==='spare' &&  <div>
          <div className="w-100 mt-3 d-flex me-2   rounded theme" onClick={() => setTogel({ ...togel, productState: !togel.productState })}>
            <i style={{ fontSize: "19px" }} className={`fa-solid fa-car-battery  icon ${togel.productState ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={togel.productState ? "active" : ""}>
                <div className="me-2 ms-2">{strings.productStatus}</div>
                
              </div>
              <i className={togel.productState ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {togel.productState && (
            <div className=" p-3 me-2 w-100 theme ">
              {productStatuslist.map((item) => (
                <label className="d-inline-block checkbox-container  me-2 mt-1" id={item.name_en}>
                  <input  type="checkbox" name="transmission[]"  onClick={() => handleCarFiltration(item,'productStatusFilters')} />
                  <span className="p-1">{localLang === "ar" ? item.name_ar : item.name_en}</span>
                </label>
              ))}
            </div>
          )}
            </div>} 
          {(state === 'buy' ||state === 'rent'||state ==='spare') && <div>
          <div className="w-100 mt-3 d-flex me-2 theme rounded" onClick={() => setPrice(price ? false : true)}>
            <i className={`fa-solid fa-hand-holding-dollar icon ${price ? "active" : ""}`}></i>

            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className={`me-2 ms-2 ${price ? "active" : ""} `}>{strings.price} </div>

              <i className={price ? "fa-solid fa-minus m-2 ps-2 pe-2 text-primary" : "fa-regular fa-plus m-2 ps-2 pe-2"}></i>
            </div>
          </div>
          {price && (
            <div className="p-3 me-2 w-100 theme">
              <div className="ps-4 pe-4">
                <label className="mb-3 f-seminormal">{strings.from} </label>
                <div className="input-group ">
                  <input className="form-control grey only-numbers" type="text" pattern="[0-9]*" inputmode="numeric" name="" placeholder="0" onChange={(el) => setCarFilters({...carFilters ,carLowPriceFilters:el.target.value!==''?el.target.value:'0'})}/>
                  <span className="input-group-text">{strings.EGP} </span>
                </div>

                <label className="mb-3 mt-3 f-seminormal">{strings.to}</label>
                <div className="input-group ">
                  <input className=" form-control input" type="text" pattern="[0-9]*" inputmode="numeric" name="" placeholder="0"  onChange={(el) => setCarFilters({...carFilters ,carHeighPriceFilters:el.target.value!==''?el.target.value:'10000000000000'})}/>
                  <span className="input-group-text">{strings.EGP}</span>
                </div>
              </div>
            </div>
          )}
            </div>}
          <div className="card text-bg-primary p-2 mt-3 pointer" style={{ textAlign: "center" }} onClick={()=>{cancelFilter()}}>
            {strings.search}
          </div>
         
        </div>
      </aside>
    </>
  );
}
export default Filter;