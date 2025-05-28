import { motion } from "framer-motion";
import "../styles/global.css"; // Asegúrate de que el archivo existe

export default function Presentation() {
  return (
    <section className="presentacion" id="inicio">
      <div className="presentacion__contenedor">
        <motion.img
          src="/images/PERFIL.jpg"
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
            Ingeniero en formación con base técnica en programación, enfocado en soluciones tecnológicas funcionales y elegantes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
