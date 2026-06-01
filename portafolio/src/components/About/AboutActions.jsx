export default function AboutActions({ links }) {
  return (
    <div className="about__actions">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.target}
          rel={link.rel}
          className={`about__btn ${link.variant}`}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
