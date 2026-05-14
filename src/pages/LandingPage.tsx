import { useState, useEffect, useRef, useCallback} from 'react'
import { Link } from "react-router-dom"
import Header from "../components/Header"
import styles from "../styles/LandingPage.module.css"

const SLIDES = [
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1800&q=80',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=1800&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=80',
]

const PHRASES = [
  'El diagnóstico es el mismo: Entender cómo.',
  'Cambié de idioma, no de manera de pensar.',
  'Mismo método: Prueba y Error.',
]

export default function LandingPage() {
  const [current, setCurrent]             = useState(0)
  const [phraseIdx, setPhraseIdx]         = useState(0)
  const [phraseVisible, setPhraseVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const phraseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
    }, 4800)

  }, [])

  useEffect(() => {
    startTimer()

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [startTimer])

  useEffect(() => {
  const id = setInterval(() => {
    setPhraseVisible(false)

    phraseTimeoutRef.current = setTimeout(() => {
      setPhraseIdx(i => (i + 1) % PHRASES.length)
      setPhraseVisible(true)
    }, 380)

  }, 3800)

  return () => {
    clearInterval(id)

    if (phraseTimeoutRef.current) {
      clearTimeout(phraseTimeoutRef.current)
    }
  }
}, [])

  return (
    <div className={styles.root}>

      {/* Header flotante sobre los slides */}
      <div className={styles.headerWrap}>
        <Header />
      </div>

      {/* Slides */}
      <div className={styles.slides} aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Grain */}
      <div className={styles.grain} aria-hidden="true" />

      {/* Contenido principal */}
      <main className={styles.content}>

        <h1 className={styles.headline}>
          No cambié de rumbo.<br />
          Cambié de <em className={styles.pivot}>herramientas.</em>
        </h1>

        <div className={styles.rotatorWrap} aria-live="polite">
          <p className={`${styles.phrase} ${phraseVisible ? styles.phraseIn : styles.phraseOut}`}>
            {PHRASES[phraseIdx]}
          </p>
        </div>

        <p className={styles.bio}>
          Soy Nutricionista con años de práctica clínica y un giro
          deliberado hacia la tecnología. Hoy estudio{' '}
          <strong>ASIR</strong> y desarrollo web full stack en{' '}
          <strong>The Bridge</strong>, construyendo un perfil difícil
          de definir en un currículum estándar.
        </p>

        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgeGreen}`}>Nutrición clínica</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>ASIR · Redes</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>Full Stack · The Bridge</span>
        </div>

        <div className={styles.cta}>
          <Link to="/home" className={styles.btn}>
            <span>Conóceme</span>
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={2.2}
              strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </main>

      {/* Dots */}
      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { setCurrent(i); startTimer() }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

   

    </div>
  )
}