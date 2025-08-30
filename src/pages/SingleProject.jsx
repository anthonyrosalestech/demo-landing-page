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

// const SingleProject = () => {
//   const { id } = useParams();
//   const project = projectData[id];

//   if (!project) {
//     return <div>Proyecto no encontrado</div>;
//   }

//   return (
//     <div className="single-project">
//       <div className="container">
//         <h1>{project.title}</h1>

//         <div className="project-meta">
//           <span>{project.type}</span>
//           <span>{project.year}</span>
//           <span>{project.location}</span>
//           <span>{project.area}</span>
//         </div>

//         {/* Galería de imágenes */}
//         <div className="project-gallery">
//           {project.images.map((img, index) => (
//             <div key={index} className="gallery-item">
//               {/* <img src={img} alt={`${project.title} - Imagen ${index + 1}`} /> */}
//               <img
//                 src={"/assets/img/teams.jpg"}
//                 alt={`${project.title} - Imagen ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Descripción */}
//         <div className="project-description">
//           <h2>Descripción del Proyecto</h2>
//           <p>{project.description}</p>
//         </div>

//         {/* Características */}
//         <div className="project-features">
//           <h2>Características Principales</h2>
//           <ul>
//             {project.features.map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

const SingleProject = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-xl">
        Proyecto no encontrado
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {project.title}
        </h1>

        {/* Meta del proyecto */}
        <div className="flex flex-wrap gap-4 text-gray-600 mb-10">
          <span className="bg-white px-4 py-2 rounded-lg shadow">
            {project.type}
          </span>
          <span className="bg-white px-4 py-2 rounded-lg shadow">
            {project.year}
          </span>
          <span className="bg-white px-4 py-2 rounded-lg shadow">
            {project.location}
          </span>
          <span className="bg-white px-4 py-2 rounded-lg shadow">
            {project.area}
          </span>
        </div>

        {/* Galería de imágenes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {project.images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                // src={img || "/assets/img/teams.jpg"}
                src={"/assets/img/teams.jpg"}
                alt={`${project.title} - Imagen ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Descripción */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Descripción del Proyecto
          </h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        {/* Características */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Características Principales
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
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
