export default function AboutActions({ links }) {
  return (
    <div className="about__actions">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.target}
          rel={link.rel}
          className={`about__btn ${link.variant}`}
          style={{ '--action-index': index }}
        >
          <span>{link.label}</span>
          <span className="about__btn-icon" aria-hidden="true">
            {link.variant === 'about__btn--primary' ? '↗' : '→'}
          </span>
        </a>
      ))}
    </div>
  )
}
