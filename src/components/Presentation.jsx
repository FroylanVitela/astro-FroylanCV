import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
        />
        <motion.div
          className="presentacion__texto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1>{getTranslation("presentation.title", lang)}</h1>
          <p>
            {getTranslation("presentation.subtitle", lang)}
          </p>
        </motion.div>
      </div>

      {/* Smooth wave divider at bottom */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
          />
        </svg>
      </div>
    </section>
  );
}