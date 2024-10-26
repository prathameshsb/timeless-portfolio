import React from "react";
import Nav from "../Nav/Nav.jsx";
import ParallaxGallery from "../../components/Gallery/ParallaxGallery.jsx";
import AboutSVG from "../Next/aboutSVG.jsx";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import HorizontalScroll from "../../components/HorizontalScroll/HorizontalScroll.jsx";
// import { cardData } from "../../cardData.js";

function UXCaseStudyPage({ projectData, projectName }) {
  console.log(projectData);
  return (
    <div className="ux-case-study-container">
      <Nav />
      <div className="ux-header-container">
        <h1 className="ux-heading">{projectName}</h1>
        <div className="hr" />
        <p>
          A re-design & research case study for a startup that deals with movie
          reviews and ratings based on diversity.
        </p>
      </div>
      <div className="ux-banner-container">
        <div className="ux-banner-image-holder">
          <img src="" alt="" className="ux-banner-image" />
        </div>
        <h1>Some emotional text</h1>
      </div>
      <div className="ux-problem-statement">
        <h1>Problem Statement</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="ux-role-team-timeline-tool">
        <div className="ux-rttt">
          <h2>Role</h2>
          <ul>
            {projectData[0]?.role.map((eachRole, idx) => (
              <li key={idx}>{eachRole}</li>
            ))}
          </ul>
        </div>
        <div className="ux-rttt">
          <h2>Team</h2>
          <ul>
            {projectData[0]?.team.map((eachRole, idx) => (
              <li key={idx}>{eachRole}</li>
            ))}
          </ul>
        </div>
        <div className="ux-rttt">
          <h2>Timeline</h2>
          <ul>{projectData[0]?.timeline}</ul>
        </div>
        <div className="ux-rttt">
          <h2>Tools</h2>
          <ul>
            {projectData[0]?.tools.map((eachRole, idx) => (
              <li key={idx}>{eachRole}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="ux-image-filler">
        <img src="" alt="" className="ux-image" />
      </div>
      <div className="ux-deliverables">
        <h1>
          Deliverables{" "}
          <span className="slideline-text">
            realistic goals we could achieve?
          </span>
        </h1>
        <p className="ux-deliverables-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <p className="ux-deliverables-faded-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
      </div>
      <div className="ux-design-process">
        <h1>Design Process</h1>
        <div className="ux-image-filler">
          <img src="" alt="" className="ux-image" />
        </div>
      </div>
      <div className="ux-user-research">
        <h1>User Research </h1>
        <p className="ux-user-research-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequatUt enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
        </p>
      </div>
      <div className="ux-design-process">
        <h1>Market Analysis</h1>
        <div className="ux-image-filler">
          <img src="" alt="" className="ux-image" />
        </div>
      </div>
      <div className="ux-image-filler">
        <img src="" alt="sketches, wireframes, sitemaps" className="ux-image" />
      </div>
      <div className="ux-visual-style-guide">
        <h1>Visual Style Guide</h1>
        <div className="ux-visual-style-content">
          <div className="ux-font-styles">
            <div className="primary-font">
              <div className="primary-font-name">
                Primary Font Name:{" "}
                {projectData[0].visualStyleGuide.fonts.primary.name}
              </div>
              <div
                className="primary-font-text"
                style={{
                  fontFamily:
                    projectData[0].visualStyleGuide.fonts.primary.name,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div className="secondary-font">
              <div className="secondary-font-name">
                Secondary Font Name:{" "}
                {projectData[0].visualStyleGuide.fonts.secondary.name}
              </div>
              <div
                className="secondary-font-text"
                style={{
                  fontFamily:
                    projectData[0].visualStyleGuide.fonts.secondary.name,
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
          </div>
          <div className="ux-color-guide">
            {projectData[0].visualStyleGuide?.colorPalette.map((color) => (
              <div className="ux-color-guide-content" key={color.name}>
                <div
                  className="ux-color-palette"
                  style={{ backgroundColor: color.value }}
                ></div>
                <div className="ux-color-info">
                  <p className="ux-color-hex">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ux-deliverables">
        <h1>How did we do this?</h1>
        <p className="ux-deliverables-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="ux-horizontal-scroll-container">
        <HorizontalScroll />
      </div>
      <ParallaxGallery />
      <div className="ux-deliverables">
        <h1>Project Learnings</h1>
        <p className="ux-deliverables-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequatUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="ux-next-project">
        <p className="next-text">next?</p>
        <Link to="/project/{}" className="next-btn">
          <div className="next-btn-text">
            <AboutSVG text={"Airbnb Clone"} />
            <div className="project-tags">{"UX CASE STUDY"}</div>
          </div>
          <svg
            width="64"
            height="30"
            viewBox="0 0 64 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-left-right"
          >
            <path
              d="M2 13C0.89543 13 2.41411e-08 13.8954 0 15C-2.41411e-08 16.1046 0.89543 17 2 17L2 13ZM63.4142 16.4142C64.1953 15.6332 64.1953 14.3668 63.4142 13.5858L50.6863 0.857874C49.9052 0.076825 48.6389 0.0768248 47.8579 0.857873C47.0768 1.63892 47.0768 2.90525 47.8579 3.6863L59.1716 15L47.8579 26.3137C47.0768 27.0948 47.0768 28.3611 47.8579 29.1421C48.6389 29.9232 49.9052 29.9232 50.6863 29.1421L63.4142 16.4142ZM2 17L62 17L62 13L2 13L2 17Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="next-container">
          <div className="link-holder">
            <Link to="/about" className="next-btn">
              <AboutSVG text={"ABOUT"} />
            </Link>
            <Link to="/allprojects" className="next-btn">
              <AboutSVG text={"ALL PROJECTS"} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UXCaseStudyPage;
