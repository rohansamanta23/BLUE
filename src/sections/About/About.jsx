import { useEffect, useRef } from 'react'
import './About.css'

const PILLARS = [
  {
    title: 'ISO Certified',
    desc:  'ISO 9001:2015 quality management across all operations.',
  },
  {
    title: 'In-House Teams',
    desc:  'Design, procurement, and construction under one roof.',
  },
  {
    title: 'Pan-India Reach',
    desc:  'Active projects across Karnataka, Tamil Nadu, Kerala, and Maharashtra.',
  },
  {
    title: 'Safety First',
    desc:  'Zero-compromise HSE standards on every worksite.',
  },
]

export default function About() {
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const pillarsRef = useRef([])

  useEffect(() => {
    const options = { threshold: 0.15 }

    // Left image block slides in from left
    const leftObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('about__left--visible')
          leftObs.unobserve(e.target)
        }
      })
    }, options)

    // Right text block slides in from right
    const rightObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('about__right--visible')
          rightObs.unobserve(e.target)
        }
      })
    }, options)

    // Pillar cards stagger in
    const pillarObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('about__pillar--visible')
          pillarObs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    if (leftRef.current)  leftObs.observe(leftRef.current)
    if (rightRef.current) rightObs.observe(rightRef.current)
    pillarsRef.current.forEach(el => el && pillarObs.observe(el))

    return () => {
      leftObs.disconnect()
      rightObs.disconnect()
      pillarObs.disconnect()
    }
  }, [])

  return (
    <section id="about" className="about">

      {/* ── Left — image + year badge ── */}
      <div className="about__left" ref={leftRef}>
        <div className="about__img-wrap">
          <div className="about__img" />
        </div>
        <div className="about__badge">
          <strong>2003</strong>
          <span>Founded in Bengaluru</span>
        </div>
      </div>

      {/* ── Right — text content ── */}
      <div className="about__right" ref={rightRef}>

        <div className="about__eyebrow">Our Story</div>

        <h2 className="about__title">
          Engineering<br />
          That Moves<br />
          India Forward
        </h2>

        <p className="about__body">
          Blue Star Engineering Co. has been a trusted name in civil and
          mechanical engineering for over two decades. Based in Bengaluru,
          we execute large-scale infrastructure, industrial, and commercial
          projects with unwavering precision and integrity.
        </p>

        {/* Pillar cards */}
        <div className="about__pillars">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="about__pillar"
              ref={el => pillarsRef.current[i] = el}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h4 className="about__pillar-title">{pillar.title}</h4>
              <p  className="about__pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="about__cta">
          Work With Us →
        </a>

      </div>

    </section>
  )
}