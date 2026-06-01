import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectFeatureCard from '../../components/ProjectDetail/ProjectFeatureCard'
import ProjectTechItem from '../../components/ProjectDetail/ProjectTechItem'
import { getProjectById } from '../../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = getProjectById(projectId)

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
          <Link to="/#projects" className="project-detail__back-link">
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
              <a
                href={project.links.demo}
                target={project.links.demo === '#' ? undefined : '_blank'}
                rel={project.links.demo === '#' ? undefined : 'noopener noreferrer'}
                className="project-detail__btn project-detail__btn--primary"
                onClick={(event) => handlePlaceholderLinkClick(event, project.links.demo)}
                aria-disabled={project.links.demo === '#'}
                tabIndex={project.links.demo === '#' ? -1 : 0}
              >
                Demo en vivo
              </a>
              <a
                href={project.links.repo}
                target={project.links.repo === '#' ? undefined : '_blank'}
                rel={project.links.repo === '#' ? undefined : 'noopener noreferrer'}
                className="project-detail__btn project-detail__btn--secondary"
                onClick={(event) => handlePlaceholderLinkClick(event, project.links.repo)}
                aria-disabled={project.links.repo === '#'}
                tabIndex={project.links.repo === '#' ? -1 : 0}
              >
                Repositorio
              </a>
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
