import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState("es");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "es";
        setCurrentLang(savedLang);
        document.documentElement.lang = savedLang;
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === "es" ? "en" : "es";
        setCurrentLang(newLang);
        localStorage.setItem("language", newLang);
        document.documentElement.lang = newLang;
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: newLang } }));
    };

    return (
        <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Toggle language"
            title={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
            <span className={`language-toggle__label ${currentLang === "es" ? "active" : ""}`}>ES</span>
            <motion.div 
                className="language-toggle__slider"
                animate={{ x: currentLang === "es" ? 0 : 40 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <span className={`language-toggle__label ${currentLang === "en" ? "active" : ""}`}>EN</span>
        </button>
    );
}