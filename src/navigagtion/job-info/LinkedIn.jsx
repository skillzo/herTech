import React, { Fragment } from "react";
import JobTemplate from "./JobTemplate";

function Linkedin() {
  return (
    <Fragment>
      <JobTemplate
        img="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1660352992~hmac=161f95695a6b65ddfef87789f99dcda0"
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
