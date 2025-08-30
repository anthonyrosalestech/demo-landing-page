import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import "./../styles/main.css";

// Datos de ejemplo
const blogPosts = [
  {
    id: 1,
    title: "Tendencias en Arquitectura Sostenible 2023",
    excerpt:
      "Exploramos las últimas tendencias en diseño sostenible que están marcando la pauta este año.",
    date: "15 Marzo 2023",
    category: "Tendencias",
    image: "https://via.placeholder.com/400x200",
    readTime: "5 min",
  },
  // Agrega más posts aquí
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // return (
  //   <div className="blog-page">
  //     <div className="container">
  //       <h1>Blog de Arquitectura</h1>

  //       {/* Filtros por categoría */}
  //       <div className="category-filters">
  //         {categories.map((category) => (
  //           <button
  //             key={category}
  //             className={activeCategory === category ? "active" : ""}
  //             onClick={() => setActiveCategory(category)}
  //           >
  //             {category === "all" ? "Todos" : category}
  //           </button>
  //         ))}
  //       </div>

  //       {/* Listado de posts */}
  //       <div className="posts-grid">
  //         {filteredPosts.map((post) => (
  //           <BlogCard key={post.id} post={post} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  // return (
  //   <div className="bg-gray-50 min-h-screen py-16">
  //     <div className="container mx-auto px-6">
  //       {/* Título */}
  //       <h1 className="text-4xl font-bold text-gray-800 mb-8 text-left py-8">
  //         Blog de Arquitectura
  //       </h1>

  //       {/* Filtros por categoría */}
  //       <div className="flex flex-wrap justify-start gap-4 mb-12">
  //         {categories.map((category) => (
  //           <button
  //             key={category}
  //             onClick={() => setActiveCategory(category)}
  //             className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300
  //               ${
  //                 activeCategory === category
  //                   ? "bg-blue-600 text-white shadow-lg"
  //                   : "bg-white text-gray-700 hover:bg-gray-100 shadow"
  //               }`}
  //           >
  //             {category === "all" ? "Todos" : category}
  //           </button>
  //         ))}
  //       </div>

  //       {/* Grid de posts */}
  //       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
  //         {filteredPosts.map((post) => (
  //           <BlogCard key={post.id} post={post} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Título mejorado */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-left leading-tight py-8">
            Blog de Arquitectura
          </h1>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-left">
            Explora nuestros últimos artículos sobre arquitectura, diseño y
            proyectos destacados.
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-start gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300
              ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Grid de posts */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
