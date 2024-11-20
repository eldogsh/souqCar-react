import { useEffect, useState } from "react";
import "./drop-down.css";

const Icon = () => {
  return <i class="fa-solid fa-chevron-down"></i>;
};

const Dropdown = ({ options, placeHolder = "" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setselectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handelInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.value;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    return setselectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <>
      <div className="dropdown-container">
        <div onClick={handelInputClick} className="dropdown-input" name="name">
          {
            <div className="dropdown-car-menu">
              {showMenu &&
                options.map((option) => {
                  return (
                    <div
                      onClick={() => {
                        onItemClick(option);
                      }}
                      key={option.key}
                      className={`dropdown-item ${isSelected(option) && "selected"} `}
                    >
                      {option.value}
                    </div>
                  );
                })}
            </div>
          }
          <div className="dropdown-selected-value">{getDisplay()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dropdown;