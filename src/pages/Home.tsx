import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Home.module.css"




/* ── Timeline ── */
const TIMELINE = [
  {
    period: "2015 – 2017",
    role: "Nutricionista",
    org: "Sodexo · Hospital de Górliz",
    color: "green",
    desc: "Primer contacto con entornos clínicos reales. Gestión de pacientes, trabajo con equipos multidisciplinares y toma de decisiones bajo presión.",
  },
  {
    period: "2018 – 2019",
    role: "Nutricionista de campo",
    org: "Ayuda en Acción · Sierra Sur de Oaxaca, México",
    color: "green",
    desc: "Trabajo en terreno con comunidades rurales en México. Coordinación de talleres, diseño de metodología junto a socios locales (EECOS-INCIDE) y adaptación constante a contextos sin recursos ni manual.",
  },
  {
    period: "2020 – 2025",
    role: "Gestión comercial",
    org: "Pepe Navarro S.L. · España",
    color: "green",
    desc: "5 años gestionando secciones de tienda: pedidos, proveedores, inventario, facturas. Aprendí que la logística y los datos importan en cualquier sector.",
  },
    {
    period: "2025 – actualidad",
    role: "Estudiante de Administración de sistemas informáticos en red",
    org: "BirtLH · Bilbao",
    color: "blue",
    desc: "Experiencia en el diseño y administración de infraestructuras TI, gestión de redes y seguridad informática. Complementa mi formación en desarrollo web con una base sólida en sistemas y redes.",
  },
  {
    period: "2026 – actualidad",
    role: "Bootcamp de Desarrollo Web Full-Stack",
    org: "The Bridge Bootcamp · Bilbao",
    color: "blue",
    desc:"Desarrollo de proyectos reales en equipo desde el primer día, formandonos tanto en Frontend como en Backend para poder desarrollar aplicaciones completas.",
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
    desc: "Años escuchando los problemas de pacientes y clientes, buscando la raíz  no el síntoma. Lo mismo pasa con un bug o un requisito mal definido.",
  },
  {
    icon: "🤝",
    title: "Empatía funcional",
    desc: "Trabajo con pacientes, con comunidades rurales, con clientes de tienda. Sé trabajar con personas y eso se lleva al equipo de desarrollo.",
  },
  {
    icon: "🌍",
    title: "Gestión de la incertidumbre",
    desc: "Coordiné proyectos en contextos donde la cultura y los recursos eran completamente diferentes. La adaptación siempre es vital.",
  },
  {
    icon: "🔁",
    title: "Aprendizaje continuo",
    desc: "No esperé a tener el perfil perfecto para cambiar. Empecé, me equivoqué, corregí. El ciclo prueba-error es el mismo en nutrición que en desarrollo.",
  },
  {
    icon: "📦",
    title: "Gestión bajo presión",
    desc: "Inventario roto un viernes por la tarde, Dietas para nuevos ingresos, taller sin materiales... La presión no me paraliza, me organiza.",
  },
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
            Soy Asier. Nutricionista de formación, con experiencia en clínica, en
            cooperación internacional y gestión comercial. Desde 2025 estudio
            Administración de redes en BirtLH y en 2026 inicié Desarrollo web full stack en The Bridge, Bilbao.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://www.linkedin.com/in/asiermedinalaboral/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Ver Linkedin
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

      {/* ══ CTA FINAL ══ */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>¿Sigues ahí?</h2>
        <p className={styles.ctaText}>
          Si te interesa mi perfil aqui te dejo unos proyectos en los que he trabajado
        </p>
        <Link to="/projects" className={styles.btnPrimary}>
          Echa un vistazo a mis proyectos
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
