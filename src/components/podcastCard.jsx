import React from "react";

function PodcastCard(props) {
    const podcast = require("./Assets/podcast.png");
  return (
    <div className="podcast-details">
      <div>
        <img className="podcast-details-image" src={podcast} alt="logo" />
      </div>
      <div className="podcast-details-topic">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div>
          <p> {props.note}</p>
        </div>

        <div>
          <button className="button4 time-stamp">
            <span></span> {props.timeStamp}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PodcastCard;
