import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const sections = ["inicio", "sobre-mi", "experiencia", "estudios", "certificaciones", "habilidades", "contacto"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200); // valor por defecto de escritorio

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
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
    const links = document.querySelectorAll('.navbar__links a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__container">
        <div className="navbar__logo">ISC. Froylán Vitela</div>
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {sections.map((id, idx) => (
          <motion.li
            key={id}
            initial={false}
            animate={menuOpen || windowWidth > 768 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.25, delay: menuOpen ? 0.05 * idx : 0 }}
            style={{ listStyle: "none" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${id}`}
              className={activeSection === id ? "active-link" : ""}
            >
              {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
