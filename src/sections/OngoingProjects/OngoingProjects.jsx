import { useEffect, useRef } from 'react'
import { ONGOING_PROJECTS } from '../../data/projects'
import './OngoingProjects.css'

export default function OngoingProjects() {
  const headerRef = useRef(null)
  const cardRefs  = useRef([])

  useEffect(() => {
    const headerObs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('ongoing__header--visible')
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
            e.target.classList.add('ongoing__card--visible')
            cardObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    if (headerRef.current) headerObs.observe(headerRef.current)
    cardRefs.current.forEach(el => el && cardObs.observe(el))

    return () => {
      headerObs.disconnect()
      cardObs.disconnect()
    }
  }, [])

  return (
    <section id="ongoing" className="ongoing">

      {/* ── Header ── */}
      <div className="ongoing__header" ref={headerRef}>
        <div className="ongoing__eyebrow">Active Worksites</div>
        <h2 className="ongoing__title">
          Ongoing<br />Projects
        </h2>
      </div>

      {/* ── Cards grid ── */}
      {/* First card spans two rows (featured), remaining two stack on the right */}
      <div className="ongoing__grid">
        {ONGOING_PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="ongoing__card"
            ref={el => cardRefs.current[i] = el}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Background image with zoom on hover */}
            <div
              className="ongoing__img"
              style={{ backgroundImage: `url('${project.image}')` }}
            />

            {/* Dark gradient overlay + content */}
            <div className="ongoing__overlay">
              <span className="ongoing__status">{project.status}</span>

              <div className="ongoing__body">
                <h3 className="ongoing__name">{project.title}</h3>
                <p  className="ongoing__desc">{project.desc}</p>
                <p  className="ongoing__client">Client: {project.client}</p>

                {/* Progress bar */}
                <div className="ongoing__progress-wrap">
                  <div className="ongoing__bar">
                    <div
                      className="ongoing__fill"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="ongoing__pct">{project.progress}%</span>
                </div>

                {/* Meta row */}
                <div className="ongoing__meta">
                  <span>📍 {project.location}</span>
                  <span>📅 {project.deadline}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}