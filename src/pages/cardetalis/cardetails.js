import React from "react";
import "./cardetails.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";
import { saveAddContext } from "../../Contexts/saveAdd";
import strings from "../../localization/localization";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function Cardetails({ props }) {
  const [index, setIndex] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const { saveAdd, setSaveAdd } = useContext(saveAddContext);
  const [addId, setaddId] = useState([]);

  const location = useLocation();
 
  const item = location.state
  console.log(item);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    saveAdd&&setaddId(saveAdd.map((f)=>f.id))

    localStorage.setItem("saveAdd", JSON.stringify(saveAdd));
  }, [saveAdd]);

  function addAdd(obj) {
    setSaveAdd([...saveAdd, obj]);
  }

  const deleteAdd = (id) => {
    const list = saveAdd.filter((f) => f.id !== id);
    setSaveAdd(list);
  };

  function hanedlAddDelete(item) {
    var x = addId.includes(item.id);
    if (x) {
      deleteAdd(item.id);
    } else {
      addAdd(item);
    }
  }
  return (
    <>
      <div className="theme1 p-4">
        <div style={{ display: "flex" }}>
          <div className="col-lg-7 col-12 rounded-4 ">
            <img
              style={{ height: "650px" }}
              className="d-block w-100 rounded-4 img-fluid "
              src={item.imgUrl}
              alt="Third slide"
            />
          </div>

          <div>
            <Card className="col-3 mx-2  w-100  d-lg-block d-none" id="theme2">
              <Card.Body>
                <Card.Title>
                  <h4 className="fw-bolder mt-4">معلومات صاحب الإعلان</h4>
                </Card.Title>
                <br />
                <Card.Text className="d-flex">
                  <div>
                    <i
                      class="fa-solid fa-user-large mt-3 me-3"
                      style={{ fontSize: "80px" }}
                    ></i>
                  </div>
                  <div>
                    <Card.Link className="me-3  text-decoration-none fs-4 fw-bolder">
                      Adam Ahmad
                    </Card.Link>
                    <p className="mt-2 me-3">21 إعلان | عرض جميع الإعلانات</p>
                    <span className="px-3">
                      13 <i class="fa-solid fa-eye px-1 fs-4"></i>
                      <span className="px-2">|</span>2{" "}
                      <i class="fa-solid fa-phone px-1 fs-4"></i>
                    </span>
                  </div>
                </Card.Text>

                <Card.Link className="text-decoration-none pointer" onClick={()=>(setShowPhone(true))}>
                
                <i
                  class="fa-solid fa-phone mt-4 px-1 fs-4 fw-bolder"
                  style={{ color: "blue" }}
                ></i>{" "}
                <span
                  id="linkcolor"
                  className="fs-6 fw-bolder  "
                  
                >
                  {showPhone?"01225602142":"إظهار الرقم الهاتف"}
                </span>
              </Card.Link>
                <br />
                <br />

                <Card.Link
                  className="text-decoration-none theme"
                  onClick={() => {
                    hanedlAddDelete(item);
                  }}
                >
                  <i
                    class={`fa-regular fa-heart mt-4 px-1 fs-4" ${
                      addId.includes(item.id) ? "text-danger" : ""
                    }`}
                  ></i>{" "}
                  <span id="linkcolor" className=" fw-bolder  ">
                    {" "}
                    {addId.includes(item.id)
                      ? strings.removeAd
                      : strings.saveAd}
                  </span>
                </Card.Link>
              </Card.Body>
            </Card>

            <Card
              className="col-3 mx-2 mt-3 w-100 shadow theme d-lg-block d-none"
              id="theme2"
            >
              <Card.Body>
                <Card.Title className="fw-bolder fs-3">
                  <i class="fa-solid fa-triangle-exclamation ms-1"></i> إرشادات{" "}
                </Card.Title>

                <Card.Text>
                  <ul className="mt-5 fs-5  ">
                    <li>
                      قابل البائع في مكان عام مثل المترو أو المولات أو محطات
                      البنزين
                    </li>
                    <li>
                      
                        خذ أحد معك عند الذهاب لمقابلة اي احد
                      
                    </li>

                    <li>
                      لا تدفع او تقوم بتحويل الفلوس الا بعد ان تقوم بمعاينة
                      المنتج جيداً
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <h3>{item.name}</h3>
        </div>
        <div className="d-flex justify-content-between flex-wrap ">
          <div>
            <h5>
              <i class="fa-solid fa-clock"></i> قبل 7 ساعات | رقم الإعلان :
              2306001960
            </h5>
          </div>
          {item.price && (
          <div
 
          style={{
            marginRight:"auto",
            marginLeft:"auto",

          }}>
          
      
   
              <div
                style={{
                  width: "40%",
                  height: "50px",
                  backgroundColor: "orange",
                  textAlign: "center",
                  paddingTop: "5px",
                  borderRadius: "5px 5px 0px 0px",
                  color: "white",
                  fontWeight: "800",
                  fontSize: "25px",
                }}
              >
                السعر
              </div>
              <div
            
                style={{
                  width: "325px",
                  height: "62px",
                  backgroundColor: "rgb(185, 220, 255)",
                  textAlign: "center",
                  color: "blue",
                  fontSize: "35px",
                  fontWeight: "600",
                  borderRadius:"0 0 7px 7px"
               
                }}
              >
              {item.price} <span style={{ fontSize: "20px" }}>ج.م</span>
              </div>
     </div>
     
          
       
          )}
        </div>
       
        {!item.service && (
          <div>
            <Card
              body
              className="d-block col-lg-8 col-m-12 col-sm-12 rounded-4 my-5 shadow"
              id="theme2"
            >
              <div className="d-flex " style={{ flexWrap: "wrap" }}>
                <div
                  className="col-lg-4 col-sm-6 col-12"
                  style={{ listStyleType: "none" }}
                >
                  {item.productStatus && (
                    <div>
                      <br />
                      <li>
                        <i
                          className="fa-solid fa-car"
                          style={{ color: " blue", fontSize: "25px" }}
                        ></i>
                        <span className="mx-2 fs-5">حالة المنتج </span>
                      </li>
                      <h5>{item.productStatus}</h5>

                      <br />
                    </div>
                  )}

                  {item.carMaker && (
                    <div>
                      <br />
                      <li>
                        <i
                          className="fa-solid fa-car"
                          style={{ color: " blue", fontSize: "25px" }}
                        ></i>
                        <span className="mx-2 fs-5">مصنع السيارة </span>
                      </li>
                      <h5>{item.carMaker}</h5>
                    </div>
                  )}

                  <br />
                  {item.manufactureDate && (
                    <div>
                      <li>
                        <i
                          class="fa-solid fa-calendar-days"
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">سنة التصنيع </span>
                      </li>{" "}
                      <h5> {item.manufactureDate}</h5> <br />
                    </div>
                  )}

                  {item.driverStatus && (
                    <div>
                      <li>
                        <i
                          class="fa-solid fa-user"
                          style={{ color: " #005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">السائق</span>
                        <h5>{item.driverStatus}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}

                  {item.engine && (
                    <div>
                      <li>
                        <i
                          class="fa-solid fa-gears  ms-0 "
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">سعة المحرك</span>
                      </li>
                      <h5>{item.engine}</h5> <br />
                    </div>
                  )}
                </div>
                <div
                  className=" col-lg-4 col-sm-6 col-12"
                  style={{ listStyleType: "none" }}
                >
                  {" "}
                  <br />
                  {item.productType && (
                    <div>
                      <li>
                        {" "}
                        <i
                          class="fa-solid fa-car-burst  "
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">نوع المنتج</span>
                        <h5>{item.productType}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                  {item.condition && (
                    <div>
                      <li>
                        {" "}
                        <i
                          class="fa-solid fa-car-burst  "
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">حالة السيارة</span>
                        <h5>{item.condition}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                  {item.color && (
                    <div>
                      <li>
                        <i
                          class="fa-sharp fa-solid fa-droplet "
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">{item.color}</span>
                        <h5>اسود</h5>
                      </li>
                    </div>
                  )}
                  <br />
                  {item.transmission && (
                    <div>
                      <li>
                        <i
                          class="fa-solid fa-map-pin "
                          style={{ fontSize: " 25px", color: "#005eff" }}
                        ></i>
                        <span className="mx-2 fs-5">{item.transmission}</span>
                        <h5>{item.transmission}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                </div>
                <div
                  className="col-lg-4 col-sm-6 col-12 "
                  style={{ listStyleType: "none" }}
                >
                  {" "}
                  <br />
                  {item.kilometersDone && (
                    <div>
                      <li>
                        <i
                          class="fa-solid fa-gauge-high iconfont  "
                          style={{ color: " #005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">المسافة بالكيلو متر</span>
                        <h5>{item.kilometersDone}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                  {item.fuel && (
                    <div>
                      <li>
                        <i
                          class="fa-sharp fa-solid fa-gas-pump"
                          style={{ color: " #005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">نوع الوقود</span>
                        <h5>{item.fuel}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                  {item.carBody && (
                    <div>
                      <li>
                        <i
                          class="fa-sharp fa-solid fa-car-side"
                          style={{ color: "#005eff", fontSize: " 25px" }}
                        ></i>
                        <span className="mx-2 fs-5">هيكل السيارة</span>
                        <h5>{item.carBody}</h5>
                      </li>{" "}
                      <br />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
        {item.description && (
         
             <Card className="col-lg-8 col-m-12 mt-3 px-3 shadow" id="theme2" >
      <Card.Body>      <h3 style={{ fontWeight: "900" }}>{item.description}</h3></Card.Body>
    </Card>
      
        
        )}
        <br></br>
        <PayPalScriptProvider
          options={{
            clientId:
              "Abjwqsxdf5tDr-m72m6qs8d233Rx1ZP9YbULfBA56S62UItYWG_GACqgVBJzBsHyTymeqzMueBK_7wP8",
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal"}}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: item.price?item.price:"1000",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
}