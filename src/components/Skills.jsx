import { motion } from "framer-motion";
import "../styles/global.css";

const skills = [
  { nombre: "JavaScript", icono: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" },
  { nombre: "React", icono: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
  { nombre: "Make", icono: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/make-color.png" },
  { nombre: "Airtable", icono: "https://img.icons8.com/?size=100&id=elyFOMuEo0iE&format=png&color=000000" },
  { nombre: "Discord Webhooks", icono: "https://img.icons8.com/?size=100&id=2mIgusGquJFz&format=png&color=000000" },
  { nombre: "HTML", icono: "https://img.icons8.com/?size=100&id=m5nSBCnsTzEl&format=png&color=000000" },
  { nombre: "CSS", icono: "https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000" },
  { nombre: "Java", icono: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
  { nombre: "Figma", icono: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
  { nombre: "Excel", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1166px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png"},
  { nombre: "Nodejs", icono: "https://www.datocms-assets.com/148875/1739885462-circular-logo-nodejs.png"},
  { nombre: "SQL", icono: "https://cdn-icons-png.flaticon.com/512/17265/17265861.png"},
  { nombre: "Access", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Microsoft_Office_Access_%282025-present%29.svg/1051px-Microsoft_Office_Access_%282025-present%29.svg.png"},
  { nombre: "Astro", icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWmnWIsknNlc0uemt3e9eBHXAf2OibUWb6Q&s"},
  { nombre: "Python", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/350px-Python.svg.png"},
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
