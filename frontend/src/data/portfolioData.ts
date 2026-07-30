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
  { id: 'django', name: 'Django', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'AlumnosTareas & Proyectos Web', icon: 'Layers', featured: true },
  { id: 'drf', name: 'Django REST Framework', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'Endpoints REST, Serializers & Router', icon: 'Cpu', featured: true },
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'Intermedio', years: 1, lastProject: 'Servicios Asíncronos & Microservicios', icon: 'Server' },
  { id: 'rest_api', name: 'APIs REST', category: 'backend', level: 'Avanzado', years: 2, lastProject: 'Diseño CRUD & Endpoints Reutilizables', icon: 'Globe', featured: true },

  // Bases de Datos (únicamente PostgreSQL y Supabase)
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'Avanzado', years: 2, lastProject: 'AlumnosTareas & Modelado Relacional', icon: 'Database', featured: true },
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
    id: 't-proj-alumnos',
    type: 'project',
    title: 'AlumnosTareas Backend API',
    organization: 'Proyecto Portafolio',
    period: '2026',
    description: 'Desarrollo de API RESTful en Django REST Framework para gestionar 2 entidades relacionadas (alumnos y tareas) con serializers y rutas reusables.',
    technologies: ['Python', 'Django', 'DRF', 'PostgreSQL'],
    badgeText: 'Proyecto Backend'
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
    id: 'alumnos-tareas',
    title: 'AlumnosTareas Backend API',
    subtitle: 'API RESTful en Django REST Framework & PostgreSQL/SQLite',
    category: 'Full Stack',
    description: 'Aplicación backend diseñada para gestionar 2 entidades relacionadas (alumnos y tareas), exponiendo operaciones CRUD mediante endpoints REST estructurados con serializers, rutas y vistas reusables.',
    problem: 'Necesidad de estructurar un sistema backend organizado que gestione la relación entre entidades educativas y asignaciones de forma segura y mantenible.',
    solution: 'Diseño de modelos relacionales en Django ORM con relaciones Key/ForeignKey, serializers estructurados en DRF y endpoints para el ciclo de vida completo de alumnos y tareas.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'SQLite', 'Postman', 'Git'],
    architecture: {
      frontend: 'Consumo preparado para clientes web/móvil y pruebas mediante Postman.',
      backend: 'Django 5 REST Framework con router REST, serializers y validadores personalizados.',
      database: 'PostgreSQL y SQLite con esquemas relacionales optimizados.',
      infrastructure: 'Entorno virtualizado Python con dependencias aisladas.',
      pipeline: 'Repositorio institucional en GitHub con control de versiones.'
    },
    repoUrl: '',
    demoUrl: '',
    metrics: [
      { label: 'Entidades Relacionadas', value: '2 (Alumnos/Tareas)' },
      { label: 'Respuestas API', value: 'JSON REST' },
      { label: 'Pruebas de Endpoint', value: '100% Postman' }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', caption: 'Pruebas de Endpoints REST en Postman para Alumnos y Tareas' }
    ],
    documentation: {
      overview: 'Backend API enfocado en la reutilización de código y estructuración limpia de serializers en Django REST Framework.',
      apiEndpoints: [
        { method: 'GET', path: '/api/alumnos/', description: 'Listar catálogo de alumnos registrados.' },
        { method: 'POST', path: '/api/alumnos/', description: 'Registrar un nuevo alumno en la base de datos.' },
        { method: 'GET', path: '/api/alumnos/{id}/tareas/', description: 'Obtener tareas asociadas a un alumno específico.' },
        { method: 'DELETE', path: '/api/tareas/{id}/', description: 'Eliminar asignación de tarea.' }
      ],
      keyAlgorithms: [
        'Modelado ORM de relación 1-a-N entre Alumnos y Tareas',
        'Serializadores anidados y reutilizables en DRF',
        'Rutas REST con DefaultRouter de Django'
      ]
    }
  }
];
