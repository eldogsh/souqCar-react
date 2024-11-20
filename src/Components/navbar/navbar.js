import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { signOutUser } from "../../firebase/firebase";
import { UserContext } from "../../Contexts/users";
import { languageContext } from "../../Contexts/language";
import "./navbar.css";
import strings from "../../localization/localization";
import Container from "react-bootstrap/Container";

import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar(props) {
  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid blue" : "none",
      color: isActive ? "rgb(255, 119, 0)" : "black",
      textDecoration: isActive ? "none" : "none",
    };
  };
  const cas = "linkk";
  const los = "";
  const { currentUser } = useContext(UserContext);

  var { language, setLanguage } = useContext(languageContext);

  var localTheme = localStorage.getItem("theme");
  console.log(localTheme);
  var [theme, setTheme] = useState(localTheme ? localTheme : "light");
  console.log(theme);
  document.querySelector("body").setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const toggelLang = () => {
    language === "ar" ? setLanguage("en") : setLanguage("ar");
  };

  const toggelTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    document.querySelector("body").setAttribute("data-theme", theme);

    console.log(theme);
  };

  return (
    <>
      <Navbar expand="lg" className=" navbarStyle px-2">
        <Navbar.Brand>
          {" "}
          <NavLink
            className="logo d-sm-block d-none "
            to="/MainPage"
          >
            <img
              className=" w-100 animate_animated animate_fadeInDown duration_2s p-1 "
              src={
                theme === "light"
                  ? "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694468780/Untitled_Project_kxiqpk.jpg"
                  : "https://res.cloudinary.com/dh0kvk4g5/image/upload/v1694468780/Untitled_Project_kxiqpk.jpg"
              }
              style={{ height: "35px" }}
              alt="سوق كار"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbarStyle" />
        <Navbar.Collapse id="basic-navbar-nav navbarStyle">
          <Nav className="navbar navbar-expand-lg  w-100% m-auto   rounded flex-fill justify-content-end ">
            <NavLink
              href="#home"
              as={Link}
              to="/MainPage"
              id="link"
              className={({ isActive }) => (isActive ? cas : los)}
              aria-current="page"
            >
              <div className="text-decoration-none fw-bolder mx-2 ">
                {" "}
                {strings.home}
              </div>
            </NavLink>
            <NavLink
              href="#link"
              as={Link}
              to="/SalePage"
              id="link"
              aria-current="page"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              <div className="text-decoration-none fw-bolder mx-2">
                {strings.buyCarsPage}
              </div>


            </NavLink>
            <NavLink
              href="#link"
              as={Link}
              to="/CarRental"
              id="link"
              aria-current="page"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              {" "}
              <div className="text-decoration-none fw-bolder  mx-2 ">
                {" "}
                {strings.carRentalPage}
              </div>
            </NavLink>
            <NavLink
              href="#link"
              as={Link}
              to="/MaintenanceCenters"
              id="link"
              aria-current="page"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              {" "}
              <div className="text-decoration-none fw-bolder  mx-2 ">
                {" "}
                {strings.maintenanceCentersPage}{" "}
              </div>
            </NavLink>
            <NavLink
              href="#link"
              as={Link}
              to="/SpareParts"
              id="link"
              aria-current="page"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              {" "}
              <div className="text-decoration-none fw-bolder  mx-2 ">
                {strings.spareParts}
              </div>
            </NavLink>
            <NavLink
              href="#link"
              as={Link}
              to="/news"
              id="link"
              aria-current="page"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              {" "}
              <div className="text-decoration-none fw-bolder  mx-2 ">
                {strings.news}
              </div>
            </NavLink>
            <NavLink href="#link" style={{ textDecoration: "none" }}>
              <div>
                <Link style={{ textDecoration: "none" }}>
                  {/* If there is a signed in user then render "SignOut", if not then render "SignIn". */}
                  {currentUser ? (
                    <Link
                      id="link"
                      className="text-decoration-none fw-bolder mx-2"
                      onClick={signOutUser}
                    >
                      {strings.signout}
                    </Link>
                  ) : (
                    <Link
                      id="link"
                      className="text-decoration-none fw-bolder mx-2"
                      to="/login"
                    >
                      {strings.signin}
                    </Link>
                  )}
                </Link>
              </div>
            </NavLink>
            <NavLink
              href="#link"
              id="link"
              to="/SaveAddPage"
              className={({ isActive }) => (isActive ? cas : los)}
            >
              <div className="text-decoration-none fw-bolder  mx-2">
                <i class="fa-regular fa-heart"></i>
              </div>
            </NavLink>
            <NavLink href="#link">
              <div>
                <Link
                  id="link"
                  className="text-decoration-none fw-bolder  mx-2"
                  onClick={() => {
                    toggelTheme();
                  }}
                >
                  <i
                    class={
                      theme === "light"
                        ? "fa-regular fa-moon"
                        : "fa-regular fa-sun"
                    }
                  ></i>
                </Link>
              </div>
            </NavLink>
            <NavLink href="#link">
              <div>
                <Link
                  id="link"
                  className="text-decoration-none fw-bolder  mx-2"
                  onClick={() => {
                    toggelLang();
                  }}
                >
                  <i className="fa-solid fa-globe"></i>
                </Link>
              </div>
            </NavLink>



            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}