import { response } from "express";
import userModel from "../models/userModel.js"

// adaugam itemuri la user carduri 

const addToCart = async (req, res) => {
    try {
      const userData = await userModel.findById(req.userId);
      if (!userData) {
        return res.json({ success: false, message: "Utilizatorul nu a fost găsit" });
      }
  
      const cartData = userData.cartData || {};
      const itemId = req.body.itemId;
  
      if (!cartData[itemId]) {
        cartData[itemId] = 1;
      } else {
        cartData[itemId] += 1;
      }
  
      await userModel.findByIdAndUpdate(req.userId, { cartData });
      res.json({ success: true, message: "Adăugat în coș" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Eroare la adăugare în coș" });
    }
  };
  

// stergem jucariile din euse card 
const removeFromCart = async (req, res) => {
    try {
      const userData = await userModel.findById(req.userId);
      const cartData = userData.cartData || {};
      const itemId = req.body.itemId;
  
      if (cartData[itemId] && cartData[itemId] > 0) {
        cartData[itemId] -= 1;
  
        // Dacă cantitatea devine 0, poți șterge complet itemul
        if (cartData[itemId] === 0) {
          delete cartData[itemId];
        }
  
        await userModel.findByIdAndUpdate(req.userId, { cartData });
        res.json({ success: true, message: "Scos din coș" });
      } else {
        res.json({ success: false, message: "Produsul nu există în coș" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Eroare la eliminare din coș" });
    }
  };
  

//fecth user card data
const getCart = async (req, res) => {
    try {
      const userData = await userModel.findById(req.userId);
      const cartData = userData.cartData || {};
      res.json({ success: true, cartData });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };
  

export {addToCart,removeFromCart,getCart}