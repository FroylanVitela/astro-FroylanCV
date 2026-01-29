# Sistema de Internacionalización (i18n) - Español/Inglés

## ¿Cómo funciona?

Tu sitio web ahora tiene un sistema completo de cambio de idioma entre **Español** e **Inglés**. 

### 🌐 Características principales:

- **Botón de idioma** en la esquina superior derecha con banderas (🇪🇸 / 🇬🇧)
- **Cambio instantáneo** de idioma sin recargar la página
- **Persistencia**: El idioma seleccionado se guarda en localStorage
- **Traducciones completas** de todos los componentes principales

### 📁 Archivos principales:

1. **`src/i18n/translations.json`** - Archivo centralizado con todas las traducciones
2. **`src/utils/i18n.ts`** - Utilidades para acceder a las traducciones
3. **`src/components/LanguageSwitcher.jsx`** - Botón para cambiar idioma
4. **`src/layouts/Layout.astro`** - Layout principal que incluye el LanguageSwitcher

### 🔄 Cómo añadir nuevas traducciones:

1. Abre `src/i18n/translations.json`
2. Agrega tu nueva clave tanto en la sección `es` como en `en`:

```json
{
  "es": {
    "nuevaSeccion": {
      "titulo": "Mi título en español",
      "descripcion": "Mi descripción..."
    }
  },
  "en": {
    "nuevaSeccion": {
      "titulo": "My title in English",
      "descripcion": "My description..."
    }
  }
}
```

### 📝 Cómo usar las traducciones en componentes:

En componentes **React/JSX**:

```jsx
import { useEffect, useState } from "react";
import { getTranslation } from "../utils/i18n";

export default function MiComponente() {
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
    <h1>{getTranslation("nuevaSeccion.titulo", lang)}</h1>
  );
}
```

### 🎨 Estilos del botón de idioma:

El botón tiene estilos predefinidos en `src/styles/global.css`:
- Posición fija en la esquina superior derecha
- Color rojo (variable `--rojo`)
- Responsive para móviles
- Efecto hover con escala y sombra

Puedes personalizarlo modificando la clase `.language-switcher` en el CSS global.

### 🔧 Cómo funciona internamente:

1. Cuando haces clic en el botón, se dispara un evento `languageChanged`
2. Los componentes escuchan este evento y actualizan su estado
3. El idioma se guarda en `localStorage` para persistencia
4. El atributo `lang` del HTML se actualiza automáticamente

### 📋 Componentes traducidos:

✅ Navbar (navegación)
✅ Presentation (presentación inicial)
✅ About (sobre mí)
✅ Experience (experiencia profesional)
✅ Education (estudios)
✅ Certifications (certificaciones)
✅ Skills (habilidades)
✅ Contact (contacto)

Todos los componentes están listos para ser traducidos dinámicamente.
