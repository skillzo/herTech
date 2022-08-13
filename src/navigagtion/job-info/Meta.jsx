import React, { Fragment } from "react";
import JobTemplate from "./JobTemplate";

function Meta(props) {
  return (
    <Fragment>
        <JobTemplate 
            img="https://cdn-icons-png.flaticon.com/512/6033/6033716.png"
            company="Meta Technologies Inc"
            post="Senior Product Designer"
            location="USA, Remote"
            jobType="Full-Time"
            pay="120k-130k"
            companyLink="https://www.metacareers.com/"
        />
    </Fragment>
  )
}

export default Meta;