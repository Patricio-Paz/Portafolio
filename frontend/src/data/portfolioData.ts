import { Skill, Project, TimelineItem, WorkExperience } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Patricio Paz",
  role: "Desarrollador Full Stack / Backend Developer Junior",
  specialties: ["Python & Django", "Django REST Framework", "React & JavaScript", "PostgreSQL & Supabase", "cPanel & Soporte Web"],
  bioHeadline: "Técnico Superior Analista Programador y estudiante de Ingeniería en Informática en INACAP, con enfoque en desarrollo Backend y Full Stack Junior. Experiencia práctica desarrollando aplicaciones web con Python, Django REST Framework, React y JavaScript, incluyendo creación de APIs REST, integración frontend-backend, manejo de bases de datos y administración de plataformas web en hosting cPanel / WordPress. Interesado en crear soluciones tecnológicas eficientes, mejorar procesos mediante software y seguir creciendo profesionalmente dentro de equipos de desarrollo TI, aportando conocimientos en programación, bases de datos e infraestructura.",
  location: "Arica, Chile (Disponible Remoto / Presencial / Híbrido)",
  email: "Patricioppaz2312@gmail.com",
  phone: "+56 9 35114525",
  github: "https://github.com/Patricio-Paz",
  linkedin: "https://www.linkedin.com/in/patricio-paz-226980333/",
  cvUrl: "/CV_Patricio_Paz.pdf",
  availability: "Disponible para procesos de selección e incorporación inmediata",
};

