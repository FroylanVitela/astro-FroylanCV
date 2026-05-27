import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";


const proyectos = [
  {
    id: "stellar-stock",
    titleKey: "projects.stellarStock.title",
    descKey: "projects.stellarStock.description",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    category: "Web App",
    tipo: "school",
    liveUrl: null,
    imageCount: 11,
    imageExt: "png"
  },
  {
    id: "vitela-warehouse",
    titleKey: "projects.vitelaWarehouse.title",
    descKey: "projects.vitelaWarehouse.description",
    tech: ["React", "Airtable", "Vercel"],
    category: "Web App",
    tipo: "internal",
    liveUrl: null,
    imageCount: 4,
    imageExt: "png"
  },
  {
    id: "vitelas-website",
    titleKey: "projects.vitelasWebsite.title",
    descKey: "projects.vitelasWebsite.description",
    tech: ["React", "Netlify"],
    category: "Website",
    tipo: "official",
    liveUrl: "https://vitelas.netlify.app/",
    imageCount: 10,
    imageExt: "png"
  },
  /* {
    id: "gamezone",
    titleKey: "projects.gamezone.title",
    descKey: "projects.gamezone.description",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "E-commerce",
    tipo: "school",
    liveUrl: null,
    imageCount: 0
  }, */
  {
    id: "jatco-inventory",
    titleKey: "projects.jatcoInventory.title",
    descKey: "projects.jatcoInventory.description",
    tech: ["Excel", "VBA", "Access", "SQL"],
    category: "Desktop App",
    tipo: "internal",
    liveUrl: null,
    imageCount: 12,
    imageExt: "png"
  },
  {
    id: "itotal",
    titleKey: "projects.itotal.title",
    descKey: "projects.itotal.description",
    tech: ["Oracle Apex", "PL/SQL", "Oracle DB"],
    category: "Enterprise",
    tipo: "internal",
    liveUrl: null,
    imageCount: 15,
    imageExt: "jpeg"
  }
];

// Componente de imagen estática individual
function ImageCarousel({ projectId, imageCount, imageExt }) {
  const [index, setIndex] = useState(0);

  if (imageCount === 0) {
    return (
      <div className="proyectos__imagen">
        <span style={{ fontSize: "2rem" }}>📁</span>
        <span>// Agrega imágenes a: /images/projects/{projectId}/</span>
        <span style={{ fontSize: "0.65rem", marginTop: "4px" }}>Nombra: 1.jpg, 2.jpg, etc.</span>
      </div>
    );
  }

  // Precarga ligera de la siguiente y anterior imagen
  useEffect(() => {
    if (imageCount <= 1) return;
    const nextIndex = (index + 1) % imageCount;
    const prevIndex = index === 0 ? imageCount - 1 : index - 1;

    const nextImg = new Image();
    nextImg.src = `/images/projects/${projectId}/${nextIndex + 1}.${imageExt}`;
    const prevImg = new Image();
    prevImg.src = `/images/projects/${projectId}/${prevIndex + 1}.${imageExt}`;
  }, [index, projectId, imageCount, imageExt]);

  const goPrev = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === 0 ? imageCount - 1 : i - 1));
  };

  const goNext = (e) => {
    e?.stopPropagation();
    setIndex((i) => (i === imageCount - 1 ? 0 : i + 1));
  };

  return (
    <div className="proyectos__imagen proyectos__imagen--carousel">
      <img
        src={`/images/projects/${projectId}/${index + 1}.${imageExt}`}
        alt={`${projectId} - ${index + 1}`}
        className="proyectos__carousel-img"
        loading="lazy"
        onError={() => { /* si falla, no hacemos reintentos automáticos */ }}
      />

      {imageCount > 1 && (
        <>
          <button className="proyectos__carousel-btn proyectos__carousel-btn--prev" onClick={goPrev} aria-label="Anterior">
            ‹
          </button>
          <button className="proyectos__carousel-btn proyectos__carousel-btn--next" onClick={goNext} aria-label="Siguiente">
            ›
          </button>
          <div className="proyectos__carousel-dots">
            {Array.from({ length: imageCount }).map((_, idx) => (
              <span
                key={idx}
                className={`proyectos__carousel-dot ${idx === index ? "active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setIndex(idx); }}
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
              {/* Carrusel de imágenes */}
              <ImageCarousel
                projectId={proyecto.id}
                imageCount={proyecto.imageCount}
                imageExt={proyecto.imageExt || "png"}
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