import React, { Fragment } from "react";
import MainHeader from "../../components/mainHeader";
import Carousel from "../../components/carousel";
import Section1 from "../../components/section1";
import Section2 from "../../components/section2";


function Home() {
  return (
    <Fragment>
        <MainHeader />
        <Carousel />

        <div className="body-container">
          <Section1 />
          <Section2 />
        </div>

    </Fragment>
  );
}

export default Home;