export const SKILLS_LIST: Skill[] = [
  // Frontend (únicamente React, JavaScript, TypeScript)
  { id: 'react', name: 'React', category: 'frontend', level: 'Avanzado', years: 2, lastProject: 'Gestor de Tareas Full Stack & SaaS Barbería', icon: 'Code2', featured: true },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', level: 'Avanzado', years: 2, lastProject: 'Consumo de APIs REST & Dynamic UI', icon: 'FileJson', featured: true },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 'Intermedio', years: 1, lastProject: 'SmartYard TPA & Web Portfolios', icon: 'FileCode2', featured: true },

  // Backend
  { id: 'python', name: 'Python', category: 'backend', level: 'Avanzado', years: 3, lastProject: 'Desarrollo de Lógica & APIs Backend', icon: 'Terminal', featured: true },
  { id: 'django', name: 'Django', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'Gestor De Tareas & Proyectos Web', icon: 'Layers', featured: true },
  { id: 'drf', name: 'Django REST Framework', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'Endpoints REST, Serializers & Router', icon: 'Cpu', featured: true },
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'Intermedio', years: 1, lastProject: 'Servicios Asíncronos & Microservicios', icon: 'Server' },
  { id: 'rest_api', name: 'APIs REST', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'Diseño CRUD & Endpoints Reutilizables', icon: 'Globe', featured: true },

  // Bases de Datos (únicamente PostgreSQL y Supabase)
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'Avanzado', years: 2, lastProject: 'Gestor De Tareas & Modelado Relacional', icon: 'Database', featured: true },
  { id: 'supabase', name: 'Supabase', category: 'database', level: 'Intermedio', years: 1, lastProject: 'Bases de Datos Cloud & Auth', icon: 'Flame', featured: true },

  // Cloud e Infraestructura
  { id: 'aws', name: 'AWS', category: 'devops', level: 'Intermedio', years: 1, lastProject: 'Servicios Cloud Básico & Storage', icon: 'Cloud', featured: true },
  { id: 'multicloud', name: 'Arquitectura Multi Cloud', category: 'devops', level: 'Intermedio', years: 1, lastProject: 'Conceptos de Despliegue Distribuidos', icon: 'Cloud' },
  { id: 'linux', name: 'Linux', category: 'devops', level: 'Intermedio', years: 2, lastProject: 'Comandos Bash & Gestión de Servidores', icon: 'Terminal' },
  { id: 'redes', name: 'Redes', category: 'devops', level: 'Intermedio', years: 2, lastProject: 'Configuración Protocolos & Puertos', icon: 'Globe' },
  { id: 'servidores', name: 'Servidores & cPanel', category: 'devops', level: 'Avanzado', years: 2, lastProject: 'FAMCHI — Soporte Hosting & Registros DNS', icon: 'Box', featured: true },

  // Herramientas
  { id: 'git', name: 'Git / GitHub', category: 'tools', level: 'Avanzado', years: 3, lastProject: 'Control de Versiones & Repositorios', icon: 'GitBranch', featured: true },
  { id: 'postman', name: 'Postman', category: 'tools', level: 'Avanzado', years: 2, lastProject: 'Pruebas de Endpoints REST & Colecciones', icon: 'Wrench', featured: true },
  { id: 'powerbi', name: 'Power BI', category: 'tools', level: 'Intermedio', years: 1, lastProject: 'Reportes KPI & Análisis de Datos', icon: 'BarChart3' },
  { id: 'wordpress', name: 'WordPress', category: 'tools', level: 'Avanzado', years: 2, lastProject: 'FAMCHI — Mantenimiento & Plugins', icon: 'Globe2' },
  { id: 'vscode', name: 'VS Code', category: 'tools', level: 'Avanzado', years: 3, lastProject: 'Entorno Principal de Desarrollo', icon: 'Code2' },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'exp-famchi',
    role: 'Apoyo en Soporte Web y Sistemas',
    company: 'FAMCHI',
    location: 'Chile',
    type: 'Práctica Profesional',
    period: '2026',
    responsibilities: [
      'Administré 1 sitio institucional en WordPress y cPanel, apoyando continuidad operativa, estructura web y ajustes técnicos del entorno de hosting.',
      'Gestioné actualizaciones, revisión y configuración de múltiples plugins esenciales del sitio, incluyendo seguridad, formularios, SEO, correo SMTP, caché y optimización de imágenes.',
      'Configuré 3 registros clave de autenticación de correo — SPF, DKIM y DMARC — para fortalecer la entregabilidad y reducir el riesgo de spam en cuentas institucionales.',
      'Realicé respaldos del sitio y revisión de almacenamiento desde cPanel, apoyando control de archivos, migración y resguardo básico de la plataforma.',
      'Implementé 1 landing page orientada a captación de cuidadoras, integrando formularios, correo institucional y automatización del flujo de postulaciones.',
      'Configuré 1 sistema de chat en línea y apoyé mejoras en un sitio con 630+ visitantes en 28 días, colaborando en experiencia de usuario, monitoreo y presencia digital.'
    ],
    technologies: ['WordPress', 'cPanel', 'DNS (SPF, DKIM, DMARC)', 'SMTP', 'HTML/CSS', 'Plugins Web', 'PHP/Web Management', 'Chat en Línea'],
    achievements: [
      'Configuración exitosa de registros de autenticación de correo SPF, DKIM y DMARC.',
      'Implementación de landing page con formulario automatizado de postulación de cuidadoras.',
      'Optimización operativa y soporte web en sitio con más de 630 visitantes únicos en 28 días.'
    ],
    results: [
      { metric: '630+', detail: 'Visitantes atendidos en 28 días con mejoras de UX y soporte activo.' },
      { metric: '3 Registros', detail: 'Configuración SPF, DKIM y DMARC para máxima entregabilidad SMTP.' },
      { metric: '1 Landing', detail: 'Landing page desplegada con captura de postulantes y automatización.' }
    ]
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 't-edu-ing',
    type: 'education',
    title: 'Ingeniería en Informática',
    organization: 'INACAP',
    period: 'En curso',
    description: 'Formación profesional en ingeniería de software, arquitectura de sistemas, bases de datos y desarrollo de aplicaciones.',
    badgeText: 'En Curso'
  },
  {
    id: 't-edu-tec',
    type: 'education',
    title: 'Técnico Superior Analista Programador',
    organization: 'INACAP',
    period: 'Titulado',
    description: 'Título profesional en desarrollo de software, análisis de sistemas, bases de datos relacionales y programación orientada a objetos.',
    badgeText: 'Titulado'
  },
  {
    id: 't-exp-famchi',
    type: 'internship',
    title: 'Apoyo en Soporte Web y Sistemas',
    organization: 'FAMCHI',
    period: '2026',
    description: 'Administración de hosting cPanel, WordPress, configuración de correo técnico (SPF, DKIM, DMARC), respaldo de sistemas y despliegue de landing page.',
    technologies: ['WordPress', 'cPanel', 'DNS', 'SMTP', 'HTML/CSS'],
    badgeText: 'Práctica Profesional'
  },
  {
    id: 't-proj-smartyard',
    type: 'project',
    title: 'SmartYard TPA',
    organization: 'Proyecto Portafolio',
    period: '2026',
    description: 'Plataforma inteligente para optimización de patios portuarios con dashboard operacional 2D, alertas predictivas e IA.',
    technologies: ['Python', 'Django REST Framework', 'React', 'TypeScript', 'PostgreSQL'],
    badgeText: 'Proyecto Inteligente'
  },
  {
    id: 't-proj-gestor-tareas',
    type: 'project',
    title: 'Gestor De Tareas',
    organization: 'Proyecto Portafolio',
    period: '2026',
    description: 'Aplicación web interactiva para la gestión eficiente de tareas e hitos con interfaz moderna en React, TypeScript y despliegue en Vercel.',
    technologies: ['React', 'TypeScript', 'Vercel'],
    badgeText: 'Proyecto Web Full Stack'
  },
  {
    id: 't-proj-nova-dental',
    type: 'project',
    title: 'Nova Clínica Dental',
    organization: 'Proyecto Portafolio',
    period: '2026',
    description: 'Plataforma web médica con agendamiento de citas en línea por especialidad, catálogo interactivo de tratamientos, comparador visual de casos y despliegue en Vercel.',
    technologies: ['React', 'TypeScript', 'Vite', 'Vercel'],
    badgeText: 'Plataforma Médica Online'
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'smartyard-tpa',
    title: 'SmartYard TPA',
    subtitle: 'Plataforma Inteligente para Optimización de Patios Portuarios',
    category: 'AI & Optimization',
    description: 'Plataforma inteligente para la gestión y ubicación óptima de contenedores en patios portuarios. Incluye un dashboard operacional interactivo, mapa 2D de posicionamiento, alertas predictivas y asistente con IA conversacional.',
    problem: 'En operaciones portuarias, la asignación ineficiente de ubicación para contenedores provoca movimientos extras (re-acomodos) que encarecen los costos y causan demoras en camiones.',
    solution: 'SmartYard TPA analiza parámetros operativos clave (prioridad, peso, buque destino) para recomendar la coordenada exacta de apilamiento en tiempo real, minimizando movimientos ineficientes.',
    technologies: ['Python', 'Django REST Framework', 'React', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'Framer Motion', 'Docker', 'IA Conversacional'],
    architecture: {
      frontend: 'Interfaz SPA moderna desarrollada en React con TypeScript y Framer Motion para visualización dinámica del patio.',
      backend: 'Django REST Framework con endpoints organizados, autenticación y lógica de negocio desacoplada.',
      database: 'PostgreSQL con índices compuestos para consultas veloces de posición de contenedores.',
      infrastructure: 'Contenedores Docker optimizados para ejecución en servidores Linux / Cloud.',
      pipeline: 'Integración continua vía Git/GitHub para despliegue automatizado.'
    },
    repoUrl: '',
    demoUrl: '',
    metrics: [
      { label: 'Optimización de Posicionamiento', value: '35%' },
      { label: 'Tiempo Resp. API REST', value: '< 180 ms' },
      { label: 'Alertas Predictivas', value: 'En tiempo real' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', caption: 'Dashboard Operacional & Mapa 2D de Ubicación' },
      { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80', caption: 'Panel de Control y Asistente IA Conversacional' }
    ],
    documentation: {
      overview: 'Sistema modular enfocado en la visibilidad completa del patio portuario y asistencia mediante inteligencia conversacional para operadores.',
      apiEndpoints: [
        { method: 'GET', path: '/api/v1/yard/containers/', description: 'Obtiene el mapa de ocupación actual del patio de contenedores.' },
        { method: 'POST', path: '/api/v1/containers/allocate/', description: 'Calcula y asigna la coordenada óptima de apilamiento.' },
        { method: 'GET', path: '/api/v1/alerts/predictive/', description: 'Retorna alertas predictivas de posibles cuellos de botella.' }
      ],
      keyAlgorithms: [
        'Algoritmo de asignación óptima de espacio',
        'Validación de prioridad y compatibilidad de buque',
        'Asistente de IA para consultas en lenguaje natural'
      ]
    }
  },
  {
    id: 'gestor-tareas',
    title: 'Gestor De Tareas',
    subtitle: 'Aplicación Web para Gestión Inteligente de Tareas & Proyectos',
    category: 'Full Stack',
    description: 'Aplicación web interactiva diseñada para la organización, seguimiento y priorización ágil de tareas en tiempo real con una experiencia de usuario limpia y responsiva.',
    problem: 'Necesidad de contar con una herramienta centralizada, intuitiva y rápida para organizar actividades diarias, controlar estados y mejorar la productividad.',
    solution: 'Desarrollo e implementación de un Gestor de Tareas Full Stack desplegado en la nube Vercel, optimizado para alto rendimiento y uso fluido.',
    technologies: ['React', 'TypeScript', 'Vercel', 'JavaScript', 'HTML/CSS'],
    architecture: {
      frontend: 'SPA responsiva e interactiva construida en React con TypeScript.',
      backend: 'Servicios web RESTful para gestión fluida de tareas.',
      database: 'Almacenamiento persistente optimizado para la web.',
      infrastructure: 'Despliegue automatizado en la infraestructura de Vercel.',
      pipeline: 'Integración continua a través de GitHub y Vercel Deployments.'
    },
    repoUrl: '',
    demoUrl: 'https://taskflow-flame-psi.vercel.app/',
    metrics: [
      { label: 'Plataforma Cloud', value: 'Vercel' },
      { label: 'Tipo de App', value: 'Full Stack SPA' },
      { label: 'Disponibilidad', value: '100% Online' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80', caption: 'Plataforma Gestor De Tareas en Vivo en Vercel' }
    ],
    documentation: {
      overview: 'Aplicación web enfocada en la gestión eficiente de flujos de trabajo personal y de equipo.',
      apiEndpoints: [
        { method: 'GET', path: '/api/tasks/', description: 'Obtiene el listado de tareas registradas y filtradas por estado.' },
        { method: 'POST', path: '/api/tasks/', description: 'Crea una nueva tarea con título, prioridad y fecha límite.' },
        { method: 'PUT', path: '/api/tasks/{id}/', description: 'Actualiza el estado o detalles de una tarea.' },
        { method: 'DELETE', path: '/api/tasks/{id}/', description: 'Elimina una tarea existente.' }
      ],
      keyAlgorithms: [
        'Filtrado y ordenamiento dinámico en tiempo real',
        'Persistencia y sincronización de estado',
        'Diseño responsive optimizado para dispositivos móviles'
      ]
    }
  },
  {
    id: 'nova-dental',
    title: 'Nova Clínica Dental',
    subtitle: 'Plataforma Odontológica Premium & Sistema de Agendamiento Online',
    category: 'Full Stack',
    description: 'Plataforma web médica orientada a alta conversión para clínica dental. Integra agendamiento de citas en línea por especialidad, catálogo interactivo de tratamientos, comparador visual de casos (Antes/Después) y módulos de confianza del paciente.',
    problem: 'Las clínicas odontológicas enfrentan ausentismo y baja conversión digital por la falta de un sistema intuitivo para agendar citas rápidamente y visualizar resultados de tratamientos.',
    solution: 'Desarrollo de una SPA médica responsiva con flujo interactivo de agendamiento online, catálogo dinámico de tratamientos por especialista y comparativas antes/después con soporte multi-dispositivo.',
    technologies: ['React', 'TypeScript', 'Vite', 'Lucide Icons', 'HTML/CSS', 'Vercel'],
    architecture: {
      frontend: 'SPA responsiva e interactiva desarrollada con React 19, TypeScript y Vite para una navegación ultrarrápida.',
      backend: 'Flujo client-side interactivo de agendamiento con selección dinámica de especialista, fecha y tratamiento.',
      database: 'Estructura de datos optimizada para gestión de citas, servicios odontológicos y testimonios.',
      infrastructure: 'Despliegue automatizado y alojado en la red global de Vercel.',
      pipeline: 'Integración continua y entregas mediante GitHub y Vercel Deployments.'
    },
    repoUrl: '',
    demoUrl: 'https://nova-dental-phi.vercel.app/',
    metrics: [
      { label: 'Plataforma Cloud', value: 'Vercel' },
      { label: 'Tasa de Conversión UX', value: 'Optimizado' },
      { label: 'Disponibilidad', value: '100% Online' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', caption: 'Plataforma Nova Clínica Dental & Agendamiento Online' },
      { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80', caption: 'Módulo de Tratamientos y Especialistas Odontológicos' }
    ],
    documentation: {
      overview: 'Aplicación web médica diseñada para la captación, evaluación y agendamiento ágil de pacientes en clínica odontológica.',
      apiEndpoints: [
        { method: 'GET', path: '/api/treatments/', description: 'Obtiene la lista de tratamientos dentales y especialidades disponibles.' },
        { method: 'POST', path: '/api/booking/', description: 'Procesa y confirma una reserva de cita médica con especialista.' },
        { method: 'GET', path: '/api/testimonials/', description: 'Retorna testimonios verificados de pacientes y casos de éxito.' }
      ],
      keyAlgorithms: [
        'Filtrado y pre-selección de tratamientos para formulario de reserva',
        'Slider comparativo interactivo de Antes y Después',
        'Diseño responsive optimizado para dispositivos móviles y conversión'
      ]
    }
  }
];
