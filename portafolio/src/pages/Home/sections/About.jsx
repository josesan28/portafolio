import AboutActions from '../../../components/About/AboutActions'
import AboutPhoto from '../../../components/About/AboutPhoto'
import AboutSkills from '../../../components/About/AboutSkills'
import AboutTimelineItem from '../../../components/About/AboutTimelineItem'
import './About.css'

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Docker',
  'Git',
  'HTML',
  'CSS',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'Python',
  'Java',
]

const actions = [
  {
    label: 'san24092@uvg.edu.gt',
    value: 'san24092@uvg.edu.gt',
    type: 'copy',
    variant: 'about__btn--primary',
    icon: '/tech/mail.svg',
  },
  {
    href: 'https://github.com/josesan28',
    label: 'GitHub',
    variant: 'about__btn--secondary',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: '/tech/github.svg',
  },
]

const timelineItems = [
  {
    date: '2024 - 2026',
    title: 'Universidad del Valle de Guatemala',
    description: 'Actualmente estudiando en Tercer Año de la carrera de Ingeniería en Ciencias de la Computación y Tecnologías de la Información.',
  },
  {
    date: '2026 - Hoy',
    title: 'Proyecto más grande hasta la fecha',
    description: 'Se encuentra en desarrollo un proyecto para una cadena de farmacias local, utilizando React para el frontend, Node.js y Express para el backend, y PostgreSQL para la base de datos. Este proyecto lo considero especial porque me ha permitido aplicar mis conocimientos en un entorno real y mejorar mis habilidades de desarrollo.',
    current: true,
  },
]

export default function About() {
  return (
    <section className="about" id="about" aria-label="Sobre mí">
      <div className="about__grid">
        <div className="about__content">
          <span className="about__eyebrow">Sobre mí</span>

          <h1 className="about__name">José Sanchez</h1>
          <p className="about__role">Desarrollador Full-Stack Junior - Estudiante</p>

          <p className="about__bio">
            Actualmente soy estudiante universitario. Puedo construir
            aplicaciones web completas utilizando tecnologías modernas como
            React, Node.js y Docker. Me gusta aprender nuevas tecnologías y
            mejorar mis habilidades constantemente.
          </p>

          <div className="about__story">
            <h2 className="about__story-title">Mi experiencia</h2>
            <div className="about__timeline">
              {timelineItems.map((item, index) => (
                <AboutTimelineItem
                  key={`${item.date}-${item.title}`}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  current={item.current}
                  index={index}
                />
              ))}
            </div>
          </div>

          <AboutSkills skills={skills} />
          <AboutActions links={actions} />
        </div>

        <AboutPhoto />
      </div>
    </section>
  )
}
