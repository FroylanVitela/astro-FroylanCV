import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

const skills = [
  { nombre: "JavaScript", icono: "https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" },
  { nombre: "React", icono: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000" },
  { nombre: "Node.js", icono: "https://www.datocms-assets.com/148875/1739885462-circular-logo-nodejs.png" },
  { nombre: "Express", icono: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
  { nombre: "MongoDB", icono: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  { nombre: "Airtable", icono: "https://cdn.iconscout.com/icon/free/png-256/free-airtable-logo-icon-svg-download-png-1254387.png" },
  { nombre: "Make", icono: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/make-color.png" },
  { nombre: "HTML", icono: "https://img.icons8.com/?size=100&id=m5nSBCnsTzEl&format=png&color=000000" },
  { nombre: "CSS", icono: "https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000" },
  { nombre: "Tailwind CSS", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png" },
  { nombre: "Next.js", icono: "https://us-east-1.graphassets.com/Abgsgv6A7SOmdd6d9vwuEz/VKHHNvEETYqZRkqgjybc  " },
  { nombre: "Astro", icono: "https://astro.build/assets/press/astro-icon-light-gradient.png" },
  { nombre: "Python", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" },
  { nombre: "Java", icono: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000" },
  { nombre: "Excel", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/1280px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png" },
  { nombre: "VBA", icono: "https://www.aprender21.com/images/colaboradores/vba.png" },
  { nombre: "SQL", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Microsoft_SQL_Server_2025_icon.svg/3840px-Microsoft_SQL_Server_2025_icon.svg.png" },
  { nombre: "Access", icono: "https://download.logo.wine/logo/Microsoft_Access/Microsoft_Access-Logo.wine.png" },
  { nombre: "Oracle Apex", icono: "https://pretius.com/wp-content/uploads/2024/03/apex-logo.png" },
  { nombre: "PL/SQL", icono: "https://www.hatthieves.es/wp-content/uploads/2019/09/16-420x300.png" },
  { nombre: "Discord Webhooks", icono: "https://img.icons8.com/?size=100&id=2mIgusGquJFz&format=png&color=000000" },
  { nombre: "Figma", icono: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" },
  { nombre: "Raspberry Pi", icono: "https://www.raspberrypi.com/app/uploads/2020/06/raspberrry_pi_logo.png" },
  { nombre: "Docker", icono: "https://images.icon-icons.com/2415/PNG/512/docker_original_logo_icon_146556.png" }
];

export default function Skills() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "es";
    setLang(savedLang);

    const handleLanguageChange = (e) => {
      setLang(e.detail.lang);
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades__contenedor">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {getTranslation("skills.title", lang)}
        </motion.h2>
        <ul className="habilidades__lista">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="habilidades__item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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