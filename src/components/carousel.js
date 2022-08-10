import React from "react";
import "./carousel.css";

function Carousel() {
  const audi = require("./Assets/brand-icons/audi.png");
  const netflix = require("./Assets/brand-icons/netflix.png");
  const maxar = require("./Assets/brand-icons/maxar.png");
  const spaceX = require("./Assets/brand-icons/space.png");

  return (
    <div className="carousel-section">
      <h4> COMPANIES HIRING ON HERTECH</h4>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={audi} alt="" />
          </div>
          <div className="slide">
            <img src={netflix} alt="" />
          </div>
          <div className="slide">
            <img src={maxar} alt="" />
          </div>
          <div className="slide">
            <img src={spaceX} alt="" />
          </div>
          <div className="slide">
            <img src={audi} alt="" />
          </div>
          <div className="slide">
            <img src={netflix} alt="" />
          </div>
          <div className="slide">
            <img src={maxar} alt="" />
          </div>
          <div className="slide">
            <img src={spaceX} alt="" />
          </div>
          <div className="slide">
            <img src={audi} alt="" />
          </div>
          <div className="slide">
            <img src={netflix} alt="" />
          </div>
          <div className="slide">
            <img src={maxar} alt="" />
          </div>
          <div className="slide">
            <img src={spaceX} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
