import { useEffect, useRef } from 'react'
import './Hero.css'

const STATS = [
  { num: '20', label: 'Years'     },
  { num: '350', label: 'Projects' },
  { num: '45',  label: 'Engineers'},
]

export default function Hero() {
  const linesRef = useRef([])
  const subRowRef = useRef(null)
  const scrollbarRef = useRef(null)
  const counterRef = useRef(null)

  // Trigger line reveal animations after mount
  useEffect(() => {
    // Small delay so the page has painted before animating
    const timer = setTimeout(() => {
      linesRef.current.forEach((span, i) => {
        if (!span) return
        span.style.animationDelay = `${0.3 + i * 0.18}s`
        span.classList.add('hero__line-span--animate')
      })

      if (subRowRef.current)   subRowRef.current.classList.add('hero__subrow--animate')
      if (scrollbarRef.current) scrollbarRef.current.classList.add('hero__scrollbar--animate')
      if (counterRef.current)  counterRef.current.classList.add('hero__counter--animate')
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">

      {/* Background with slow zoom */}
      <div className="hero__bg" />

      {/* Main content */}
      <div className="hero_content">

        {/* Giant headline — each word on its own line */}
        {['BLUE', 'STAR.'].map((word, i) => (
          <div key={word} className="hero__line">
            <span
              ref={el => linesRef.current[i] = el}
              className={`hero__line-span ${word === 'STAR.' ? 'hero__line-span--gold' : ''}`}
            >
              {word}
            </span>
          </div>
        ))}

        {/* Sub row — description + CTA buttons */}
        <div className="hero__subrow" ref={subRowRef}>
          <p className="hero__desc">
            Blue Star Engineering Co. delivers{' '}
            <em>world-class civil, structural, and MEP solutions</em>{' '}
            — from foundation to finish, for 20 years running.
          </p>

          <div className="hero__actions">
            <a href="#ongoing" className="hero__btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="hero__btn-ghost">
              Get in Touch ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom left */}
      <div className="hero__scrollbar" ref={scrollbarRef}>
        <div className="hero__scroll-line">
          <span className="hero__scroll-scanner" />
        </div>
        <span className="hero__scroll-label">Scroll to explore</span>
      </div>

      {/* Stats — bottom right */}
      <div className="hero__counter" ref={counterRef}>
        {STATS.map(stat => (
          <div key={stat.label} className="hero__stat">
            <span className="hero__stat-num">
              {stat.num}<sup>+</sup>
            </span>
            <span className="hero__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  )
}