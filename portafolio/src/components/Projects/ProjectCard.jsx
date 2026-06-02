import { Link } from 'react-router-dom'
import { getProjectActionLinks } from '../../utils/projectLinks'

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0
  const actionLinks = getProjectActionLinks(project.links)

  const handleProjectLinkClick = (event, href) => {
    if (href === '#') {
      event.preventDefault()
    }
  }

  return (
    <article className={`project-card ${isEven ? '' : 'project-card--reverse'}`}>
      <div className="project-card__image-col">
        <Link
          to={`/proyectos/${project.id}`}
          className="project-card__image-link"
          aria-label={`Abrir detalle de ${project.title}`}
        >
          <div className="project-card__image-frame">
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="project-card__image-placeholder" style={{ display: 'none' }}>
              <span className="project-card__image-placeholder-text">
                Vista previa
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__year">{project.year}</span>
        </div>

        <h2 className="project-card__title">
          <Link
            to={`/proyectos/${project.id}`}
            className="project-card__title-link"
          >
            {project.title}
          </Link>
        </h2>

        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item} className="project-card__highlight-item">
              <span className="project-card__highlight-dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          {actionLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href === '#' ? undefined : '_blank'}
              rel={link.href === '#' ? undefined : 'noopener noreferrer'}
              className={`project-card__btn project-card__btn--${link.variant} project-card__btn--layered`}
              onClick={(event) => handleProjectLinkClick(event, link.href)}
              aria-disabled={link.href === '#'}
              tabIndex={link.href === '#' ? -1 : 0}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
