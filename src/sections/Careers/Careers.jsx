import { useEffect, useRef } from 'react'
import { JOBS } from '../../data/careers'
import './Careers.css'

export default function Careers() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)
  const jobRefs  = useRef([])

  useEffect(() => {
    const opts = { threshold: 0.15 }

    const leftObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('careers__left--visible')
          leftObs.unobserve(e.target)
        }
      })
    }, opts)

    const rightObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('careers__right--visible')
          rightObs.unobserve(e.target)
        }
      })
    }, opts)

    const jobObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('careers__job--visible')
          jobObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    if (leftRef.current)  leftObs.observe(leftRef.current)
    if (rightRef.current) rightObs.observe(rightRef.current)
    jobRefs.current.forEach(el => el && jobObs.observe(el))

    return () => {
      leftObs.disconnect()
      rightObs.disconnect()
      jobObs.disconnect()
    }
  }, [])

  return (
    <section id="careers" className="careers">

      {/* ── Top — intro text left, desc right ── */}
      <div className="careers__top">

        <div className="careers__left" ref={leftRef}>
          <div className="careers__eyebrow">Join Our Team</div>
          <h2 className="careers__title">
            Build Your<br />
            Career With<br />
            Blue Star
          </h2>
        </div>

        <div className="careers__right" ref={rightRef}>
          <p className="careers__desc">
            We're always looking for talented engineers, project managers,
            and support staff to grow with us. Competitive compensation,
            safety-first culture, and real career progression at every level.
          </p>
          <a
            href="mailto:careers@bluestarengineering.in"
            className="careers__email"
          >
            careers@bluestarengineering.in →
          </a>
        </div>

      </div>

      {/* ── Job list ── */}
      <div className="careers__list">
        {JOBS.map((job, i) => (
          <div
            key={job.id}
            className="careers__job"
            ref={el => jobRefs.current[i] = el}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            {/* Left — title + meta */}
            <div className="careers__job-info">
              <h3 className="careers__job-title">{job.title}</h3>
              <p className="careers__job-meta">
                {job.location}&nbsp;&nbsp;·&nbsp;&nbsp;
                {job.exp}&nbsp;&nbsp;·&nbsp;&nbsp;
                {job.type}
              </p>
            </div>

            {/* Right — badge + arrow */}
            <div className="careers__job-right">
              <span className="careers__badge">Hiring</span>
              <div className="careers__arrow">→</div>
            </div>

            {/* Gold line sweeps in on hover — bottom border */}
            <div className="careers__job-line" />
          </div>
        ))}
      </div>

    </section>
  )
}