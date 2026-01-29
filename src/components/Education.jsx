import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import translations from "../i18n/translations.json";
import "../styles/global.css";

export default function Education() {
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

  const logos = [
    "https://sii.upa.edu.mx/image/icono/logo_upp.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5VqkL5o4HuQvfF2K0gOvQRASTNOI6cYDwJA&s"
  ];

  const estudios = translations[lang].education.studies.map((study, index) => ({
    ...study,
    logo: logos[index]
  }));

  return (
    <section className="estudios" id="estudios">
      <div className="estudios__contenedor">
        <h2>{getTranslation("education.title", lang)}</h2>
        <ul className="estudios__lista">
          {estudios.map((estudio, index) => (
            <motion.li
              key={index}
              className="estudios__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="estudios__institucion">
                <img src={estudio.logo} alt={`Logo ${estudio.institucion}`} />
                <div>
                  <strong>{estudio.institucion}</strong>
                  <p>{estudio.nivel}</p>
                </div>
                <span>{estudio.periodo}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
