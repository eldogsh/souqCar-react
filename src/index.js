import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import'./Theme/Theme.css';
import { UserProvider } from "./Contexts/users";
import { CarProvider } from "./Contexts/car.cotnext";
import '@fortawesome/fontawesome-free/css/all.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <BrowserRouter>
      <UserProvider>
        <CarProvider>
          <App />
        </CarProvider>
      </UserProvider>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
