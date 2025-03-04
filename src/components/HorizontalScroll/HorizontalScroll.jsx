import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".hs-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <div ref={slider} className="hs-container">
        <div className="hs-panel">
          <div className="hs-content-container">SCROLL DOWN</div>
        </div>
        <div className="hs-panel ">
          <div className="hs-content-container">ONE</div>
        </div>
        <div className="hs-panel ">
          <div className="hs-content-container">Two</div>
        </div>
        <div className="hs-panel ">
          <div className="hs-content-container">Three</div>
        </div>
      </div>
    </div>
  );
}
