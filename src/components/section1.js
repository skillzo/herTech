import React from "react";
import "./section1.css";
import Product from "./product";
import jobArray from "./productArray";

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
      <div className="section1-search">
        <form>
          <input
            type="search"
            placeholder="Search.."
            name="Search"
            id="search"
          />
        </form>

        <div className="location-jobs">
          <form action="/">
            <input
              type="location"
              name="location"
              placeholder="Location"
              id="country"
            />
          </form>
          <form action="/">
            <label name="job-type" placeholder="Job Type"></label>
            <select name="job-type" placeholder="Job Type" id="jobs">
              <option value="Frontend dev">Job Type</option>
              <option value="Frontend dev">Backend Dev</option>
              <option value="Frontend dev">Dev OPS</option>
              <option value="Frontend dev">Data Science</option>
              <option value="Frontend dev">Machine Learning</option>
            
            </select>
          </form>
        </div>
      </div>


      <div className="product-body">
      {jobArray.map((job) => {
          return(
            <Product 
              img={job.img}
              post= {job.post}
              company= {job.company}
              location= {job.location}
              type={job.type}
              pay= {job.pay}
              time={job.time}
              link={job.link}
              timePosted={job.timePosted}
            />
          )
      })}

        <button className="button1 view-jobs">view all jobs</button>
      </div>
    </div>
  );
}

export default Section1;
