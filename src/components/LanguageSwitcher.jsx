import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
    const [currentLang, setCurrentLang] = useState("es");

    useEffect(() => {
        // Recuperar idioma guardado del localStorage
        const savedLang = localStorage.getItem("language") || "es";
        setCurrentLang(savedLang);
        document.documentElement.lang = savedLang;
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === "es" ? "en" : "es";
        setCurrentLang(newLang);
        localStorage.setItem("language", newLang);
        document.documentElement.lang = newLang;

        // Emitir evento para que otros componentes se actualicen
        window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: newLang } }));
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`language-switcher language-switcher--${currentLang}`}
            aria-label="Toggle language"
            title={currentLang === "es" ? "Switch to English" : "Cambiar a Español"}
        >
            <span className="language-switcher__flag">
                {currentLang === "es" ? "🇪🇸" : "🇬🇧"}
            </span>
        </button>
    );
}
