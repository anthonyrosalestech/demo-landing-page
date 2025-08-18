import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import "./../styles/main.css";

// Datos de ejemplo (deberías reemplazarlos con tus datos reales)
const featuredProjects = [
  {
    id: 1,
    title: "Casa Moderna en la Montaña",
    image: "https://via.placeholder.com/400x300",
    type: "Residencial",
    year: "2022",
  },
  {
    id: 2,
    title: "Oficinas Corporativas",
    image: "https://via.placeholder.com/400x300",
    type: "Comercial",
    year: "2021",
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Tendencias en Arquitectura Sostenible 2023",
    excerpt: "Exploramos las últimas tendencias en diseño sostenible...",
    date: "15 Marzo 2023",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 2,
    title: "Cómo Elegir los Materiales Adecuados para tu Proyecto",
    excerpt: "Guía completa para seleccionar materiales...",
    date: "28 Febrero 2023",
    image: "https://via.placeholder.com/400x200",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Diseño Arquitectónico Innovador</h1>
          <p>Creando espacios que inspiran y perduran</p>
          <Link to="/contact" className="btn-primary btn">
            Contactar
          </Link>
        </div>
      </section>

      {/* Sobre Mí */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src="/assets/img/teams.jpg"
                alt="Arquitecto"
              />
            </div>
            <div className="about-text">
              <h2>Sobre Mí</h2>
              <p>
                Arquitecto con más de 10 años de experiencia creando espacios
                funcionales y estéticos. Mi enfoque combina la innovación con la
                practicidad, siempre buscando soluciones personalizadas para
                cada cliente.
              </p>
              <Link to="/services" className="btn-secondary btn">
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="featured-projects">
        <div className="container">
          <h2>Proyectos Destacados</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-primary btn">
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="blog-preview">
        <div className="container">
          <h2>Últimos Artículos</h2>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/blog" className="btn-secondary btn">
              Ver Más Artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
