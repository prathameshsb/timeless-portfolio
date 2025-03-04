import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./CursorTracker.css";

function CursorTracker({ containerRef }) {
  useEffect(() => {
    // Make sure the containerRef.current is available
    if (!containerRef.current) return;

    const handleMouseMove = (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;
      gsap.set(".cursor", {
        x: mouseX - containerRef.current.offsetLeft,
        y: mouseY - containerRef.current.offsetTop,
      });
      gsap.to(".shape", {
        x: mouseX - containerRef.current.offsetLeft,
        y: mouseY - containerRef.current.offsetTop,
        stagger: -0.1,
      });
    };

    // Attach the event listener to the containerRef.current element
    const bannerElement = containerRef.current;
    bannerElement.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener
    return () => {
      bannerElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.resume();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <svg
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          visibility: "hidden",
        }}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 2.5 -1"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
      <div ref={containerRef} className="cursor"></div>
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </>
  );
}

export default CursorTracker;
