import { motion } from "framer-motion";
import "../styles/global.css";

export default function About() {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="sobre-mi__contenedor">
        <motion.div
          className="sobre-mi__bloque"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="sobre-mi__titulo">
            <h2>Sobre mí</h2> 
            <img
              src="https://img.icons8.com/?size=100&id=ngVgo0VzeU9w&format=png&color=000000"
              alt="Icono de presentación"
              className="sobre-mi__icono"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <p>
            Soy Froylán, un estudiante de Ingeniería en Sistemas Computacionales con
            base técnica en programación. Me considero responsable,
            adaptable y con habilidades sólidas en resolución de problemas,
            liderazgo y trabajo en equipo. Mis pasatiempo incluyen jugar videojuegos,
            ver series y películas, y disfrutar de la música. Me apasiona aprender.
          </p>
        </motion.div>

        <motion.div
          className="sobre-mi__bloque"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="sobre-mi__titulo">
            <img
              src="/images/logo.png"
              alt="Logo de Vitela's"
              className="sobre-mi__icono"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <p>
            Cofundador de <strong>Vitela’s</strong>, un pequeño negocio de personalización de artículos como tazas, termos y más. 
            Me encargo de la gestión digital, diseño de productos y atención al cliente, combinando tecnología con creatividad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
