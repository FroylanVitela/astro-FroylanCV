import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { getTranslation } from "../utils/i18n";
import "../styles/global.css";

export default function Contact() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
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

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nf4uqc4", "template_hn71x1y", form.current, "a9XSvMyIR-I64LawU")
      .then(() => {
        setEnviado(true);
        form.current.reset();
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((error) => console.error("Error al enviar:", error));
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto__contenedor">
        <h2>{getTranslation("contact.title", lang)}</h2>

        <form ref={form} onSubmit={enviarCorreo} className="contacto__formulario">
          <input name="nombre" type="text" placeholder={getTranslation("contact.namePlaceholder", lang)} required />
          <input name="correo" type="email" placeholder={getTranslation("contact.emailPlaceholder", lang)} required />
          <textarea name="mensaje" placeholder={getTranslation("contact.messagePlaceholder", lang)} required />
          <button type="submit">{getTranslation("contact.send", lang)}</button>
        </form>

        {enviado && <p className="contacto__confirmacion">{getTranslation("contact.success", lang)}</p>}

        <div className="contacto__redes">
          <a href="https://github.com/FroylanVitela" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/froyl%C3%A1n-vitela-1791482a4/" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" />
          </a>
          <a href="mailto:vvitelacuevas@gmail.com">
            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Email" />
          </a>
          <a href="https://wa.me/5214494067829" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/froglan_71?igsh=MnVtM2M2eXE3cTg=" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000" alt="Instagram" />
          </a>
        </div>

        <div className="contacto__cv">
          <a
            href={lang === "es" ? "/doc/VFVC CV.pdf" : "/doc/VFVC CV EN.pdf"}
            download
            className="boton-descarga"
          >
            {getTranslation("contact.downloadCV", lang)}
          </a>
        </div>
      </div>
      <footer style={{ color: "#fff", textAlign: "center", marginTop: "2rem", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Froylán Vitela. {getTranslation("contact.rights", lang)}
      </footer>
    </section>
  );
}