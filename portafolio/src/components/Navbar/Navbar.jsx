import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/#about', label: 'Sobre mí' },
    { to: '/#stack', label: 'Tecnologías' },
    { to: '/#projects', label: 'Proyectos' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Navegacion principal">
        <Link to="/#about" className="navbar__brand">
          Jose Sanchez
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="navbar__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
          download
        >
          Curriculum
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="navbar__drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              className="navbar__drawer-link navbar__drawer-link--cta"
              download
            >
              Curriculum
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
