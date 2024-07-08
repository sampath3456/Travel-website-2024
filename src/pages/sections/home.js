import React from "react";
import Navbar from "../../components/navbar";
import Hero from "./hero";
import Offers from "./offers";
import Destinations from "./destinations";
import Reviews from "./reviews";
import Nexttrip from "./nexttrip";

import "./main.css";
import Footer from "../../components/footer";

const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Destinations />
      <Reviews />
      <Nexttrip />
      <Footer />
    </>
  );
};

export default home;
