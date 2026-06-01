import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

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
          <a
            href={project.links.demo}
            target={project.links.demo === '#' ? undefined : '_blank'}
            rel={project.links.demo === '#' ? undefined : 'noopener noreferrer'}
            className="project-card__btn project-card__btn--primary project-card__btn--layered"
            onClick={(event) => handleProjectLinkClick(event, project.links.demo)}
            aria-disabled={project.links.demo === '#'}
            tabIndex={project.links.demo === '#' ? -1 : 0}
          >
            Demo en vivo
          </a>
          <a
            href={project.links.repo}
            target={project.links.repo === '#' ? undefined : '_blank'}
            rel={project.links.repo === '#' ? undefined : 'noopener noreferrer'}
            className="project-card__btn project-card__btn--secondary project-card__btn--layered"
            onClick={(event) => handleProjectLinkClick(event, project.links.repo)}
            aria-disabled={project.links.repo === '#'}
            tabIndex={project.links.repo === '#' ? -1 : 0}
          >
            Repositorio
          </a>
        </div>
      </div>
    </article>
  )
}
