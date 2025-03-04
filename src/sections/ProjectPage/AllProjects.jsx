import React from "react";
import Projects from "../Projects/Projects";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import StickyNav from "../StickyNav/StickyNav";

function AllProjects() {
  return (
    <>
      <StickyNav />
      <Nav />
      <Projects header={false} />
      <Footer />
    </>
  );
}

export default AllProjects;
