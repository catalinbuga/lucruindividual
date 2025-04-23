import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => { 

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Informații despre livrare</p>
        <div className="multi-fields">
          <input type="text" placeholder='Prenume'/>
          <input type="text" placeholder='Nume'/>
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Strada'/>
      <div className="multi-fields">
          <input type="text" placeholder='Oraș'/>
          <input type="text" placeholder='Stat'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip cod'/>
          <input type="text" placeholder='Țară'/>
        </div>
        <input type="text" placeholder='Telefon' />
        </div>
      <div className="place-order-right">
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
          <button>PROCEDEAZĂ LA PLATĂ</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
