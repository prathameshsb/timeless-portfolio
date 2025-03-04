import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./About.css";
import Carousel from "../../components/Carousel/Carousel";
import Nav from "../Nav/Nav";
import ControlCenter from "../../components/ControlCenter/ControlCenter";
import Footer from "../Footer/Footer";
import StickyNav from "../StickyNav/StickyNav";
import Modal from "../../components/Modal/Modal";

const ResponsiveGridLayout = WidthProvider(Responsive);

const timelineEntries = [
  {
    company: "Findem",
    role: "Software Engineer",
    period: "May 2024 - Present",
    type: "work",
  },
  {
    company: "Adobe",
    role: "Software Development Engineer",
    period: "March 2021 - June 2023",
    type: "work",
  },
  {
    company: "Gryphon Networks",
    role: "Product Designer & Frontend Engineer",
    period: "Jan 2020 - Aug 2020",
    type: "work",
  },
  {
    company: "Northeastern University",
    role: "Graduate Teaching Assistant",
    period: "Sept 2019 - Dec 2020",
    type: "work",
  },
  {
    company: "Incluvie",
    role: "UI/UX, Product Designer",
    period: "March 2021 - June 2023",
    type: "work",
  },
  {
    company: "Northeastern University",
    role: "Masters in Digital Media, Interactive Design",
    period: "Sept 2018 - Dec 2020",
    type: "edu",
  },
  {
    company: "Converge by Collegepond",
    role: "Product Designer & Frontend Engineer",
    period: "Sept 2017 - Aug 2018",
    type: "work",
  },
  {
    company: "University of Mumbai",
    role: "Bachelors in Engineering, Information Technology",
    period: "June 2013 - May 2019",
    type: "edu",
  },
];

const images = [];

