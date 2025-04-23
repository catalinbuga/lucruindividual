import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Descoperă cele mai îndrăgite jucării pentru copii fericiți. Livrare rapidă, calitate garantată și bucurie la fiecare comandă!</p>
            <div className="footer-socila-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANIA</h2>
            <ul>
                <li>Acasa</li>
                <li>Despre Noi</li>
                <li>Livrare</li>
                <li>Politica</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>IA LEGATURA CU NOI</h2>
            <ul>
                <li>+373 (60) 244 758</li>
                <li>proaba@yahoo.ru</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 PRO.TOYS.md | Toate drepturile rezervate.</p>
    </div>
  );
};

export default Footer;
