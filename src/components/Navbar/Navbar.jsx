import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#ongoing" },
  { label: "Careers", href: "#careers" },
];

const SECTIONS = ["about", "services", "ongoing", "careers", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Frosted glass effect after 60px scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = "";
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      {/* ── Logo ── */}
      <a href='#home' className='logo' onClick={closeMenu}>
        <div className='logoMark'>
          <span>BS</span>
        </div>
        <div className='logoText'>
          <span className='logoName'>Blue Star</span>
          <span className='logoSub'>Engineering Co.</span>
        </div>
      </a>

      {/* ── Desktop Links ── */}
      <ul className='navLinks'>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`link ${isActive(link.href) ? "active" : ""}`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href='#contact' className='link ctaLink'>
            Contact
          </a>
        </li>
      </ul>

      {/* ── Hamburger (mobile) ── */}
      <button
        className={`hamburger ${menuOpen ? "hamburgerOpen" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ── Mobile Drawer ── */}
      <div
        className={`drawer ${menuOpen ? "drawerOpen" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className='drawerLinks'>
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 0.07}s` }}>
              <a href={link.href} onClick={closeMenu}>
                <span className='drawerNum'>⁕</span>
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ transitionDelay: "0.28s" }}>
            <a href='#contact' onClick={closeMenu} className='drawerCta'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
