import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(window.location.hash || '#about')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveHash(location.hash || '#about')
  }, [location.hash, location.pathname])

  useEffect(() => {
    const syncActiveHash = () => setActiveHash(window.location.hash || '#about')
    window.addEventListener('hashchange', syncActiveHash)
    window.addEventListener('sectionhashchange', syncActiveHash)
    return () => {
      window.removeEventListener('hashchange', syncActiveHash)
      window.removeEventListener('sectionhashchange', syncActiveHash)
    }
  }, [])

  const navLinks = [
    { to: '/#about', hash: '#about', label: 'Sobre mí' },
    { to: '/#stack', hash: '#stack', label: 'Tecnologías' },
    { to: '/#projects', hash: '#projects', label: 'Proyectos' },
    { to: '/#contact', hash: '#contact', label: 'Contacto' },
  ]

  const isHomeRoute = location.pathname === '/'
  const currentHash = isHomeRoute ? activeHash : location.hash
  const isDarkTheme = theme === 'dark'

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Navegación principal">
        <Link to="/#about" className="navbar__brand">
          José Sanchez
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${isHomeRoute && currentHash === link.hash ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__controls">
          <button
            type="button"
            className={`navbar__theme-toggle ${isDarkTheme ? 'navbar__theme-toggle--dark' : ''}`}
            onClick={toggleTheme}
            aria-label={`Cambiar tema. Tema actual: ${isDarkTheme ? 'oscuro' : 'claro'}`}
          >
            <span className="navbar__theme-toggle-track" aria-hidden="true">
              <span className="navbar__theme-toggle-thumb" />
            </span>
            <span className="navbar__theme-toggle-label">
              {isDarkTheme ? 'Oscuro' : 'Claro'}
            </span>
          </button>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
            download
          >
            Currículum
          </a>

          <button
            type="button"
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__drawer-link ${isHomeRoute && currentHash === link.hash ? 'navbar__drawer-link--active' : ''}`}
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
              Currículum
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
