import React from "react";
import image from "../../Assets/Vector.png";

const nexttrip = () => {
  return (
    <>
      <div className="nexttrip">
        <div className="trip-left">
          <h2 className="up-title">Get Inspirations For Your Next Trip</h2>
          <p className="up-title">
            Read About Wonderful Adventure We Love Most
          </p>
        </div>
        <div className="trip-right">
          <h2 className="down-title">
            Difficult Roads Lead To Beautiful Destination.
          </h2>
          <p>
            Read More <img src={image} alt="play" className="readmore" />
          </p>
        </div>
      </div>
    </>
  );
};

export default nexttrip;
