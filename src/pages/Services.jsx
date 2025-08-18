import React from "react";
import "./../styles/main.css";

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

  return (
    <div className="services-page">
      <div className="container">
        <h1>Servicios Profesionales</h1>
        <p className="intro-text">
          Ofrezco soluciones integrales adaptadas a las necesidades específicas
          de cada cliente y proyecto.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>Mi Proceso de Trabajo</h2>
          <div className="process-steps">
            <div className="step">
              <span>1</span>
              <h3>Consulta Inicial</h3>
              <p>Discusión de necesidades, presupuesto y expectativas.</p>
            </div>
            <div className="step">
              <span>2</span>
              <h3>Concepto y Diseño</h3>
              <p>
                Desarrollo de propuestas conceptuales y planos preliminares.
              </p>
            </div>
            <div className="step">
              <span>3</span>
              <h3>Desarrollo del Proyecto</h3>
              <p>Elaboración de planos ejecutivos y documentación técnica.</p>
            </div>
            <div className="step">
              <span>4</span>
              <h3>Ejecución</h3>
              <p>Supervisión de la construcción y gestión del proyecto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
