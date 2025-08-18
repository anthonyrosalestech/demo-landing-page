import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="post-image">
        <img src={"/assets/img/teams.jpg"} alt={post.title} />
      </div>
      <div className="post-content">
        <span className="post-date">{post.date}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="read-more">
          Leer más
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
