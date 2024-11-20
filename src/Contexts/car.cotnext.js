import strings from "../localization/localization";


import React, { createContext, useState, useEffect } from "react";
import { getCars } from "../firebase/firebase";

// Create the CarContext
export const CarContext = createContext();

// Create the CarProvider component
export const CarProvider = ({ children }) => {
  const cars = [ 
    {
      id: 1,
      name: "نيسان صني 2019 للبيع",
      carMaker:"نيسان",
      manufactureDate: 2019,
      kilometersDone: 75000 ,
      price: 500000,
      saleLocation: "الجيزه",
      imgUrl:
        "https://souq.car/storage/posts/def273addb364992bca5ac83abd22508_20230706020437_main_image.jpg",
      logoUrl: "	https://souq.car/storage/car_makers/33.jpg",
      carBody:"سيدان",
      color:"اسود",
    transmission:"يدوى",
    condition:"مستعمل",
   engine:"cc 1600",
   fuel:'بنزين',
   extraFeatures:["نطام فرامل ABS","مثبت سرعه","شاشه تعمل باللمس","مقاعد جلد"],
    },

    {
      id: 2,
      name: "كيا سبورتاج 2021 للبيع",
      manufactureDate: 2021,
      kilometersDone: 68000 ,
      price: 1475000,
      saleLocation: "الاسكنداريه",
      imgUrl:
        "https://souq.car/storage/posts/a5d6363bdd7a402983bff698ef9a166e_20230706020214_main_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/23.jpg",
      carMaker:"كيا",

      carBody:"هاتشباك",
      color:"اسود",
    transmission:"أوتوماتيك",
   
    condition:"كسر زيرو",
    engine:"cc 2001-2800",
    fuel:'بنزين',
    extraFeatures:["نطام فرامل ABS","مثبت سرعه","شاشه تعمل باللمس","مقاعد جلد"],
    },
    {
      id: 3,
      name: "سياره BYDموديل 2017 رخصه سنتين L3",
      manufactureDate: 2015,
      kilometersDone: 5000 ,
      price: 230000,
      saleLocation: "الجيزه",
      imgUrl:
        "https://souq.car/storage/posts/e88af06a779f46e98cba099e7eb4cd0e/ca384f6388ba454b820b30046de5e882_20230706115130_0_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/66.jpg",
      carMaker:"بي واي دي",

      carBody:"سيدان",
      color:"رمادى",
      transmission:"يدوى",
      
    condition:"مستعمل",
    engine:"cc 1600",
    fuel:"الغاز الطبيعى",
    extraFeatures:["نطام فرامل ABS","مثبت سرعه","شاشه تعمل باللمس","مقاعد جلد"],
    },
    {
      id: 4,
      name: "هيونداي ix35 للبيع",
      manufactureDate: 2013,
      kilometersDone: 141000 ,
      price: 600000,
      saleLocation: "القاهرة",
      imgUrl:
        "https://souq.car/storage/posts/3492223dfb4c4260a3362cb4d905d4ca_20230706121435_main_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/29.jpg",

      carMaker:"هونداى",

      carBody:"هاتشباك",

      color:"رمادى",
    transmission:"أوتوماتيك",
    
    condition:"كسر زيرو",
    engine:"cc 3000",
    fuel:'بنزين',
    extraFeatures:["نطام فرامل ABS","مثبت سرعه","شاشه تعمل باللمس","مقاعد جلد"],
    },
  
    {
      id: 5,
      name: "اوبل ميريفا 2016 للبيع",
      manufactureDate: 2016,
      kilometersDone: 140000 ,
      price: 450000,
      saleLocation: "القاهرة",
      imgUrl:
        "https://souq.car/storage/posts/4b3c3e732d724c399be89af8f5b5419b_20230705054440_main_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/6.jpg",
      carMaker:'اوبل',
      carBody:"سيدان",
     
      color:"كحلى",
    transmission:"CVT",
   
    condition:"مستعمل",
   engine:"cc 1601-2000",
   fuel:'بنزين',
   extraFeatures:["شاشه تعمل باللمس","مقاعد جلد","مصابيح ضبابيه","اطارات خاصه"],
    },
    {
      id: 6,
      name: "جيلي باندينو 2010 للبيع",
      manufactureDate: 2010,
      kilometersDone: 100000 ,
      price: 115000,
      saleLocation: "الاسكنداريه",
      imgUrl:
        "https://souq.car/storage/posts/12aab58ad39f4a8ea9db2c9239d48309_20230705053450_main_image.jpg",
      logoUrl: "	https://souq.car/storage/car_makers/47.jpg",
      carMaker:'جيلى',
      carBody:"هاتشباك",
     
      color:"رمادى",
    transmission:"يدوى",
    
    condition:"مستعمل",
   engine:"cc 1400-1599",
    fuel:'الغاز الطبيعى',
    extraFeatures:["شاحن يو اس بس","مدخل aux","راديو اف ام"],
    },
    {
      id: 7,
      name: "شيفروليه افيو 2015 للبيع",
      manufactureDate: 2015,
      kilometersDone: 120000 ,
      price: 340000,
      saleLocation: "المنيا",
      imgUrl:
        "https://souq.car/storage/posts/75784654680f45698fd9088ed08d30a1_20230705053009_main_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/9.jpg",
      carMaker:'شيفروليه',

      carBody:"سيدان",

      color:"رمادى",
      transmission:"يدوى",
     
    condition:"مستعمل",
    engine:"cc 1600",
    fuel:'بنزين',
    extraFeatures:["قفل مركزى","تكييف","مدخل aux","بلوتوث"],
    },
    {
      id: 8,
      name: "Grand Cherokee Limited 2020 جيب جراند شيروكي",
      manufactureDate: 2020,
      kilometersDone: 41000 ,
      price: 3150000,
      saleLocation: "القاهرة",
      imgUrl:
        "https://souq.car/storage/posts/3cad27f5932245deb7217c20c1ba4c21_20230705052101_main_image.jpg",
      logoUrl: "https://souq.car/storage/car_makers/32.jpg",
      carMaker:'جيب',

      carBody:"هاتشباك",

      color:"ابيض",
      transmission:"أوتوماتيك",
      
    condition:"جديد",
    engine:"cc 4000",
    fuel:'بنزين',
    extraFeatures:["مثبت سرعه","شاشه تعمل باللمس","كاميرا خلفية","نطام فرامل ABS","باور ستيرينج","مرايا كهربائيه","وسائد هوائيه","حساس ركن" ],
    },
  ];
  const rentalcars = [
    {
      id: 1,
      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/b264285733c54df8ab781e0ae565cc9c_20230703021736_0_image.jpg",
      name: "ايجار رنج روفر بالسائق..Rent Range Rover",
      manufactureDate: 2022,
      price: 2700,
      saleLocation:
        "القاهرة أول عباس، طريق النصر، المنطقة السادسة، مدينة نصر، مصر",
        logoUrl:"	https://souq.car/storage/car_makers/24.jpg",
        carBody:"سيدان",
        color:"ابيض",
        transmission:"أوتوماتيك",
        fuel:'بنزين',


      extraFeatures:[],
      rentalTerm:"يومى",
      driverStatus:'مع سائق',
      carMaker:"رنج روفر"
    },
    {
      id: 2,
      name: "ايجار تويوتا كوستر..عروض نقل سياحي",
      manufactureDate: 2021,
      price: 1500,
      saleLocation:
        "    القاهرة أول عباس، طريق النصر، المنطقة السادسة، مدينة نصر، مصر",
      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/09dce344e8fc4778a5f42283aaa848b8_20230703020756_0_image.jpg",
        logoUrl:"https://souq.car/storage/car_makers/9.jpg",
        carBody:"",
        color:"",
      transmission:"",
      extraFeatures:[],
      rentalTerm:"أسبوعى",
      driverStatus:'مع سائق',
      fuel:'',


      },
    {
      id: 3,
      name: "كم ايجار المرسيدس في مصر؟",
      manufactureDate: 2024,
      price: 7000,
      saleLocation:
        "القاهرة أول عباس، El-Nasr Road, Al Manteqah as Sadesah, Nasr City, Egypt",
      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/5b08481e13094b8e826eda20fd0412c2_20230702010558_0_image.jpg",
        logoUrl:"https://souq.car/storage/car_makers/20.jpg",
        carBody:"سيدان",
        color:"اسود",
        transmission:"أوتوماتيك",

      extraFeatures:[],
      rentalTerm:"يومى",
      driverStatus:'بدون سائق',
      fuel:'بنزين',
      

      },
    {
      id: 4,
      name: "خدمات النقل السياحي|ايجار نقل سياحي",
      manufactureDate: 2021,
      price: 1500,
      saleLocation:
        "القاهرة أول عباس، El-Nasr Road, Al Manteqah as Sadesah, Nasr City, Egypt",

      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/d580651da93c4c8699e38a0d10195c30_20230702125151_0_image.jpg",
        logoUrl:"https://souq.car/storage/car_makers/16.jpg",
        carBody:"اتوبيس/باص",
        color:"",
        transmission:"يدوى",
        fuel:"ديزيل(سولار)",

      extraFeatures:[],
      rentalTerm:"أسبوعى",
      driverStatus:'مع سائق',
  
      },
    {
      id: 5,
      name: "تاجير رنج روفر سيارات فخمة..Rent Car",
      manufactureDate: 2021,
      price: 8500,
      saleLocation:
        " القاهرة أول عباس، El-Nasr Road, Al Manteqah as Sadesah, Nasr City, Egypt",
      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/9450d49f7d0d43a5b1a15ebb55fd14a4_20230701015905_0_image.jpg",
        logoUrl:"https://souq.car/storage/car_makers/24.jpg",
        carBody:"سيدان",
        color:"اسود",
        transmission:"أوتوماتيك",

      extraFeatures:[],
      rentalTerm:"شهرى",
      driverStatus:'مع سائق',
      fuel:'بنزين',

      },
      
    {
      id: 6,
      name: "شركة ايجار نقل سياحي,ايجار كوستر",
      manufactureDate: 2022,
      price: 1200,
      saleLocation:
        " القاهرة اول عباس مدينة نصر، Abbas El-Akkad, المنطقة الأولى،، Nasr City, Egypt",
      imgUrl:
        "https://souq.car/storage/posts/77ca535ef9bd456097cbc563ca4c9296/b80b92f200d24beaae74f87371b2491e_20230701013158_0_image.jpg",
        logoUrl:"https://souq.car/storage/car_makers/16.jpg",
        carBody:"اتوبيس/باص",
        color:"",
      fuel:"ديزيل(سولار)",
      extraFeatures:[],
      rentalTerm:"يومى",
      driverStatus:'مع سائق',
      transmission:"يدوى",

      },
    {
      id: 7,
      name: "ايجار ميكروباص تويوتا هاي اس 01101727711",
      manufactureDate: 2022,
      price: 1000,
      saleLocation:
        "القاهرة 7 Mohammed Hasan El-Gamal, Al Manteqah Al Oula, Nasr City, Egypt",
      imgUrl:
        "https://souq.car/storage/posts/fc0ff84936ab435d845dd2efcb983135/2eedcda59d9841e392d6a2b60b021c67_20230625054353_0_image.jpg",
        logoUrl:"	https://souq.car/storage/car_makers/29.jpg",
        carBody:"اتوبيس/باص",
        color:"",
      fuel:"ديزيل(سولار)",
      extraFeatures:[],
      rentalTerm:"أسبوعى",
      driverStatus:'مع سائق',
      transmission:"يدوى",

    },
    {
      id: 8,
      name: "ايجار هيونداي اتش وان01101727711",
      manufactureDate: 2023,
      price: 1000,
      saleLocation:
        " القاهرة 7, Nasr Ahmed Zaki, Al Manteqah Al Oula, Nasr City, Egypt",
      imgUrl:
        "https://souq.car/storage/posts/34adb4cc1eaf4b7b9d4308222bd923e4/7d4a17548c6344e2b66318aa6b22eca4_20230625022136_0_image.jpg",
        logoUrl:"	https://souq.car/storage/car_makers/16.jpg",
        carBody:"مينى فان",
        color:"ابيض",
      fuel:"ديزيل(سولار)",
      extraFeatures:[],
      rentalTerm:"شهرى",
      driverStatus:'مع سائق',
      transmission:"يدوى",

      },
  ];
  const maintenanceCenters = [
    {
      id: 1,
      name: " مركز مصطفى عفشة لإصلاح جميع انواع السيارات 🚗 مركز كامل لخدمه السيارات",
      imgUrl:
        "https://souq.car/storage/posts/6008e6787c6246f6aa6ca151a822cc5e/88ee6c0eff154757be9928b11bfb1e4a_20230601120116_0_image.jpg",
      saleLocation:
        " القاهرة أشرفكو للاطارات والبطاريات، جسر السويس، الخصوص، قسم النزهة، مصر",
      description:
        "مركز مصطفى عفشة لإصلاح جميع انواع السيارات الكوري والياباني والصيني و الألماني يوجد جميع قطع غيار الاصليه و ضبط زوايا وترصيص وإصلاح جميع علب الدريكسيون. صيانه عربيتك تهمنا 🕵️‍♂️ وهو ده شغلنا 👏 صيانه عربيتك في مكان واحد ☝️ عفشه و",
        service:["صيانة اطارات","صيانة كهربائيه"],
        carMaker:"",
    },
    {
      id: 2,
      name: "مركز طاهر تيتو لجميع خدمات السيارات البروتون",
      imgUrl:
        "https://souq.car/storage/posts/e46a3bac8de645898b77cf6d3e710593_20230505091028_main_image.jpg",
      saleLocation: "  القاهرة جسر السويس، المنتزه، قسم مصر الجديدة، مصر",
      description:
        "مركز طاهر تيتو قطع غيار جميع السيارات البروتون بريف اكسورا جينا جين 2 عفشة كهرباء دوكو سمكرة فلاتر مواتير استيراد و جديد 01114588485 ",
        service:["ميكانيكا","حدادة و دهان سيارات","صيانة اطارات"],
        carMaker:"",
      },

  ];
  const parts = [
    {
      id: 1,
      name: "قطع غيار سيارات استيراد أمريكا",
      imgUrl:
        "https://souq.car/storage/posts/2af11f10ea1d47e5b800452fa9d6e9c0_20230522084118_main_image.jpg",
      saleLocation:
        " الشرقية العاشر من رمضان، مصر   ",
      description:
        " سيارات مقطعة استيراد أمريكا"  ,
        productStatus:"مستعمل" , 
        productType:' انصاف سيارات',
    },
    {
      id: 2,
      name: " بيع جنوط   ",
      imgUrl:
        "https://souq.car/storage/posts/c511e93357ba43468fda4277248c4582_20230505104045_main_image.jpg",
      saleLocation: "لقاهرة مدينة نصر، مصر",
      description:
        " بيع عدد ٢ جنط حديد خمسة مسمار اللنترا",
        productStatus:"مستعمل" , 
        productType:'جنوط اصلية',
     
    },
    {
      id: 3,
      name: " كرسي سواق عربيه رينو لوجان الشكل القديم   ",
      imgUrl:
        "https://souq.car/storage/posts/70d22bb395884abaa34bc7c42bb1e447_20230310083751_main_image.jpg",
      saleLocation:
        "   لقاهرة وسط البلد، Bab Al Louq, Abdeen, Egypt     ",
      description:
        "كرسي سواق عربيه رينو لوجان الشكل القديم",
        productStatus:"مستعمل" , 
        productType:'صالون واجزاء داخليه',
       
    },
    {
      id: 4,
      name: "  فتيس أوتوماتيك لانسر بومة 2007",
      imgUrl:
        "https://souq.car/storage/posts/2944dd7970d54e9da11bf59896f205fe_20230307073243_main_image.jpg",
      saleLocation: " القاهرة قنا، قسم قنا، مركز قنا، مصر  ",
      description:
      "فتيس أوتوماتيك لانسر بومة ( تم تغييره من سيارتي الخاصة ....لا يعمل ولم نحاول إصلاحه)",
      productStatus:"مستعمل" , 
      productType:'مواتير وفتيس',
     
    },
    {
      id: 5,
      name: " طقم موبينة بوش   ",
      imgUrl:
        "https://souq.car/storage/posts/bf4ef5355c444df3a98a4e4393d85562_20230227044207_main_image.jpg",
      saleLocation:
        " الجيزة حدائق الأهرام، Al Haram, Egypt",
      description:
        "طقم موبينة بوش اصلي استخدام شهر لسيارة جاك s2"  ,
        productStatus:"مستعمل" , 
      productType:'حساسات و الكترونيات',
       
    },
    {
      id: 6,
      name: " جنوط اصلية للبيع بيراميدز هايتس ٦اكتوبر بجوار جامعة نيو جيزة",
      imgUrl:
        "https://souq.car/storage/posts/7720e4b2ed634d8faef7532a94383d46_20230224102042_main_image.jpg",
      saleLocation: "  الجيزة مرتفعات الأهرام، El Ahram Heights، طريق القاهرة - الإسكندرية الصحراوي، الظهير الصحراوى لمحافظة الجيزة، مصر ",
      description:
        "  خمسة جنوط جيب مقاس 17 اصلي بحالة جيدة جدا تم التغيير للتجديد فقط  ",
        productStatus:"جديد" , 
        productType:'جنوط اصلية',

    
      },
    {
      id: 7,
      name:"مساعدين غاز GTIX الكوري للعربيات الكوري ",
      imgUrl:
        "https://souq.car/storage/posts/W8k6jezAi3PQxkDPQSZdoxYQzStCX4sHtiPbqCkB.jpg",
      saleLocation:
        "القاهرة النزهة، Almazah, Heliopolis, Egypt",
      description:
        "  🚩🚩🚩#GTIX 🔥🔥🔥ومساعدين غاز #GTIX 🔥🔥🔥 الغنية عن التعريف ♦️ كورية الصناعة بتكنولوجيا المانية المصنوعة باعلي المقاييس والجودة ♦️ بمعدل سير ٤٥ الف كيلو متر وممكن  "  ,
        productStatus:"جديد" , 
      productType:'فرامل وعفشة',
       
      },
    {
      id: 8,
      name: " طنابير الرياضية GTIX الكوري للعربيات الكوري",
      imgUrl:
        "https://souq.car/storage/posts/OSE3I10g4IpZvn7e5txJlXGExbyuWDkmCThzpZRx.jpg",
      saleLocation: "القاهرة النزهة، Almazah, Heliopolis, Egypt   ",
      description:
        "◀️ تم تصميم #الطنابير_الرياضية GTIX 💯 المثقوبة والمشققة للسيارات عالية الأداء ، والمتوافقة مع أتيال فرامل #GTIX ذات التكنولوجيا الآلمانية والتي صنعت بكوريا لآداء السيارات",
        productStatus:"جديد" , 
        productType:'فرامل وعفشة',
    
      },
  ];
  const [carsMap, setCarsMap] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [page, setpage] = useState();
  

  const [carFilters, setCarFilters] = useState({
    carPlaceFilters:[],
    carNameFilters:[],
    carMakerFilters:[],
    carBodyFilters: [],
    carColorFilters: [],
    carTransmissionList: [],
    carConditionFilters:[],
    carManufactureDateFilters:[],
    carEngineFilters:[],
    carFuelFilters:[],
    carExtraFeaturesFilters:[],
    rentalTermFilters:[],
    driverStatusFilters:[],
    serviceFilters:[],
    productTypeFilters:[],
    productStatusFilters:[],
    carLowPriceFilters: "0",
    carHeighPriceFilters: '10000000000000',
    carLowDistanceFilters: "0",
    carHeighDistanceFilters: '10000000000000',
  });

  useEffect(() => {
    setFilteredCars(carsMap);
    if (carFilters.carBodyFilters.length !== 0 ||
       carFilters.carColorFilters.length !== 0 ||
       carFilters.carMakerFilters.length !== 0 ||
        carFilters.carTransmissionList.length !== 0||
        carFilters.carNameFilters.length !== 0||
          carFilters.carPlaceFilters.length !== 0||
          carFilters.carConditionFilters.length !== 0||
          carFilters.carManufactureDateFilters.length !== 0||
          carFilters.carEngineFilters.length !== 0||
          carFilters.carFuelFilters.length !== 0||
          carFilters.carExtraFeaturesFilters.length !== 0||
          carFilters.rentalTermFilters.length !== 0||
          carFilters.driverStatusFilters.length !== 0||
          carFilters.serviceFilters.length !== 0||
          carFilters.productTypeFilters.length !== 0||
          carFilters.productStatusFilters.length !== 0||
          (carFilters.carLowPriceFilters !== "0" ||carFilters.carHeighPriceFilters  !== "10000000000000")||
          (carFilters.carLowDistanceFilters !== '0' ||carFilters.carHeighDistanceFilters !== '1000000000000')
          ) {
      setFilteredCars(
        carsMap.filter((car) => {
          const meetsNameFilter = carFilters.carNameFilters.length === 0 ||car.name.toLocaleLowerCase().includes(carFilters.carNameFilters.toLocaleLowerCase()) ;
          const meetsExtraFeaturesFilter = carFilters.carExtraFeaturesFilters.length === 0 ||carFilters.carExtraFeaturesFilters.some((el)=>car.extraFeatures.includes(el.name_ar)) ;
          const meetsPlaceFilter = carFilters.carPlaceFilters.length === 0 || carFilters.carPlaceFilters[0]==='الجميع'?"true":  car.saleLocation.includes(carFilters.carPlaceFilters) ;
          const meetsCarMakerFilters = carFilters.carMakerFilters.length === 0 || carFilters.carMakerFilters[0]==='الجميع'?"true": (car.carMaker&& carFilters.carMakerFilters.some((filter) => filter === car.carMaker) ) ;
          const meetsBodyFilter = carFilters.carBodyFilters.length === 0 || carFilters.carBodyFilters.some((filter) => filter.name_ar === car.carBody );
          const meetsColorFilter = carFilters.carColorFilters.length === 0 || carFilters.carColorFilters.some((filter) => filter.name_ar === car.color);
          const meetsTransmissionFilter = carFilters.carTransmissionList.length === 0 || carFilters.carTransmissionList.some((filter) => filter.name_ar === car.transmission);
          const meetsConditionFilter = carFilters.carConditionFilters.length === 0 || carFilters.carConditionFilters.some((filter) => filter.name_ar === car.condition);
          const meetsEngineFilter = carFilters.carEngineFilters.length === 0 || carFilters.carEngineFilters.some((filter) => filter.name_en === car.engine);
          const meetsFuelFilter = carFilters.carFuelFilters.length === 0 || carFilters.carFuelFilters.some((filter) => filter.name_ar === car.fuel);
          const meetsManufactureDateFilter = carFilters.carManufactureDateFilters.length === 0 ||carFilters.carManufactureDateFilters[0]==='All'?"true": carFilters.carManufactureDateFilters.some((filter) => parseInt(filter) === car.manufactureDate);
          const meetsPriceFilter = (carFilters.carLowPriceFilters === '0' &&  carFilters.carHeighPriceFilters=== '10000000000000')||(car.price > parseInt(carFilters.carLowPriceFilters) && car.price < parseInt(carFilters.carHeighPriceFilters))
          const meetsDistanceFilter = (carFilters.carLowDistanceFilters === '0' &&  carFilters.carHeighDistanceFilters === '10000000000000')||(car.kilometersDone > parseInt(carFilters.carLowDistanceFilters) && car.kilometersDone < parseInt(carFilters.carHeighDistanceFilters))
          const meetsRentalTermFilters = carFilters.rentalTermFilters.length === 0 || carFilters.rentalTermFilters[0]==='الجميع'?"true":  carFilters.rentalTermFilters.some((filter) => filter === car.rentalTerm) ;
          const meetsDriverStatusFilters = carFilters.driverStatusFilters.length === 0 || carFilters.driverStatusFilters[0]==='الجميع'?"true":  carFilters.driverStatusFilters.some((filter) => filter === car.driverStatus) ;
          const meetsServiceFilters = carFilters.serviceFilters.length === 0 ||carFilters.serviceFilters.some((el)=>car.service.includes(el.name_ar)) ;
          const meetsproductStatusFilters = carFilters.productStatusFilters.length === 0 || carFilters.productStatusFilters.some((filter) => filter.name_ar === car.productStatus);
          const meetsProductTypeFilters = carFilters.productTypeFilters.length === 0 || carFilters.productTypeFilters.some((filter) => filter.name_ar === car.productType);

          
         
          console.log("d",meetsManufactureDateFilter);
          return meetsCarMakerFilters&&meetsColorFilter && meetsBodyFilter && meetsTransmissionFilter&&meetsNameFilter&&meetsPlaceFilter&&meetsPriceFilter&&meetsDistanceFilter&&meetsConditionFilter&&meetsManufactureDateFilter&&meetsEngineFilter&&meetsFuelFilter&&meetsExtraFeaturesFilter&&meetsRentalTermFilters&&meetsDriverStatusFilters&&meetsServiceFilters&&meetsproductStatusFilters&&meetsProductTypeFilters;
        })
      );
    }

  }, [carFilters]);
  
  
 
   const getCarsMap = async (page) => {
    const fetchedCars = await getCars();
       setCarsMap(fetchedCars[page]);
      setFilteredCars(fetchedCars[page]);
    
     
  };
  useEffect(()=>{
    getCarsMap("cars_for_sale");
  },[])
  
  
  useEffect(()=>{

  if(page === 'sale'){
    getCarsMap("cars_for_sale");
   
  } 
  else if(page === 'rent'){
    getCarsMap("cars_for_rent");
    

  } else if(page === 'maintenanceCenters'){
    getCarsMap("maintenance_centers");
    

  } else if(page === 'parts'){
    getCarsMap("spare_parts");

  }
  setCarFilters({
    carPlaceFilters:[],
    carNameFilters:[],
    carMakerFilters:[],
    carBodyFilters: [],
    carColorFilters: [],
    carTransmissionList: [],
    carConditionFilters:[],
    carManufactureDateFilters:[],
    carEngineFilters:[],
    carFuelFilters:[],
    carExtraFeaturesFilters:[],
    rentalTermFilters:[],
    driverStatusFilters:[],
    serviceFilters:[],
    productTypeFilters:[],
    productStatusFilters:[],
    carLowPriceFilters: "0",
    carHeighPriceFilters: '10000000000000',
    carLowDistanceFilters: "0",
    carHeighDistanceFilters: '10000000000000',
  })
 },[page])
  // // For Debugging
  // useEffect(() => {
  //   console.log(carsMap);
  // }, [carsMap]);

  return <CarContext.Provider value={{ filteredCars, carFilters, setCarFilters,setCarsMap, setFilteredCars ,page, setpage}}>{children}</CarContext.Provider>;
};
