import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado del menú

  // shadow-md
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700 tracking-wide hover:text-blue-900 transition">
          <Link to="/">Estudio Arquitectura</Link>
        </div>

        {/* Navegación escritorio */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Proyectos
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link
            to="/blog"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>

        {/* Botón hamburguesa móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} // Cambia a "X" cuando está abierto
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/projects"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </Link>
          <Link
            to="/services"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/blog"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
