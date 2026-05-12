import { useState, useEffect, useRef } from 'react'
import styles from "../styles/LandingPage.module.css";
import "../styles/variables.css";
import "../styles/global.css";


const SLIDES = [
  ,
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1800&q=80',
  
]

const PHRASES = [
  'El diagnóstico es el mismo: Entender cómo.',
  'Cambié de idioma, no de manera de pensar.',
  'Mismo método: Prueba y Error.',
]

export default function LandingPage() {
  const [current, setCurrent] = useState(0)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [phraseVisible, setPhraseVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Slideshow
  const goTo = (n: number) => setCurrent((n + SLIDES.length) % SLIDES.length)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 4800)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  // Phrase rotator — fade out → change → fade in
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseVisible(false)
      setTimeout(() => {
        setPhraseIdx(i => (i + 1) % PHRASES.length)
        setPhraseVisible(true)
      }, 400)
    }, 3800)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className={styles.root}>

      {/* ── Slides ── */}
      <div className={styles.slides} aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${src})`,
              transform: 'scale(1.05)',
            }}
          />
        ))}
      </div>

      {/* ── Grain overlay ── */}
      <div className={styles.grain} aria-hidden="true" />

      {/* ── Brand ── */}
      <div className={styles.brand}>
        <span className={styles.brandName}>Asier Medina</span>
        <div className={styles.brandBar} />
      </div>

      {/* ── Nav ── */}
      <nav className={styles.nav} aria-label="Navegación principal">
        <a href="#proyectos">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* ── Main content ── */}
      <main className={styles.content}>

    

        <h1 className={styles.headline}>
          No cambié de rumbo.<br />
          Cambié de <em className={styles.pivot}>herramientas.</em>
        </h1>

        {/* Phrase rotator */}
        <div className={styles.rotatorWrap} aria-live="polite" aria-label="Frase en rotación">
          <p
            className={`${styles.phrase} ${phraseVisible ? styles.phraseIn : styles.phraseOut}`}
          >
            {PHRASES[phraseIdx]}
          </p>
        </div>

        <p className={styles.bio}>
          Soy Nutricionista con años de práctica clínica y un giro
          deliberado hacia la tecnología. Hoy estudio{' '}
          <strong>ASIR</strong> y desarrollo web full stack en{' '}
          <strong>The Bridge</strong>, construyendo un perfil dificil de definir en un curriculum estandar.
        </p>

        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgeGreen}`}>Nutrición clínica</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>ASIR · Redes</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>Full Stack · The Bridge</span>
        </div>

        <div className={styles.cta}>
          <a href="#sobre-mi" className={styles.btn}>
            <span>Conóceme</span>
            <svg
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2.2}
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </main>

      {/* ── Dots ── */}
      <div className={styles.dots} role="tablist" aria-label="Navegación de slides">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { goTo(i); startTimer() }}
          />
        ))}
      </div>

    </div>
  )
}