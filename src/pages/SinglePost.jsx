import React from "react";
import { useParams } from "react-router-dom";
import "./../styles/main.css";

// Datos de ejemplo
const postData = {
  1: {
    title: "Tendencias en Arquitectura Sostenible 2023",
    content: `
      <h2>Introducción</h2>
      <p>La arquitectura sostenible ha evolucionado significativamente en los últimos años. En 2023, vemos una combinación de tecnologías innovadoras y enfoques tradicionales que están redefiniendo el diseño ecológico.</p>
      
      <h2>Materiales Sostenibles</h2>
      <p>El uso de materiales locales y reciclados sigue siendo una tendencia dominante. Materiales como el bambú, el corcho y el hormigón bajo en carbono están ganando popularidad.</p>
      
      <h2>Diseño Bioclimático</h2>
      <p>Los arquitectos están aprovechando cada vez más las condiciones naturales del entorno para reducir el consumo energético. Esto incluye la orientación óptima de los edificios, el uso de vegetación como aislante natural y sistemas de ventilación pasiva.</p>
    `,
    date: "15 Marzo 2023",
    category: "Tendencias",
    image: "https://via.placeholder.com/800x400",
    readTime: "5 min",
    author: "Nombre del Arquitecto",
  },
};

const SinglePost = () => {
  const { id } = useParams();
  const post = postData[id];

  if (!post) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div className="single-post">
      <div className="container">
        <div className="post-header">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>Por {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </div>

        <div className="featured-image">
          <img src={"/assets/img/teams.jpg"} alt={post.title} />
        </div>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="post-footer">
          <div className="tags">
            <span>Etiquetas:</span>
            <a href="#">sostenibilidad</a>
            <a href="#">diseño</a>
            <a href="#">tendencias</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
