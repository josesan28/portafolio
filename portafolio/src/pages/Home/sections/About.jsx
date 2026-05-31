import './About.css'

export default function About() {
  return (
    <section className="about" id="about" aria-label="Sobre mí­">
      <div className="about__grid">

        {/* Columna izquierda: texto */}
        <div className="about__content">

          {/* Etiqueta superior */}
          <span className="about__eyebrow">Sobre mí­</span>

          {/* Nombre y tí­tulo */}
          <h1 className="about__name">
            José Sanchez
          </h1>
          <p className="about__role">
            Desarrollador Full-Stack Junior - Estudiante
          </p>

          {/* Descripción principal */}
          <p className="about__bio">
            Actualmente soy estudiante de Ingeniería en Ciencias de la Computación. SIGO DESPUÉS.
          </p>

          {/* Historia rápida / trayectoria */}
          <div className="about__story">
            <h2 className="about__story-title">Mi trayectoria</h2>
            <div className="about__timeline">

              <div className="about__timeline-item">
                <span className="about__timeline-date">
                  2024 - 2026
                </span>
                <div className="about__timeline-body">
                  <strong>
                    {/* TODO: nombre del estudio o institución */}
                    Universidad del Valle de Guatemala
                  </strong>
                  <p>
                    Qué he aprendido.
                  </p>
                </div>
              </div>

              <div className="about__timeline-item">
                <span className="about__timeline-date">
                  2026
                </span>
                <div className="about__timeline-body">
                  <strong>
                    Experiencia o proyecto destacado
                  </strong>
                  <p>
                    Proyecto de Software.
                  </p>
                </div>
              </div>

              <div className="about__timeline-item about__timeline-item--current">
                <span className="about__timeline-date">Hoy</span>
                <div className="about__timeline-body">
                  <strong>Actualmente</strong>
                  <p>
                    Qué estoy haciendo ahorita.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Habilidades rápidas */}
          <div className="about__skills">
            {[
              'React', 'JavaScript', 'Node.js', 'Express.js', 
              'Docker', 'Git',
              'HTML', 'CSS', 'PostgreSQL', 'MySQL', 'SQLite',
              'Python', 'Java', 'C++','Kotlin',
            ].map(skill => (
              <span key={skill} className="about__badge">
                {skill}
              </span>
            ))}
          </div>

          {/* Botones de contacto */}
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

        {/* Columna derecha: foto */}
        <div className="about__photo-wrapper">
          <div className="about__photo-frame">
            {/*
              TODO: reemplazar src con foto.
            */}
            <img
              src="/foto-perfil.jpg"
              alt="Foto de perfil de Tu Nombre"
              className="about__photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about__photo-placeholder" style={{ display: 'none' }}>
              <span>Foto</span>
            </div>
          </div>
          {/* Detalle */}
          <div className="about__photo-decoration" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
