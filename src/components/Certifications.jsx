import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import translations from "../i18n/translations.json";
import "../styles/global.css";

export default function Certifications() {
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
    "https://edinburghagile.com/wp-content/uploads/2020/09/scrumstudy-logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dWT2-BHSMzY6KkUIRwWW0PRsJorfp43aHQ&s"
  ];

  const cursos = translations[lang].certifications.items.map((item, index) => ({
    ...item,
    logo: logos[index],
    comprobante: index === 0 ? "/doc/ScrumFundamentalsCertified-FroylanVitela-1072655.pdf" : null
  }));

  return (
    <section className="certificaciones" id="certificaciones">
      <div className="certificaciones__contenedor">
        <h2>{getTranslation("certifications.title", lang)}</h2>
        <ul className="certificaciones__lista">
          {cursos.map((curso, index) => (
            <motion.li
              key={index}
              className="certificaciones__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {curso.logo && (
                <div className="certificaciones__logo-contenedor">
                  <img
                    src={curso.logo}
                    alt={`Logo ${curso.institucion}`}
                    className="certificaciones__logo"
                  />
                </div>
              )}
              <div className="certificaciones__contenido">
                <strong>{curso.titulo}</strong>
                <p>{curso.institucion} — {curso.fecha}</p>
                {curso.comprobante && (
                  <a
                    href={curso.comprobante}
                    download
                    className="boton-descarga boton-descarga--mini"
                  >
                    {getTranslation("certifications.downloadCertificate", lang)}
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
