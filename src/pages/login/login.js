import React from "react";
import image from "./assets/travellogin.png";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="login-container">
        <h1>Log In.</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="username">User Name</label>
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

          <div className="input-group remember">
            <input type="checkbox" name="remember_me" id="remember-me" />
            <label htmlFor="remember-me"> Remember me </label>
          </div>
          <button className="btn-login">Log In</button>
          <div className="links">
            <Link to="#forget-passowrd">Foget Password </Link>
            <Link to="/register"> Sign Up </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
