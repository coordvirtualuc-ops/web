export type ProgramCategory =
  | "Bachillerato"
  | "Licenciaturas"
  | "Posgrados"
  | "Educación Continua"
  | "Centro de Idiomas"
  | "Estudia en Línea";

export type ProgramModality =
  | "Escolarizada"
  | "Sabatina"
  | "En línea"
  | "Mixta"
  | "Flexible"
  | "Por confirmar";

export interface AcademicProgram {
  id: string;
  title: string;
  shortTitle: string;
  category: ProgramCategory;
  modality: ProgramModality;
  duration: string;
  image: string;
  shortDescription: string;
  description: string;
  objective: string;
  highlights: string[];
  profile: string[];
  careerField: string[];
  differentiators: string[];
  whatsappMessage: string;
  featured?: boolean;
  onlineAvailable?: boolean;
  status?: "active" | "coming-soon" | "info";
}

export const programCategories: ProgramCategory[] = [
  "Bachillerato",
  "Licenciaturas",
  "Posgrados",
  "Educación Continua",
  "Centro de Idiomas",
  "Estudia en Línea",
];

const generalDifferentiators = [
  "Modelo Educativo Humanista",
  "Acompañamiento cercano",
  "Profesores altamente capacitados",
  "Programas innovadores y actualizados",
  "Formación con impacto real",
  "Modalidades flexibles según programa",
];

