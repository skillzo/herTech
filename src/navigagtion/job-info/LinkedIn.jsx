import React, { Fragment } from "react";
import JobTemplate from "./JobTemplate";

function Linkedin() {
  return (
    <Fragment>
      <JobTemplate
        img="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png"
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
