import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, toys_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Produsul</p>
          <p>Titlul</p>
          <p>Prețul</p>
          <p>Cantitatea</p>
          <p>Totalul</p>
          <p>Șterge</p>
        </div>
        <br />
        <hr />
        {toys_list &&
          toys_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div
                    className="cart-items-title cart-items-item"
                    key={item._id}
                  >
                    <img src={url+"/images/"+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p className="cross" onClick={() => removeFromCart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Prețul Total</h2>
          <div>
            <div className="cart-toatal-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-toatal-details">
              <p>Livrare </p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-toatal-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>FINALIZEAZĂ COMANDA</button>
        </div>
        <div className="cart-promocode">
          <div><p>Dacă ai un promo code, lipeștel aici</p>
          <div className="cart-promocode-imput">
            <input type="text" placeholder="promo code"/>
            <button>Confirmă</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
