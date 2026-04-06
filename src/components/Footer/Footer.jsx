import './Footer.css'

const FOOTER_NAV = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us',         href: '#about'    },
      { label: 'Services',         href: '#services' },
      { label: 'Ongoing Projects', href: '#ongoing'  },
      { label: 'Past Projects',    href: '#past'     },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Civil Construction',    href: '#services' },
      { label: 'MEP Engineering',       href: '#services' },
      { label: 'Structural Works',      href: '#services' },
      { label: 'Design & Consultancy',  href: '#services' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Careers',         href: '#careers'  },
      { label: 'Contact Us',      href: '#contact'  },
      { label: 'LinkedIn',        href: '#'         },
      { label: 'Privacy Policy',  href: '#'         },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">

      {/* ── Top row: brand left, nav columns right ── */}
      <div className="footer__top">

        <div className="footer__brand">
          {/* Logo mark */}
          <a href="#home" className="footer__logo">
            <div className="footer__logo-mark">
              <span>BS</span>
            </div>
            <div className="footer__logo-text">
              <span className="footer__logo-name">Blue Star</span>
              <span className="footer__logo-sub">Engineering Co.</span>
            </div>
          </a>

          <p className="footer__brand-desc">
            Delivering precision engineering and large-scale construction
            solutions across India since 2003. Quality, safety, and
            integrity in every project.
          </p>

          {/* Contact details inline */}
          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <span className="footer__contact-label">Address</span>
              <span>42, 3rd Floor, Industrial Layout, Koramangala, Bengaluru – 560034</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Phone</span>
              <span>+91 80 4567 8900</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">Email</span>
              <span>info@bluestarengineering.in</span>
            </div>
          </div>
        </div>

        {/* Nav columns */}
        <div className="footer__nav">
          {FOOTER_NAV.map(col => (
            <div key={col.heading} className="footer__col">
              <h5 className="footer__col-heading">{col.heading}</h5>
              <ul className="footer__col-list">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="footer__divider" />

      {/* ── Bottom row: copyright left, cert right ── */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {year}{' '}
          <span className="footer__gold">Blue Star Engineering Co.</span>
          {' '}· All rights reserved · Bengaluru, India
        </p>
        <p className="footer__cert">ISO 9001:2015 Certified</p>
      </div>

    </footer>
  )
}