function About() {
  // Common layout for lg, md, sm breakpoints
  const commonLayout = [
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "b", x: 2, y: 0, w: 1, h: 1 },
    { i: "c", x: 3, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 1, w: 1, h: 1 },
    { i: "e", x: 1, y: 1, w: 2, h: 1 },
    { i: "f", x: 0, y: 2, w: 2, h: 1 },
    { i: "g", x: 2, y: 2, w: 1, h: 1 },
    { i: "h", x: 3, y: 2, w: 1, h: 1 },
  ];

  const layouts = {
    lg: commonLayout,
    md: commonLayout,
    sm: commonLayout,
    xs: [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 0, y: 2, w: 2, h: 1 },
      { i: "c", x: 2, y: 2, w: 2, h: 2 },
      { i: "d", x: 0, y: 3, w: 2, h: 1 },
      { i: "e", x: 2, y: 3, w: 4, h: 1 },
      { i: "f", x: 0, y: 4, w: 4, h: 1 },
      { i: "g", x: 0, y: 6, w: 2, h: 1 },
      { i: "h", x: 2, y: 6, w: 2, h: 1 },
    ],
    xxs: [
      { i: "a", x: 0, y: 0, w: 2, h: 1 },
      { i: "b", x: 0, y: 2, w: 2, h: 1 },
      { i: "c", x: 0, y: 3, w: 2, h: 2 },
      { i: "d", x: 0, y: 5, w: 2, h: 1 },
      { i: "e", x: 0, y: 6, w: 4, h: 1 },
      { i: "f", x: 0, y: 7, w: 2, h: 1 },
      { i: "g", x: 0, y: 9, w: 2, h: 1 },
      { i: "h", x: 0, y: 10, w: 2, h: 1 },
    ],
  };
  const [isModalOpen, setModalOpen] = useState(false);

  // Define the number of columns for each breakpoint
  const cols = { lg: 4, md: 4, sm: 4, xs: 4, xxs: 2 };

  const config = {};
  // useIPadCursor();

  return (
    <>
      <ControlCenter />
      <Nav />
      <StickyNav />
      <div className="layout">
        <ResponsiveGridLayout
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={cols}
          rowHeight={Math.floor((920 - 2 * 30) / 3)} // Adjusted for 920px total height with 30px gaps
          width={1200}
          margin={[30, 30]}
          containerPadding={[0, 0]}
          isResizable={false}
          isDraggable={false}
          autoSize={true}
        >
          <div key="a" className="tile">
            <div className="main-about">
              <div className="image-resume-holder">
                <div className="video-holder">
                  <video
                    className="image-holder"
                    width="320"
                    height="240"
                    autoPlay
                    loop
                    muted
                  >
                    <source
                      src="../../public/assests/prathameshportfolio.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="resume-downloader">
                  <button className="resume-btn" data-cursor="block">
                    <a
                      href="https://drive.google.com/drive/folders/1EeRgNV1jI4XVsRL40VlX0K-dH2aQ-ed0?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <b>download resume</b>
                    </a>
                  </button>
                </div>
              </div>
              <div className="description-holder">
                <p>
                  I’m an experienced Frontend Engineer & a noive Product Designer from
                  California and I'm on an unwavering path to become a VP of
                  Design, Cheif Design Officer, or a Lead — ambition knows no
                  bounds...{" "}
                </p>
              </div>
            </div>
          </div>
          <div key="b" className="tile">
            <div className="location">
              <img
                className="location-gif"
                src="../../public/assests/location.jpg"
                alt="location SF Area"
              />
              <div className="location-holder">
                <div className="outer-circle">
                  <img
                    className="location-image"
                    src="../../public/assests/location-image.png"
                    alt="location SF Area"
                  />
                </div>
                <p className="location-text">
                <b>SAN FRANCISCO, CA</b>
                </p>
              </div>
            </div>
          </div>
          <div key="c" className="tile">
            <div className="timeline-container">
              <header className="timeline-header">
                <h1>Timeline</h1>
              </header>
              <div className="timeline-content">
                {timelineEntries.map((entry) => (
                  <div className="timeline">
                    <div className="work-edu-icon">
                      {entry.type === "work" ? (
                        <span className="work-icon">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23 5.5H19.25V3C19.25 2.33696 18.9866 1.70107 18.5178 1.23223C18.0489 0.763392 17.413 0.5 16.75 0.5H9.25C8.58696 0.5 7.95107 0.763392 7.48223 1.23223C7.01339 1.70107 6.75 2.33696 6.75 3V5.5H3C2.33696 5.5 1.70107 5.76339 1.23223 6.23223C0.763392 6.70107 0.5 7.33696 0.5 8V23C0.5 23.663 0.763392 24.2989 1.23223 24.7678C1.70107 25.2366 2.33696 25.5 3 25.5H23C23.663 25.5 24.2989 25.2366 24.7678 24.7678C25.2366 24.2989 25.5 23.663 25.5 23V8C25.5 7.33696 25.2366 6.70107 24.7678 6.23223C24.2989 5.76339 23.663 5.5 23 5.5ZM9.25 3H16.75V5.5H9.25V3Z"
                              fill="white"
                            />
                            <rect
                              x="3"
                              y="15"
                              width="20"
                              height="2"
                              rx="1"
                              fill="black"
                            />
                            <rect
                              x="1"
                              y="15"
                              width="24"
                              height="2"
                              fill="#191919"
                            />
                            <rect
                              x="10"
                              y="13"
                              width="6"
                              height="6"
                              rx="3"
                              fill="#191919"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="edu-icon">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28 24C27.4 24 27 23.6267 27 23.0667V10.9333C27 10.3733 27.4 10 28 10C28.6 10 29 10.3733 29 10.9333V23.0667C29 23.6267 28.6 24 28 24Z"
                              fill="white"
                            />
                            <path
                              d="M15 19.6875C14.8125 19.6875 14.7188 19.6875 14.5312 19.5937L0.46875 12.0937C0.1875 11.9062 0 11.625 0 11.25C0 10.875 0.1875 10.5938 0.46875 10.4063L14.5312 2.90625C14.8125 2.71875 15.0937 2.71875 15.375 2.90625L29.4375 10.4063C29.7187 10.5938 29.9062 10.875 29.9062 11.25C29.9062 11.625 29.7187 11.9062 29.4375 12.0937L15.375 19.5937C15.2812 19.6875 15.1875 19.6875 15 19.6875Z"
                              fill="white"
                            />
                            <path
                              d="M16.3125 21.1875C15.9375 21.4687 15.4688 21.5625 15 21.5625C14.5312 21.5625 14.0625 21.4687 13.6875 21.1875L5.625 16.9688V20.625C5.625 23.5312 10.2188 26.25 15 26.25C19.7812 26.25 24.375 23.5312 24.375 20.625V16.9688L16.3125 21.1875Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                    <div className="work-edu-content">
                      <h2>{entry.company}</h2>
                      <p>{entry.role}</p>
                      <time className="period">{entry.period}</time>
                    </div>
                  </div>
                ))}
              </div>
              <div className="scroll-icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 6.5C8.5 5.94772 8.05228 5.5 7.5 5.5C6.94772 5.5 6.5 5.94772 6.5 6.5L8.5 6.5ZM6.79289 8.20711C7.18342 8.59763 7.81658 8.59763 8.20711 8.20711L14.5711 1.84315C14.9616 1.45262 14.9616 0.819457 14.5711 0.428932C14.1805 0.0384082 13.5474 0.0384082 13.1569 0.428932L7.5 6.08579L1.84315 0.428932C1.45262 0.0384076 0.819457 0.0384076 0.428932 0.428932C0.0384081 0.819456 0.0384081 1.45262 0.428932 1.84315L6.79289 8.20711ZM6.5 6.5L6.5 7.5L8.5 7.5L8.5 6.5L6.5 6.5Z"
                    fill="white"
                  />
                  <path
                    d="M8.5 12.5C8.5 11.9477 8.05228 11.5 7.5 11.5C6.94772 11.5 6.5 11.9477 6.5 12.5L8.5 12.5ZM6.79289 14.2071C7.18342 14.5976 7.81658 14.5976 8.20711 14.2071L14.5711 7.84315C14.9616 7.45262 14.9616 6.81946 14.5711 6.42893C14.1805 6.03841 13.5474 6.03841 13.1569 6.42893L7.5 12.0858L1.84315 6.42893C1.45262 6.03841 0.819457 6.03841 0.428932 6.42893C0.0384081 6.81946 0.0384081 7.45262 0.428932 7.84315L6.79289 14.2071ZM6.5 12.5L6.5 13.5L8.5 13.5L8.5 12.5L6.5 12.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div key="d" className="tile">
            <div className="connect-container">
              <div className="connect-text-holder">
                <span>HELP ME ACHIEVE MY DREAM —</span>
                <br />
                CONNECT WITH ME!
                <br />
                <br />
                <div className="connect-cta">
                  <a
                    className="connect-btn"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>@</b>
                  </a>
                  <a
                    className="connect-btn"
                    href="https://www.linkedin.com/in/bprathamesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>in</b>
                  </a>
                </div>
              </div>
              <div className="connect-gif-holder">
                <img
                  className="connect-gif"
                  src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTI2aW5kNmtuNWNobHQ3d2F2ZTBwMTRndG9zYjQ4ZXVhNXc4ODN4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cluiY1nMoHWd9o6Uej/giphy.gif"
                  alt="shaun the sheep calling"
                />
              </div>
            </div>
          </div>
          <div key="e" className="tile">
            <div className="about-container">
              <h1>ABOUT</h1>
            </div>
          </div>
          <div key="f" className="tile">
            <div className="extra-description">
              <div className="extra-description-holder">
                <p data-cursor="text">
                  Outside of work, I channel my inner masterchef{" "}
                  <img
                    className="description-gif masterchef"
                    src="https://media.tenor.com/QWG9Js3aE4YAAAAM/crying-kid.gif"
                    alt="masterchef"
                    width='30px'
                    height='30px'
                  />, practically
                  live at the gym{" "}
                  <img
                    className="description-gif"
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5oNnhjd2w1Ynk2YnpvdTU0czRlMXFxcWwzZHBod2FidDV0eHFmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x1LaMN3xIN7Y4/giphy.gif"
                    alt="live at the gym"
                    width='30px'
                    height='30px'
                  />{" "}
                  , worsen my dancing skills{" "}
                  <img
                    className="description-gif"
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWs2NmF4azhmOGxxMHZnaGp1a3F1dDdrM2p1anlhd3A4bGJyNmg4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLcQGYmQU36d3FceiP/giphy.gif"
                    alt="bean dancing"
                    width='30px'
                    height='30px'
                  />{" "}
                  , & revel in the
                  drama of <span className="cancel-text">soccer</span>{" "}
                  football{" "}
                  <img
                    className="description-gif"
                    src="https://i.makeagif.com/media/12-21-2022/lQiZbP.gif"
                    alt="world cup"
                    width='30px'
                    height='30px'
                  />{" "}
                  . And yes, I'm fiercely proud,{" "}
                  <span className="cancel-text">somewhat delusional</span>{" "}
                  <span className="chelsea" data-cursor="block">
                    Chelsea FC
                  </span>{" "}
                  <img
                    className="description-gif chelsea-gif"
                    src="https://media.tenor.com/x80svCL2zVIAAAAM/chelsea-champions-league.gif"
                    alt="chelsea champions league winning celebration"
                    width='30px'
                    height='30px'
                  />{" "}
                  supporter — we definitely exist!! It's true, sarcasm 💙
                  me...
                </p>
              </div>
              {/* <div className="description-gif-holder">
                <img
                  className="description-gif masterchef"
                  src="https://media.tenor.com/QWG9Js3aE4YAAAAM/crying-kid.gif"
                  alt="masterchef"
                />
                <img
                  className="description-gif chelsea-gif"
                  src="https://media.tenor.com/x80svCL2zVIAAAAM/chelsea-champions-league.gif"
                  alt="chelsea champions league winning celebration"
                />
                <img
                  className="description-gif"
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5oNnhjd2w1Ynk2YnpvdTU0czRlMXFxcWwzZHBod2FidDV0eHFmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x1LaMN3xIN7Y4/giphy.gif"
                  alt="live at the gym"
                />
                <img
                  className="description-gif"
                  src="https://i.makeagif.com/media/12-21-2022/lQiZbP.gif"
                  alt="world cup"
                />
                <img
                  className="description-gif"
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWs2NmF4azhmOGxxMHZnaGp1a3F1dDdrM2p1anlhd3A4bGJyNmg4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLcQGYmQU36d3FceiP/giphy.gif"
                  alt="bean dancing"
                />
              </div> */}
            </div>
          </div>
          <div key="g" className="tile">
            <div className="connect-container">
              <div className="extra-connect-text-holder">
                Share some funny reels or let’s play Fifa?
                <br />
                <br />
                <div className="connect-cta">
                  <a
                    className="connect-btn extra"
                    href="https://www.instagram.com/prathameshsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>ig</b>
                  </a>
                  <a
                    className="connect-btn extra"
                    href="https://www.facebook.com/prathamesh.borgharkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>fb</b>
                  </a>
                  <a
                    className="connect-btn extra"
                    href="https://dribbble.com/prathameshsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>dr</b>
                  </a>
                  <a
                    className="connect-btn extra"
                    href="https://www.behance.net/prathamborghar"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>be</b>
                  </a>
                  <a
                    className="connect-btn extra"
                    href="https://github.com/prathameshsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>git</b>
                  </a>
                  <a
                    className="connect-btn extra"
                    href="https://github.com/prathameshsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="block"
                  >
                    <b>psn</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div key="h" className="tile">
            <div className="life-hightlight-carousel">
              {/* <Carousel images={images} autoScroll={true} loading={true} /> */}
              <div onClick={() => setModalOpen(true)}>button</div>
            </div>
          </div>
        </ResponsiveGridLayout>
      </div>
      <Footer displayExtraConnect={false} />

      {isModalOpen &&
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is a modal content.</p>
        </Modal>
      }
    </>
  );
}

export default About;
