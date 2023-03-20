import React, { useState } from "react";
import alert from "../../images/alert.png";
import MyProjects from "./MyProjects";

const Projects = () => {
  const [projectsList, setProjectsList] = useState([]);
  return (
    <div className="projects" id="projects">
      <h1 className="minor-headings">My Projects</h1>
      <div className="projects-wrapper">
        {projectsList.length == 0 ? (
          <div className="alert">
            <div className="alert-block">
              <img src={alert} />
              <p>
                Please wait while I’m working on adding high-value projects.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <MyProjects />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
