import { motion } from "framer-motion";
import "../styles/global.css"; // Asegúrate de que el archivo existe

export default function Presentation() {
  return (
    <section className="presentacion" id="inicio">
      <div className="presentacion__contenedor">
        <motion.img
          src="https://www.webanimales.com/ficheros/2014/03/akita-webanimales.jpg"
          alt="Froylán Vitela"
          className="presentacion__imagen"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="presentacion__texto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>ISC. Víctor Froylán Vitela Cuevas</h1>
          <p style={{ textAlign: "justify" }}>
            Estudiante de Ingeniería en Sistemas Computacionales con
            base técnica en programación. Me considero responsable,
            adaptable y con habilidades sólidas en resolución de problemas,
            liderazgo y trabajo en equipo. Tengo experiencia tanto en
            soporte técnico como en atención a usuarios, y busco
            oportunidades para seguir desarrollándome en el área
            tecnológica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
