// import React from "react";
// import "./../styles/main.css";

// const Services = () => {
//   const services = [
//     {
//       title: "Diseño Arquitectónico",
//       description:
//         "Creación de proyectos arquitectónicos personalizados que combinan funcionalidad, estética y eficiencia energética.",
//       icon: "📐",
//     },
//     {
//       title: "Dirección de Obra",
//       description:
//         "Supervisión profesional de la ejecución del proyecto para garantizar el cumplimiento del diseño y la calidad constructiva.",
//       icon: "🏗️",
//     },
//     {
//       title: "Consultoría",
//       description:
//         "Asesoramiento especializado en todas las fases del proyecto, desde la concepción hasta la finalización.",
//       icon: "💡",
//     },
//     {
//       title: "Renderizados 3D",
//       description:
//         "Visualizaciones fotorrealistas que permiten prever el resultado final del proyecto antes de su construcción.",
//       icon: "🖥️",
//     },
//     {
//       title: "Reformas y Rehabilitación",
//       description:
//         "Transformación de espacios existentes para adaptarlos a nuevas necesidades o mejorar su eficiencia.",
//       icon: "🔨",
//     },
//     {
//       title: "Licencias y Trámites",
//       description:
//         "Gestión de toda la documentación necesaria para la obtención de licencias y permisos de construcción.",
//       icon: "📋",
//     },
//   ];

//   return (
//     <div className="services-page">
//       <div className="container">
//         <h1>Servicios Profesionales</h1>
//         <p className="intro-text">
//           Ofrezco soluciones integrales adaptadas a las necesidades específicas
//           de cada cliente y proyecto.
//         </p>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon">{service.icon}</div>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="process-section">
//           <h2>Mi Proceso de Trabajo</h2>
//           <div className="process-steps">
//             <div className="step">
//               <span>1</span>
//               <h3>Consulta Inicial</h3>
//               <p>Discusión de necesidades, presupuesto y expectativas.</p>
//             </div>
//             <div className="step">
//               <span>2</span>
//               <h3>Concepto y Diseño</h3>
//               <p>
//                 Desarrollo de propuestas conceptuales y planos preliminares.
//               </p>
//             </div>
//             <div className="step">
//               <span>3</span>
//               <h3>Desarrollo del Proyecto</h3>
//               <p>Elaboración de planos ejecutivos y documentación técnica.</p>
//             </div>
//             <div className="step">
//               <span>4</span>
//               <h3>Ejecución</h3>
//               <p>Supervisión de la construcción y gestión del proyecto.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";

const Services = () => {
  const services = [
    {
      title: "Diseño Arquitectónico",
      description:
        "Creación de proyectos arquitectónicos personalizados que combinan funcionalidad, estética y eficiencia energética.",
      icon: "📐",
    },
    {
      title: "Dirección de Obra",
      description:
        "Supervisión profesional de la ejecución del proyecto para garantizar el cumplimiento del diseño y la calidad constructiva.",
      icon: "🏗️",
    },
    {
      title: "Consultoría",
      description:
        "Asesoramiento especializado en todas las fases del proyecto, desde la concepción hasta la finalización.",
      icon: "💡",
    },
    {
      title: "Renderizados 3D",
      description:
        "Visualizaciones fotorrealistas que permiten prever el resultado final del proyecto antes de su construcción.",
      icon: "🖥️",
    },
    {
      title: "Reformas y Rehabilitación",
      description:
        "Transformación de espacios existentes para adaptarlos a nuevas necesidades o mejorar su eficiencia.",
      icon: "🔨",
    },
    {
      title: "Licencias y Trámites",
      description:
        "Gestión de toda la documentación necesaria para la obtención de licencias y permisos de construcción.",
      icon: "📋",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consulta Inicial",
      description: "Discusión de necesidades, presupuesto y expectativas.",
    },
    {
      step: "2",
      title: "Concepto y Diseño",
      description:
        "Desarrollo de propuestas conceptuales y planos preliminares.",
    },
    {
      step: "3",
      title: "Desarrollo del Proyecto",
      description: "Elaboración de planos ejecutivos y documentación técnica.",
    },
    {
      step: "4",
      title: "Ejecución",
      description: "Supervisión de la construcción y gestión del proyecto.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Título e introducción */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Servicios Profesionales
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Ofrezco soluciones integrales adaptadas a las necesidades específicas
          de cada cliente y proyecto.
        </p>

        {/* Grid de servicios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Proceso de trabajo */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Mi Proceso de Trabajo
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
