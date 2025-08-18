import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* <img src={project.image} alt={project.title} /> */}
        <img src={"/assets/img/teams.jpg"} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <Link to={`/projects/${project.id}`} className="btn-small">
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
