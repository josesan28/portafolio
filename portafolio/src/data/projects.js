export const projects = [
  {
    id: 'proyecto-1',
    title: 'Mi proyecto 1',
    year: '2025',
    type: 'Full-Stack / SPA',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    overview: [
      'Aquí amplio la visión general del proyecto con más contexto sobre el problema que resuelve y el enfoque que seguí para construirlo.',
      'Aquí explico qué parte de la arquitectura fue más importante y cómo fui ajustando la implementación para que el resultado se mantenga limpio y sostenible.',
    ],
    features: [
      {
        title: 'Arquitectura clara',
        description:
          'Aquí destaco una decisión técnica importante que ayudó a mantener el proyecto ordenado y fácil de extender.',
      },
      {
        title: 'Flujo consistente',
        description:
          'Aquí explico otra decisión clave relacionada con la estructura, la comunicación entre capas o la experiencia de usuario.',
      },
      {
        title: 'Aprendizaje práctico',
        description:
          'Aquí resumo lo que aprendí al construirlo y por qué esa experiencia me dejó una base más sólida.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Lo usé para construir la interfaz y mantener una estructura de componentes reutilizables.',
      },
      {
        name: 'Node.js',
        icon: '/tech/node.svg',
        reason:
          'Lo usé para resolver la lógica del servidor y mantener el stack coherente con el frontend.',
      },
      {
        name: 'Docker',
        icon: '/tech/docker.svg',
        reason:
          'Lo usé para reproducir el entorno y evitar diferencias entre desarrollo y despliegue.',
      },
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
    type: 'Back-End / API',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    overview: [
      'Aquí amplio la visión general del proyecto con más contexto sobre el problema que resuelve y el enfoque que seguí para construirlo.',
      'Aquí explico qué parte de la arquitectura fue más importante y cómo fui ajustando la implementación para que el resultado se mantenga limpio y sostenible.',
    ],
    features: [
      {
        title: 'Rutas ordenadas',
        description:
          'Aquí destaco una decisión técnica importante enfocada en claridad, mantenimiento y escalabilidad.',
      },
      {
        title: 'Consumo estable',
        description:
          'Aquí explico otra decisión clave sobre la forma en que el sistema entrega y procesa la información.',
      },
      {
        title: 'Base robusta',
        description:
          'Aquí resumo lo que aprendí al construirlo y por qué la experiencia fortaleció mi forma de trabajar.',
      },
    ],
    stack: [
      {
        name: 'Node.js',
        icon: '/tech/node.svg',
        reason:
          'Lo usé para ejecutar la lógica principal del servidor con una base moderna y consistente.',
      },
      {
        name: 'Express.js',
        icon: '/tech/express.svg',
        reason:
          'Lo usé para estructurar la API de forma simple, predecible y fácil de mantener.',
      },
      {
        name: 'PostgreSQL',
        icon: '/tech/postgresql.svg',
        reason:
          'Lo usé para guardar datos relacionales con integridad y consultas sólidas.',
      },
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
    type: 'Front-End',
    description:
      'Aquí describo qué problema resuelve mi proyecto, qué decisiones técnicas tomé y qué aprendí construyéndolo.',
    highlights: [
      'Aquí destaco una decisión técnica importante',
      'Aquí explico otra decisión clave',
      'Aquí resumo lo que aprendí',
    ],
    overview: [
      'Aquí amplio la visión general del proyecto con más contexto sobre el problema que resuelve y el enfoque que seguí para construirlo.',
      'Aquí explico qué parte de la arquitectura fue más importante y cómo fui ajustando la implementación para que el resultado se mantenga limpio y sostenible.',
    ],
    features: [
      {
        title: 'UI consistente',
        description:
          'Aquí destaco una decisión técnica importante enfocada en la consistencia visual y en la facilidad de uso.',
      },
      {
        title: 'Responsivo',
        description:
          'Aquí explico otra decisión clave relacionada con adaptabilidad y lectura en diferentes tamaños de pantalla.',
      },
      {
        title: 'Iteración rápida',
        description:
          'Aquí resumo lo que aprendí construyéndolo y cómo reforzó mi criterio para diseñar interfaces.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Lo usé para componer la interfaz y organizar los estados de la vista de forma limpia.',
      },
      {
        name: 'CSS',
        icon: '/tech/css.svg',
        reason:
          'Lo usé para controlar la composición visual y asegurar que la experiencia se mantenga clara.',
      },
      {
        name: 'Vite',
        icon: '/tech/vite.svg',
        reason:
          'Lo usé para tener un flujo de desarrollo rápido y un build liviano.',
      },
    ],
    tags: ['React', 'CSS', 'Vite'],
    links: {
      demo: '#',
      repo: '#',
    },
    image: '/proyecto-3.jpg',
  },
]

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId)
}
