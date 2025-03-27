import React, { useEffect, useState, useRef } from "react";
import "./Projects.css";
import Card from "../../components/Card/Card.jsx";
import { cardData } from "../../cardData.js";

export default function Projects({ header = true }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleCardIndex = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            setActiveCardIndex(visibleCardIndex);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5, // Trigger when 50% of the card is in view
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* {header && (
        <h1 className="project-header-name">
          PROJECTS
        </h1>
      )} */}
      <div className="project-holder">
        <div ref={containerRef} className="main-container">
          <Card cardData={cardData} cardRefs={cardRefs} />
        </div>
        <div className="pagination">
          {cardData.map(({ id }) => (
            <span
              key={id}
              className={`dot ${id === activeCardIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
