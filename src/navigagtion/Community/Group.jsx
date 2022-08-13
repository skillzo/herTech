import React, { Fragment } from 'react'

function Group(props) {
    const avatar = require("../../components/Assets/icons/avatar.png");
  return (
    <Fragment>
        <div className="product-management community-wrapper">
              <div className="community-card">
                <div className="community-logo">{props.logo}</div>
                <div>
                  <h3>{props.post}</h3>
                  <p>Group description goes here</p>
                  <div className="product-management-details">
                    <div>
                      <img
                        className="product-management-details-image"
                        src={avatar}
                        alt=""
                      />
                    </div>
                    <div className="product-management-details-number">
                      {" "}
                      <h3>{props.numbers }</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="button4 see-all2">
                  Join <span></span>
                </button>
              </div>
            </div>
    </Fragment>
  )
}

export default Group;