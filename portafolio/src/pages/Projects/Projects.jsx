import ProjectCard from '../../components/Projects/ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects-page" id="projects" aria-label="Proyectos">
      <header className="projects-page__header">
        <span className="projects-page__eyebrow">Proyectos</span>
        <h1 className="projects-page__title">Trabajo Reciente</h1>
        <p className="projects-page__subtitle">
          Algunos proyectos en los que he trabajado que reflejan mi forma de trabajar: ordenada y pensada para ser útil.
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
