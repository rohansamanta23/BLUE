import { useEffect, useRef, useState } from 'react'
import './Contact.css'

const SERVICES = [
  'Civil Construction',
  'MEP Engineering',
  'Structural Engineering',
  'Infrastructure & Roads',
  'Plant Maintenance',
  'Design & Consultancy',
]

const CONTACT_DETAILS = [
  {
    label: 'Address',
    value: '42, 3rd Floor, Industrial Layout,\nKoramangala, Bengaluru – 560034',
  },
  {
    label: 'Phone',
    value: '+91 XXXXX XXXXX',
  },
  {
    label: 'Email',
    value: 'info@bluestarengineering.in',
  },
  {
    label: 'Working Hours',
    value: 'Mon – Sat, 9:00 AM – 6:00 PM',
  },
]

const INITIAL_FORM = {
  firstName:  '',
  lastName:   '',
  email:      '',
  phone:      '',
  service:    '',
  message:    '',
}

export default function Contact() {
  const leftRef  = useRef(null)
  const rightRef = useRef(null)

  const [form,        setForm]        = useState(INITIAL_FORM)
  const [submitted,   setSubmitted]   = useState(false)
  const [errors,      setErrors]      = useState({})

  useEffect(() => {
    const opts = { threshold: 0.12 }

    const leftObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('contact__left--visible')
          leftObs.unobserve(e.target)
        }
      })
    }, opts)

    const rightObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('contact__right--visible')
          rightObs.unobserve(e.target)
        }
      })
    }, opts)

    if (leftRef.current)  leftObs.observe(leftRef.current)
    if (rightRef.current) rightObs.observe(rightRef.current)

    return () => {
      leftObs.disconnect()
      rightObs.disconnect()
    }
  }, [])

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  // Basic validation
  const validate = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = 'Required'
    if (!form.lastName.trim())  newErrors.lastName  = 'Required'
    if (!form.email.trim())     newErrors.email     = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.message.trim())   newErrors.message   = 'Required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // In real project: send to API / EmailJS / Formspree here
    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contact" className="contact">

      <div className="contact__grid">

        {/* ── Left — headline + contact details ── */}
        <div className="contact__left" ref={leftRef}>

          <h2 className="contact__headline">
            Let's<br />
            <span className="contact__headline--gold">Build</span><br />
            Together
          </h2>

          <div className="contact__details">
            {CONTACT_DETAILS.map(item => (
              <div key={item.label} className="contact__detail-item">
                <span className="contact__detail-label">{item.label}</span>
                <p className="contact__detail-value">
                  {item.value.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ── Right — form ── */}
        <div className="contact__right" ref={rightRef}>

          {submitted ? (
            /* Success state */
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3 className="contact__success-title">Message Sent</h3>
              <p className="contact__success-desc">
                Thank you for reaching out. Our team will get back
                to you within 24 hours.
              </p>
              <button
                className="contact__success-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>

              {/* Name row */}
              <div className="contact__form-row">
                <div className="contact__field">
                  <label className="contact__label">First Name</label>
                  <input
                    className={`contact__input ${errors.firstName ? 'contact__input--error' : ''}`}
                    type="text"
                    name="firstName"
                    placeholder="Rohan"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="contact__error">{errors.firstName}</span>
                  )}
                </div>
                <div className="contact__field">
                  <label className="contact__label">Last Name</label>
                  <input
                    className={`contact__input ${errors.lastName ? 'contact__input--error' : ''}`}
                    type="text"
                    name="lastName"
                    placeholder="Samanta"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="contact__error">{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="contact__field">
                <label className="contact__label">Email Address</label>
                <input
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="contact__error">{errors.email}</span>
                )}
              </div>

              {/* Phone */}
              <div className="contact__field">
                <label className="contact__label">Phone Number</label>
                <input
                  className="contact__input"
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Service select */}
              <div className="contact__field">
                <label className="contact__label">Service Required</label>
                <div className="contact__select-wrap">
                  <select
                    className="contact__select"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="contact__select-arrow">↓</span>
                </div>
              </div>

              {/* Message */}
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea
                  className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  name="message"
                  placeholder="Tell us about your project…"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="contact__error">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="contact__submit">
                Send Message →
              </button>

            </form>
          )}

        </div>
      </div>

    </section>
  )
}