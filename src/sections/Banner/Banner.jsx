import { useRef } from "react";
import "./Banner.css";
import TextMorph from "../../components/TextMorph/TextMorph";
import CursorTracker from "../../components/CursorTracker/CursorTracker";

const Banner = () => {
  const bannerRef = useRef(null);

  return (
    <div className="banner-container">
      {/* <CursorTracker containerRef={bannerRef} /> */}
      <section ref={bannerRef} className="banner-section">
        <div className="content">
          <TextMorph />
          <div className="name-tag">
            <h3>
              <span className="iam-font">I'm</span>{" "}
              <span className="highlighter-name">Prathamesh</span>
            </h3>
          </div>
          <div className="tagline-container">
            <span className="hoverme">hover over both</span>
            <br />
            <span className="hoverme">&#x2198;</span>
            <div className="tagline tooltip" data-cursor="text">
              {`{ Product Designer`}
              <div className="tooltip-content prodDes">
                <img
                  src="https://media.tenor.com/DdnZxQbfO1AAAAAM/bob-ross-bob.gif"
                  alt="Product Designer Tooltip"
                />
              </div>
            </div>
            <div className="tagline-dot">|</div>
            <div className="tagline tooltip" data-cursor="text">
              {`Frontend Engineer }`}
              <div className="tooltip-content frontEng">
                <img
                  src="https://i.pinimg.com/originals/6c/90/28/6c90288d7e10d46d18895f17f420a92c.gif"
                  alt="Frontend Engineer Tooltip"
                />
              </div>
            </div>
          </div>
          <div className="workex-container">
            <p>5+ years of work experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
