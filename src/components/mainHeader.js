import React from "react";
import "./mainHeader.css";

function MainHeader() {
  const hero = require("./Assets/hero.png");
  return (
    <div className="mainbody-container">
      {/* ////////////////////////IMAGE//////////////////////// */}
      <div className="heading-image-mobile">
        <img src={hero} alt="LOGO" />
      </div>
      
      <div className="main-article">
        <h1>
          Hire <span>female</span>
          <br /> tech-talent on <br /> demand
        </h1>

        <p className="article-p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          totam suscipit architecto inventore sequi quod reiciendis corrupti at
          sit.
        </p>

        <a href="https://hertech.no/apply/">
        <button className="button1 get-started">Get started</button>
        </a>
        <a href="https://ng.indeed.com/jobs?q=developer%20&l&vjk=e3cd5e85b381718b">
        <button className="button2 see-listing">See Job Listing</button>
        </a>
       

        <div className="display-numbers">
          <div className="numbers">
            <h3>100k +</h3>
            <p>Jobs Listed</p>
          </div>
          <div className="numbers">
            <h3>262 +</h3>
            <p>Members</p>
          </div>
          <div className="numbers">
            <h3>5 +</h3>
            <p> countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainHeader;
