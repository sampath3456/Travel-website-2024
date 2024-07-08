import React from "react";
import image from "./assets/travellogin.png";
import { Link } from "react-router-dom";
import "./register.css";
const Register = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="login-container">
        <h1>Sign Up.</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="username">First Name</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="username">Last Name</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="input-group">
            <label htmlFor="email"> E-mail </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password"> Password </label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="input-group">
            <label htmlFor="password"> Confirm Password </label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="btn-login">Log In</button>
          <div className="links">
            <p> Have Already Account ? </p>
            <Link to="/login"> Log In </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
