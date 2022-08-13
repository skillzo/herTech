import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./jobTemplates.css";
import ScrolllBar from "../../components/scrolllBar";
import ShareLink from "./ShareLink";
import ShareArray from "./shareArray";

function JobTemplate(props) {
  const map = require("../../components/Assets/icons/map-pin.png");
  const dollar = require("../../components/Assets/icons/dollar-sign.png");
  const briefcase = require("../../components/Assets/icons/briefcase.png");
  return (
    <Fragment>
      <div className="body-container">
        <div className="section1-body jobTemplate">
          {/* ////////////////////////////////////// */}
          <div className="section1-heading">
            <div className="JobTemplate-heading card">
              <div className="JobTemplate-logo">
                <div className="JobTemplate-image">
                  <img src={props.img} alt="" />
                </div>
                <p>{props.company}</p>
              </div>
              <div className="JobTemplate-headingDetails">
                <h1>{props.post}</h1>
                <div className="JobTemplate-tag-detail">
                  <div className="JobTemplate-tag-details">
                    <div>
                      <img src={map} alt="" />
                    </div>
                    <div>{props.location}</div>
                  </div>
                  <div className="JobTemplate-tag-details">
                    <div>
                      <img src={briefcase} alt="" />
                    </div>
                    <div>{props.jobType}</div>
                  </div>
                  <div className="JobTemplate-tag-details">
                    <div>
                      <img src={dollar} alt="" />
                    </div>
                    <div>{props.pay}</div>
                  </div>
                </div>

                <h3> About Company</h3>
                <p>
                  Meta has a mission: To help as many people as possible live
                  healthier lives through better nutrition. <br />
                  With millions of users in more than 150 countries, we're well
                  on our way to accomplishing this goal. As a remote-first
                  company. we promote a mordern form of employment in which our
                  team work together across several cities and countries.
                </p>

                <a href="https://www.metacareers.com/">
                  Read more about Our Company here
                </a>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////// */}
          <div className="JobTemplate-body card">
            <div className="JobTemplate-body-details">
              <h1>Product Designer at Yazio</h1>
              <div>
                <p>
                  Are you a changemaker who loves Technology and working
                  Independently towards towars ambitious goals? Do you have a
                  great passion for developing new concepts and eye-catching app
                  designs? Is it in your nature to be a good team player and to
                  collaborate with other product designers? If your answer is
                  yes, you could be our new creative head for YAZIO's app
                  design. Together with the web product designer, you will
                  enhance YAIO's corporate design to grab the attention of
                  millions of users worldwide and help skyrocket YAZIO's
                  presence within the nutrition and fitness market. <br />
                </p>
              </div>

              <div>
                <h3>Your Role</h3>
                <div>
                    <ul>
                      <li>
                        Distinct Conceptual skills and Ability to visualize
                        thoughts and ideas.
                      </li>
                      <li>
                        Experience in creating illustration and motion design is
                        a plus.
                      </li>
                      <li>
                        Create graphical assests,layout,icons amd animations.
                      </li>
                      <li>
                        Participate in building and maintaining a solid design
                        system.
                      </li>
                      <li>
                        Be Part of the conception process and support the
                        further development of our app.
                      </li>
                      <li>
                        Optimize our app to create the best possible user
                        experience and take Yazio to the next level!
                      </li>
                    </ul>
                </div>

                <div className="jobTemplate-button">
                  <button className="button1 apply-now">Apply Now</button>
                  <button className="button3 save-job-for-later">
                    Save job for later
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="Related-jobs">
            <h3> Related Jobs </h3>
            <ScrolllBar />
            <Link to="/JobBoard">
              <button className="button1 view-jobs">view all jobs</button>
            </Link>
          </div>

          <div className="share-links card">
            <h3> Share this job</h3>
            {ShareArray.map((Share) => {
              return (
                <ShareLink
                  id={Share.id}
                  key={Share.id}
                  img={Share.img}
                  social={Share.social}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default JobTemplate;
