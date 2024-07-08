import React from "react";
import Img1 from "../../Assets/Photo 1.png";
import Img2 from "../../Assets/Photo 2.png";
import Img3 from "../../Assets/Photo 3.png";
import Img4 from "../../Assets/Photo 4.png";
import Img5 from "../../Assets/Photo 5.png";
import Img6 from "../../Assets/Photo 6.png";
import "../sections/main.css";
import { Option } from "../../shared/constant";
const offers = () => {
  return (
    <>
      <div className="Offers">
        <h2>Special Offers</h2>

        <div className="radio-group">
          {Option.map((item) => (
            <>
              <input type="radio" id={item} name="option" value={item} />
              {item}
            </>
          ))}
          {/* <label for="all">All</label> */}
        </div>

        <div className="grid-images">
          <div className="images-part">
            <img src={Img1} alt="Beach-image" className="box1" />
            <img src={Img2} alt="Rome-image" className="box2" />
            <img src={Img3} alt="Italy-image" className="box3" />
          </div>
          <div className="images-part">
            <img src={Img4} alt="Indies-image" className="box4" />
            <img src={Img5} alt="Paris-image" className="box5" />
            <img src={Img6} alt="Arab-image" className="box6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default offers;
