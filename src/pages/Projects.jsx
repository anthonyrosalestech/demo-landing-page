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

// const Projects = () => {
//   const [filter, setFilter] = useState("all");

//   const filteredProjects =
//     filter === "all"
//       ? allProjects
//       : allProjects.filter((project) => project.type === filter);

//   return (
//     <div className="projects-page">
//       <div className="container">
//         <h1>Portafolio de Proyectos</h1>

//         {/* Filtros */}
//         <div className="project-filters">
//           <button
//             className={filter === "all" ? "active" : ""}
//             onClick={() => setFilter("all")}
//           >
//             Todos
//           </button>
//           <button
//             className={filter === "Residencial" ? "active" : ""}
//             onClick={() => setFilter("Residencial")}
//           >
//             Residencial
//           </button>
//           <button
//             className={filter === "Comercial" ? "active" : ""}
//             onClick={() => setFilter("Comercial")}
//           >
//             Comercial
//           </button>
//           <button
//             className={filter === "Institucional" ? "active" : ""}
//             onClick={() => setFilter("Institucional")}
//           >
//             Institucional
//           </button>
//         </div>

//         {/* Listado de proyectos */}
//         <div className="projects-grid">
//           {filteredProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  const categories = ["all", "Residencial", "Comercial", "Institucional"];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Portafolio de Proyectos
        </h1>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300
                ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
