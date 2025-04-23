import React, { useContext } from "react";
import "./ToysItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ToysItem = ({ id, name, price, description, image }) => {

  
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className="toys-item">
      <div className="toys-item-image-container">
        <img className="toys-item-image" src={url+"/images/"+image} alt="" />
        {!cartItems[id]
          ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
          :<div className="toys-item-counter"> 
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className="toys-item-info">
        <div className="toys-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="toys-item-description">{description}</p>
        <p className="toys-item-price">${price}</p>
      </div>
    </div>
  );
};

export default ToysItem;
