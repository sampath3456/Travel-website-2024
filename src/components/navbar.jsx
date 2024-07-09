import React from "react";
import "./navbar.css";
import Logo from "../Assets/Logo.png";
import lanImg from "../Assets/lanImg.webp";
import questionBtn from "../Assets/Button.png";
import Search from "../Assets/search.png";
import { topBtn } from "../shared/constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          <img src={Logo} alt="logo" />
        </div>
        <div className="global-search center">
          <img src={questionBtn} alt="question-btn" width={34} height={34} />

          <img
            src={lanImg}
            alt="lan-img"
            width={24}
            height={24}
            className="language-img"
          />

          <div className="search-bar">
            <input type="text" name="search" id="search" placeholder="Search" />
            <img
              src={Search}
              alt="search-img"
              width={24}
              height={24}
              className="search-btn"
            />
          </div>
        </div>
        <div className="buttons">
          <Link to="/login" className="btn">
            Sign In
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
      </div>
      <div className="buttons-group">
        {topBtn.map((btn) => (
          <button className={`btn`} key={btn}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
