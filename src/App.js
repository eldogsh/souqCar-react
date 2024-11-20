import "./App.css";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import BuyCarsPage from "./pages/buy-cars/buy-cars";
import MainPage from "./pages/main-page";
import NavigationBar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";

import Authentication from "./pages/authentication/authentication";
import { LanguageProvider } from "./Contexts/language";
import strings from "./localization/localization";
import CarRental from './pages/rental-page/car-rental';
import MaintenanceCenters from './pages/maintenance-centers';
import SpareParts from './pages/spare-parts';
import RescueWinch from './pages/rescue-winch';
import SaveAddContextProvider from './Contexts/saveAdd'
import SaveAddPage from './pages/saveAdd/saveAdd-page'
import Cardetails from './pages/cardetalis/cardetails'
import Navandfoot from './navandfoot';
import News from './Components/news/news';
import NewsDetails from './Components/newsDetails/newsDetails';
function App() {
  var localLang = localStorage.getItem("lang");
  var [language, setLanguage] = useState(localLang ? localLang : "ar");
  strings.setLanguage(language);
  localStorage.setItem("lang", language);

  return (
    <>
     <LanguageProvider value={{ language, setLanguage }}>
   <div dir={language === "en" ? "ltr" : "rtl"}>
     <NavigationBar />
     <SaveAddContextProvider>
       <Routes>
         <Route path="*" element={"NOT FOUND"} />
         <Route path="/" element={<MainPage />} />
         <Route path="/MainPage" element={<MainPage />} />
         <Route path="/SalePage" element={<BuyCarsPage />} />
         <Route path="/CarRental" element={<CarRental />} />
         <Route path="/MaintenanceCenters" element={<MaintenanceCenters />} />
         <Route path='/SpareParts' element={<SpareParts/>} />
         <Route path='/RescueWinch' element={<RescueWinch/>} />
         <Route path="/login" element={<Authentication />} />
         <Route path="/SaveAddPage" element={<SaveAddPage />} />
         <Route path="/details" element={<Cardetails />} />
         <Route path="/news" element={<News />} />
         <Route path="/news/:id" element={<NewsDetails />} />
       </Routes>
     </SaveAddContextProvider>
     <Footer />
   </div>
</LanguageProvider>

    </>
  );
}

export default App;
