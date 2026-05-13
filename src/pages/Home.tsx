import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Home.module.css"

/* ── Timeline ── */
const TIMELINE = [
  {
    period: "Abr 2015 – Nov 2015",
    role: "Nutricionista",
    org: "Sodexo · Hospital de Górliz",
    color: "green",
    desc: "Primer contacto con entornos clínicos reales. Gestión de pacientes, trabajo con equipos multidisciplinares y toma de decisiones bajo presión.",
  },
  {
    period: "Jul 2018 – Sep 2019",
    role: "Nutricionista de campo",
    org: "Ayuda en Acción · Sierra Sur de Oaxaca, México",
    color: "green",
    desc: "Trabajo en terreno con comunidades rurales en México. Coordinación de talleres, diseño de metodología junto a socios locales (EECOS-INCIDE) y adaptación constante a contextos sin recursos ni manual.",
  },
  {
    period: "Feb 2020 – Sep 2025",
    role: "Gestión comercial",
    org: "Pepe Navarro S.L. · España",
    color: "neutral",
    desc: "5 años gestionando secciones de tienda: pedidos, proveedores, inventario, facturas. Aprendí que la logística y los datos importan en cualquier sector.",
  },
  {
    period: "Feb 2026 – actualidad",
    role: "Full-Stack Developer",
    org: "The Bridge Bootcamp · Bilbao",
    color: "blue",
    desc: "React, Node.js, Express, PostgreSQL, MongoDB, Docker, JWT, Git. Desarrollo de proyectos reales en equipo desde el primer día.",
  },
]

/* ── Soft skills ── */
const SKILLS = [
  {
    icon: "🧩",
    title: "Adaptabilidad extrema",
    desc: "De una consulta clínica a un campo en México, de ahí a una tienda, y ahora al código. Cada entorno ha sido un idioma nuevo que aprendí desde cero.",
  },
  {
    icon: "🔍",
    title: "Diagnóstico y análisis",
    desc: "Años escuchando síntomas que no encajaban me enseñaron a buscar la causa raíz, no el síntoma. Lo mismo hago con un bug o un requisito mal definido.",
  },
  {
    icon: "🤝",
    title: "Empatía funcional",
    desc: "Trabajo con pacientes, con comunidades rurales, con clientes de tienda. Sé leer a las personas antes de abrirles la boca. Eso se lleva al equipo de desarrollo.",
  },
  {
    icon: "🌍",
    title: "Inteligencia intercultural",
    desc: "Coordiné proyectos en contextos donde el idioma, la cultura y los recursos eran completamente diferentes a los míos. La comunicación no siempre es verbal.",
  },
  {
    icon: "🔁",
    title: "Aprendizaje continuo",
    desc: "No esperé a tener el perfil perfecto para cambiar. Empecé, me equivoqué, corregí. El ciclo prueba-error es el mismo en nutrición que en desarrollo.",
  },
  {
    icon: "📦",
    title: "Gestión bajo presión",
    desc: "Inventario roto un viernes por la tarde, paciente en urgencias, taller sin materiales. La presión no me paraliza, me organiza.",
  },
]

/* ── Proyectos ── */
const PROJECTS = [
  {
    name: "ONzero",
    desc: "App anti-desperdicio alimentario creada durante el Prompt-a-thon de BBK + The Bridge. Los usuarios introducen lo que tienen en casa y la app sugiere recetas.",
    stack: ["JavaScript", "React", "Node.js"],
    url: "https://github.com/asier-Medina/PROMPATON_OnZero",
    highlight: true,
  },
  {
    name: "POKEback",
    desc: "Sistema backend completo para gestión de equipos Pokémon: usuarios, equipos, tienda y lógica de juego con PostgreSQL.",
    stack: ["JavaScript", "PostgreSQL", "Express"],
    url: "https://github.com/asier-Medina/POKEback",
    highlight: false,
  },
  {
    name: "GESTION-STOCK",
    desc: "Prototipo de aplicación web para ayudar a comercios a gestionar materias primas y prever ventas.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/asier-Medina/GESTION-STOCK",
    highlight: false,
  },
]

