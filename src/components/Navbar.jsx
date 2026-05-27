import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTranslation } from "../utils/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/global.css";

const sections = [
  "inicio", 
  "sobre-mi", 
  "experiencia", 
  "estudios",
  "proyectos",
  "certificaciones", 
  "habilidades", 
  "contacto"
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "es";
    setLang(savedLang);

    const handleLanguageChange = (e) => {
      setLang(e.detail.lang);
    };

    window.addEventListener("languageChanged", handleLanguageChange);
    return () => window.removeEventListener("languageChanged", handleLanguageChange);
  }, []);

  // Scrollspy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId = activeSection;
        for (const entry of entries) {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        }
        setActiveSection(activeId);
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave al hacer clic
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const sectionKeys = {
    "inicio": "navbar.home",
    "sobre-mi": "navbar.about",
    "experiencia": "navbar.experience",
    "estudios": "navbar.education",
    "proyectos": "navbar.projects",
    "certificaciones": "navbar.certifications",
    "habilidades": "navbar.skills",
    "contacto": "navbar.contact"
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <div className="navbar__container">
          <div className="navbar__logo">ISC. Froylán Vitela</div>
          
          {/* Desktop: Enlaces horizontales */}
          {!isMobile && (
            <ul className="navbar__links">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active-link" : ""}
                  >
                    {getTranslation(sectionKeys[id], lang)}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="navbar__actions">
            <LanguageSwitcher />
            
            {/* Mobile: Botón hamburguesa */}
            {isMobile && (
              <button 
                className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <span className="navbar__toggle-line"></span>
                <span className="navbar__toggle-line"></span>
                <span className="navbar__toggle-line"></span>
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Overlay oscuro detrás del menú (solo móvil) */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            className="navbar__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menú drawer desde la derecha (solo móvil) */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            className="navbar__drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="navbar__drawer-header">
              <span className="navbar__drawer-logo">Menú</span>
              <button 
                className="navbar__drawer-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <ul className="navbar__drawer-links">
              {sections.map((id, idx) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active-link" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {getTranslation(sectionKeys[id], lang)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}