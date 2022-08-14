import React, { Fragment } from "react";
import Group from "./Group";
import GroupArray from "./groupsArray";
import "./community.css"

function JoinGroup() {
  return (
    <Fragment>
    <div className="section1-body community">
    <div className="group-community">
        <h1>HerTech Community for Women </h1>
        {GroupArray.map((group) => {
          return (
            <Group
              id={group.id}
              key={group.id}
              post={group.post}
              numbers={group.numbers}
              logo={group.logo}
            />
          );
        })}
      </div>
    </div>
     
    </Fragment>
  );
}

export default JoinGroup;
