import React, { Fragment } from "react";
import Product from "./product";
import jobArray from "./productArray";

function ScrolllBar() {
  return (
    <Fragment>
      <div className="scroll-bar">
        <div className="product-body">
          {jobArray.map((job) => {
            return (
              <Product
                id={job.id}
                key={job.id}
                img={job.img}
                post={job.post}
                company={job.company}
                location={job.location}
                type={job.type}
                pay={job.pay}
                time={job.time}
                link={job.link}
                timePosted={job.timePosted}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default ScrolllBar;
