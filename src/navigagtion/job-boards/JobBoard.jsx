import React, { Fragment, useState } from "react";
import "../../components/section1.css";
import "./jobBoard.css";
import SearchSession from "../../components/searchSession";
import Product from "../../components/product";
import jobArray from "../../components/productArray";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function JobBoard() {
  const [viewMore, setViewMore] = useState(false);

  function viewMoreHandler() {
    if (viewMore === true) {
      setViewMore(false);
    } else if (viewMore === false) {
      setViewMore(true);
    }
  }

  return (
    <Fragment>
      <div className="body-container">
        <div className="section1-body jobBoard">
          <div className="section1-heading">
            <h1>Job board</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              a illo dolorum reprehenderit aliquam atque asperiores eius cumque
              corporis esse.
            </p>
          </div>
          <SearchSession />
          <h3>Over 100,000+ jobs for you</h3>

          <div className="scroll-bar jobBoard-scrollbar">
            <div className={viewMore ? "jobBoard-noScroll" : "product-body"}>
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

          <button onClick={viewMoreHandler} className="button1 view-jobs">
            View more <NavigateNextIcon />
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default JobBoard;
