import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

// Estructura de carpetas:
// /public/images/projects/[project-id]/1.jpg
// /public/images/projects/[project-id]/2.jpg
// etc.

const proyectos = [
  {
    id: "stellar-stock",
    titleKey: "projects.stellarStock.title",
    descKey: "projects.stellarStock.description",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    category: "Web App",
    tipo: "school",
    liveUrl: null,
    githubUrl: null,
    imageCount: 0 // TODO: Cambiar al número de imágenes que agregues
  },
  {
    id: "vitela-warehouse",
    titleKey: "projects.vitelaWarehouse.title",
    descKey: "projects.vitelaWarehouse.description",
    tech: ["React", "Airtable", "Vercel"],
    category: "Web App",
    tipo: "internal",
    liveUrl: null,
    githubUrl: null,
    imageCount: 0
  },
  {
    id: "vitelas-website",
    titleKey: "projects.vitelasWebsite.title",
    descKey: "projects.vitelasWebsite.description",
    tech: ["React", "Netlify"],
    category: "Website",
    tipo: "official",
    liveUrl: "https://vitelas.com",
    githubUrl: null,
    imageCount: 1
  },
  {
    id: "gamezone",
    titleKey: "projects.gamezone.title",
    descKey: "projects.gamezone.description",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "E-commerce",
    tipo: "school",
    liveUrl: null,
    githubUrl: null,
    imageCount: 0
  },
  {
    id: "jatco-inventory",
    titleKey: "projects.jatcoInventory.title",
    descKey: "projects.jatcoInventory.description",
    tech: ["Excel", "VBA", "Access", "SQL"],
    category: "Desktop App",
    tipo: "internal",
    liveUrl: null,
    githubUrl: null,
    imageCount: 0
  },
  {
    id: "itotal",
    titleKey: "projects.itotal.title",
    descKey: "projects.itotal.description",
    tech: ["Oracle Apex", "PL/SQL", "Oracle DB"],
    category: "Enterprise",
    tipo: "internal",
    liveUrl: null,
    githubUrl: null,
    imageCount: 0
  }
];

// Componente de carrusel individual
function ImageCarousel({ projectId, imageCount }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (imageCount === 0) {
    return (
      <div className="proyectos__imagen">
        <span style={{ fontSize: "2rem" }}>📁</span>
        <span>// TODO: Agregar imágenes</span>
      </div>
    );
  }

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  return (
    <div className="proyectos__imagen proyectos__imagen--carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={`/images/projects/${projectId}/${currentIndex + 1}.jpg`}
          alt={`${projectId} - ${currentIndex + 1}`}
          className="proyectos__carousel-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {imageCount > 1 && (
        <>
          <button className="proyectos__carousel-btn proyectos__carousel-btn--prev" onClick={goToPrev}>
            ‹
          </button>
          <button className="proyectos__carousel-btn proyectos__carousel-btn--next" onClick={goToNext}>
            ›
          </button>
          <div className="proyectos__carousel-dots">
            {Array.from({ length: imageCount }).map((_, idx) => (
              <span
                key={idx}
                className={`proyectos__carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [lang, setLang] = useState("es");
  const [detectedCounts, setDetectedCounts] = useState({});

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "es";
    setLang(savedLang);

    const handleLanguageChange = (e) => {
      setLang(e.detail.lang);
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  useEffect(() => {
    // Detect images present in public/images/projects/<projectId>/ by checking common extensions.
    const exts = ["jpg", "jpeg", "png", "webp"];
    const maxPerProject = 8;

    async function detectAll() {
      const results = {};
      for (const proyecto of proyectos) {
        if (proyecto.imageCount && proyecto.imageCount > 0) {
          results[proyecto.id] = proyecto.imageCount;
          continue;
        }

        let count = 0;
        for (let i = 1; i <= maxPerProject; i++) {
          let found = false;
          for (const ext of exts) {
            const url = `/images/projects/${proyecto.id}/${i}.${ext}`;
            try {
              const res = await fetch(url, { method: "HEAD" });
              if (res.ok) {
                found = true;
                break;
              }
            } catch (e) {
              // ignore fetch errors and continue trying other extensions
            }
          }
          if (found) count++;
          else break;
        }
        results[proyecto.id] = count;
      }
      setDetectedCounts(results);
    }

    detectAll();
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
              {/* Carrusel de imágenes */}
              <ImageCarousel
                projectId={proyecto.id}
                imageCount={detectedCounts[proyecto.id] ?? proyecto.imageCount}
              />

              <span className="proyectos__categoria">{proyecto.category}</span>

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