import React from "react";
import "./footerNav.css"

function FooterNav () {

    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div className="privacy-policies">
          <div className="privacy-policy">
            <div className="footer-navbar">
              <nav>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of services</a>
                <a href="/">FAQs</a>
              </nav>
            </div>
            <div className="copyright">
              <p> {year} All Rights Reserved </p>
            </div>
          </div>
        </div>
    );
}

export default FooterNav;