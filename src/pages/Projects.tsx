import { Link } from "react-router-dom"
import styles from "../styles/Projects.module.css"

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
    name: "Tasuku-project",
    desc: "Web app para gestionar y repartir tareas en espacios compartidos. incorpora un sistema de gamificación con puntos que incentiva completar las tareas antes y fomenta la colaboración entre los usuarios.",
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
    name: "Asiermedina-portfolio",
    desc: "Lo que estas viendo ahora: un portfolio personal que rompe con el formato tradicional, diseñado para destacar soft-skills y trayectoria personal.",
    stack: ["HTML", "CSS", "React", "TypeScript"],
    url: "https://github.com/asier-Medina/asiermedina-portfolio",
    highlight: false,
  },
]

/* ── Tech stack ── */
const TECH = [
  { label: "React", color: "blue" },
  { label: "Node.js", color: "green" },
  { label: "Express", color: "blue" },
  { label: "PostgreSQL", color: "blue" },
  { label: "MongoDB", color: "green" },
  { label: "Docker", color: "blue" },
  { label: "Git / GitHub", color: "green" },
  { label: "JWT", color: "blue" },
  { label: "REST APIs", color: "blue" },
  { label: "TypeScript", color: "blue" },
  { label: "ASIR", color: "green" },
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
              {p.highlight && (
                <span className={styles.projectBadge}>
                  Hackathon
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