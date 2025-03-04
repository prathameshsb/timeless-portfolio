import React from "react";
import { Link } from "react-router-dom";
// import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import "./StickyNav.css";

function StickyNav() {
  const config = {
    blockPadding: 5,
  };
  // useIPadCursor();
  return (
    // <IPadCursorProvider config={config}>
      <div className="stickyNav-container">
        <Link data-cursor="block" className="stickyNav-link-text" to="/">
          home
        </Link>
        <Link data-cursor="block" className="stickyNav-link-text" to="/about">
          about
        </Link>
        <Link
          data-cursor="block"
          className="stickyNav-link-text"
          to="/allprojects"
        >
          all projects
        </Link>
        <a
          data-cursor="block"
          className="stickyNav-link-text resume"
          href="https://drive.google.com/drive/folders/1EeRgNV1jI4XVsRL40VlX0K-dH2aQ-ed0?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </div>
    // </IPadCursorProvider>
  );
}

export default StickyNav;
