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
          </div>
          <p>
            Soy Froylán, estudiante de Ingeniería en Sistemas Computacionales con formación técnica en programación.
            Me apasiona crear soluciones tecnológicas elegantes, funcionales y con un toque personal. Disfruto del diseño limpio, las interfaces modernas, y automatizar procesos para facilitar la vida de las personas y empresas.
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
            
            <img src="/images/logo.png" alt="Logo de Vitela's" className="sobre-mi__icono" />
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
