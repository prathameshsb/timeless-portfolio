import React, { useState } from "react";
import "./ControlCenter.css";
import { Link } from "react-router-dom";

function ControlCenter() {
  const [controlCenter, setControlCenter] = useState(false);

  const toggleControlCenter = () => {
    setControlCenter(!controlCenter);
    console.log("Toggling control center");
  };

  const config = {
    blockPadding: 5,
  };
  return (
      <div className="controlcenter-container">
        {controlCenter === true ? (
          <div className="cc-content-container">
            <div className="cc-nav">
              <div className="logo-name-btn">PRATHAMESH S B.</div>
              <div className="cc-nav-close-section logo-name-btn">
                <div
                  className="cc-nav-close-icon"
                  data-cursor="block"
                  onClick={toggleControlCenter}
                >
                  <svg
                    width="16"
                    height="9"
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 2.49609C7 3.04838 7.44771 3.49609 8 3.49609C8.55228 3.49609 9 3.04838 9 2.49609L7 2.49609ZM8.70711 0.796312C8.31658 0.405787 7.68342 0.405787 7.29289 0.796311L0.928929 7.16027C0.538405 7.55079 0.538404 8.18396 0.928928 8.57448C1.31945 8.96501 1.95262 8.96501 2.34314 8.57448L8 2.91763L13.6569 8.57449C14.0474 8.96501 14.6805 8.96501 15.0711 8.57449C15.4616 8.18397 15.4616 7.5508 15.0711 7.16028L8.70711 0.796312ZM9 2.49609L9 1.50342L7 1.50342L7 2.49609L9 2.49609Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div data-cursor="block">
                  <Link className="logo-name-btn" to="/">
                    ABOUT
                  </Link>
                </div>
              </div>
            </div>
            <div className="cc-widgets">
              <div className="cc-widgets-content">
                <div className="cc-w-adjustment-container">
                  <div className="cc-w-adjust-content">
                    <svg
                      width="28"
                      height="31"
                      viewBox="0 0 28 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.6665 30.1665C3.93012 30.1665 3.33317 29.5763 3.33317 28.8346L3.33317 27.4984C3.33317 26.7628 3.92499 26.1665 4.6665 26.1665C5.40288 26.1665 5.99984 26.7567 5.99984 27.4984L5.99984 28.8346C5.99984 29.5702 5.40802 30.1665 4.6665 30.1665ZM4.6665 15.4998C3.93012 15.4998 3.33317 14.9067 3.33317 14.1724L3.33317 2.16061C3.33317 1.42748 3.92499 0.833172 4.6665 0.833172C5.40288 0.833172 5.99984 1.42629 5.99984 2.16061L5.99984 14.1724C5.99984 14.9055 5.40802 15.4998 4.6665 15.4998ZM5.99984 20.8332C5.99984 21.5696 5.40288 22.1665 4.6665 22.1665C3.93012 22.1665 3.33317 21.5696 3.33317 20.8332C3.33317 20.0968 3.93012 19.4998 4.6665 19.4998C5.40288 19.4998 5.99984 20.0968 5.99984 20.8332ZM8.6665 20.8332C8.6665 23.0423 6.87564 24.8332 4.6665 24.8332C2.45736 24.8332 0.666504 23.0423 0.666503 20.8332C0.666503 18.624 2.45736 16.8332 4.6665 16.8332C6.87564 16.8332 8.6665 18.624 8.6665 20.8332ZM23.3332 30.1665C22.5968 30.1665 21.9998 29.5763 21.9998 28.8346L21.9998 27.4984C21.9998 26.7628 22.5917 26.1665 23.3332 26.1665C24.0695 26.1665 24.6665 26.7567 24.6665 27.4984L24.6665 28.8346C24.6665 29.5702 24.0747 30.1665 23.3332 30.1665ZM23.3332 15.4998C22.5968 15.4998 21.9998 14.9067 21.9998 14.1724L21.9998 2.16061C21.9998 1.42748 22.5917 0.833171 23.3332 0.833171C24.0695 0.833171 24.6665 1.42629 24.6665 2.16061L24.6665 14.1724C24.6665 14.9055 24.0747 15.4998 23.3332 15.4998ZM24.6665 20.8332C24.6665 21.5695 24.0695 22.1665 23.3332 22.1665C22.5968 22.1665 21.9998 21.5695 21.9998 20.8332C21.9998 20.0968 22.5968 19.4998 23.3332 19.4998C24.0695 19.4998 24.6665 20.0968 24.6665 20.8332ZM27.3332 20.8332C27.3332 23.0423 25.5423 24.8332 23.3332 24.8332C21.124 24.8332 19.3332 23.0423 19.3332 20.8332C19.3332 18.624 21.124 16.8332 23.3332 16.8332C25.5423 16.8332 27.3332 18.624 27.3332 20.8332ZM13.9998 30.1665C13.2635 30.1665 12.6665 29.559 12.6665 28.8393L12.6665 18.1604C12.6665 17.4274 13.2583 16.8332 13.9998 16.8332C14.7362 16.8332 15.3332 17.4407 15.3332 18.1604L15.3332 28.8393C15.3332 29.5723 14.7414 30.1665 13.9998 30.1665ZM13.9998 6.16651C13.2635 6.16651 12.6665 5.57537 12.6665 4.82068L12.6665 2.179C12.6665 1.43572 13.2583 0.833171 13.9998 0.833171C14.7362 0.833171 15.3332 1.42431 15.3332 2.179L15.3332 4.82068C15.3332 5.56396 14.7413 6.16651 13.9998 6.16651ZM15.3332 11.4998C15.3332 12.2362 14.7362 12.8332 13.9998 12.8332C13.2635 12.8332 12.6665 12.2362 12.6665 11.4998C12.6665 10.7635 13.2635 10.1665 13.9998 10.1665C14.7362 10.1665 15.3332 10.7635 15.3332 11.4998ZM17.9998 11.4998C17.9998 13.709 16.209 15.4998 13.9998 15.4998C11.7907 15.4998 9.99984 13.709 9.99984 11.4998C9.99984 9.2907 11.7907 7.49984 13.9998 7.49984C16.209 7.49984 17.9998 9.2907 17.9998 11.4998Z"
                        fill="white"
                      />
                    </svg>
                    <div className="cc-dark-btn" data-cursor="block">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8594 31.7074C15.9589 31.707 15.06 31.6336 14.1714 31.488C9.825 30.7747 5.93942 28.3656 3.36802 24.7896C0.796616 21.2137 -0.250347 16.7633 0.457074 12.416C0.852933 9.94111 1.80699 7.58884 3.24693 5.53744C4.68687 3.48604 6.5749 1.78935 8.76793 0.575977C9.13792 0.369249 9.5595 0.273135 9.98253 0.299068C10.4056 0.325002 10.8122 0.471889 11.1542 0.722263C11.5038 0.961426 11.7763 1.29701 11.9386 1.6882C12.1009 2.07939 12.146 2.50932 12.0685 2.92569L10.8799 2.83426L12.0045 3.03541C11.37 6.40088 11.9629 9.88229 13.6756 12.848C15.3883 15.8138 18.1073 18.0674 21.3394 19.2C23.8284 20.0638 26.5061 20.2313 29.0834 19.6846C29.4912 19.6045 29.9132 19.64 30.302 19.787C30.6907 19.934 31.0306 20.1866 31.2835 20.5164C31.5363 20.8463 31.692 21.2402 31.733 21.6537C31.7739 22.0673 31.6986 22.4841 31.5154 22.8571C30.1052 25.5232 27.9963 27.7553 25.4145 29.3144C22.8327 30.8735 19.8754 31.7007 16.8594 31.7074ZM9.75536 2.64226C8.0066 3.63385 6.48609 4.98236 5.29269 6.60014C4.09929 8.21791 3.25971 10.0687 2.82855 12.0323C2.39738 13.9958 2.38427 16.0281 2.79007 17.9971C3.19587 19.966 4.0115 21.8275 5.18393 23.4606C6.59705 25.4359 8.48943 27.0193 10.6831 28.0617C12.8767 29.1042 15.2995 29.5716 17.7235 29.4198C20.1475 29.268 22.493 28.5021 24.5395 27.1941C26.5859 25.8861 28.266 24.079 29.4216 21.9428C26.4809 22.534 23.4357 22.332 20.5988 21.3577C16.8555 20.0452 13.705 17.4373 11.7164 14.005C9.72784 10.5728 9.03227 6.54251 9.75536 2.64226Z"
                          fill="white"
                        />
                      </svg>
                      Dark
                    </div>
                    <div className="cc-cursor-btn" data-cursor="block">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.00001 5.43321C1.19612 3.28952 3.28953 1.19612 5.43321 2.00001L28.2873 10.5703C30.8289 11.5234 30.4876 15.2216 27.8145 15.6933L17.5115 17.5115L15.6933 27.8145C15.2216 30.4876 11.5234 30.8289 10.5703 28.2873L2.00001 5.43321ZM4.49689 4.49689L13.0672 27.3511L14.8853 17.048C15.0801 15.9443 15.9443 15.0801 17.048 14.8853L27.3511 13.0672L4.49689 4.49689Z"
                          fill="white"
                        />
                      </svg>
                      Cursor
                    </div>
                  </div>
                </div>
                <div className="cc-w-adjustment-container cc-w-row">
                  <div className="cc-w-spotify-content"></div>
                  <div className="cc-w-resume-content"></div>
                </div>
                <div className="cc-w-livescore-container"></div>
                <div className="cc-w-lang-container"></div>
                <div className="cc-w-inspiration-container"></div>
              </div>
            </div>
            <div className="cc-footer">
              <div className="cc-footer-heading">
                Help me buy a Lamborghini!!
              </div>
              <div className="cc-footer-social-icon">
                <a
                  className="connect-btn extra"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="block"
                >
                  <b>@</b>
                </a>
                <a
                  className="connect-btn extra"
                  href="https://www.linkedin.com/in/bprathamesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="block"
                >
                  <b>in</b>
                </a>
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
        ) : (
          <div className="controlcenter-btn">
            <button onClick={toggleControlCenter} data-cursor="block">
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="2.75"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <rect
                  x="0.75"
                  y="0.75"
                  width="28.5"
                  height="11.5"
                  rx="5.75"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <rect
                  x="0.75"
                  y="15.75"
                  width="28.5"
                  height="11.5"
                  rx="5.75"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle
                  cx="23.5"
                  cy="21.5"
                  r="3.75"
                  fill="black"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
  );
}

export default ControlCenter;
