import { motion } from "framer-motion";
import "../styles/global.css";

export default function Certifications() {
  const cursos = [
    {
      titulo: "Certificado en SCRUM Fundamentals",
      institucion: "SCRUMstudy",
      fecha: "2025",
      logo: "https://edinburghagile.com/wp-content/uploads/2020/09/scrumstudy-logo.jpg",
      comprobante: "/doc/ScrumFundamentalsCertified-FroylanVitela-1072655.pdf",
    },
    {
      titulo: "Curso completo de HTML, CSS y JavaScript",
      institucion: "Inadaptados",
      fecha: "2024",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dWT2-BHSMzY6KkUIRwWW0PRsJorfp43aHQ&s",
    }
  ];

  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones__contenedor">
        <h2>Cursos y Certificaciones</h2>
        <ul className="certificaciones__lista">
          {cursos.map((curso, index) => (
            <motion.li
              key={index}
              className="certificaciones__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {curso.logo && (
                <div className="certificaciones__logo-contenedor">
                  <img
                    src={curso.logo}
                    alt={`Logo de ${curso.institucion}`}
                    className="certificaciones__logo"
                  />
                </div>
              )}
              <div className="certificaciones__contenido">
                <strong>{curso.titulo}</strong>
                <p>{curso.institucion} — {curso.fecha}</p>
                {curso.comprobante && (
                  <a
                    href={curso.comprobante}
                    download
                    className="boton-descarga boton-descarga--mini"
                  >
                    Descargar comprobante
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
