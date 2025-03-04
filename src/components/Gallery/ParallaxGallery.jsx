import React, { useEffect, useRef, useState } from "react";
import styles from "./ParallaxGallery.module.css";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function ParallaxGallery() {
  const gallery = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (gallery.current) {
        const galleryRect = gallery.current.getBoundingClientRect();
        const inView =
          galleryRect.top < window.innerHeight && galleryRect.bottom >= 0;

        if (inView) {
          const position = window.pageYOffset - gallery.current.offsetTop;
          setScrollPosition(position);
        }
      }
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition(); // Initial update

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <main>
      <div ref={gallery} className={styles.gallery}>
        <Column
          images={[images[0], images[1], images[2]]}
          offset={scrollPosition * 0.5}
        />
        <Column
          images={[images[3], images[4], images[5]]}
          offset={scrollPosition * 0.8}
        />
        <Column
          images={[images[6], images[7], images[8]]}
          offset={scrollPosition * 0.3}
        />
        <Column
          images={[images[9], images[10], images[11]]}
          offset={scrollPosition * 0.7}
        />
      </div>
    </main>
  );
}

const Column = ({ images, offset }) => {
  return (
    <div
      className={styles.column}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {images.map((img, i) => (
        <div key={i} className={styles.imageContainer}>
          <img
            className="parallax-gallery-images"
            src={img}
            alt={`Gallery ${i}`}
          />
        </div>
      ))}
    </div>
  );
};
