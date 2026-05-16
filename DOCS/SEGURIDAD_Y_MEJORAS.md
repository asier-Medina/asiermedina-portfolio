# Seguridad y análisis de mejoras — Portfolio Asier González Medina

## 1. Vulnerabilidades y mitigaciones para Cloudflare

### 1.1 🔴 CRÍTICO — Credenciales EmailJS en código fuente

**Problema:** El `EMAILJS_PUBLIC_KEY`, `SERVICE_ID` y `TEMPLATE_ID` están hardcodeados en `useContactForm.ts` y quedan expuestos en el bundle de producción.

**Riesgo real:** La Public Key de EmailJS está diseñada para ser pública (es de solo lectura, no puede acceder a tu cuenta). Sin embargo, un actor malintencionado podría usarla para enviar spam desde tu cuota de 200 emails/mes.

**Mitigación inmediata — Restricción de dominio en EmailJS:**
1. Ve a EmailJS → Account → API Keys
2. En "Allowed Origins" añade **únicamente** tu dominio de Cloudflare
3. Esto hace que la key solo funcione desde ese dominio, no desde Postman ni otros sitios

**Mitigación adicional — Variables de entorno Vite:**
```ts
// useContactForm.ts
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

```bash
# .env.local (NO subir a git)
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

```bash
# .gitignore — verificar que incluye:
.env
.env.local
.env.*.local
```

En Cloudflare Pages → Settings → Environment Variables, añadir las tres variables.

> Nota: con Vite, las variables `VITE_*` siguen apareciendo en el bundle (son para el cliente). La protección real es la restricción de dominio en EmailJS, no las env vars. Aun así, sacarlas del código es buena práctica.

---

### 1.2 🟡 MEDIO — Cabeceras de seguridad HTTP

**Problema:** Sin cabeceras de seguridad, el navegador no sabe qué recursos externos están permitidos.

**Solución — `public/_headers`** (Cloudflare Pages lo lee automáticamente):

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com; connect-src 'self' https://api.emailjs.com; frame-ancestors 'none'
```

> El `unsafe-inline` en `script-src` y `style-src` es necesario porque Vite inyecta estilos inline y React puede usar event handlers inline. Si en el futuro se añade un nonce de CSP, se puede eliminar.

---

### 1.3 🟡 MEDIO — Archivo `_redirects` para React Router

**Problema:** Sin este archivo, las rutas directas como `/home` o `/contact` devuelven 404 en Cloudflare Pages.

**Solución — `public/_redirects`:**

```
/* /index.html 200
```

---

### 1.4 🟢 BAJO — Rate limiting del formulario

**Problema:** No hay protección contra envíos masivos del formulario (el límite de 200/mes de EmailJS es la única barrera).

**Solución recomendada:** Cloudflare ofrece protección contra bots de forma gratuita. Activar en el dashboard de Cloudflare:
- **Bot Fight Mode** → ON
- **Security Level** → Medium

Para una protección más robusta en el futuro, añadir un campo honeypot oculto en el formulario:
```tsx
{/* Campo honeypot — los bots lo rellenan, los humanos no lo ven */}
<input
  type="text"
  name="website"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
```
Y validar en el hook que `formData.website === ""` antes de enviar.

---

### 1.5 🟢 BAJO — Información personal expuesta en el código

**Problema:** El teléfono y email aparecen en el código fuente del HTML renderizado, lo cual es normal para un portfolio pero conviene ser consciente de ello.

**Evaluación:** Aceptable para un portfolio profesional cuyo objetivo es ser contactado. No requiere acción.

---

## 2. Checklist de seguridad antes del despliegue

- [ ] Restricción de dominio en EmailJS (Allowed Origins)
- [ ] Mover credenciales a variables de entorno (`.env.local` + Cloudflare env vars)
- [ ] Verificar que `.env.local` está en `.gitignore`
- [ ] Crear `public/_redirects` con `/* /index.html 200`
- [ ] Crear `public/_headers` con las cabeceras de seguridad
- [ ] Activar Bot Fight Mode en Cloudflare dashboard
- [ ] Verificar que no hay `console.log` con datos sensibles en producción
- [ ] Ejecutar `npm run build` localmente y revisar que no hay warnings de TypeScript

---

## 3. Mejoras técnicas recomendadas (post-lanzamiento)

### 3.1 Rendimiento

**Lazy loading de páginas:** Las páginas interiores se cargan en el bundle inicial aunque el usuario solo visite la landing.

```tsx
// App.tsx
const Home        = lazy(() => import('./pages/Home'));
const Projects    = lazy(() => import('./pages/Projects'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Envolver Routes en:
<Suspense fallback={<div className="page-loading">Cargando...</div>}>
  <Routes>...</Routes>
</Suspense>
```

**Optimizar imágenes del slideshow:** Las imágenes de Unsplash se cargan en `1800px`. Reducir a `1200px` y añadir `loading="lazy"` en imágenes no críticas.

### 3.2 TypeScript

**Tipar los datos de Home y Projects:**
```ts
// src/models/HomeModel.ts
export type TimelineColor = 'green' | 'blue' | 'neutral';

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  color: TimelineColor;
  desc: string;
}

export interface ProjectItem {
  name: string;
  desc: string;
  stack: string[];
  url: string;
  highlight: boolean;
}
```

**Eliminar interfaces sin usar:** `TeamMember` y `StoredMessage` en `ContactModel.ts` ya no se usan.

### 3.3 SEO

**Meta tags por página con `react-helmet-async`:**
```bash
npm install react-helmet-async
```
```tsx
// En cada página:
<Helmet>
  <title>Asier González — Sobre mí</title>
  <meta name="description" content="Nutricionista reconvertido en desarrollador Full Stack..." />
  <meta property="og:title" content="Portfolio Asier González" />
</Helmet>
```

**Sitemap:** Cloudflare Pages no genera sitemap automáticamente. Crear `public/sitemap.xml` manualmente con las 4 rutas.

### 3.4 Accesibilidad

**Mejorar el botón hamburguesa:** Cambiar el carácter `☰` por un SVG con tres líneas, que es más consistente entre navegadores y lectores de pantalla.

**NavLink activo:** Cambiar `<Link>` por `<NavLink>` en el Header para que la ruta activa tenga la clase `.activo` automáticamente:
```tsx
import { NavLink } from 'react-router-dom';
<NavLink to="/home" className={({ isActive }) => isActive ? 'activo' : ''}>
  Conóceme
</NavLink>
```

### 3.5 UX

**Página 404 real:** La ruta `path="*"` renderiza un `<h1>` sin estilos. Crear un componente `NotFound.tsx` con un mensaje y un enlace a home.

**Deshabilitar el botón de envío tras éxito:** Actualmente el formulario se resetea pero el botón queda activo inmediatamente. Añadir un cooldown de 5 segundos tras el envío exitoso.

**Animaciones de entrada en páginas interiores:** Home y Projects no tienen animaciones de entrada. Añadir un `fadeUp` al montarse mejoraría la percepción de fluidez.

---

## 4. Mejoras de contenido (opcionales)

- Añadir screenshots de los proyectos en la página Projects
- Traducción al inglés de la página completa (ya tienes el CV en inglés)
- Sección de certificaciones con los badges de Cloudflare/ISAK
- Modo claro/oscuro con `prefers-color-scheme`

