import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Estudio de Arquitectura</h3>
            <p>Diseño innovador para espacios únicos.</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces</h3>
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
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>email@estudioarquitectura.com</p>
            <p>+34 123 456 789</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Estudio de Arquitectura. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
