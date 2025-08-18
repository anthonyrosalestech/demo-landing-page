import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "./../styles/main.css";

// Datos de ejemplo
const allProjects = [
  {
    id: 1,
    title: "Casa Moderna en la Montaña 1",
    image: "https://via.placeholder.com/400x300",
    type: "Residencial",
    year: "2022",
    location: "Madrid",
  },

  {
    id: 2,
    title: "Casa Moderna en la Montaña 1",
    image: "https://via.placeholder.com/400x300",
    type: "Residencial",
    year: "2022",
    location: "Madrid",
  },
  // Agrega más proyectos aquí
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  return (
    <div className="projects-page">
      <div className="container">
        <h1>Portafolio de Proyectos</h1>

        {/* Filtros */}
        <div className="project-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Todos
          </button>
          <button
            className={filter === "Residencial" ? "active" : ""}
            onClick={() => setFilter("Residencial")}
          >
            Residencial
          </button>
          <button
            className={filter === "Comercial" ? "active" : ""}
            onClick={() => setFilter("Comercial")}
          >
            Comercial
          </button>
          <button
            className={filter === "Institucional" ? "active" : ""}
            onClick={() => setFilter("Institucional")}
          >
            Institucional
          </button>
        </div>

        {/* Listado de proyectos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
