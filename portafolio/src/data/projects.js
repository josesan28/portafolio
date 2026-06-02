export const projects = [
  {
    id: 'proyecto-1',
    title: 'FarmaCom',
    year: '2026',
    type: 'Full-Stack / SPA con API REST',
    description:
      'Sistema web para apoyar la operación de una cadena farmacéutica, con autenticación por roles, gestión de inventario y una API REST propia conectada a una base relacional. Actualmente sigue en desarrollo, pero ya tiene funcionalidades clave implementadas y un entorno de desarrollo listo para probar.',
    highlights: [
      'La aplicación quedó separada en frontend, backend y base de datos para que cada capa tenga una responsabilidad clara.',
      'Los permisos se resolvieron con control por roles tanto en la navegación del cliente como en las rutas del servidor.',
      'El inventario se modeló con lotes, vencimientos y stock mínimo para acercarlo a un flujo más real de farmacia.',
    ],
    overview: [
      'FarmaCom surgió como una propuesta para ordenar procesos que normalmente terminan repartidos entre hojas de cálculo, llamadas y registros poco consistentes. El proyecto incluye autenticación, administración de sucursales, catálogo de productos, proveedores, casas farmacéuticas e inventario por lotes en una sola aplicación, con un flujo pensado para que la información se mantenga conectada y sea útil en la operación diaria.',
      'En la parte técnica, se construyó como una SPA en React que consume una API REST en Node.js y Express, con PostgreSQL como base de datos y Docker Compose para levantar todo el entorno. Esa combinación permitió trabajar una interfaz fluida, dejar las reglas del negocio bien ubicadas en backend y aprovechar una base relacional para expresar restricciones y estados importantes como stock bajo, lotes vencidos y próximos a vencer.',
    ],
    features: [
      {
        title: 'Autenticación y control de acceso',
        description:
          'La sesión se maneja con JWT en cookie httpOnly y el frontend restaura el usuario al recargar para no romper la experiencia. Además, los permisos no se quedan en la interfaz: el backend también valida roles antes de permitir acciones administrativas.',
      },
      {
        title: 'Inventario con lotes y vencimientos',
        description:
          'Productos, presentaciones, proveedores, sucursales y lotes no se trataron como tablas aisladas. La estructura relacional y la vista para estado de vencimiento y stock permitieron mover parte de la lógica importante al nivel de datos, donde se vuelve más consistente y fácil de reutilizar.',
      },
      {
        title: 'Entorno fácil de reproducir',
        description:
          'El proyecto corre con Docker Compose sobre contenedores separados para frontend, backend y PostgreSQL, incluyendo datos semilla. Eso vuelve mucho más simple probar el sistema, compartirlo y levantarlo sin depender de configuraciones manuales distintas en cada equipo.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Se utiliza para construir una SPA con rutas protegidas, componentes reutilizables y hooks enfocados en el consumo de cada módulo de la API. Es útil para mantener la interfaz organizada incluso cuando el proyecto empezó a crecer por secciones.',
      },
      {
        name: 'Node.js',
        icon: '/tech/node.svg',
        reason:
          'Se utiliza como base del servidor junto con Express para exponer la API REST y separar rutas, controladores, servicios y acceso a datos. Esa estructura fue útil para no mezclar detalles HTTP con reglas del negocio.',
      },
      {
        name: 'PostgreSQL',
        icon: '/tech/postgresql.svg',
        reason:
          'Se eligió porque el problema necesitaba relaciones sólidas entre sucursales, usuarios, productos, lotes y proveedores. También permitió definir restricciones, claves foráneas y vistas que aportan bastante al control del inventario.',
      },
      {
        name: 'Docker',
        icon: '/tech/docker.svg',
        reason:
          'Se utiliza para que el entorno sea reproducible desde el principio. En un proyecto con varias capas, tener frontend, backend y base de datos levantándose de forma coordinada reduce mucho los problemas   al probar y desplegar.',
      },
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    links: {
      demo: 'https://farmacom.website/login',
      repo: 'https://github.com/FarmaComGT/FarmaCom',
    },
    image: '/proyecto-1.png',
  },
  {
    id: 'proyecto-2',
    title: 'Gestión - Tienda Eka',
    year: '2026',
    type: 'Full-Stack / Seguridad y lógica en DBMS',
    description:
      'Sistema web para gestión de productos, clientes, proveedores, ventas y reportes, con una capa importante de seguridad y parte de la lógica de negocio hecha directamente en MySQL.',
    highlights: [
      'Combiné interfaz, API, ORM y procedimientos almacenados para no llevar toda la lógica al backend.',
      'Los permisos se trabajaron en dos niveles: validación por rol en la aplicación y privilegios reales dentro del DBMS.',
      'Las operaciones sensibles, como registrar o anular ventas, se resolvieron con transacciones para cuidar la consistencia del stock.',
    ],
    overview: [
      'Este proyecto consiste en un sistema de gestión comercial con productos, categorías, proveedores, clientes, empleados, ventas y reportes. La parte interesante no fue solo agregar varias pantallas, sino bajar ciertas decisiones importantes a la base de datos: roles, permisos y procedimientos almacenados para operaciones que necesitaban ser más confiables que un CRUD tradicional.',
      'Por eso la arquitectura quedó repartida entre React en el frontend, Node.js y Express en la API, Sequelize para el CRUD más común y MySQL para la parte más sensible del proyecto. Eso me permitió usar el ORM donde aporta velocidad y claridad, pero también usar SQL directo y stored procedures cuando la operación necesitaba control transaccional o consultas más expresivas, como en ventas y reportes.',
    ],
    features: [
      {
        title: 'Seguridad aplicada en aplicación y base de datos',
        description:
          'Los accesos no se resuelven solo ocultando botones. El sistema valida roles en frontend y backend, y además define roles y privilegios dentro de MySQL para que cada perfil tenga permisos acordes a su función incluso a nivel de DBMS.',
      },
      {
        title: 'Ventas con control transaccional',
        description:
          'Registrar una venta, anularla o ajustar stock son acciones que afectan varias tablas y no conviene tratarlas como updates sueltos. Por eso se implementaron procedimientos almacenados con transacciones, validación de stock y rollback en caso de error, para mantener consistencia cuando una operación falla a la mitad.',
      },
      {
        title: 'Reportes y mantenimiento con SQL directo',
        description:
          'Para las operaciones CRUD usé Sequelize porque acelera bastante el trabajo repetitivo y mantiene el código más legible. En cambio, los reportes y ciertas reglas de negocio se resolvieron con SQL directo y procedimientos, porque ahí importaba más la precisión de la consulta y el control sobre la ejecución.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Lo usé para construir una interfaz administrativa con navegación protegida, vistas separadas por módulo y secciones de reportes con gráficas. Era importante que el frontend acompañara bien la lógica de permisos sin volverse confuso para el usuario.',
      },
      {
        name: 'Node.js',
        icon: '/tech/node.svg',
        reason:
          'Lo usé junto con Express para la API porque me permitió organizar autenticación, middlewares, rutas y servicios de una forma bastante clara. También funcionó bien como capa intermedia entre el frontend y la lógica que vive en MySQL.',
      },
      {
        name: 'MySQL',
        icon: '/tech/mysql.svg',
        reason:
          'Fue una elección natural porque el foco del proyecto estaba precisamente en trabajar seguridad, privilegios, procedimientos almacenados y transacciones dentro del DBMS, y MYSQL permite implementar estas funcionalidades de manera eficiente. Más que solo guardar datos, la base participa activamente en la lógica del sistema.',
      },
      {
        name: 'Sequelize',
        icon: '/tech/sequelize.svg',
        reason:
          'Lo usé como ORM para los CRUD donde convenía trabajar con una capa de acceso más mantenible. Me permitió dejar SQL directo para los casos donde sí hacía falta un control más detallado, en lugar de forzar el mismo enfoque para todo.',
      },
      {
        name: 'Docker',
        icon: '/tech/docker.svg',
        reason:
          'Lo usé para levantar frontend, backend, base de datos, e incluso perfiles separados para lint y tests. Eso hizo que el proyecto fuera más fácil de ejecutar y de revisar sin depender demasiado del entorno local.',
      },
    ],
    tags: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Docker'],
    links: {
      demo: 'https://eka-qtlh.onrender.com',
      repo: 'https://github.com/josesan28/Proyecto-2-DB/tree/proyecto-3',
    },
    image: '/proyecto-2.png',
  },
  {
    id: 'proyecto-3',
    title: 'Series Tracker',
    year: '2026',
    type: 'Full-Stack / Cliente web + API REST',
    description:
      'Aplicación para registrar, consultar y calificar series, dividida en un cliente web en JavaScript vanilla y una API REST en Go conectada a PostgreSQL.',
    highlights: [
      'El sistema está dividido en dos repositorios claros: cliente web por un lado y backend API por otro.',
      'La interfaz incluye búsqueda, ordenamiento, paginación, ratings, preview de imágenes y exportación CSV sin usar frameworks.',
      'El backend expone endpoints con validación, filtros, subida de imágenes y respuestas HTTP consistentes.',
    ],
    overview: [
      'Series Tracker fue pensado como un sistema pequeño pero completo para gestionar un catálogo de series con detalle, géneros, ratings e imágenes. Aunque el cliente y el backend están en repositorios separados, ambos forman parte del mismo proyecto y se diseñaron para trabajar juntos: el frontend consume la API REST y refleja en la interfaz operaciones como crear, editar, eliminar, buscar, ordenar y paginar.',
      'Lo interesante del proyecto es justamente esa combinación de dos capas implementadas con enfoques distintos. El cliente se desarrolló con HTML, CSS y JavaScript vanilla, trabajando de forma directa con el DOM y un estado manual. El backend, en cambio, se construyó en Go con net/http, handlers separados y PostgreSQL como base de datos. Esa división me permitió practicar tanto fundamentos del navegador como diseño de endpoints, validación server-side y consultas útiles desde la API.',
    ],
    features: [
      {
        title: 'Cliente modular sin framework',
        description:
          'El frontend quedó separado en diferentes archivos con responsabilidades específicas. Esa organización ayudó a que una aplicación escrita en JavaScript vanilla siguiera siendo legible y relativamente fácil de mantener.',
      },
      {
        title: 'Interfaz dinámica',
        description:
          'Búsqueda con debounce, ordenamiento, paginación, preview de imágenes y detalle de series se resolvieron sin reactividad automática. Eso obligó a trabajar con más cuidado la sincronización entre eventos, estado y renderizado.',
      },
      {
        title: 'API REST en Go',
        description:
          'El backend expone endpoints para series, géneros, ratings e imágenes usando la librería estándar de Go en lugar de un framework pesado. Fue una forma útil de entender mejor cómo se resuelven routing, parsing y respuestas HTTP de manera más explícita.',
      },
      {
        title: 'Consultas útiles desde el servidor',
        description:
          'La API implementa paginación, búsqueda por nombre y ordenamiento por distintos campos usando query params. Eso evitó cargar al cliente con filtrados innecesarios y dejó la lógica de acceso a datos en el lugar correspondiente.',
      },
      {
        title: 'Ratings e imágenes con lógica completa',
        description:
          'El proyecto no se quedó en un listado básico. Incluye CRUD de ratings, subida de imágenes, preview antes de guardar y detalle individual de cada serie, lo que ayudó a conectar mejor frontend, persistencia y experiencia de uso.',
      },
    ],
    stack: [
      {
        name: 'HTML5',
        icon: '/tech/html.svg',
        reason:
          'Lo usé para estructurar la interfaz con una base semántica clara, especialmente en formularios, modales y secciones de detalle. En un proyecto sin framework, tener buen marcado ayuda bastante a mantener ordenada la vista.',
      },
      {
        name: 'CSS3',
        icon: '/tech/css.svg',
        reason:
          'Lo usé para construir toda la identidad visual del cliente, incluyendo layout responsive, tarjetas, modales, estados vacíos y feedback visual. También me permitió trabajar una interfaz más cuidada sin depender de librerías externas.',
      },
      {
        name: 'JavaScript',
        icon: '/tech/javascript.svg',
        reason:
          'Fue la base para manejar fetch, eventos, estado de la vista y renderizado dinámico del DOM. Usar JavaScript vanilla hizo el proyecto más exigente, pero también más útil para entender fundamentos reales del navegador.',
      },
      {
        name: 'Go',
        icon: '/tech/go.svg',
        reason:
          'Lo usé para construir la API REST sin depender de un framework grande, trabajando directamente con net/http, handlers y lógica de validación. Eso me sirvió para comprender mejor el ciclo completo de una petición en backend.',
      },
      {
        name: 'PostgreSQL',
        icon: '/tech/postgresql.svg',
        reason:
          'Lo usé para persistir series, géneros y ratings con una estructura relacional simple pero suficiente para soportar búsquedas, ordenamiento y asociaciones entre entidades.',
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Go', 'PostgreSQL'],
    links: {
      demo: 'https://josesan28.github.io/proyecto-1-cliente-web',
      repositories: [
        {
          key: 'repo-cliente',
          label: 'Repo-cliente',
          href: 'https://github.com/josesan28/proyecto-1-cliente-web',
        },
        {
          key: 'repo-backend',
          label: 'Repo-backend',
          href: 'https://github.com/josesan28/proyecto-1-backend-web',
        },
      ],
    },
    image: '/proyecto-3.png',
  },
  {
    id: 'proyecto-4',
    title: 'Calculadora Brasileña',
    year: '2026',
    type: 'Front-End',
    description:
      'Proyecto construido con React que resuelve operaciones básicas, decimales, cambio de signo y manejo de errores, con una interfaz inspirada en la paleta de colores de Brasil.',
    highlights: [
      'La lógica principal está en un hook personalizado, separado de la interfaz y fácil de probar.',
      'El proyecto incluye pruebas automatizadas, historias de Storybook y reglas de lint definidas.',
      'Aunque es una app pequeña, está organizada como un componente reutilizable y no como una sola vista monolítica.',
    ],
    overview: [
      'Este proyecto parte de una calculadora aparentemente simple, pero se trabajó pensando bastante en la forma de estructurarlo. En lugar de dejar toda la lógica mezclada con la interfaz, la aplicación se dividió en componentes pequeños y un hook central que controla el comportamiento de la calculadora. Eso hizo que incluso un ejercicio corto sirviera para practicar separación de responsabilidades y diseño de componentes en React.',
      'Además de las operaciones básicas, el proyecto toma en cuenta casos que suelen pasarse por alto en implementaciones rápidas: límite visible de caracteres, decimales, cambio de signo, módulo y estados de error cuando el resultado es inválido o se sale de rango. También me interesó intentar un diseño bonito y divertido, con CSS Modules para encapsular estilos, Storybook para documentar componentes y pruebas automatizadas para asegurar que la lógica del hook y la interfaz se comporten como se espera.',
    ],
    features: [
      {
        title: 'Lógica concentrada en un hook',
        description:
          'El hook useCalculator encapsula estado, operaciones, validaciones y formateo del resultado. Esa decisión dejó a los componentes enfocados en renderizar y delegar eventos, lo que vuelve el comportamiento más fácil de leer y mantener.',
      },
      {
        title: 'Manejo explícito de casos límite',
        description:
          'La calculadora no solo resuelve sumas o divisiones, también controla decimales, cambio de signo, límite de 9 caracteres y errores cuando el resultado es negativo, infinito o mayor al máximo permitido. Eso le da más solidez que una implementación simplemente visual.',
      },
      {
        title: 'Componentes pequeños y acoplados',
        description:
          'Display, botones, teclado y contenedor principal están separados en partes cortas con responsabilidades puntuales. Para una interfaz tan compacta, esa organización ayuda bastante a que el proyecto siga claro incluso al agregar estilos, pruebas o nuevas reglas.',
      },
      {
        title: 'Pruebas y documentación visual',
        description:
          'El proyecto no se quedó solo en funcionar. Incluye tests para el hook y el componente principal, además de historias de Storybook para revisar el comportamiento visual de los componentes de forma aislada.',
      },
      {
        title: 'Reglas definidas',
        description:
          'ESLint no está solo por cumplir, tiene reglas concretas como prohibir punto y coma y limitar longitud de línea. Ese tipo de decisiones pequeñas ayudan a mantener consistencia cuando el proyecto crece o se trabaja con más personas.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Lo usé para modelar la calculadora como un conjunto de componentes pequeños y un hook central de estado. En una interfaz interactiva como esta, React ayudó a separar bien lógica y presentación.',
      },
      {
        name: 'JavaScript',
        icon: '/tech/javascript.svg',
        reason:
          'Fue la base para implementar operaciones, validaciones, formateo de resultados y control de eventos. Aquí fue importante porque buena parte del valor del proyecto está precisamente en la lógica del comportamiento.',
      },
      {
        name: 'CSS Modules',
        icon: '/tech/css.svg',
        reason:
          'Los usé para aislar estilos por componente y mantener una interfaz consistente sin riesgo de problemas globales.',
      },
      {
        name: 'Vitest',
        icon: '/tech/vite.svg',
        reason:
          'Lo usé junto con Testing Library para validar tanto la lógica del hook como el comportamiento visible del componente. Eso le añade bastante valor incluso siendo una app pequeña.',
      },
      {
        name: 'Storybook',
        icon: '/tech/github.svg',
        reason:
          'Lo incorporé para documentar y revisar componentes, algo que ayuda mucho cuando se quiere tratar la interfaz como un sistema.',
      },
    ],
    tags: ['React', 'JavaScript', 'CSS Modules', 'Vitest', 'Storybook'],
    links: {
      demo: 'https://josesan28.github.io/lab-7-calculadora-web/',
      repo: 'https://github.com/josesan28/lab-7-calculadora-web',
    },
    image: '/proyecto-4.png',
  },
  {
    id: 'proyecto-5',
    title: 'Snake',
    year: '2026',
    type: 'Front-End / Juego interactivo',
    description:
      'Juego construido con React, con control por teclado, aumento progresivo de dificultad, sistema de puntaje y una interfaz enfocada en animación y feedback visual.',
    highlights: [
      'La lógica del juego vive en un hook separado que controla movimiento, colisiones, comida, puntaje y reinicio.',
      'La dificultad aumenta con niveles y cambios de velocidad, lo que hace que el juego tenga progresión real.',
      'La interfaz incorpora overlays de inicio y game over, además de animaciones suaves para la serpiente.',
    ],
    overview: [
      'Este proyecto toma una idea clásica y la convierte en una práctica bastante completa de estado, tiempo y renderizado en React. Más allá de mover una serpiente por una cuadrícula, el juego resuelve inicio de partida, crecimiento, detección de colisiones, control por teclado, puntaje, récord y reinicio. Eso lo vuelve un ejercicio muy útil para trabajar flujos interactivos donde varias piezas de estado cambian constantemente.',
      'En la implementación, la lógica principal quedó encapsulada en useSnakeGame, mientras la vista se reparte entre componentes como Game, Board, Snake, Food y Score. Esa separación hace que el comportamiento central no dependa directamente de la vista y permite pensar el proyecto como un pequeño sistema de juego y no solo como una pantalla única. También suma bastante el manejo de niveles con velocidad progresiva y el cuidado visual de la serpiente, que le da más personalidad al resultado final.',
    ],
    features: [
      {
        title: 'Loop de juego controlado desde un hook',
        description:
          'El hook useSnakeGame mneja movimiento, dirección, comida, colisiones, niveles y estado general de la partida. Eso evita dispersar la lógica entre componentes visuales y deja más claro qué parte del código gobierna controla el juego.',
      },
      {
        title: 'Progresión con niveles y velocidad',
        description:
          'La dificultad no es fija, el juego ajusta la velocidad según el puntaje y define niveles. Esa decisión hace que la experiencia no se sienta plana y obliga a que la lógica del tiempo esté bien coordinada con el estado.',
      },
      {
        title: 'Controles y reglas bien delimitados',
        description:
          'El movimiento se hace con flechas o W A S D, bloqueando giros imposibles hacia la dirección opuesta para evitar errores de control. También se manejan con claridad las colisiones contra paredes y contra el propio cuerpo.',
      },
      {
        title: 'Feedback visual durante toda la partida',
        description:
          'La interfaz muestra mensajes de inicio y game over, puntaje, récord, nivel actual y mensajes de reinicio. Eso ayuda a que el jugador entienda el estado del juego en todo momento sin depender de texto excesivo o explicaciones externas.',
      },
      {
        title: 'Animación suave de la serpiente',
        description:
          'La serpiente no se dibuja solo como bloques estáticos, se calcula dirección de cabeza y cola, y se ajusta la duración del movimiento en función de la velocidad actual. Ese detalle hace que el juego se sienta más vivo y menos rígido.',
      },
    ],
    stack: [
      {
        name: 'React',
        icon: '/tech/react.svg',
        reason:
          'Lo usé para dividir el juego en componentes claros y apoyarme en hooks para coordinar estado, efectos de tiempo y renderizado. En una interfaz interactiva así, React hace más fácil separar lógica y presentación.',
      },
      {
        name: 'JavaScript',
        icon: '/tech/javascript.svg',
        reason:
          'Fue clave para modelar reglas del juego, control de teclado, detección de colisiones, cálculo de niveles y actualización continua del estado. Aquí la lógica pesa tanto como la interfaz.',
      },
      {
        name: 'CSS',
        icon: '/tech/css.svg',
        reason:
          'Lo usé para construir el tablero, los elementos visuales, el estilo de la serpiente y las transiciones de movimiento. Gran parte de la sensación del juego depende de cómo responde visualmente cada cambio de estado.',
      },
      {
        name: 'Vite',
        icon: '/tech/vite.svg',
        reason:
          'Lo usé para tener un entorno liviano y rápido durante el desarrollo. En proyectos pequeños e iterativos como este, esa velocidad ayuda bastante a probar ajustes frecuentes.',
      },
      {
        name: 'ESLint',
        icon: '/tech/javascript.svg',
        reason:
          'Ayudó a mantener una base consistente mientras la lógica del juego crecía. Aunque el proyecto es compacto, tener reglas claras evita errores pequeños en hooks, efectos y eventos.',
      },
    ],
    tags: ['React', 'JavaScript', 'CSS', 'Vite', 'ESLint'],
    links: {
      demo: '#',
      repo: 'https://github.com/josesan28/lab-6-snake-web',
    },
    image: '/proyecto-5.png',
  },
]

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId)
}
