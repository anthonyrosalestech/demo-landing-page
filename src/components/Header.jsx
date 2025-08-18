import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Estudio Arquitectura</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
            <li>
              <Link to="/services">Servicios</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
