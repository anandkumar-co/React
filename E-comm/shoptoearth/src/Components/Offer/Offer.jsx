import React from "react";
import "./offer.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="Offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only on Best Seller Product</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offer;
