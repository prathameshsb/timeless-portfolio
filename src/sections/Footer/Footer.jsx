import React from "react";
import "./Footer.css";

function Footer({ displayExtraConnect = true }) {
  return (
    <div className="footer">
      { displayExtraConnect &&
        <div className="footer-extra-connect-text-holder">
          <h2 className="footer-text">
            "Connect, share reels, or let's play fifa?"
          </h2>
          <div className="footer-connect-cta connect-cta">
            <a
              className="connect-btn extra"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>@</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://www.linkedin.com/in/bprathamesh"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>in</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://www.instagram.com/prathameshsb"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>ig</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://www.facebook.com/prathamesh.borgharkar"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>fb</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://dribbble.com/prathameshsb"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>dr</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://www.behance.net/prathamborghar"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>be</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://github.com/prathameshsb"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>git</b>
            </a>
            <a
              className="connect-btn extra"
              href="https://github.com/prathameshsb"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="block"
            >
              <b>psn</b>
            </a>
          </div>
        </div>
      }
      <div className={`sendoff-line ${!displayExtraConnect ? "addMargin" : ""}`} data-cursor="text">
        <h3>
          made with love, 2 scoops of pre-workout, 1 cup of coffee, 2 redbulls
          !!!
        </h3>
        <span>
          Copyright © {new Date().getFullYear()} Prathamesh Sunil Borgharkar
        </span>
      </div>
    </div>
  );
}

export default Footer;
