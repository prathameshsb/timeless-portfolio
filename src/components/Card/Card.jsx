import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

function Card({ cardRefs, cardData }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

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
          <h1
            className="project-title"
          >
            {name}
          </h1>
          <div className="project-container">
            <div
              className="project-card"
            >
              <div
                className={`project-card-content ${expanded ? "expanded" : ""}`}
              >
                <div
                  className={`project-card-image-holder ${
                    expanded ? "expanded" : ""
                  }`}
                >
                  <img
                    className="project-image"
                    src={
                      imgUrl ||
                      "../../public/assests/projects/incluvie/banner-incluvie.png"
                    }
                    alt="shopping-cart-project"
                  />
                  <span
                    className={`overlay-effect ${expanded ? "expanded" : ""}`}
                  ></span>
                  <div
                    className={`card-overlay-btn ${expanded ? "expanded" : ""}`}
                  >
                    <button
                      className="project-expand-btn "
                      onClick={toggleExpanded}
                      data-cursor="block"
                    >
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9V7ZM8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
                          fill="black"
                        />
                        <path
                          d="M13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9V7ZM14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289L8.34315 0.928932C7.95262 0.538408 7.31946 0.538408 6.92893 0.928932C6.53841 1.31946 6.53841 1.95262 6.92893 2.34315L12.5858 8L6.92893 13.6569C6.53841 14.0474 6.53841 14.6805 6.92893 15.0711C7.31946 15.4616 7.95262 15.4616 8.34315 15.0711L14.7071 8.70711ZM13 9H14V7H13V9Z"
                          fill="black"
                        />
                      </svg>
                    </button>
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
                {expanded && (
                  <div className="project-detail-content">
                    <div className="project-button-container">
                      <button
                        className="project-close-btn"
                        onClick={toggleExpanded}
                        data-cursor="block"
                      >
                        &#215;
                      </button>
                      <button
                        className="project-go-btn"
                        data-cursor="block"
                        onClick={() => navigateToProjectDetail(name)}
                      >
                        <span className="visit-link-tag">visit link</span>
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
                    <div>
                      <span className="tag">{tag}</span>
                      <h2 className="project-card-title">{name}</h2>
                      <p className="project-card-description">{summary}</p>
                    </div>
                    {tools?.length && (
                      <div className="project-card-tags">
                        {tools.map((tool, idx) => (
                          <span className="tag" key={idx}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    {techStack?.length && (
                      <div className="project-card-tags">
                        {techStack.map((tool, idx) => (
                          <span className="tag" key={idx}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                    <div
                      className="github-button-container"
                      data-cursor="block"
                    >
                      <button
                        className="project-github-btn"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href =
                            "https://github.com/prathameshsb/shopping-cart-v2";
                        }}
                      >
                        <span className="github-img-container"></span>
                        git
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
