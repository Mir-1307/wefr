import React from "react";
import style from "./Home.module.css";
import About from "./About/About";
import Composition from "./Composition/Composition";
import Slide from "./Slide/Slide";
import StatiSlide from "./statiSlide/StatiSlide";
import EventSlide from "./eventSlide/eventSlide";
import FaqActive from "./faqActive/faqActive";


function Home() {
  return <div>
    <Slide/>
    <About />
    <Composition />
    <StatiSlide />
    <EventSlide />
    <FaqActive/>
  </div>;
}

export default Home;
