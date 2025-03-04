import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./sections/About/About";
import Homepage from "./sections/Homepage/Homepage";
import ProjectPage from "./sections/ProjectPage/ProjectPage";
import AllProjects from "./sections/ProjectPage/AllProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/project/:projectName" element={<ProjectPage />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
