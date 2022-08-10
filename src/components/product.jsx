import React from "react";
import { Fragment } from "react";

function Product(props) {
  const map = require("./Assets/icons/map-pin.png");
  const dollar = require("./Assets/icons/dollar-sign.png");
  const briefcase = require("./Assets/icons/briefcase.png");

  return (
    <Fragment>
    <a href={props.link}>
    <div className="product-card">
      <div className="product-tag">
        <div className="product-logo">
          <img src={props.img} alt="" />
        </div>
        <div className="product-details">
          <div className="product-head">{props.post}</div>
          <div className="product-company">{props.company}</div>
          <div className="product-tag-detail">
            <div className="product-tag-details">
              <div>
                <img src={map} alt="" />
              </div>
              <div>
                <p>{props.location} </p>
              </div>
            </div>
            <div className="product-tag-details">
              <div>
                <img src={briefcase} alt="" />
              </div>
              <div>
                <p>{props.type}</p>
              </div>
            </div>
            <div className="product-tag-details">
              <div>
                <img src={dollar} alt="" />
              </div>
              <div>
                <p> {props.pay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-time">
        <p>{props.timePosted}</p>
      </div>
    </div>

    </a>
    </Fragment>
    
  );
}

export default Product;
