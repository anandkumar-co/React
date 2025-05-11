import React from "react";

import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import latest from "../Assets/arrow.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero flex">
      <div className="Hero-left">
        <div>
          <h2>NEW ARRIVAL ONLY</h2>
          <div className="Hero-text">
            <p className="flex">
              New
              <img src={hand_icon} alt="" className="hand-icon" />
            </p>
            <p>Collection</p>
            <p>For EveryOne</p>
          </div>
          <div className="latest-button">
            <button className="bg-blue-200 rounded-xl gap-3 px-2 py-2 flex">
              Latest
              <img src={latest} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="Hero-Right">
        <img src={hero_image} className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
