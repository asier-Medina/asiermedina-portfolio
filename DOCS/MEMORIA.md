# Memoria técnica — Portfolio Asier González Medina

## 1. Descripción del proyecto

Portfolio personal desarrollado como proyecto integrador del Bootcamp Full Stack de The Bridge (Bilbao, 2026). El objetivo es presentar la trayectoria profesional, proyectos técnicos y facilitar el contacto con potenciales empleadores.

El proyecto tiene una doble función: ser un portfolio funcional y ser en sí mismo un proyecto técnico demostrable, que evidencia conocimiento de React, TypeScript, CSS avanzado, hooks personalizados, integración con APIs de terceros y despliegue en producción.

---

## 2. Decisiones de diseño

### 2.1 Identidad visual

La paleta combina **verde natural** (`#6dbf82`) como acento de la etapa de nutrición y **azul pizarra** (`#5b8db8`) como acento tech, sobre un fondo negro con matiz verde (`#0d1210`). La decisión narrativa es visual: el usuario percibe la transición de carrera en el propio diseño.

Tipografía dual:
- **Playfair Display** (serif, itálica) → calidez, humanidad, nutrición
- **DM Sans** (sans-serif) → claridad, tecnicidad, modernidad
- **DM Mono** → código, stack técnico

### 2.2 Arquitectura CSS

Se optó por un sistema híbrido:
- **`variables.css`** — tokens de diseño globales (colores, tipografía, espaciados, radios, sombras)
- **`global.css`** — reset, componentes globales (header, footer, botones)
- **CSS Modules** por página — encapsulación, sin conflictos de clase

### 2.3 Estructura de rutas

```
/           → LandingPage  (fullscreen, sin header/footer)
/home       → Home         (sobre mí, timeline, soft skills)
/projects   → Projects     (stack + proyectos GitHub)
/contact    → ContactPage  (formulario + CV)
```

La landing es la única página sin Header ni Footer — decisión estética para lograr el impacto visual fullscreen. `App.tsx` lo gestiona con `useLocation()`.

---

## 3. Componentes principales

### LandingPage
Slideshow de imágenes con parallax de ratón, frases rotantes con fade, y CTA "Conóceme". Usa `useCallback` para estabilizar el timer del slideshow y evitar renders innecesarios. El `setTimeout` del rotador de frases se limpia en el return del `useEffect`.

### Header
Navegación sticky con menú hamburguesa para móvil. Se cierra automáticamente al cambiar de ruta (`useLocation`) y bloquea el scroll del body cuando está abierto. El overlay tiene `z-index` inferior al menú para no taparlo.

### useContactForm (hook personalizado)
Centraliza toda la lógica del formulario: estado, validación y envío. La validación es síncrona y se ejecuta antes del envío. El envío es asíncrono con `emailjs.send()`. Gestiona tres estados de UI: `isSubmitting`, `success` y `sendError`.

### ScrollToTop
Componente invisible que escucha cambios de `pathname` y ejecuta `window.scrollTo({ top: 0, behavior: 'instant' })`. Evita que React Router mantenga la posición de scroll de la página anterior.

---

## 4. Integración EmailJS

El formulario de contacto usa EmailJS como capa de envío sin backend propio:

- **Template principal** → llega a `asiermedinalaboral@gmail.com` con nombre, email, rol y mensaje
- **Auto-reply** → confirmación automática al remitente con nombre y asunto

Variables del template: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

El plan gratuito permite 200 envíos/mes, suficiente para un portfolio personal.

---

## 5. Despliegue

El proyecto se despliega en **Cloudflare Pages** desde el repositorio de GitHub. El build genera un bundle estático en `/dist` que se sirve desde la CDN global de Cloudflare.

Se requiere el archivo `public/_redirects` con la regla `/* /index.html 200` para que React Router funcione correctamente en rutas directas (deep linking).

---

## 6. Tecnologías utilizadas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| React | 19 | Framework UI |
| TypeScript | 5.x | Tipado estático |
| Vite | 6.x | Build tool y dev server |
| React Router DOM | 6.x | Enrutamiento SPA |
| @emailjs/browser | latest | Envío de formulario |
| CSS Modules | nativo | Estilos encapsulados |
| CSS Custom Properties | nativo | Sistema de tokens |
| Google Fonts | — | Playfair Display, DM Sans, DM Mono |

---

## 7. Aprendizajes del proyecto

- Gestión de **stacking contexts** en CSS (`isolation: isolate`) para resolver conflictos de z-index entre menús y overlays
- Uso de **`useCallback`** para estabilizar referencias a funciones en efectos con timers
- Limpieza de **`setTimeout` anidados** dentro de `setInterval` para evitar actualizaciones de estado en componentes desmontados
- Diseño **mobile-first** con `clamp()` para tipografía fluida
- Configuración de **Cloudflare Pages** con React Router (archivo `_redirects`)
- Integración de **EmailJS** sin backend: diferencia entre template principal y auto-reply
- Gestión de **stacking contexts** CSS con `isolation: isolate`

