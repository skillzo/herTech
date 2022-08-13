import React, { Fragment } from "react";
import JobTemplate from "./JobTemplate";

function Facebook() {
  return (
    <Fragment>
      <JobTemplate
        img="https://cdn-icons-png.flaticon.com/512/174/174848.png"
        company="Facebook Inc"
        post="Backend Engineer"
        location="USA"
        jobType="Part-Time"
        pay="120k-130k"
        companyLink="https://www.facebook.com/"
      />
    </Fragment>
  );
}

export default Facebook;
