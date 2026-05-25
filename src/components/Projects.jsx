import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

// TODO: Replace placeholder images with your actual project screenshots
// Place images in /public/images/projects/ folder
// Image paths should be: /images/projects/stellar-stock.jpg (example)

const proyectos = [
  {
    id: "stellar-stock",
    titleKey: "projects.stellarStock.title",
    descKey: "projects.stellarStock.description",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    category: "Web App",
    tipo: "school", // proyecto escolar
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "vitela-warehouse",
    titleKey: "projects.vitelaWarehouse.title",
    descKey: "projects.vitelaWarehouse.description",
    tech: ["React", "Airtable", "Vercel"],
    category: "Web App",
    tipo: "internal", // proyecto interno
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "vitelas-website",
    titleKey: "projects.vitelasWebsite.title",
    descKey: "projects.vitelasWebsite.description",
    tech: ["React", "Netlify"],
    category: "Website",
    tipo: "official", // sitio oficial Vitela's
    liveUrl: "https://vitelas.com",
    githubUrl: null
  },
  {
    id: "gamezone",
    titleKey: "projects.gamezone.title",
    descKey: "projects.gamezone.description",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "E-commerce",
    tipo: "school", // proyecto escolar
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "jatco-inventory",
    titleKey: "projects.jatcoInventory.title",
    descKey: "projects.jatcoInventory.description",
    tech: ["Excel", "VBA", "Access", "SQL"],
    category: "Desktop App",
    tipo: "internal", // proyecto interno
    liveUrl: null,
    githubUrl: null
  },
  {
    id: "survey-system",
    titleKey: "projects.surveySystem.title",
    descKey: "projects.surveySystem.description",
    tech: ["Oracle Apex", "PL/SQL", "Oracle DB"],
    category: "Enterprise",
    tipo: "school", // proyecto escolar
    liveUrl: null,
    githubUrl: null
  }
];

export default function Projects() {
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

  const getTipoLabel = (tipo) => {
    if (tipo === "school") return getTranslation("projects.schoolProject", lang);
    if (tipo === "internal") return getTranslation("projects.internalProject", lang);
    return "";
  };

  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos__contenedor">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {getTranslation("projects.title", lang)}
        </motion.h2>
        <motion.p
          className="proyectos__subtitulo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {getTranslation("projects.subtitle", lang)}
        </motion.p>

        <div className="proyectos__grid">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              className="proyectos__tarjeta"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image - Placeholder with comment */}
              <div className="proyectos__imagen">
                {/* TODO: Replace placeholder with your project screenshot */}
                {/* Place image in: /public/images/projects/[project-id].jpg or .png */}
                <span style={{ fontSize: "2rem" }}>📁</span>
                <span>// TODO: Add screenshot</span>
                <span className="proyectos__categoria">{proyecto.category}</span>
              </div>

              <div className="proyectos__contenido">
                <h3 className="proyectos__titulo">
                  {getTranslation(proyecto.titleKey, lang)}
                </h3>
                <p className="proyectos__descripcion">
                  {getTranslation(proyecto.descKey, lang)}
                </p>

                <div className="proyectos__tecnologias">
                  {proyecto.tech.map((tech) => (
                    <span key={tech} className="proyectos__tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="proyectos__enlaces">
                  {proyecto.liveUrl ? (
                    <a 
                      href={proyecto.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="proyectos__btn-primary"
                    >
                      🌐 {getTranslation("projects.visitWebsite", lang)}
                    </a>
                  ) : (
                    <span className="proyectos__tipo-label">
                      {getTipoLabel(proyecto.tipo)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}