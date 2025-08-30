import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
// import BlogCard from "../components/BlogCard";
import "./../styles/main.css";
import BlogCarousel from "../components/BlogCarousel";

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
  {
    id: 3,
    title: "Tendencias en Arquitectura Sostenible 2023",
    excerpt: "Exploramos las últimas tendencias en diseño sostenible...",
    date: "15 Marzo 2023",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 4,
    title: "Cómo Elegir los Materiales Adecuados para tu Proyecto",
    excerpt: "Guía completa para seleccionar materiales...",
    date: "28 Febrero 2023",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 5,
    title: "Tendencias en Arquitectura Sostenible 2023",
    excerpt: "Exploramos las últimas tendencias en diseño sostenible...",
    date: "15 Marzo 2023",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 6,
    title: "Cómo Elegir los Materiales Adecuados para tu Proyecto",
    excerpt: "Guía completa para seleccionar materiales...",
    date: "28 Febrero 2023",
    image: "https://via.placeholder.com/400x200",
  },
  {
    id: 7,
    title: "Otro Artículo de Ejemplo",
    excerpt: "Guía completa para seleccionar materiales...",
    date: "28 Febrero 2023",
    image: "https://via.placeholder.com/400x200",
  },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* <section className="hero">
        <div className="container">
          <h1>Diseño Arquitectónico Innovador</h1>
          <p>Creando espacios que inspiran y perduran</p>
          <Link to="/contact" className="btn-primary btn">
            Contactar
          </Link>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="bg-dark-light text-dark-text py-20 relative hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Diseño Arquitectónico Innovador
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Creando espacios que inspiran y perduran
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-10 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            // className="inline-block bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300"
            // className="inline-block rounded-lg top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-100 text-white p-3 shadow hover:bg-gray-900 transition-colors duration-300 px-10"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* Sobre Mí */}
      {/* <section className="about-section">
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
      </section> */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:flex md:items-center md:gap-12">
          {/* Imagen */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/assets/img/teams.jpg"
              alt="Arquitecto"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Mí</h2>
            <p className="text-gray-600 mb-6">
              Arquitecto con más de 10 años de experiencia creando espacios
              funcionales y estéticos. Mi enfoque combina la innovación con la
              practicidad, siempre buscando soluciones personalizadas para cada
              cliente.
            </p>
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      {/* <section className="featured-projects">
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
      </section> */}
      {/* Proyectos Destacados */}
      <section className="bg-gray-150 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Proyectos Destacados
          </h2>

          {/* Grid de proyectos */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Botón ver todos */}
          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Ver Todos los Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      {/* <section className="blog-preview">
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
      </section> */}

      {/* Blog Preview */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Últimos Artículos
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300"
            >
              Ver Más Artículos
            </Link>
          </div>
        </div>
      </section> */}

      <BlogCarousel recentPosts={recentPosts} />
    </div>
  );
};

export default Home;

