# Asier González Medina — Portfolio Personal

Portfolio profesional de Asier González Medina, nutricionista en transición al sector tecnológico. Desarrollado con React + TypeScript + Vite y desplegado en Cloudflare Pages.

## 🌐 Demo

[asiermedina.dev](https://asiermedina.dev) *(actualizar con el dominio real)*

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Routing | React Router DOM v6 |
| Estilos | CSS Modules + CSS Variables globales |
| Email | EmailJS (`@emailjs/browser`) |
| Tipografía | Playfair Display + DM Sans + DM Mono (Google Fonts) |
| Despliegue | Cloudflare Pages |

---

## 📁 Estructura del proyecto

```
src/
├── assets/              # Logo y recursos estáticos
├── components/
│   ├── Header.tsx       # Navegación sticky con menú móvil
│   ├── Footer.tsx       # Pie de página
│   ├── ContactForm.tsx  # Formulario de contacto
│   ├── ScrollToTop.tsx  # Reset de scroll en cambio de ruta
│   └── ScrollToTopButton.tsx  # Botón flotante volver arriba
├── hooks/
│   └── useContactForm.ts  # Lógica del formulario + EmailJS
├── models/
│   └── ContactModel.ts    # Interfaces TypeScript
├── pages/
│   ├── LandingPage.tsx    # Hero fullscreen con slideshow
│   ├── Home.tsx           # Sobre mí, timeline, soft skills
│   ├── Projects.tsx       # Stack técnico y proyectos
│   └── ContactPage.tsx    # Formulario + info + descarga CV
└── styles/
    ├── variables.css        # Sistema de tokens de diseño
    ├── global.css           # Reset y estilos globales
    ├── LandingPage.module.css
    ├── Home.module.css
    ├── Projects.module.css
    └── ContactPage.css
public/
└── cv/
    ├── cv-asier-medina.pdf          # CV estándar español
    └── cv-europeo-asier-medina.pdf  # CV inglés / Europass
```

---

## 🚀 Instalación y desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/asier-Medina/asiermedina-portfolio.git
cd asiermedina-portfolio

# Instalar dependencias
npm install

# Arrancar en desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 📧 Configuración EmailJS

El formulario de contacto usa [EmailJS](https://emailjs.com) (plan gratuito, 200 envíos/mes).

Las credenciales están definidas en `src/hooks/useContactForm.ts`:

```ts
const EMAILJS_SERVICE_ID  = "";
const EMAILJS_TEMPLATE_ID = "";
const EMAILJS_PUBLIC_KEY  = "";
```

> ⚠️ La Public Key de EmailJS es segura para exponerse en el cliente (es de solo lectura). El Service ID y Template ID son identificadores, no secretos. Ver sección de seguridad más abajo.

---

## ☁️ Despliegue en Cloudflare Pages

```bash
# Build
npm run build

# El directorio de salida es: dist/
```

**Configuración en Cloudflare Pages:**

| Campo | Valor |
|-------|-------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 18+ |

**Archivo `public/_redirects`** (necesario para React Router en Cloudflare):

```
/* /index.html 200
```

---

## 📄 Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Landing | Hero fullscreen con slideshow y frases rotantes |
| `/home` | Sobre mí | Timeline, soft skills |
| `/projects` | Proyectos | Stack técnico y proyectos de GitHub |
| `/contact` | Contacto | Formulario EmailJS + descarga de CV |

---

## ♿ Accesibilidad

- Labels asociados a inputs con `htmlFor` / `id`
- `aria-label` en botones icónicos
- `aria-live` en zonas de contenido dinámico
- `role="alert"` en mensajes de error
- `prefers-reduced-motion` respetado en animaciones
- `tabIndex` condicional en el botón de scroll

---

## 📝 Licencia

Proyecto personal. Código disponible como referencia, no para uso comercial.
