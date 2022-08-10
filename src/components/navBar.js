import React, { useState } from "react";
import "./navBar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function NavBar() {
  const [isClicked, setIsClicked] = useState(true);

  function clickHandler() {
    if (isClicked === false) {
      setIsClicked(true);
    } else if (isClicked === true) {
      setIsClicked(false);
    }
  }

  return (
    <div className="heading-container">
      <div className="logo-header">
        <h1>
          Her<span>Tech</span>
        </h1>
      </div>
      <div style={{ display: isClicked ? "none" : "block" }} className="navbar">
        <nav>
          <a href="/"> Job Listing</a>
          <a href="/"> Find a Mentor</a>
          <a href="/"> Find a Community</a>
          <a href="https://github.com/skillzo">
            <GitHubIcon />
            My Github
          </a>
          <a href="/"> more</a>
        </nav>
        <button className="button1 post-a-job">Post a Job </button>
      </div>
      <div onClick={clickHandler} className="menu-btn">
        <div className="menu-btn-burger">
          {" "}
          {isClicked ? <MenuIcon /> : <CloseIcon />}{" "}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
