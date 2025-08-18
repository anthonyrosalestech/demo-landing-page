import React from "react";
import { useParams } from "react-router-dom";
import "./../styles/main.css";

// Datos de ejemplo (en un proyecto real deberías cargarlos desde una API)
const projectData = {
  1: {
    title: "Casa Moderna en la Montaña",
    images: [
      "https://via.placeholder.com/800x500",
      "https://via.placeholder.com/800x500",
      "https://via.placeholder.com/800x500",
    ],
    type: "Residencial",
    year: "2022",
    location: "Madrid",
    area: "320 m²",
    description:
      "Este proyecto residencial combina líneas modernas con materiales naturales para integrarse perfectamente en el entorno montañoso. La casa maximiza las vistas panorámicas mientras mantiene un diseño energéticamente eficiente.",
    features: [
      "Diseño bioclimático",
      "Materiales locales",
      "Integración paisajística",
      "Sistema de energía solar",
    ],
  },

  2: {
    title: "Casa Moderna en la Montaña",
    images: [
      "https://via.placeholder.com/800x500",
    ],
    type: "Residencial",
    year: "2022",
    location: "Madrid",
    area: "320 m²",
    description:
      "Este proyecto residencial combina líneas modernas con materiales naturales para integrarse perfectamente en el entorno montañoso. La casa maximiza las vistas panorámicas mientras mantiene un diseño energéticamente eficiente.",
    features: [
      "Diseño bioclimático",
      "Materiales locales",
      "Integración paisajística",
      "Sistema de energía solar",
    ],
  },
};

const SingleProject = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="single-project">
      <div className="container">
        <h1>{project.title}</h1>

        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
          <span>{project.location}</span>
          <span>{project.area}</span>
        </div>

        {/* Galería de imágenes */}
        <div className="project-gallery">
          {project.images.map((img, index) => (
            <div key={index} className="gallery-item">
              {/* <img src={img} alt={`${project.title} - Imagen ${index + 1}`} /> */}
              <img
                src={"/assets/img/teams.jpg"}
                alt={`${project.title} - Imagen ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Descripción */}
        <div className="project-description">
          <h2>Descripción del Proyecto</h2>
          <p>{project.description}</p>
        </div>

        {/* Características */}
        <div className="project-features">
          <h2>Características Principales</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
