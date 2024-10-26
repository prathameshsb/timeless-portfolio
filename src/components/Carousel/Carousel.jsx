import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Make sure to create a CSS file for styling

function Carousel({ images, autoScroll = false, loading = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoScroll && loading === false) {
      const interval = setInterval(next, 3000);
      return () => clearInterval(interval);
    }
  }, [autoScroll, next, loading]);

  return (
    <div className={`carousel-container ${loading ? "remove-height" : ""}`}>
      <div className="carousel-image-wrapper">
        {loading
          ? "loading..."
          : images?.map((img, index) => (
              <img
                key={index}
                src="../../public/assests/cfc.jpeg"
                alt={`Slide ${index}`}
                className={index === currentIndex ? "active" : "inactive"}
              />
            ))}
      </div>
      {loading === false && (
        <>
          <button className="carousel-control prev" onClick={prev}>
            &#x2C2;
          </button>
          <button className="carousel-control next next-btn" onClick={next}>
            &#x2C3;
          </button>
        </>
      )}
      {loading === false && (
        <div className="carousel-pagination">
          {images?.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
