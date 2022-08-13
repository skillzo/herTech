import React from "react";
import { Fragment } from "react";
import "./community.css";
import Profile from "./Profile";
import CommunityArray from "./CommunityArray";
import Group from "./Group";
import GroupArray from "./groupsArray";

function Community(props) {
  return (
    <Fragment>
      <div className="body-container">
        <div className="section1-body community">
          <div className="section1-heading">
            <h1>There's a community for you</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptate.
            </p>
          </div>
          <div className="mentors">
          {CommunityArray.map((profile) => {
            return (
              <Profile
                id={profile.id}
                key={profile.id}
                name={profile.name}
                position={profile.position}
                img={profile.img}
              />
            );
          })}
          </div>

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
      </div>
    </Fragment>
  );
}

export default Community;
