import './About.css'

export default function About() {
  return (
    <section className="about" id="about" aria-label="Sobre mí">
      <div className="about__grid">
        <div className="about__content">
          <span className="about__eyebrow">Sobre mí</span>

          <h1 className="about__name">
            José Sanchez
          </h1>
          <p className="about__role">
            Desarrollador Full-Stack Junior - Estudiante
          </p>

          <p className="about__bio">
            Actualmente soy estudiante de Ingeniería en Ciencias de la Computación.
            Aquí puedo ampliar un poco más quién soy y cómo trabajo.
          </p>

          <div className="about__story">
            <h2 className="about__story-title">Mi experiencia</h2>
            <div className="about__timeline">
              <div className="about__timeline-item">
                <span className="about__timeline-date">
                  2024 - 2026
                </span>
                <div className="about__timeline-body">
                  <strong>
                    Universidad del Valle de Guatemala
                  </strong>
                  <p>
                    Aquí escribo lo que he aprendido en esta etapa.
                  </p>
                </div>
              </div>

              <div className="about__timeline-item">
                <span className="about__timeline-date">
                  2026
                </span>
                <div className="about__timeline-body">
                  <strong>
                    Proyecto destacado
                  </strong>
                  <p>
                    Voy a describir el proyecto de Software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__skills">
            {[
              'React', 'JavaScript', 'Node.js', 'Express.js',
              'Docker', 'Git',
              'HTML', 'CSS', 'PostgreSQL', 'MySQL', 'SQLite',
              'Python', 'Java', 'Kotlin',
            ].map(skill => (
              <span key={skill} className="about__badge">
                {skill}
              </span>
            ))}
          </div>

          <div className="about__actions">
            <a
              href="mailto:san24092@uvg.edu.gt"
              className="about__btn about__btn--primary"
            >
              Contáctame
            </a>
            <a
              href="https://github.com/josesan28"
              target="_blank"
              rel="noopener noreferrer"
              className="about__btn about__btn--secondary"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="about__photo-wrapper">
          <div className="about__photo-frame">
            {/*
              Aquí reemplazo la foto por la mía.
            */}
            <img
              src="/foto-perfil.jpg"
              alt="Mi foto"
              className="about__photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about__photo-placeholder" style={{ display: 'none' }}>
              <span>Mi foto aquí</span>
            </div>
          </div>
          <div className="about__photo-decoration" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
