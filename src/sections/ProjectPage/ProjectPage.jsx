import React from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../cardData.js";
import UXCaseStudyPage from "./UXCaseStudyPage.jsx";
import WebDevPage from "./WebDevPage.jsx";
import "./ProjectPage.css";
// import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import StickyNav from "../StickyNav/StickyNav.jsx";

export default function ProjectPage() {
  let { projectName } = useParams();
  projectName = decodeURIComponent(projectName).replace(/-/g, " ");

  let projectData = cardData.filter(
    (card) => card.name.toLowerCase() === projectName.toLowerCase()
  );

  let projectTag = projectData[0].tag;
  const config = {};
  // useIPadCursor();

  return (
    <>
      <StickyNav />
      {/* <IPadCursorProvider config={config}> */}
        {projectTag === "UX Case Study" ? (
          <UXCaseStudyPage
            projectData={projectData}
            projectName={projectName}
          />
        ) : (
          <WebDevPage projectData={projectData} projectName={projectName} />
        )}
      {/* </IPadCursorProvider> */}
    </>
  );
}
