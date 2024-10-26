import React from "react";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import WorkExp from "../WorkExp/WorkExp";
import Next from "../Next/Next";
import Footer from "../Footer/Footer";
import ParallaxGallery from "../../components/Gallery/ParallaxGallery";
import ControlCenter from "../../components/ControlCenter/ControlCenter";
import StickyNav from "../StickyNav/StickyNav";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      {/* <ControlCenter /> */}
      <StickyNav />
      <Banner />
      <Projects />
      <WorkExp />
      <Next />
      <Footer />
    </>
  );
}

export default Homepage;
