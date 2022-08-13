import React, {Fragment} from 'react'
import JobTemplate from "./JobTemplate";

function Loom() {
  return (
    <Fragment>
        <JobTemplate 
            img="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/beboo1abnijl4hl41d1j"
            company="Loom Technologies Inc"
            post="Data Analytics"
            location="Australia"
            jobType="Full-Time"
            pay="120k-130k"
            companyLink="https://www.loom.com/"
        />
    </Fragment>
  )
}

export default Loom;