/* ── Tech stack ── */
const TECH = [
  { label: "React",       color: "blue" },
  { label: "Node.js",     color: "green" },
  { label: "Express",     color: "blue" },
  { label: "PostgreSQL",  color: "blue" },
  { label: "MongoDB",     color: "green" },
  { label: "Docker",      color: "blue" },
  { label: "Git / GitHub",color: "green" },
  { label: "JWT",         color: "blue" },
  { label: "REST APIs",   color: "blue" },
  { label: "TypeScript",  color: "blue" },
  { label: "ASIR",        color: "green" },
  { label: "Redes",       color: "green" },
]

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

  return (
    <div className={styles.page}>

      {/* ══ HERO / INTRO ══ */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Sobre mí</p>
          <h1 className={styles.heroTitle}>
            Un perfil que no cabe<br />
            en <em>ninguna casilla.</em>
          </h1>
          <p className={styles.heroBio}>
            Soy Asier. Nutricionista de formación, con experiencia en clínica,
            cooperación internacional y gestión comercial. Desde 2026 estudio
            ASIR y desarrollo web full stack en The Bridge, Bilbao.
            No cambié de manera de pensar — cambié de herramientas.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://github.com/asier-Medina"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Ver GitHub
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <Link to="/contact" className={styles.btnSecondary}>
              Contacto
            </Link>
          </div>
        </div>

        {/* Decoración lateral */}
        <div className={styles.heroAccent} aria-hidden="true">
          <span className={styles.accentLine} />
          <span className={styles.accentText}>ASIER MEDINA</span>
          <span className={styles.accentLine} />
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Trayectoria</p>
          <h2 className={styles.sectionTitle}>El camino hasta aquí</h2>
        </div>

        <div className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <div key={i} className={`${styles.timelineItem} ${styles[`tl${item.color}`]}`}>
              <div className={styles.tlDot} />
              <div className={styles.tlBody}>
                <span className={styles.tlPeriod}>{item.period}</span>
                <h3 className={styles.tlRole}>{item.role}</h3>
                <p className={styles.tlOrg}>{item.org}</p>
                <p className={styles.tlDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SOFT SKILLS ══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Lo que no aparece en un CV</p>
          <h2 className={styles.sectionTitle}>Soft skills</h2>
        </div>

        <div className={styles.skillsGrid}>
          {SKILLS.map((sk, i) => (
            <div
              key={i}
              className={`${styles.skillCard} ${activeSkill === i ? styles.skillActive : ''}`}
              onMouseEnter={() => setActiveSkill(i)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <span className={styles.skillIcon}>{sk.icon}</span>
              <h3 className={styles.skillTitle}>{sk.title}</h3>
              <p className={styles.skillDesc}>{sk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TECH STACK ══ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Herramientas actuales</p>
          <h2 className={styles.sectionTitle}>Stack técnico</h2>
        </div>

        <div className={styles.techGrid}>
          {TECH.map((t, i) => (
            <span
              key={i}
              className={`${styles.techTag} ${t.color === 'green' ? styles.techGreen : styles.techBlue}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ══ PROYECTOS ══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Código real</p>
          <h2 className={styles.sectionTitle}>Proyectos</h2>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard} ${p.highlight ? styles.projectHighlight : ''}`}
            >
              {p.highlight && (
                <span className={styles.projectBadge}>Hackathon BBK</span>
              )}
              <h3 className={styles.projectName}>{p.name}</h3>
              <p className={styles.projectDesc}>{p.desc}</p>
              <div className={styles.projectStack}>
                {p.stack.map(s => (
                  <span key={s} className={styles.projectTag}>{s}</span>
                ))}
              </div>
              <span className={styles.projectLink}>
                Ver en GitHub →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>¿Hablamos?</h2>
        <p className={styles.ctaText}>
          Estoy buscando mi primer rol en tech. Si crees que este perfil encaja
          en tu equipo, me alegra escucharte.
        </p>
        <Link to="/contact" className={styles.btnPrimary}>
          Escríbeme
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

    </div>
  )
}
