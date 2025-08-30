// import React, { useState } from "react";
// import "./../styles/main.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     projectType: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Aquí iría la lógica para enviar el formulario
//     console.log("Formulario enviado:", formData);
//     alert("Gracias por tu mensaje. Me pondré en contacto contigo pronto.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//       projectType: "",
//     });
//   };

//   return (
//     <div className="contact-page">
//       <div className="container">
//         <h1>Contacto</h1>

//         <div className="contact-content">
//           <div className="contact-info">
//             <h2>Información de Contacto</h2>
//             <div className="info-item">
//               <h3>Email</h3>
//               <p>contacto@estudioarquitectura.com</p>
//             </div>
//             <div className="info-item">
//               <h3>Teléfono</h3>
//               <p>+34 123 456 789</p>
//             </div>
//             <div className="info-item">
//               <h3>Dirección</h3>
//               <p>
//                 Calle Arquitectura, 123
//                 <br />
//                 28001 Madrid, España
//               </p>
//             </div>
//             <div className="info-item">
//               <h3>Horario</h3>
//               <p>Lunes a Viernes: 9:00 - 18:00</p>
//             </div>
//           </div>

//           <div className="contact-form">
//             <h2>Envíame un Mensaje</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Nombre</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phone">Teléfono (opcional)</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="projectType">Tipo de Proyecto</label>
//                 <select
//                   id="projectType"
//                   name="projectType"
//                   value={formData.projectType}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Selecciona una opción</option>
//                   <option value="residencial">Residencial</option>
//                   <option value="comercial">Comercial</option>
//                   <option value="institucional">Institucional</option>
//                   <option value="otro">Otro</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Mensaje</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn-primary btn">
//                 Enviar Mensaje
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="map-section">
//           <h2>Ubicación</h2>
//           <div className="map-container">
//             <iframe
//               title="Estudio de Arquitectura"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.496317240534!2d-3.703790384603874!3d40.41677547936467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e9a1d5e25%3A0x7a0b1a0b1a0b1a0b!2sPlaza%20Mayor%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
//               width="100%"
//               height="400"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("Gracias por tu mensaje. Me pondré en contacto contigo pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: "",
    });
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-12 text-left p-8">
          Contacto
        </h1> */}
        {/* Título mejorado */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-left leading-tight py-8">
            Contacto
          </h1>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
          <p className="text-gray-600 mt-4 text-left">
            Explora nuestros últimos artículos sobre arquitectura, diseño y
            proyectos destacados.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow flex flex-col space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Información de Contacto
              </h2>
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">
                  contacto@estudioarquitectura.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Teléfono</h3>
                <p className="text-gray-600">+34 123 456 789</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Dirección</h3>
                <p className="text-gray-600">
                  Calle Arquitectura, 123
                  <br />
                  28001 Madrid, España
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Horario</h3>
                <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Envíame un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 mb-1"
                  htmlFor="projectType"
                >
                  Tipo de Proyecto
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="institucional">Institucional</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Ubicación
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Estudio de Arquitectura"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.496317240534!2d-3.703790384603874!3d40.41677547936467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e9a1d5e25%3A0x7a0b1a0b1a0b1a0b!2sPlaza%20Mayor%2C%20Madrid!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
