import React from "react";
import { Link } from "react-router-dom";
import "./../styles/main.css";

// const BlogCard = ({ post }) => {
//   return (
//     <div className="blog-card">
//       <div className="post-image">
//         <img src={"/assets/img/teams.jpg"} alt={post.title} />
//       </div>
//       <div className="post-content">
//         <span className="post-date">{post.date}</span>
//         <h3>{post.title}</h3>
//         <p>{post.excerpt}</p>
//         <Link to={`/blog/${post.id}`} className="read-more">
//           Leer más
//         </Link>
//       </div>
//     </div>
//   );
// };

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[450px]">
      {/* Imagen */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={"/assets/img/teams.jpg"}
          alt={post.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-gray-400 text-sm mb-2">{post.date}</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 flex-1 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="mt-auto inline-block text-blue-600 font-medium hover:underline"
        >
          Leer más
        </Link>
      </div>
    </div>
  );
};

// const BlogCard = ({ post }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[450px]">
//       {/* Imagen */}
//       <div className="h-48 w-full overflow-hidden">
//         <img
//           src={"/assets/img/teams.jpg"}
//           alt={post.title}
//           className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Contenido */}
//       <div className="p-6 flex flex-col flex-1">
//         <span className="text-dark-muted text-sm mb-2">{post.date}</span>
//         <h3 className="text-xl font-semibold text-dark-softer mb-3">
//           {post.title}
//         </h3>
//         <p className="text-dark-muted flex-1 mb-4">{post.excerpt}</p>
//         <Link
//           to={`/blog/${post.id}`}
//           className="mt-auto inline-block text-accent-purple font-medium hover:underline"
//         >
//           Leer más
//         </Link>
//       </div>
//     </div>
//   );
// };

export default BlogCard;

