import { motion } from "framer-motion";
import "../styles/global.css";

export default function Education() {
const estudios = [
    {
        institucion: "Universidad Politécnica de Aguascalientes",
        logo: "https://sii.upa.edu.mx/image/icono/logo_upp.png",
        nivel: "Ingeniería en Sistemas Computacionales",
        periodo: "2022 - Actualidad"
    },
    {
        institucion: "CBTis No. 168",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VqkL5o4HuQvfF2K0gOvQRASTNOI6cYDwJA&s",
        nivel: "Técnico en Programación",
        periodo: "2019 - 2022"
    }
];

  return (
    <section className="estudios" id="estudios">
      <div className="estudios__contenedor">
        <h2>Estudios</h2>
        <ul className="estudios__lista">
          {estudios.map((estudio, index) => (
            <motion.li
              key={index}
              className="estudios__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="estudios__institucion">
                <img src={estudio.logo} alt={`Logo de ${estudio.institucion}`} />
                <div>
                  <strong>{estudio.institucion}</strong>
                  <p>{estudio.nivel}</p>
                </div>
                <span>{estudio.periodo}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
