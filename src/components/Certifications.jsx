import { motion } from "framer-motion";
import "../styles/global.css";

export default function Certifications() {
  const cursos = [
    {
      titulo: "Curso de Automatización con Make",
      institucion: "Platzi",
      fecha: "2024"
    },
    {
      titulo: "Certificado en JavaScript",
      institucion: "FreeCodeCamp",
      fecha: "2023"
    },
    {
      titulo: "Curso de UX/UI",
      institucion: "Google Activate",
      fecha: "2022"
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
              <strong>{curso.titulo}</strong>
              <p>{curso.institucion} — {curso.fecha}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
