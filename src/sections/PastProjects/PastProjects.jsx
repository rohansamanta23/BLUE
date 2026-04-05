import { useEffect, useRef } from 'react'
import { PAST_PROJECTS, MARQUEE_ITEMS } from '../../data/projects'
import './PastProjects.css'

// Double the items so the marquee loops seamlessly
const MARQUEE_DOUBLED = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

export default function PastProjects() {
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const headerObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('past__header--visible')
            headerObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    const cardObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('past__card--visible')
            cardObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) headerObs.observe(headerRef.current)
    cardRefs.current.forEach(el => el && cardObs.observe(el))

    return () => {
      headerObs.disconnect()
      cardObs.disconnect()
    }
  }, [])

  return (
    <section id="past" className="past">

      {/* ── Header row: eyebrow + title left, big count right ── */}
      <div className="past__header" ref={headerRef}>
        <div className="past__header-left">
          <div className="past__eyebrow">Delivered</div>
          <h2 className="past__title">
            Past<br />Projects
          </h2>
        </div>
        <div className="past__count">350+</div>
      </div>

      {/* ── Marquee ticker ── */}
      <div className="past__marquee-wrap">
        <div className="past__marquee">
          {MARQUEE_DOUBLED.map((name, i) => (
            <span key={i} className="past__marquee-item">
              {name} <em>·</em>
            </span>
          ))}
        </div>
      </div>

      {/* ── Photo grid ── */}
      <div className="past__grid">
        {PAST_PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="past__card"
            ref={el => cardRefs.current[i] = el}
            style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
          >
            {/* Image with zoom */}
            <div
              className="past__img"
              style={{ backgroundImage: `url('${project.image}')` }}
            />

            {/* Overlay content */}
            <div className="past__overlay">
              <h4 className="past__name">{project.title}</h4>
              <span className="past__meta">
                {project.category} · {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}