import React from "react";
import image1 from "../../Assets/img1.png";
import image2 from "../../Assets/backpack.png";
import image3 from "../../Assets/hotelimg.png";
import image4 from "../../Assets/img4.png";
import image5 from "../../Assets/img5.png";
import image6 from "../../Assets/img6.png";
import image7 from "../../Assets/img7.png";
import image8 from "../../Assets/img8.png";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-headings">
        <h2>Compare The Highest Reviewed Past Offers </h2>
        <p>Browse By Type</p>
      </div>
      <div className="reviewgrid">
        <div className="review-images">
          <img src={image1} alt="image1" />
          <p>Flight</p>
        </div>
        <div className="review-images">
          <img src={image2} alt="image2" />
          <p>Backpack</p>
        </div>
        <div className="review-images">
          <img src={image3} alt="image3" />
          <p>Hotel</p>
        </div>
        <div className="review-images">
          <img src={image4} alt="image4" />
          <p>Package</p>
        </div>
        <div className="review-images">
          <img src={image5} alt="image5" />
          <p>Seasonal</p>
        </div>
        <div className="review-images">
          <img src={image6} alt="image6" />
          <p>Camps</p>
        </div>
        <div className="review-images">
          <img src={image7} alt="image7" />
          <p>Hostels</p>
        </div>
        <div className="review-images">
          <img src={image8} alt="image8" />
          <p>Location</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
