import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

function Card({ cardRefs, cardData }) {
  const navigate = useNavigate();

  const navigateToProjectDetail = (name) => {
    const projectNameUrl = encodeURIComponent(
      name.toLowerCase().replace(/ /g, "-")
    );
    navigate(`/project/${projectNameUrl}`);
  };

  return (
    <>
      {cardData.map(({ id, name, imgUrl, summary, tools, techStack, tag }) => (
        <div
          key={id}
          ref={(el) => (cardRefs.current[id] = el)}
          className="project-section"
        >
          {/* <h1 className="project-title">{name}</h1> */}
          <div className="project-container">
            <div className="project-card">
              <div className="project-card-content expanded">
                <div className="project-card-image-holder expanded">
                  <img
                    className="project-image"
                    src={
                      imgUrl ||
                      "../../public/assests/projects/incluvie/banner-incluvie.png"
                    }
                    alt="shopping-cart-project"
                  />
                  <span className="overlay-effect expanded"></span>
                  <div className="card-overlay-btn expanded">
                    <button
                      className="project-visit-btn"
                      onClick={() => navigateToProjectDetail(name)}
                      data-cursor="block"
                    >
                      <svg
                        width="27"
                        height="16"
                        viewBox="0 0 27 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM1 9L26 9V7L1 7L1 9Z"
                          fill="#2C2C2C"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="project-detail-content">
                  <div className="project-button-container">
                    <button
                      className="project-go-btn"
                      data-cursor="block"
                      onClick={() => navigateToProjectDetail(name)}
                    >
                      <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 242.133 242.133" xml:space="preserve">
                      <path id="XMLID_13_" d="M227.133,83.033c8.284,0,15-6.716,15-15V15c0-8.284-6.716-15-15-15H174.1c-8.284,0-15,6.716-15,15
                        s6.716,15,15,15h16.821l-59.246,59.247c-5.858,5.857-5.858,15.355,0,21.213c2.929,2.929,6.768,4.394,10.606,4.394
                        c3.839,0,7.678-1.465,10.606-4.394l59.245-59.245v16.818C212.133,76.317,218.849,83.033,227.133,83.033z"/>
                      <path id="XMLID_14_" d="M110.46,131.673c-5.857-5.858-15.354-5.858-21.213,0L30,190.92V174.1c0-8.284-6.716-15-15-15
                        s-15,6.716-15,15v53.032c0,8.284,6.715,15,15,15l53.033,0.001l0,0c8.283,0,15-6.716,15-15c0-8.284-6.715-15-15-15h-16.82
                        l59.247-59.247C116.318,147.028,116.318,137.53,110.46,131.673z"/>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <h2 className="project-card-title">{name}</h2>
                    <div className="tag">{tag}</div>
                    <p className="project-card-description">{summary}</p>
                  </div>
                  {tools?.length && (
                    <div className="project-card-tags">
                      {tools.map((tool, idx) => (
                        <span className="tags" key={idx}>{tool}</span>
                      ))}
                    </div>
                  )}
                  {techStack?.length && (
                    <div className="project-card-tags">
                      {techStack.map((tool, idx) => (
                        <span className="tags" key={idx}>{tool}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
