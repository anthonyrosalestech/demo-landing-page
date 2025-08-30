import { Link } from "react-router-dom";
import BlogCard from "./BlogCard"; // Ajusta la ruta
import { useRef } from "react";

const BlogCarousel = ({ recentPosts }) => {
  const carouselRef = useRef(null);

  // Flechas
  const scrollLeftBtn = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Últimos Artículos
        </h2>

        {/* Carrusel con flechas */}
        <div className="relative" style={{ padding: "0px 0px" }}>
          {/* Flecha izquierda */}
          <button
            onClick={scrollLeftBtn}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full shadow z-20 hover:bg-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Contenedor scroll */}
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-80 snap-start transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={scrollRightBtn}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-80 text-white p-3 rounded-full shadow z-20 hover:bg-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Botón ver más */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition-colors duration-300"
          >
            Ver Más Artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
