const CARS_DATA = [
    {
      title: "cars_for_sale",
       cars : [ 
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
      ]
    },
  ];
  
  export default CARS_DATA;
  