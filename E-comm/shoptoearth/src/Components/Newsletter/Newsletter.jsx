import React from "react";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="Newsletter">
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
