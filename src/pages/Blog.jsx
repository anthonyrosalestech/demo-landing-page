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

  return (
    <div className="blog-page">
      <div className="container">
        <h1>Blog de Arquitectura</h1>

        {/* Filtros por categoría */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        {/* Listado de posts */}
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
