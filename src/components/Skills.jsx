import { motion } from "framer-motion";
import "../styles/global.css";

const skills = [
  { nombre: "JavaScript", icono: "/img/js.png" },
  { nombre: "React", icono: "/img/react.png" },
  { nombre: "Astro", icono: "/img/astro.png" },
  { nombre: "Make", icono: "/img/make.png" },
  { nombre: "Airtable", icono: "/img/airtable.png" },
  { nombre: "Discord Webhooks", icono: "/img/discord.png" },
  { nombre: "HTML", icono: "/img/html.png" },
  { nombre: "CSS", icono: "/img/css.png" },
  { nombre: "Git", icono: "/img/git.png" },
  { nombre: "Figma", icono: "/img/figma.png" }
];

export default function Skills() {
  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades__contenedor">
        <h2>Habilidades y Herramientas</h2>
        <ul className="habilidades__lista">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="habilidades__item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={skill.icono} alt={skill.nombre} />
              {skill.nombre}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