export const academicPrograms: AcademicProgram[] = [
  {
    id: "bachillerato",
    title: "Bachillerato",
    shortTitle: "Bachillerato",
    category: "Bachillerato",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/bachillerato.webp",
    shortDescription: "Construye una base académica sólida para continuar tu formación profesional.",
    objective: "Brindar formación académica integral con acompañamiento cercano, enfoque humano y preparación para estudios superiores.",
    description: "El programa de Bachillerato de la Universidad Continental ofrece una formación académica integral bajo un enfoque humanista, preparando a los estudiantes para sus estudios profesionales.",
    highlights: [
      "Formación integral",
      "Acompañamiento académico",
      "Preparación para licenciatura",
      "Desarrollo personal",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Continuidad a estudios superiores",
      "Orientación vocacional",
      "Desarrollo de habilidades académicas",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Bachillerato en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "administracion-empresas",
    title: "Licenciatura en Administración de Empresas",
    shortTitle: "Administración de Empresas",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/administracion-empresas.webp",
    shortDescription: "Forma tu criterio para crear soluciones a los retos empresariales actuales.",
    objective: "Formar profesionales críticos y reflexivos en el campo de la administración, bajo un enfoque humanista, con competencias profesionales para actuar de forma innovadora en contextos regionales, nacionales e internacionales.",
    description: "La Licenciatura en Administración de Empresas de la UC forma profesionales con capacidades críticas e innovadoras para la gestión operativa, financiera y comercial en el entorno empresarial actual.",
    highlights: [
      "Gestión y comercialización de productos",
      "Resolución de problemas administrativos",
      "Recursos humanos y financieros",
      "Organización, administración y contabilidad",
      "Estrategias financieras para el funcionamiento de una empresa",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Empresas privadas",
      "Emprendimientos",
      "Áreas administrativas",
      "Recursos humanos",
      "Gestión comercial",
      "Dirección operativa",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Administración de Empresas en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "educacion",
    title: "Licenciatura en Educación",
    shortTitle: "Educación",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/educacion.webp",
    shortDescription: "Desarrolla herramientas para acompañar procesos de enseñanza y aprendizaje con enfoque humano.",
    objective: "Formar profesionales críticos y reflexivos de la educación, bajo un enfoque humanista, con competencias profesionales para responder a problemáticas sociales y educativas de forma innovadora.",
    description: "La Licenciatura en Educación de la UC prepara a profesionales capaces de diseñar y gestionar ambientes de aprendizaje innovadores, interviniendo en problemáticas sociales y educativas desde una perspectiva humana.",
    highlights: [
      "Proceso de enseñanza",
      "Técnicas y herramientas educativas",
      "Diseño de ambientes de aprendizaje",
      "Gestión de procesos de intervención educativa",
      "Administración de instituciones educativas",
      "Análisis de problemáticas del entorno social",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Instituciones educativas",
      "Proyectos de formación",
      "Diseño instruccional",
      "Gestión educativa",
      "Capacitación",
      "Intervención educativa",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Educación en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "criminologia-criminalistica",
    title: "Licenciatura en Criminología y Criminalística",
    shortTitle: "Criminología y Criminalística",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/criminologia-criminalistica.webp",
    shortDescription: "Analiza, investiga y reconstruye hechos con rigor, método y criterio profesional.",
    objective: "Formar profesionales críticos y reflexivos en criminología y criminalística, bajo un enfoque humanista, con competencias profesionales para actuar de forma innovadora en contextos regionales, nacionales e internacionales.",
    description: "La Licenciatura en Criminología y Criminalística de la UC capacita para el análisis científico de conductas delictivas, el diseño de estrategias de prevención y la investigación metodológica de hechos delictivos.",
    highlights: [
      "Gestión de procesos para la resolución de problemas",
      "Análisis de crímenes",
      "Diseño de estrategias de atención",
      "Investigación de problemáticas sociales",
      "Análisis de necesidades del entorno social",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Investigación criminológica",
      "Prevención social",
      "Instituciones de seguridad",
      "Análisis de contexto",
      "Apoyo en procesos de investigación",
      "Gestión de atención especializada",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Criminología y Criminalística en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "contabilidad-fiscalizacion",
    title: "Licenciatura en Contabilidad y Fiscalización",
    shortTitle: "Contabilidad y Fiscalización",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/contabilidad-fiscalizacion.webp",
    shortDescription: "Desarrolla criterio financiero, contable y fiscal para la toma de decisiones profesionales.",
    objective: "Formar profesionales críticos y reflexivos en el campo de la contabilidad, bajo un enfoque humanista, con competencias profesionales para responder a problemáticas fiscales y financieras.",
    description: "La Licenciatura en Contabilidad y Fiscalización de la UC forma profesionales con criterio contable, fiscal y financiero de alto nivel, capaces de estructurar y auditar sistemas contables bajo un modelo humanista.",
    highlights: [
      "Estados financieros",
      "Evaluación de inventarios",
      "Manejo de software contable",
      "Sistemas de costeo",
      "Dictámenes fiscales",
      "Estrategias de sistemas contables electrónicos",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Despachos contables",
      "Áreas fiscales",
      "Empresas privadas",
      "Auditoría",
      "Administración financiera",
      "Consultoría contable",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Contabilidad y Fiscalización en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "lenguas-extranjeras",
    title: "Licenciatura en Lenguas Extranjeras",
    shortTitle: "Lenguas Extranjeras",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/lenguas-extranjeras.webp",
    shortDescription: "Fortalece tus competencias lingüísticas para comunicar, interpretar y crear oportunidades globales.",
    objective: "Formar profesionales críticos y reflexivos en la disciplina de las lenguas extranjeras, bajo un enfoque humanista, con competencias profesionales para la conservación de la cultura, el desarrollo sustentable y la resolución de problemáticas sociales.",
    description: "La Licenciatura en Lenguas Extranjeras de la UC dota a los estudiantes de herramientas de comunicación e interpretación para desenvolverse profesionalmente en el ámbito de la docencia y traducción global.",
    highlights: [
      "Herramientas lingüísticas",
      "Textos académicos",
      "Textos literarios en otras lenguas",
      "Competencias profesionales en idiomas",
      "Visión regional, nacional e internacional",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Docencia de idiomas",
      "Traducción e interpretación",
      "Proyectos culturales",
      "Comunicación internacional",
      "Capacitación",
      "Servicios educativos",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Lenguas Extranjeras en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "derecho",
    title: "Licenciatura en Derecho",
    shortTitle: "Derecho",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/derecho.webp",
    shortDescription: "Desarrolla criterio jurídico para analizar, argumentar y defender con ética profesional.",
    objective: "Formar profesionales con criterio jurídico, sentido ético y capacidad de análisis para intervenir en contextos legales, sociales e institucionales.",
    description: "La Licenciatura en Derecho de la UC promueve un riguroso análisis normativo y metodológico con un alto sentido ético, habilitando a los estudiantes para la resolución de controversias y asesoría legal.",
    highlights: [
      "Análisis de normas and casos",
      "Argumentación jurídica",
      "Ética profesional",
      "Resolución de conflictos",
      "Criterio legal",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Despachos jurídicos",
      "Instituciones públicas",
      "Empresas privadas",
      "Asesoría legal",
      "Gestión jurídica",
      "Defensa y orientación legal",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Derecho en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "ingenieria-sistemas-negocios-digitales",
    title: "Ingeniería en Sistemas Computacionales con Enfoque en Negocios Digitales",
    shortTitle: "Ingeniería en Sistemas",
    category: "Licenciaturas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/ingenieria-sistemas-negocios-digitales.webp",
    shortDescription: "Desarrolla soluciones tecnológicas con visión estratégica e innovación digital.",
    objective: "Formar profesionales capaces de integrar tecnología, análisis y visión de negocio para desarrollar soluciones digitales aplicables a organizaciones y proyectos.",
    description: "Este programa de Ingeniería combina el desarrollo de software, análisis tecnológico y automatización con habilidades estratégicas orientadas a la innovación y digitalización empresarial.",
    highlights: [
      "Programación",
      "Herramientas digitales",
      "Negocios digitales",
      "Análisis tecnológico",
      "Innovación",
      "Soluciones para organizaciones",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Desarrollo de software",
      "Negocios digitales",
      "Automatización",
      "Análisis de sistemas",
      "Transformación digital",
      "Proyectos tecnológicos",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Ingeniería en Sistemas Computacionales con Enfoque en Negocios Digitales en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "maestria-lenguas-extranjeras",
    title: "Maestría en Lenguas Extranjeras",
    shortTitle: "Maestría en Lenguas Extranjeras",
    category: "Posgrados",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/maestria-lenguas-extranjeras.webp",
    shortDescription: "Fortalece tu perfil profesional con una visión actual, académica y global de las lenguas extranjeras.",
    objective: "Desarrollar competencias profesionales avanzadas en el campo de las lenguas extranjeras, con enfoque académico, comunicativo y humanista.",
    description: "La Maestría en Lenguas Extranjeras de la UC amplía y profundiza las habilidades lingüísticas y las tendencias educativas del docente y directivo en idiomas, con enfoque académico contemporáneo.",
    highlights: [
      "Competencias lingüísticas avanzadas",
      "Tendencias educativas contemporáneas",
      "Aplicación profesional",
      "Modalidad flexible",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Docencia",
      "Coordinación académica",
      "Diseño de programas",
      "Capacitación",
      "Investigación educativa",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Maestría en Lenguas Extranjeras en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "maestria-administracion-publica",
    title: "Maestría en Administración Pública",
    shortTitle: "Maestría en Administración Pública",
    category: "Posgrados",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/maestria-administracion-publica.webp",
    shortDescription: "Fortalece tu liderazgo, análisis y visión estratégica para transformar la gestión pública.",
    objective: "Formar profesionales capaces de analizar, gestionar y liderar procesos institucionales con criterio estratégico, social y administrativo.",
    description: "La Maestría en Administración Pública de la UC capacita a directivos y líderes del sector público y organizaciones no gubernamentales en planeación, dirección institucional y desarrollo de proyectos de impacto social.",
    highlights: [
      "Gestión pública",
      "Liderazgo institucional",
      "Procesos administrativos",
      "Toma de decisiones",
      "Impacto social",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Instituciones públicas",
      "Gestión administrativa",
      "Planeación",
      "Dirección institucional",
      "Proyectos sociales",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Maestría en Administración Pública en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "educacion-continua",
    title: "Educación Continua",
    shortTitle: "Educación Continua",
    category: "Educación Continua",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/educacion-continua.webp",
    shortDescription: "Actualiza tus conocimientos y fortalece tus habilidades profesionales.",
    objective: "Ofrecer programas de actualización y formación continua para responder a las necesidades actuales del entorno laboral y profesional.",
    description: "El área de Educación Continua de la UC provee cursos y diplomados de corta y mediana duración orientados al desarrollo profesional y la actualización de competencias laborales prácticas.",
    highlights: [
      "Cursos",
      "Diplomados",
      "Actualización profesional",
      "Formación práctica",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Desarrollo profesional",
      "Actualización laboral",
      "Especialización por área",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Educación Continua en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "centro-idiomas",
    title: "Centro de Idiomas UC",
    shortTitle: "Centro de Idiomas",
    category: "Centro de Idiomas",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/centro-idiomas.webp",
    shortDescription: "Aprende idiomas con acompañamiento académico y enfoque práctico.",
    objective: "Fortalecer competencias comunicativas en idiomas mediante procesos formativos claros, prácticos y orientados al desarrollo académico y profesional.",
    description: "El Centro de Idiomas de la Universidad Continental brinda programas para el aprendizaje de lenguas extranjeras, promoviendo el dominio práctico y la preparación para certificaciones globales.",
    highlights: [
      "Formación en idiomas",
      "Competencias comunicativas",
      "Acompañamiento académico",
      "Preparación para certificaciones",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Comunicación internacional",
      "Preparación académica",
      "Mejora profesional",
      "Movilidad y oportunidades globales",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Centro de Idiomas UC en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "estudia-en-linea",
    title: "Estudia en Línea / UC Virtual",
    shortTitle: "Estudia en Línea",
    category: "Estudia en Línea",
    modality: "En línea",
    duration: "Por confirmar",
    image: "/images/programas/estudia-en-linea.webp",
    shortDescription: "Estudia con mayor flexibilidad a través de programas diseñados para adaptarse a tu ritmo.",
    objective: "Ofrecer una alternativa flexible de formación académica para estudiantes que buscan avanzar profesionalmente mediante modalidad en línea.",
    description: "La UC Virtual ofrece un ecosistema de aprendizaje en línea que permite combinar estudios con actividades laborales y personales, mediante un sólido acompañamiento académico y tecnológico.",
    highlights: [
      "Modalidad en línea",
      "Flexibilidad",
      "Acompañamiento académico",
      "Formación profesional",
    ],
    profile: ["Por confirmar"],
    careerField: [
      "Continuidad académica",
      "Desarrollo profesional",
      "Formación flexible",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Estudia en Línea / UC Virtual en UC Universidad Continental.",
    status: "active",
  },
];

export function getProgramsByCategory(category: ProgramCategory): AcademicProgram[] {
  return academicPrograms.filter((program) => program.category === category);
}

export function getFeaturedPrograms(): AcademicProgram[] {
  return academicPrograms.filter((program) => program.featured === true);
}

export function getProgramById(id: string): AcademicProgram | undefined {
  return academicPrograms.find((program) => program.id === id);
}
