import { Link } from "react-router-dom"
import styles from "../styles/Projects.module.css"

/* ── Proyectos ── */
const PROJECTS: {
  name: string
  desc: string
  stack: string[]
  url: string
  highlight: boolean
  badge?: string
  badgeVariant?: "hackathon" | "tripulaciones"
}[] = [
  {
    name: "ONzero",
    desc: "App anti-desperdicio alimentario creada durante el Prompt-a-thon de BBK + The Bridge. Los usuarios introducen lo que tienen en casa y la app sugiere recetas.",
    stack: ["JavaScript", "React", "Node.js"],
    url: "https://github.com/asier-Medina/PROMPATON_OnZero",
    highlight: true,
    badge: "Hackathon BBK",
    badgeVariant: "hackathon",
  },
  {
    name: "SustraiApp",
    desc: "Desafío de Tripulaciones del bootcamp Full Stack de The Bridge: app para descubrir lugares, eventos y gastronomía del País Vasco. Proyecto transversal desarrollado junto a verticales de Data Science, Marketing Digital y Ciberseguridad.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    url: "https://github.com/asier-Medina/SustraiApp",
    highlight: true,
    badge: "Tripulaciones · The Bridge",
    badgeVariant: "tripulaciones",
  },
  {
    name: "IsWorking",
    desc: "Sistema de gestión de turnos de trabajo con autenticación segura y portales diferenciados para empleados y managers.",
    stack: ["JavaScript", "Node.js", "Express"],
    url: "https://github.com/asier-Medina/IsWorking",
    highlight: false,
  },
  {
    name: "Tasuku-project",
    desc: "Web app para gestionar y repartir tareas en espacios compartidos. Incorpora un sistema de gamificación con puntos que incentiva completar las tareas antes y fomenta la colaboración entre los usuarios.",
    stack: ["HTML", "JavaScript", "CSS"],
    url: "https://github.com/asier-Medina/tasuku-project",
    highlight: false,
  },
  {
    name: "POKEback",
    desc: "Sistema backend completo para gestión de equipos Pokémon: usuarios, equipos, tienda y lógica de juego con PostgreSQL.",
    stack: ["JavaScript", "PostgreSQL", "Express"],
    url: "https://github.com/asier-Medina/POKEback",
    highlight: false,
  },
  {
    name: "BIDAIAgo",
    desc: "Aplicación web orientada a la exploración de destinos de viaje accesibles e informativos.",
    stack: ["HTML", "CSS", "React", "TypeScript"],
    url: "https://github.com/asier-Medina/BidaiaGo",
    highlight: false,
  },
  {
    name: "GESTION-STOCK",
    desc: "Prototipo web para ayudar a comercios a gestionar materias primas, controlar inventario y prever ventas.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/asier-Medina/GESTION-STOCK",
    highlight: false,
  },
  {
    name: "Asiermedina-portfolio",
    desc: "Lo que estas viendo ahora: un portfolio personal que rompe con el formato tradicional, diseñado para destacar soft-skills y trayectoria personal.",
    stack: ["HTML", "CSS", "React", "TypeScript"],
    url: "https://github.com/asier-Medina/asiermedina-portfolio",
    highlight: false,
  },
]

/* ── Tech stack ── */
const TECH = [
  { label: "React", color: "green" },
  { label: "Node.js", color: "green" },
  { label: "Express", color: "green" },
  { label: "PostgreSQL", color: "blue" },
  { label: "MongoDB", color: "blue" },
  { label: "Docker", color: "blue" },
  { label: "Git / GitHub", color: "green" },
  { label: "JWT", color: "blue" },
  { label: "REST APIs", color: "blue" },
  { label: "TypeScript", color: "blue" },
  { label: "Redes", color: "green" },
]

export default function Projects() {

  return (
    <div className={styles.page}>
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
              className={`${styles.techTag} ${
                t.color === "green"
                  ? styles.techGreen
                  : styles.techBlue
              }`}
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
              className={`${styles.projectCard} ${
                p.highlight ? styles.projectHighlight : ""
              }`}
            >
              {p.highlight && p.badge && (
                <span
                  className={`${styles.projectBadge} ${
                    p.badgeVariant === "tripulaciones"
                      ? styles.projectBadgeTripulaciones
                      : ""
                  }`}
                >
                  {p.badge}
                </span>
              )}

              <h3 className={styles.projectName}>{p.name}</h3>

              <p className={styles.projectDesc}>{p.desc}</p>

              <div className={styles.projectStack}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className={styles.projectTag}
                  >
                    {s}
                  </span>
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
          Estoy buscando mi primer rol en tech. Si crees
          que este perfil encaja en tu equipo, me alegraría
          escucharte.
        </p>

        <Link
          to="/contact"
          className={styles.btnPrimary}
        >
          Escríbeme

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  )
}