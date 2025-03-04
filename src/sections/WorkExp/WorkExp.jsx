import "./WorkExp.css";

const cardsData = [
  {
    id: "findem",
    title: "Findem.ai",
    role: "Software Engineer and UI/UX Designer",
    period: "May 2024 - Present",
    image: "../../public/assests/logos/findem-logo.jpeg",
  },
  {
    id: "adobe",
    title: "Adobe",
    role: "Software Development Engineer",
    period: "March 2021 - June 2023",
    image: "../../public/assests/logos/adobe-logo.png",
  },
  {
    id: "gryphon",
    title: "Gryphon",
    role: "UI/UX Engineer and Designer",
    period: "July 2020 - February 2021",
    image: "../../public/assests/logos/gryphon-logo.png",
  },
  {
    id: "neu",
    title: "Northeastern Uni.",
    role: "Graduate Teaching Assistant",
    period: "July 2020 - February 2021",
    image: "../../public/assests/logos/Northeastern_Huskies_logo.svg.png",
  },
  {
    id: "incluvie",
    title: "Incluvie",
    role: "Product Designer",
    period: "July 2020 - February 2021",
    image: "../../public/assests/logos/incluvie-logo.png",
  },
  {
    id: "collegepond",
    title: "Collegepond",
    role: "Product Designer",
    period: "July 2020 - February 2021",
    image: "../../public/assests/logos/collegepond-logo.jpeg",
  },
];
function WorkExp() {
  return (
    <>
      <h1 className="project-header-name">
        WORK EXPERIENCE
      </h1>
      <div className="WorkExp-container">
        <div className="content-holder">
          <span className="currrent-position">
            i currently work here!{" "}
            <svg
              width="89"
              height="54"
              viewBox="0 0 89 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M88.8536 49.8536C89.0488 49.6583 89.0488 49.3417 88.8536 49.1464L85.6716 45.9645C85.4763 45.7692 85.1597 45.7692 84.9645 45.9645C84.7692 46.1597 84.7692 46.4763 84.9645 46.6716L87.7929 49.5L84.9645 52.3284C84.7692 52.5237 84.7692 52.8403 84.9645 53.0355C85.1597 53.2308 85.4763 53.2308 85.6716 53.0355L88.8536 49.8536ZM0.504342 0.565751C2.71204 17.2084 23.5158 50 88.5 50V49C23.8842 49 3.6213 16.4583 1.49566 0.434249L0.504342 0.565751Z"
                fill="#717171"
              />
            </svg>
          </span>
          {cardsData.map((card) => (
            <div
              key={card.id}
              className={`card ${card.id}`}
              data-cursor="block"
            >
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h3 className="card-content-title">{card.title}</h3>
                <p className="card-content-role">{card.role}</p>
                <p className="card-content-period">{card.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorkExp;
