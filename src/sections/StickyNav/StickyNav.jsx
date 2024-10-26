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
        <Link data-cursor="block" className="stickyNav-link-text resume" to="/">
          resume
        </Link>
      </div>
    // </IPadCursorProvider>
  );
}

export default StickyNav;
