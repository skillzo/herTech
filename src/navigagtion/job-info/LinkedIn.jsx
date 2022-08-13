import React, { Fragment } from "react";
import JobTemplate from "./JobTemplate";

function Linkedin() {
  const linkedIn = require("../../components/Assets/brand-icons/linkedin.png");
  return (
    <Fragment>
      <JobTemplate
        img= {linkedIn}
        company="LinkedIn Corporation"
        post="Data Analytics"
        location="Austrlia"
        jobType="Full-Time"
        pay="120k-130k"
        companyLink="https://www.linkedin.com/"
      />
    </Fragment>
  );
}

export default Linkedin;
