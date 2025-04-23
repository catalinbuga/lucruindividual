import React, { useContext } from "react";
import "./ToysDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import ToysItem from "../ToysItem/ToysItem";

const ToysDisplay = ({category}) => {
  const { toys_list } = useContext(StoreContext);
  

  return (
    <div className="toys-display" id="toys-display">
      <h2>Aici găsesti tot ce ai nevoie</h2>
      <div className="toys-display-list">
        {toys_list.map((item, index) => {
          if (category==="All" || category===item.category) {
            return (
              <ToysItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ToysDisplay;
