import React from "react";
import style from "./Home.module.css";
import About from "./About/About";
import Composition from "./Composition/Composition";
import Slide from "./Slide/Slide";
import StatiSlide from "./statiSlide/StatiSlide";
import EventSlide from "./eventSlide/eventSlide";
import FaqActive from "./faqActive/FaqActive";
import Review from "./review/Review";
import WhatUn from "./whatune/WhatUn";


function Home() {
  return <div className={style.home}>
    <Slide/>
    <WhatUn />
    <About />
    <Composition />
    <StatiSlide />
    <EventSlide />
    <Review />
    <FaqActive/>
  </div>;
}

export default Home;
