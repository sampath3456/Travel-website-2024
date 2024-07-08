import React from "react";
import HeroImg from "../../Assets/img2.png";
import BoxImg1 from "../../Assets/calendar.png";
import BoxImg2 from "../../Assets/hotel.png";
import BoxImg3 from "../../Assets/people-plus-one.png";
const Hero = () => {
  return (
    <>
      <div className="hero-image">
        <img src={HeroImg} alt="hero-image" />
      </div>
      <div className="search-filter">
        <div className="box">
          <img src={BoxImg2} alt="hotel-Img" />
          <li>Where are you going to?</li>
        </div>
        <div className="box">
          <img src={BoxImg1} alt="calender-image" />
          <li>CheckIn</li>
          <li>CheckOut</li>
        </div>
        <div className="box">
          <img src={BoxImg3} alt="people-image" />
          <li>Children1</li>
          <li>Adults2</li>
          <li>Room</li>
        </div>
        <button className="filter-button">Search</button>
      </div>
    </>
  );
};

export default Hero;
