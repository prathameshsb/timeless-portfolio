import React, { useState, useEffect, useRef } from "react";
import "./TextMorph.css";

const texts = [
  "Hello",
  "नमस्ते",
  "Hola",
  "こんにちは",
  "Bonjour",
  "안녕하세요",
  "Olá",
  "你好",
];

function TextMorph() {
  const morphTime = 1; // seconds
  const cooldownTime = 0.25; // seconds
  const [textIndex, setTextIndex] = useState(0);
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const animate = () => {
      const newTime = new Date();
      const dt = (newTime - time) / 1000;
      time = newTime;

      if (cooldown > 0) {
        setCooldown(cooldown - dt);
      }

      if (cooldown <= 0) {
        if (morph < 1) {
          setMorph(morph + dt / morphTime);
        } else {
          setTextIndex((textIndex + 1) % texts.length);
          setMorph(0);
          setCooldown(cooldownTime);
        }
      }

      requestAnimationFrame(animate);
    };

    let time = new Date();
    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate); // Cleanup on unmount
  }, [textIndex, morph, cooldown]);

  useEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      const fraction = morph;
      text2Ref.current.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inverseFraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(
        8 / inverseFraction - 8,
        100
      )}px)`;
      text1Ref.current.style.opacity = `${
        Math.pow(inverseFraction, 0.4) * 100
      }%`;

      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }
  }, [morph, textIndex]);

  return (
    <div>
      <div className="text-container">
        <span ref={text1Ref} id="text1"></span>
        <span ref={text2Ref} id="text2"></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default TextMorph;
