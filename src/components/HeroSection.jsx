import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = [
    "/assets/img/otro-fondo-1.png",
    "/assets/img/fondos-de-arquitectura.jpg",
    "/assets/img/otro-fondo.png",
    // "/assets/img/planos.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Carrusel con <img> para mantener calidad */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay oscuro encima */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Diseño Arquitectónico Innovador
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Creando espacios que inspiran y perduran
        </p>
        <Link
          to="/contact"
          className="bg-accent-blue hover:bg-accent-purple text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
        >
          Contactar
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
