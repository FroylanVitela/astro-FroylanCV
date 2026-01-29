import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css"; // Asegúrate de que el archivo existe

export default function Presentation() {
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
    <section className="presentacion" id="inicio">
      <div className="presentacion__contenedor">
        <motion.img
          src="/images/PERFIL.png"
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
          <h1>{getTranslation("presentation.title", lang)}</h1>
          <p>
            {getTranslation("presentation.subtitle", lang)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
