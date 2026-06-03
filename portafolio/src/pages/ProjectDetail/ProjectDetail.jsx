import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectFeatureCard from '../../components/ProjectDetail/ProjectFeatureCard'
import ProjectTechItem from '../../components/ProjectDetail/ProjectTechItem'
import { getProjectById } from '../../data/projects'
import { getProjectActionLinks } from '../../utils/projectLinks'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)
  const actionLinks = getProjectActionLinks(project?.links)

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const handlePlaceholderLinkClick = (event, href) => {
    if (href === '#') {
      event.preventDefault()
    }
  }

  return (
    <section className="project-detail" aria-label={`Detalle de ${project.title}`}>
      <header className="project-detail__header">
        <div className="project-detail__header-copy">
          <Link
            to={`/#${project.id}`}
            state={{ scrollBehavior: 'auto' }}
            className="project-detail__back-link"
          >
            <span className="project-detail__back-icon" aria-hidden="true">
              &larr;
            </span>
            Volver a proyectos
          </Link>

          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.description}</p>

          <div className="project-detail__meta-row">
            <div className="project-detail__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-detail__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-detail__actions">
              {actionLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target={link.href === '#' ? undefined : '_blank'}
                  rel={link.href === '#' ? undefined : 'noopener noreferrer'}
                  className={`project-detail__btn project-detail__btn--${link.variant}`}
                  onClick={(event) => handlePlaceholderLinkClick(event, link.href)}
                  aria-disabled={link.href === '#'}
                  tabIndex={link.href === '#' ? -1 : 0}
                >
                  {link.icon ? (
                    <img
                      src={link.icon}
                      alt=""
                      aria-hidden="true"
                      className="project-detail__btn-icon-image theme-asset--monochrome"
                    />
                  ) : null}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="project-detail__hero">
        <img
          src={project.image}
          alt={project.title}
          className="project-detail__hero-image"
          onError={(event) => {
            event.target.style.display = 'none'
            event.target.nextSibling.style.display = 'flex'
          }}
        />
        <div className="project-detail__hero-placeholder" style={{ display: 'none' }}>
          <span className="project-detail__hero-placeholder-text">{project.title}</span>
        </div>
      </div>

      <div className="project-detail__grid">
        <main className="project-detail__main">
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Visión general</h2>
            <div className="project-detail__prose">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Características clave</h2>
            <div className="project-detail__feature-grid">
              {project.features.map((feature) => (
                <ProjectFeatureCard key={feature.title} feature={feature} />
              ))}
            </div>
          </section>
        </main>

        <aside className="project-detail__aside">
          <section className="project-detail__section">
            <h2 className="project-detail__section-title">Stack técnico y decisiones</h2>
            <div className="project-detail__tech-list">
              {project.stack.map((tech) => (
                <ProjectTechItem key={tech.name} tech={tech} />
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  )
}
