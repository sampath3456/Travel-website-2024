import React from "react";
import { footerData } from "../shared/footer_content";
import Playstore from "../../src/Assets/Google Play.png";
import Appstore from "../../src/Assets/App Store.png";
import Visacard from "../../src/Assets/Visa Card.png";
import Mastercard from "../../src/Assets/Master Card.png";
import American from "../../src/Assets/Amex.png";
import Paypal from "../../src/Assets/Paypal.png";
import Social from "../../src/Assets/social.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="right">
            <h2>Go Further With The EasySet24 App</h2>
            <p>
              Enjoy Savings On Chosen Hotels And Flights When You Book Through
              The EasySet24 Website. Additionally, Earn One Key Cash For Every
              Booking Made Through The App.
            </p>
          </div>
          <div className="left">
            <img src={Playstore} alt="playstore" />
            <img src={Appstore} alt="playstore" />
          </div>
        </div>
        <hr />
        <div className="footer-center">
          {footerData.map((footer) => (
            <>
              <div className="box">
                <h3> {footer.title.toUpperCase()} </h3>
                <ul>
                  {footer.links.map((link) => (
                    <li> {link} </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="box">
            <img src={Visacard} alt="Visacard" />
            <img src={Mastercard} alt="Matercard" />
            <img src={Paypal} alt="Paypal" />
            <img src={American} alt="American" />
          </div>
          <div className="box">
            <img src={Social} alt="social" />
          </div>

          <div className="footer-email">
            <p>Email</p>
            <div className="input-button">
              <input type="email" placeholder="Enter Your Email" />
              <button className="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p> &reg; Copyright EasySet24</p>
          <p> "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</p>

          <p>
            <i class="bi bi-envelope"></i> easyset24@gmail.com
          </p>
          <p>
            <i class="bi bi-geo-alt"></i> 123 Oxford Street,London
          </p>
          <p>
            <i class="bi bi-telephone"></i> +44 20 7123 4567
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
