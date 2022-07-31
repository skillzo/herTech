import React from "react";
import "./carousel.css";

function Carousel() {
  const audi = require("./Assets/brand-icons/audi.png");
  const netflix = require("./Assets/brand-icons/netflix.png");
  const maxar = require("./Assets/brand-icons/maxar.png");
  const spaceX =  require("./Assets/brand-icons/space.png")

  return (
    <div className="carousel-section">
    <h4> COMPANIES HIRING ON HERTECH</h4> 
    <div className="logo-carousel">
      <img src={audi} alt="" />
      <img src={netflix} alt="" />
      <img src={maxar} alt="" />
      <img src={spaceX} alt="" />
      <img src={audi} alt="" />
      <img src={spaceX} alt="" />
      <img src={netflix} alt="" />
      <img src={maxar} alt="" />
      <img src={audi} alt="" />
      <img src={spaceX} alt="" />
      <img src={netflix} alt="" />
      <img src={maxar} alt="" />
      <img src={audi} alt="" />
      <img src={spaceX} alt="" />
      <img src={netflix} alt="" />
      <img src={maxar} alt="" />
      <img src={audi} alt="" />
      <img src={spaceX} alt="" />
      <img src={netflix} alt="" />
      <img src={maxar} alt="" />
    </div>
    </div>
  );
}

export default Carousel;
