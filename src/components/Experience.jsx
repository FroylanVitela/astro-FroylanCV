import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";
import translations from "../i18n/translations.json";
import "../styles/global.css";

export default function Experience() {
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
    "https://lh4.googleusercontent.com/proxy/Prxv2vsriZ83dmheJYBEPJDHRyIxLbA_tlKdZ6ppmPkdSAOjCqlanLLrTVXwVI9Xik51PkNvdhWB4tYemnNB4me2Kw99RH4=w1365-h664",
    "https://electroniccats.com/openhardwaremonth/static/logo_electroniccats-c14f4b90646a1705f118e69f56070c40.png",
    "https://qmcmex.com/public/imgs/logos/QMCB.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jatco_logo.svg/250px-Jatco_logo.svg.png",
    "https://cdn-icons-png.flaticon.com/512/1995/1995437.png"
  ];

  const trabajos = translations[lang].experience.jobs.map((job, index) => ({
    ...job,
    logo: logos[index]
  }));

  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia__contenedor">
        <h2>{getTranslation("experience.title", lang)}</h2>
        <ul className="experiencia__lista">
          {trabajos.map((trabajo, index) => (
            <motion.li
              key={index}
              className="experiencia__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experiencia__empresa">
                <img src={trabajo.logo} alt={`Logo ${trabajo.empresa}`} />
                <strong>{trabajo.empresa}</strong>
                <span>{trabajo.fecha}</span>
              </div>
              {Array.isArray(trabajo.descripcion) ? (
                <ul className="experiencia__descripcion">
                  {trabajo.descripcion.map((punto, i) => (
                    <li key={i}>
                      <span className="icono">◆</span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{trabajo.descripcion}</p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
