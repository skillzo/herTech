import React from "react";
import "./newsletter.css"


function Newsletter () {
    return (
        <div className="newsletter-section">
          <div className="newsletter">
            <h2>Newsletter</h2>
            <p>Be the first to know about discounts, offers and events</p>
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
            />
            <button className="button1  subscribe">Subscribe</button>
          </div>
        </div>
    );
}

export default Newsletter;