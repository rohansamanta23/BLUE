import { useEffect, useRef } from 'react'
import { SERVICES } from '../../data/services.js'
import './Services.css'

export default function Services() {
  const headerRef = useRef(null)
  const rowRefs   = useRef([])

  useEffect(() => {
    // Header fades up
    const headerObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('services__header--visible')
            headerObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    // Each service row slides up with stagger
    const rowObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('services__row--visible')
            rowObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) headerObs.observe(headerRef.current)
    rowRefs.current.forEach(el => el && rowObs.observe(el))

    return () => {
      headerObs.disconnect()
      rowObs.disconnect()
    }
  }, [])

  return (
    <section id="services" className="services">

      {/* ── Header ── */}
      <div className="services__header" ref={headerRef}>
        <h2 className="services__title">
          What<br />
          <span className="services__title--gold">We Do</span>
        </h2>
        <p className="services__note">
          From concept to handover — we cover every phase of your
          engineering project with depth and precision.
        </p>
      </div>

      {/* ── Service rows ── */}
      <div className="services__list">
        {SERVICES.map((svc, i) => (
          <div
            key={svc.num}
            className="services__row"
            ref={el => rowRefs.current[i] = el}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="services__num">{svc.num}</span>
            <span className="services__name">{svc.title}</span>
            <span className="services__desc">{svc.desc}</span>
            <span className="services__arrow">→</span>
          </div>
        ))}
      </div>

    </section>
  )
}