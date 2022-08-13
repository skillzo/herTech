import React, { Fragment } from "react";

function ShareLink(props) {
  
  return (
    <Fragment>
      <div className="share-details">
        <div className="share-details-image">
          <img src={props.img} alt="" />
        </div>
        <div>
          <h4>Share on {props.social}</h4>
        </div>
      </div>
    </Fragment>
  );
}

export default ShareLink;
