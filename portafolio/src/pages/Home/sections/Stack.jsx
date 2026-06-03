import TechCard from '../../../components/Stack/TechCard'
import './Stack.css'

const technologies = [
  {
    category: 'Frontend',
    name: 'React',
    icon: '/tech/react.svg',
    reason:
      'Puedo construir interfaces reutilizables, organizo el estado de forma clara y mantengo una experiencia fluida en aplicaciones interactivas.',
  },
  {
    category: 'Lenguaje',
    name: 'JavaScript',
    icon: '/tech/javascript.svg',
    reason:
      'Es esencial para la lógica del lado del cliente, pero también me permite trabajar en el backend con Node.js, lo que me da flexibilidad para construir aplicaciones completas.',
  },
  {
    category: 'Runtime',
    name: 'Node.js',
    icon: '/tech/node.svg',
    reason:
      'Ejecuto JavaScript en el servidor y construyo herramientas o servicios con la misma base tecnológica del frontend.',
  },
  {
    category: 'Backend',
    name: 'Express.js',
    icon: '/tech/express.svg',
    reason:
      'Me permite crear APIs, definir rutas y manejar middlewares de forma simple y ordenada.',
  },
  {
    category: 'Infraestructura',
    name: 'Docker',
    icon: '/tech/docker.svg',
    reason:
      'Levanto entornos consistentes, aíslo dependencias y evito diferencias entre mi máquina y la de despliegue.',
  },
  {
    category: 'Control de versiones',
    name: 'Git',
    icon: '/tech/git.svg',
    reason:
      'Llevo el historial de cambios, trabajo con ramas y reviso el progreso de cada parte del proyecto.',
  },
  {
    category: 'Estructura',
    name: 'HTML',
    icon: '/tech/html.svg',
    reason:
      'Le doy estructura semántica al contenido y construyo páginas más accesibles y claras.',
  },
  {
    category: 'Estilos',
    name: 'CSS',
    icon: '/tech/css.svg',
    reason:
      'Decoro interfaces, defino la identidad visual y adapto el diseño a distintos tamaños de pantalla.',
  },
  {
    category: 'Base de datos',
    name: 'PostgreSQL',
    icon: '/tech/postgresql.svg',
    reason:
      'Cuando necesito una base de datos relacional robusta, con consultas potentes y buena integridad de datos, esta es mi elección.',
  },
  {
    category: 'Base de datos',
    name: 'MySQL',
    icon: '/tech/mysql.svg',
    reason:
      'En proyectos relacionales donde conviene una solución conocida, estable y fácil de administrar, utilizo MySQL.',
  },
  {
    category: 'Base de datos',
    name: 'SQLite',
    icon: '/tech/sqlite.svg',
    reason:
      'Para prototipos, pruebas locales y aplicaciones ligeras que necesitan almacenamiento embebido, SQLite lo considero ideal.',
  },
  {
    category: 'Lenguaje',
    name: 'Python',
    icon: '/tech/python.svg',
    reason:
      'Scripts y simulaciones donde importa más la rapidez de desarrollo que la complejidad del entorno.',
  },
  {
    category: 'Lenguaje',
    name: 'Java',
    icon: '/tech/java.svg',
    reason:
      'Practico programación orientada a objetos y puedo trabajar en proyectos donde el tipado y la estructura son importantes.',
  },
]

export default function Stack() {
  return (
    <section className="stack" id="stack" aria-label="Tecnologías">
      <div className="stack__header">
        <span className="stack__eyebrow">Tecnologías</span>
        <h2 className="stack__title">Caja de Herramientas</h2>
        <p className="stack__subtitle">
          Lenguajes, frameworks y herramientas con las que puedo trabajar actualmente.
        </p>
      </div>

      <div className="stack__grid">
        {technologies.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}
