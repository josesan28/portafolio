import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        <span className="footer__brand">
          José Sanchez
        </span>

        <span className="footer__copy">
          {year}
        </span>

        <ul className="footer__links">
          <li>
            <a
              href="https://github.com/josesan28"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:san24092@uvg.edu.gt" className="footer__link">
              Correo
            </a>
          </li>
        </ul>

      </div>
    </footer>
  )
}
