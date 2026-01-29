import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

export default function About() {
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
            <h2>{getTranslation("about.title", lang)}</h2>
            <img
              src="https://img.icons8.com/?size=100&id=ngVgo0VzeU9w&format=png&color=000000"
              alt="Presentation icon"
              className="sobre-mi__icono"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <p>
            {getTranslation("about.description", lang)}
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
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <p>
            {getTranslation("about.viela", lang)}
          </p>
          <a href="/doc/Catalogo Vitela's 2025.pdf" download className="boton-descarga">{getTranslation("about.downloadCatalog", lang)}</a>
        </motion.div>
      </div>
    </section>
  );
}
