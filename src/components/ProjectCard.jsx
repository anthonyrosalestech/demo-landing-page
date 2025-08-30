import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="project-card">
//       <div className="project-image">
//         {/* <img src={project.image} alt={project.title} /> */}
//         <img src={"/assets/img/teams.jpg"} alt={project.title} />
//       </div>
//       <div className="project-info">
//         <h3>{project.title}</h3>
//         <div className="project-meta">
//           <span>{project.type}</span>
//           <span>{project.year}</span>
//         </div>
//         <Link to={`/projects/${project.id}`} className="btn-small">
//           Ver Proyecto
//         </Link>
//       </div>
//     </div>
//   );
// };

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Imagen */}
      <div className="h-56 w-full overflow-hidden">
        <img
          // src={project.image || "/assets/img/teams.jpg"}
          src="/assets/img/teams.jpg"
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Información del proyecto */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 text-gray-500 mb-4">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {project.type}
          </span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {project.year}
          </span>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-colors duration-300"
        >
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
