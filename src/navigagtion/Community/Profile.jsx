import React, { Fragment } from "react";

function Profile(props) {
  return (
    <Fragment>
      <div className="profile-card">
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="profile-details">
          <h2>{props.name}</h2>
          <p> {props.position}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
