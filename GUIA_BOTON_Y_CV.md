# 🎨 Guía: Nuevo Diseño del Botón de Idioma y CV en Inglés

## 1. 🎯 Cambios Realizados al Botón

### ✨ Nuevo Diseño
El botón de idioma ahora tiene un estilo más moderno y elegante:

- **Forma:** Circular/Redondeado (50px)
- **Diseño:** Botón estilo "Badge" con gradiente
- **Iconos:** Solo muestra la bandera emoji (🇪🇸 o 🇬🇧) - más limpio y minimalista
- **Efectos:** 
  - Hover con efecto de elevación (sube 3px)
  - Animación de "bounce" en la bandera
  - Efecto de brillo al pasar el cursor
  - Transición suave con easing cubic-bezier

### 📍 Ubicación
El botón está integrado en el **navbar** junto al logo y al menú hamburguesa.

### 🎨 Estilos Aplicados
```css
/* Gradiente rojo moderno */
background: linear-gradient(135deg, #cc0000, #ff6666);

/* Borde blanco para contraste */
border: 2px solid white;

/* Animación de bounce en la bandera */
@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

---

## 2. 📄 Cómo Agregar CV en Inglés

### Paso 1: Crear o Traducir tu CV
Tienes dos opciones:

**Opción A: Traducir tu PDF existente**
1. Abre tu CV actual (`VFVC CV.pdf`)
2. Úsalo con Google Translate, Microsoft Word, o Adobe Acrobat para traducirlo
3. Guarda la versión en inglés

**Opción B: Usar una herramienta online**
- Sube tu PDF a [iLovePDF](https://www.ilovepdf.com/translate-pdf)
- Selecciona traducir a inglés
- Descarga el archivo traducido

### Paso 2: Guardar el Archivo con el Nombre Correcto
1. **Navega a:** `public/doc/`
2. **Guarda el archivo como:** `VFVC CV EN.pdf` (exactamente con este nombre)

   ```
   d:\Frogs\VS\astro-FroylanCV\
   └── public/
       └── doc/
           ├── VFVC CV.pdf           (versión en español - actual)
           └── VFVC CV EN.pdf        (versión en inglés - nuevo)
   ```

### Paso 3: El Código ya está Configurado ✅
No necesitas hacer nada más. El botón de descargar CV automáticamente:

- **Si el idioma es Español (ES):** Descarga `/doc/VFVC CV.pdf`
- **Si el idioma es Inglés (EN):** Descarga `/doc/VFVC CV EN.pdf`

**Código actualizado en `src/components/Contact.jsx`:**
```jsx
<a 
  href={lang === "es" ? "/doc/VFVC CV.pdf" : "/doc/VFVC CV EN.pdf"} 
  download 
  className="boton-descarga"
>
  {getTranslation("contact.downloadCV", lang)}
</a>
```

### Paso 4: Compilar y Verificar
```bash
npm run build
```

¡Listo! Ahora cuando cambies el idioma:
- El botón mostrará la bandera correspondiente 🇪🇸 o 🇬🇧
- El botón de descargar CV apuntará al archivo correcto según el idioma

---

## 3. 🔧 Si Quieres Personalizar el Botón Aún Más

### Cambiar los Emojis de las Banderas
En **`src/components/LanguageSwitcher.jsx`**, línea con los emojis:

```jsx
// Cambiar estas líneas:
{currentLang === "es" ? "🇪🇸" : "🇬🇧"}

// Por otros emojis, ejemplos:
{currentLang === "es" ? "🇲🇽" : "🇺🇸"}  // Banderas México y USA
{currentLang === "es" ? "🇪🇸" : "🇬🇧"}  // Banderas España e Inglaterra
{currentLang === "es" ? "ES" : "EN"}      // Texto en lugar de banderas
```

### Cambiar Colores del Botón
En **`src/styles/global.css`**, busca `.language-switcher`:

```css
/* Color base actual (rojo) */
background: linear-gradient(135deg, var(--rojo), #ff6666);

/* Ejemplos de otros colores: */
background: linear-gradient(135deg, #007bff, #00d4ff);  /* Azul */
background: linear-gradient(135deg, #00b894, #55efc4);  /* Verde */
background: linear-gradient(135deg, #fdcb6e, #ffb352);  /* Naranja */
```

### Cambiar Tamaño del Botón
En **`src/styles/global.css`**, modifica:

```css
.language-switcher {
  min-width: 50px;   /* Cambiar este valor (en px) */
  height: 50px;      /* Cambiar este valor (en px) */
  padding: 0.6rem 0.8rem;  /* Ajustar padding */
  font-size: 1.3rem;  /* Tamaño del emoji */
}
```

---

## 4. 📋 Resumen de Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `src/components/LanguageSwitcher.jsx` | Simplificado para mostrar solo bandera; agregado modifier class |
| `src/styles/global.css` | Nuevo diseño con gradiente, efectos hover, animaciones |
| `src/components/Contact.jsx` | Configurado para apuntar a `/doc/VFVC CV EN.pdf` cuando lang=en |

---

## 5. ✅ Checklist para Completar

- [ ] Traducir tu CV al inglés (usando Word, Google Translate, iLovePDF, etc.)
- [ ] Guardar el archivo como `VFVC CV EN.pdf` en `public/doc/`
- [ ] Ejecutar `npm run build`
- [ ] Verificar en http://localhost:4321/ que:
  - [ ] El botón muestra la bandera correcta
  - [ ] El botón está en el navbar
  - [ ] Al cambiar el idioma, la bandera cambia
  - [ ] El botón de descargar CV apunta al archivo correcto

---

## 6. 💡 Tips

- **Nombre exacto es importante:** Si nombras el archivo diferente (ej: `CV EN.pdf`), no funcionará. Debe ser exactamente `VFVC CV EN.pdf`
- **Los cambios del botón son inmediatos:** No necesitas recompilar después de cambiar emojis o colores, se reflejan al refrescar la página
- **Archivos PDF:** Asegúrate que los PDFs estén en la carpeta `public/doc/` (es la carpeta pública accesible desde el navegador)

¡Tu sitio está listo para ser totalmente bilingüe! 🎉
