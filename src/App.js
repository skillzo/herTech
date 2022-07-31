import React from "react";
import "./App.css";
import MainHeader from "./components/mainHeader";
import NavBar from "./components/navBar";
import Carousel from "./components/carousel";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Newsletter from "./components/Newsletter";
import FooterNav from "./components/footerNav";

function App() {
  return (
    <div className="container">
      <NavBar />
      <MainHeader />
      <Carousel />

      <div className="body-container">
        <Section1 />
        <Section2
         />
      </div>

      <div className=" section-footer">
        <Newsletter />
        <FooterNav />
      </div>
    </div>
  );
}

export default App;
