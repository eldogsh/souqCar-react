import Card from "react-bootstrap/Card";
import "./slider_card.css";
import { useEffect, useState, useContext } from "react";
import { saveAddContext } from "../../Contexts/saveAdd";
import strings from "../../localization/localization";
import { useNavigate } from "react-router-dom";

const SliderCard = (props) => {
  const { car } = props;
  const { saveAdd, setSaveAdd } = useContext(saveAddContext);
  const [addId, setAddId] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (saveAdd) {
      setAddId(saveAdd.map((f) => f.id));
    }
    localStorage.setItem("saveAdd", JSON.stringify(saveAdd));
  }, [saveAdd]);

  function addAdd(obj) {
    setSaveAdd(([...saveAdd, obj]));
  }

  const deleteAdd = (id) => {
    const list = saveAdd.filter((f) => f.id !== id);
    setSaveAdd(list);
  };

  function handleAddDelete(item) {
    var x = addId.includes(item.id);
    if (x) {
      deleteAdd(item.id);
    } else {
      addAdd(item);
    }
  }

  const goToDetails = (item) => {
    navigate("/details", { state: item });
  };

  return (
    <>
      <Card id="theme">
        <Card.Img
          className="pointer"
          variant="top"
          id="imagee"
          style={{ objectFit: "cover" }}
          src={car.imgUrl}
          onClick={() => {
            goToDetails(car);
          }}
        />
        <Card.Body>
          <Card.Title className="textCardOverFlow">{car.name}</Card.Title>
          <Card.Text>
            <span>
              <i className="fa-solid fa-eye"></i> 233
            </span>
            <span style={{ marginInline: "10px" }}>
              <i className="fa-solid fa-phone"></i> 3{" "}
            </span>
            <span style={{ fontSize: "15px" }}>
              <i className="fa-solid fa-clock" style={{ marginLeft: "5px" }}></i> قبل 3 أشهر
            </span>

            <div className="d-flex justify-content-between mt-2">
              <span className="pointer" onClick={() => { handleAddDelete(car) }}>
                <i
                  className={`fa-regular fa-heart p-1 ${addId.includes(car.id) ? "text-danger" : ""}`}
                ></i>
                {addId.includes(car.id) ? strings.removeAd : strings.saveAd}
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default SliderCard;
