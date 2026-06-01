import './Projects.css'

const projects = [
  {
    id: 'proyecto-1',
    title: 'Mi proyecto 1',
    year: '2025',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    tags: ['React', 'Node.js', 'Docker'],
    links: {
      demo: '#',
      repo: '#',
    },
    image: '/proyecto-1.jpg',
  },
  {
    id: 'proyecto-2',
    title: 'Mi proyecto 2',
    year: '2025',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    links: {
      demo: '#',
      repo: '#',
    },
    image: '/proyecto-2.jpg',
  },
  {
    id: 'proyecto-3',
    title: 'Mi proyecto 3',
    year: '2024',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    tags: ['React', 'CSS', 'Vite'],
    links: {
      demo: '#',
      repo: '#',
    },
    image: '/proyecto-3.jpg',
  },
]

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <article className={`project-card ${isEven ? '' : 'project-card--reverse'}`}>
      <div className="project-card__image-col">
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
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__year">{project.year}</span>
        </div>

        <h2 className="project-card__title">{project.title}</h2>

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
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
          >
            Demo en vivo
          </a>
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--secondary"
          >
            Repositorio
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section className="projects-page" id="projects" aria-label="Proyectos">
      <header className="projects-page__header">
        <span className="projects-page__eyebrow">Proyectos</span>
        <h1 className="projects-page__title">Trabajo Reciente</h1>
        <p className="projects-page__subtitle">
          Mejores proyectos en los que he trabajado, con detalles sobre las tecnologías usadas y su justificación.
        </p>
      </header>

      <div className="projects-page__list">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
