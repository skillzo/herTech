import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./navigagtion/Home/Home";
import JobBoard from "./navigagtion/job-boards/JobBoard";
import Meta from "./navigagtion/job-info/Meta";
import Loom from "./navigagtion/job-info/Loom";
import Facebook from "./navigagtion/job-info/Facebook";
import Linkedin from "./navigagtion/job-info/LinkedIn";
import NavBar from "./components/navBar";
import Footer from "./components/footer/Footer";
import Community from "./navigagtion/Community/Community";
import JoinGroup from "./navigagtion/Community/JoinGroup";

function App() {
  return (
    <Fragment>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobBoard" element={<JobBoard />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/loom" element={<Loom />} />
          <Route path="/linkedIn" element={<Linkedin />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/community" element={<Community />} />
          <Route path="/joingroup" element={<JoinGroup />} />
        </Routes>
        <div className=" section-footer">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
