import React from "react";
import { Link } from "react-router-dom";
import "./section1.css";
import SearchSession from "./searchSession";
import ScrolllBar from "./scrolllBar";
function Section1() {
  return (
    <div className="section1-body">
      <div className="section1-heading">
        <h3>1,000,000 + jobs available for you</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          voluptate enim dignissimos deleniti numquam? Aliquid minus culpa omnis
          officiis quam!
        </p>
      </div>
      {/* /////////////////////////L. */}
      <SearchSession />
      <ScrolllBar />

      <Link to="/JobBoard">
        <button className="button1 view-jobs">view all jobs</button>
      </Link>
    </div>
  );
}

export default Section1;
