import React from "react";
import "./CSS/loginsignup.css";
const LoginSignup = () => {
  return <div className="loginSignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-field">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Your Email"/>
        <input type="password" placeholder="Your Password"/>
      </div>
      <button>Continue</button>
      <p className="loginsignup-login">Already Have An Account ? <span>Login Here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By Continuing, I have agreed to Privacy & Policy</p>
      </div>
    </div>
  </div>;
};

export default LoginSignup;
