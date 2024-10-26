import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo-name" data-cursor="block">
        <Link className="logo-name-btn" to="/">
          PRATHAMESH S B.
        </Link>
      </div>
      <div className="nav-back-button logo-name" data-cursor="block">
        <Link className="nav-home-btn" to="/">{`< HOME`}</Link>
      </div>
    </div>
  );
}

export default Nav;
