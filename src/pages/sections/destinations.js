import React from "react";
import destfile from "../../shared/destfile";

const Destinations = () => {
  return (
    <>
      <div className="destinations">
        <div className="dest-heading">
          <h2>Explore Stays in Trending Destinations</h2>
          <h4>Find Hot Stays</h4>
        </div>
        <div className="destfile">
          {destfile &&
            destfile.map((dest) => (
              <div className="box" key={dest.headings[0]}>
                <img src={dest.imgSrc} alt="destination" />
                {dest.headings.map((heading, index) => (
                  <h5 key={index}>{heading}</h5>
                ))}
                {dest.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
