function AboutSVG({ text }) {
  return (
    <svg
      width="100%"
      height="100%"
      className="svg-btn"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        fill="transparent"
        stroke="#fff"
        strokeWidth="1"
        x="50%"
        y="30%"
        fontSize="55"
        fontFamily="Raleway"
        textAnchor="middle"
        alignmentBaseline="central"
        dy=".35em"
        data-cursor="block"
        data-cursor-style="padding: 5px"
      >
        {text}
      </text>
    </svg>
  );
}

export default AboutSVG;
