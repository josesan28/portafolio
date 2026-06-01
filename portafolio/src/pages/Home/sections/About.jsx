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
  'Kotlin',
]

const actions = [
  {
    href: 'mailto:san24092@uvg.edu.gt',
    label: 'Contáctame',
    variant: 'about__btn--primary',
  },
  {
    href: 'https://github.com/josesan28',
    label: 'GitHub',
    variant: 'about__btn--secondary',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
]

const timelineItems = [
  {
    date: '2024 - 2026',
    title: 'Universidad del Valle de Guatemala',
    description: 'Aquí escribo lo que he aprendido en esta etapa.',
  },
  {
    date: '2026',
    title: 'Proyecto destacado',
    description: 'Voy a describir el proyecto de Software.',
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
            Actualmente soy estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información.
            Puedo construir aplicaciones web completas utilizando tecnologías modernas como React, Node.js y Docker. Me gusta aprender nuevas tecnologías y mejorar mis habilidades constantemente.
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
