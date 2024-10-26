import React from "react";
import AboutSVG from "./aboutSVG.jsx";
import { Link } from "react-router-dom";
import "./Next.css";

function Next() {
  return (
    <div className="next-container">
      <p className="next-text">next?</p>
      <div className="link-holder">
        <Link to="/about" className="next-btn">
          <AboutSVG text={"ABOUT"} />
        </Link>
        <Link to="/allprojects" className="next-btn">
          <AboutSVG text={"ALL PROJECTS"} />
        </Link>
        {/* <Link to="/" className="next-btn">
          <AboutSVG text={"CONNECT"} />
        </Link> */}
      </div>
    </div>
  );
}

export default Next;
