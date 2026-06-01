import ProjectCard from '../../components/Projects/ProjectCard'
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

export default function Projects() {
  return (
    <section className="projects-page" id="projects" aria-label="Proyectos">
      <header className="projects-page__header">
        <span className="projects-page__eyebrow">Proyectos</span>
        <h1 className="projects-page__title">Trabajo Reciente</h1>
        <p className="projects-page__subtitle">
          Selección de proyectos donde la arquitectura limpia se encuentra
          con decisiones técnicas reales.
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
