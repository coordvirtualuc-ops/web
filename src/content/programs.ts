export type ProgramCategory =
  | "Bachillerato"
  | "Técnico Superior Universitario"
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
  | "Presencial"
  | "1 fin de semana al mes"
  | "Por confirmar";

export interface GraduateProfile {
  intro: string;
  competencies: string[];
}

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
  profile?: string[];
  graduateProfile?: GraduateProfile;
  careerField: string[];
  differentiators: string[];
  whatsappMessage: string;
  featured?: boolean;
  onlineAvailable?: boolean;
  status?: "active" | "coming-soon" | "info";
}

export const programCategories: ProgramCategory[] = [
  "Bachillerato",
  "Técnico Superior Universitario",
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
    title: "Bachillerato General",
    shortTitle: "Bachillerato General",
    category: "Bachillerato",
    modality: "Presencial",
    duration: "2 años",
    image: "/images/programas/bachillerato.webp",
    shortDescription: "Construye una base académica sólida para continuar tu formación profesional.",
    objective: "Brindar formación académica integral con acompañamiento cercano, enfoque humano y preparación para estudios superiores.",
    description: "El programa de Bachillerato General de la Universidad Continental ofrece una formación académica integral bajo un enfoque humanista, preparando a los estudiantes para sus estudios profesionales con valores y excelencia.",
    highlights: [
      "Formación integral bajo enfoque humanista",
      "Acompañamiento académico continuo",
      "Preparación para el ingreso a la licenciatura",
      "Desarrollo de habilidades para la vida y autoempleo",
    ],
    profile: [
      "Interés por el aprendizaje continuo",
      "Habilidades básicas de comunicación",
      "Disposición para el trabajo en equipo",
      "Compromiso con su formación integral",
    ],
    careerField: [
      "Acceso directo a estudios superiores",
      "Formación en habilidades para el autoempleo",
      "Integración a perfiles auxiliares administrativos",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Bachillerato General en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "tsu-cosmiatria-integral",
    title: "Técnico Superior Universitario en Cosmiatría Integral",
    shortTitle: "TSU en Cosmiatría Integral",
    category: "Técnico Superior Universitario",
    modality: "Presencial",
    duration: "2 años",
    image: "/images/programas/cosmiatria-integral.webp",
    shortDescription: "Especialízate en el cuidado y tratamiento de la piel bajo un enfoque integral de salud y estética.",
    objective: "Formar profesionales técnicos capaces de aplicar tratamientos cosmiátricos integrales con ética, seguridad y enfoque humanista.",
    description: "El programa de Técnico Superior Universitario en Cosmiatría Integral ofrece una formación práctica y teórica en el área de la salud estética, capacitando para evaluar y aplicar tratamientos cutáneos con rigor profesional, sin invadir el campo médico.",
    highlights: [
      "Formación técnica profesional en el cuidado cutáneo",
      "Prácticas de campo supervisadas en cabina",
      "Tratamiento y prevención del envejecimiento cutáneo",
      "Enfoque en protocolos de bienestar y bioseguridad",
    ],
    profile: [
      "Interés en el cuidado de la piel y bienestar",
      "Habilidad para el trato interpersonal y de servicio",
      "Disposición para la práctica ética y segura",
      "Vocación por el área de la salud y estética",
    ],
    careerField: [
      "Clínicas de medicina estética y dermatología",
      "Centros de spa, relajación y bienestar",
      "Práctica profesional autónoma",
      "Consultorías en laboratorios cosmiátricos",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Técnico Superior Universitario en Cosmiatría Integral en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "administracion-empresas",
    title: "Licenciatura en Administración de Empresas",
    shortTitle: "Administración de Empresas",
    category: "Licenciaturas",
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/administracion-empresas.webp",
    shortDescription: "Forma tu criterio para crear soluciones a los retos empresariales actuales.",
    objective: "Formar profesionales críticos y reflexivos en el campo de la administración, bajo un enfoque humanista, con competencias profesionales para actuar de forma innovadora en contextos regionales, nacionales e internacionales.",
    description: "La Licenciatura en Administración de Empresas de la UC forma profesionales con capacidades críticas e innovadoras para la gestión operativa, financiera y comercial en el entorno empresarial actual.",
    highlights: [
      "Gestión y dirección estratégica de organizaciones",
      "Resolución de problemas en contextos cambiantes",
      "Planeación de recursos humanos y financieros",
      "Creación de modelos de negocio innovadores",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de administrar organizaciones, coordinar recursos y diseñar estrategias orientadas al crecimiento, la eficiencia y la innovación empresarial.",
      competencies: [
        "Diseñar planes estratégicos para organizaciones públicas y privadas.",
        "Administrar recursos humanos, financieros, materiales y tecnológicos.",
        "Analizar información para la toma de decisiones empresariales.",
        "Diseñar y evaluar proyectos de inversión y emprendimiento.",
        "Coordinar equipos de trabajo y procesos organizacionales.",
        "Implementar estrategias de comercialización y desarrollo de negocios.",
        "Identificar oportunidades de innovación y mejora continua.",
        "Aplicar principios éticos y de responsabilidad social.",
      ],
    },
    careerField: [
      "Empresas privadas de nivel nacional e internacional",
      "Consultoría en desarrollo organizacional",
      "Áreas de finanzas, marketing o recursos humanos",
      "Creación y dirección de empresas propias",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Administración de Empresas en UC Universidad Continental.",
    featured: true,
    status: "active",
  },
  {
    id: "contabilidad-fiscalizacion",
    title: "Licenciatura en Contabilidad y Fiscalización",
    shortTitle: "Contabilidad y Fiscalización",
    category: "Licenciaturas",
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/contabilidad-fiscalizacion.webp",
    shortDescription: "Desarrolla criterio financiero, contable y fiscal para la toma de decisiones profesionales.",
    objective: "Formar profesionales críticos y reflexivos en el campo de la contabilidad, bajo un enfoque humanista, con competencias profesionales para responder a problemáticas fiscales y financieras.",
    description: "La Licenciatura en Contabilidad y Fiscalización de la UC forma profesionales con criterio contable, fiscal y financiero de alto nivel, capaces de estructurar y auditar sistemas contables bajo un modelo humanista.",
    highlights: [
      "Estructuración de estados financieros y auditoría",
      "Interpretación y planeación en marcos fiscales",
      "Uso de tecnologías y software contable avanzado",
      "Estrategias de sistemas electrónicos de control",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de gestionar información financiera, contable y fiscal para apoyar el control, la transparencia y la toma de decisiones en las organizaciones.",
      competencies: [
        "Registrar y analizar operaciones contables.",
        "Elaborar e interpretar estados financieros.",
        "Aplicar disposiciones fiscales y tributarias vigentes.",
        "Diseñar sistemas de control interno.",
        "Participar en procesos de auditoría y fiscalización.",
        "Evaluar costos, presupuestos y resultados financieros.",
        "Utilizar herramientas digitales y sistemas contables.",
        "Brindar asesoría financiera, contable y fiscal.",
      ],
    },
    careerField: [
      "Despachos contables e institucionales",
      "Dirección financiera y administrativa de empresas",
      "Auditoría interna y externa corporativa",
      "Consultoría fiscal y contable independiente",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Contabilidad y Fiscalización en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "educacion",
    title: "Licenciatura en Educación",
    shortTitle: "Educación",
    category: "Licenciaturas",
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/educacion.webp",
    shortDescription: "Desarrolla herramientas para acompañar procesos de enseñanza y aprendizaje con enfoque humano.",
    objective: "Formar profesionales críticos y reflexivos de la educación, bajo un enfoque humanista, con competencias profesionales para responder a problemáticas sociales y educativas de forma innovadora.",
    description: "La Licenciatura en Educación de la UC prepara a profesionales capaces de diseñar y gestionar ambientes de aprendizaje innovadores, interviniendo en problemáticas sociales y educativas desde una perspectiva humana.",
    highlights: [
      "Diseño y gestión de entornos de aprendizaje innovadores",
      "Desarrollo de planes y programas de estudio",
      "Intervención y solución a necesidades educativas",
      "Dirección y administración de centros escolares",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de diseñar, implementar y evaluar procesos educativos en distintos contextos, niveles y modalidades de enseñanza.",
      competencies: [
        "Diseñar programas, cursos y experiencias de aprendizaje.",
        "Implementar estrategias didácticas centradas en el estudiante.",
        "Evaluar procesos de enseñanza y resultados de aprendizaje.",
        "Utilizar tecnologías educativas y recursos digitales.",
        "Atender necesidades educativas y diversidad de contextos.",
        "Desarrollar proyectos de intervención e innovación educativa.",
        "Coordinar actividades académicas y de gestión escolar.",
        "Investigar problemáticas relacionadas con la educación.",
      ],
    },
    careerField: [
      "Docencia en niveles escolares básicos y medios",
      "Diseño de contenidos y tecnología instruccional",
      "Dirección y supervisión escolar",
      "Investigación y consultoría psicopedagógica",
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
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/criminologia-criminalistica.webp",
    shortDescription: "Analiza, investiga y reconstruye hechos con rigor, método y criterio profesional.",
    objective: "Formar profesionales críticos y reflexivos en criminología y criminalística, bajo un enfoque humanista, con competencias profesionales para actuar de forma innovadora en contextos regionales, nacionales e internacionales.",
    description: "La Licenciatura en Criminología y Criminalística de la UC capacita para el análisis científico de conductas delictivas, el diseño de estrategias de prevención y la investigación metodológica de hechos delictivos.",
    highlights: [
      "Análisis científico de la conducta antisocial y delictiva",
      "Aplicación de técnicas periciales y forenses",
      "Diseño de políticas y estrategias de prevención social",
      "Investigación del delito con rigor metodológico",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de analizar fenómenos delictivos, aplicar metodologías de investigación y participar en estrategias de prevención, seguridad y procuración de justicia.",
      competencies: [
        "Analizar factores sociales, psicológicos y jurídicos relacionados con el delito.",
        "Aplicar métodos y técnicas de investigación criminalística.",
        "Participar en el procesamiento técnico de indicios.",
        "Elaborar informes y dictámenes con sustento metodológico.",
        "Diseñar estrategias de prevención social de la violencia y el delito.",
        "Analizar perfiles y patrones de conducta delictiva.",
        "Colaborar con equipos multidisciplinarios de seguridad y justicia.",
        "Actuar con responsabilidad ética y apego a los derechos humanos.",
      ],
    },
    careerField: [
      "Instituciones de impartición y procuración de justicia",
      "Áreas de seguridad pública y prevención del delito",
      "Consultoría forense y peritajes independientes",
      "Análisis criminológico en corporaciones de seguridad",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Licenciatura en Criminología y Criminalística en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "lenguas-extranjeras",
    title: "Licenciatura en Lenguas Extranjeras",
    shortTitle: "Lenguas Extranjeras",
    category: "Licenciaturas",
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/lenguas-extranjeras.webp",
    shortDescription: "Fortalece tus competencias lingüísticas para comunicar, interpretar y crear oportunidades globales.",
    objective: "Formar profesionales críticos y reflexivos en la disciplina de las lenguas extranjeras, bajo un enfoque humanista, con competencias profesionales para la conservación de la cultura, el desarrollo sustentable y la resolución de problemáticas sociales.",
    description: "La Licenciatura en Lenguas Extranjeras de la UC dota a los estudiantes de herramientas de comunicación e interpretación para desenvolverse profesionalmente en el ámbito de la docencia y traducción global.",
    highlights: [
      "Dominio y enseñanza del Inglés y Francés",
      "Traducción de textos académicos, literarios e institucionales",
      "Desarrollo de competencias lingüísticas avanzadas",
      "Habilidades para la vinculación global intercultural",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de comunicarse profesionalmente en lenguas extranjeras y aplicar sus competencias en educación, traducción, gestión cultural y contextos internacionales.",
      competencies: [
        "Comunicarse de forma oral y escrita en inglés y otra lengua extranjera.",
        "Diseñar e impartir procesos de enseñanza de idiomas.",
        "Aplicar metodologías didácticas para el aprendizaje lingüístico.",
        "Participar en procesos de traducción e interpretación básica o especializada.",
        "Elaborar materiales educativos y recursos lingüísticos.",
        "Desarrollarse en ambientes multiculturales e internacionales.",
        "Prepararse para certificaciones internacionales de idiomas.",
        "Utilizar herramientas tecnológicas para la enseñanza y comunicación.",
      ],
    },
    careerField: [
      "Docencia de lenguas extranjeras en todos los niveles",
      "Servicios independientes de traducción y peritajes",
      "Comunicación y relaciones en organismos internacionales",
      "Coordinación de centros de lenguas corporativos",
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
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/derecho.webp",
    shortDescription: "Desarrolla criterio jurídico para analizar, argumentar y defender con ética profesional.",
    objective: "Formar profesionales con criterio jurídico, sentido ético y capacidad de análisis para intervenir en contextos legales, sociales e institucionales.",
    description: "La Licenciatura en Derecho de la UC promueve un riguroso análisis normativo y metodológico con un alto sentido ético, habilitando a los estudiantes para la resolución de controversias y asesoría legal.",
    highlights: [
      "Análisis de normas y casos en juicios orales",
      "Argumentación jurídica oral y escrita con base metodológica",
      "Defensa y asesoramiento con sentido ético y humano",
      "Interpretación y litigación en diversas ramas del derecho",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de interpretar y aplicar el marco jurídico, representar intereses legales y participar en la solución de conflictos con responsabilidad ética.",
      competencies: [
        "Interpretar leyes, reglamentos y criterios jurídicos.",
        "Elaborar contratos, escritos, demandas y documentos legales.",
        "Brindar asesoría jurídica a personas y organizaciones.",
        "Participar en procedimientos civiles, penales, laborales, mercantiles y administrativos.",
        "Diseñar estrategias para la prevención y solución de conflictos.",
        "Argumentar de manera oral y escrita con sustento jurídico.",
        "Aplicar mecanismos alternativos de solución de controversias.",
        "Actuar con ética profesional y respeto a los derechos humanos.",
      ],
    },
    careerField: [
      "Litigio independiente en derecho civil, penal, familiar",
      "Asesoría jurídica corporativa e institucional",
      "Servicio público en juzgados y dependencias estatales",
      "Áreas legales de empresas, bancos y notarías",
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
    modality: "Presencial",
    duration: "3 años",
    image: "/images/programas/ingenieria-sistemas-negocios-digitales.webp",
    shortDescription: "Desarrolla soluciones tecnológicas con visión estratégica e innovación digital.",
    objective: "Formar profesionales capaces de integrar tecnología, análisis y visión de negocio para desarrollar soluciones digitales aplicables a organizaciones y proyectos.",
    description: "Este programa de Ingeniería combina el desarrollo de software, análisis tecnológico y automatización con habilidades estratégicas orientadas a la innovación y digitalización empresarial.",
    highlights: [
      "Desarrollo e integración de aplicaciones de software",
      "Diseño de modelos de negocio basados en plataformas digitales",
      "Automatización de procesos operativos en las organizaciones",
      "Administración de bases de datos y seguridad digital",
    ],
    graduateProfile: {
      intro: "La persona egresada será capaz de desarrollar soluciones tecnológicas y aplicar herramientas digitales para optimizar procesos, crear productos y fortalecer modelos de negocio.",
      competencies: [
        "Diseñar y desarrollar aplicaciones web y sistemas de software.",
        "Analizar requerimientos tecnológicos y necesidades empresariales.",
        "Administrar bases de datos e infraestructura digital.",
        "Automatizar procesos operativos y administrativos.",
        "Diseñar soluciones de comercio electrónico y negocios digitales.",
        "Implementar medidas básicas de seguridad informática.",
        "Analizar datos para apoyar la toma de decisiones.",
        "Coordinar proyectos tecnológicos y equipos multidisciplinarios.",
        "Integrar inteligencia artificial y tecnologías emergentes en procesos empresariales.",
      ],
    },
    careerField: [
      "Desarrollo de software y aplicaciones web/móviles",
      "Dirección y consultoría de transformación digital",
      "Administración de sistemas y bases de datos",
      "Creación de startups de tecnología y comercio electrónico",
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
    modality: "1 fin de semana al mes",
    duration: "2 años",
    image: "/images/programas/maestria-lenguas-extranjeras.webp",
    shortDescription: "Fortalece tu perfil profesional con una visión actual, académica y global de las lenguas extranjeras.",
    objective: "Desarrollar competencias profesionales avanzadas en el campo de las lenguas extranjeras, con enfoque académico, comunicativo y humanista.",
    description: "La Maestría en Lenguas Extranjeras de la UC amplía y profundiza las habilidades lingüísticas y las tendencias educativas del docente y directivo en idiomas, con enfoque académico contemporáneo y flexibilidad de 1 fin de semana al mes.",
    highlights: [
      "Formación docente avanzada en lenguas extranjeras",
      "Liderazgo en gestión y diseño curricular",
      "Aplicación inmediata de metodologías en el aula",
      "Flexibilidad de estudio adaptada a la vida laboral activa",
    ],
    profile: [
      "Licenciados en áreas afines con experiencia docente",
      "Compromiso con el perfeccionamiento de la enseñanza de idiomas",
      "Disposición para la investigación aplicada",
      "Interés en la innovación de metodologías de aprendizaje",
    ],
    careerField: [
      "Docencia a nivel universitario y de posgrado",
      "Coordinación y dirección de centros de idiomas",
      "Diseño y consultoría de materiales didácticos",
      "Investigación en pedagogía aplicada a idiomas",
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
    modality: "1 fin de semana al mes",
    duration: "2 años",
    image: "/images/programas/maestria-administracion-publica.webp",
    shortDescription: "Fortalece tu liderazgo, análisis y visión estratégica para transformar la gestión pública.",
    objective: "Formar profesionales capaces de analizar, gestionar y liderar de manera avanzada procesos institucionales con criterio estratégico, social y administrativo.",
    description: "La Maestría en Administración Pública de la UC capacita a directivos y líderes del sector público y organizaciones no gubernamentales en planeación, dirección institucional y desarrollo de proyectos de impacto social, con flexibilidad de 1 fin de semana al mes.",
    highlights: [
      "Especialización en liderazgo y dirección institucional",
      "Análisis y evaluación de programas y políticas gubernamentales",
      "Herramientas avanzadas de gestión, planeación y control",
      "Flexibilidad de estudio adaptada a la vida laboral",
    ],
    profile: [
      "Profesionales del sector público, social o privado con visión social",
      "Interés en optimizar la gestión institucional y políticas públicas",
      "Habilidades de liderazgo y trabajo en equipo",
      "Capacidad analítica para el diseño de soluciones gubernamentales",
    ],
    careerField: [
      "Dirección en dependencias municipales, estatales y federales",
      "Planeación y evaluación de políticas en ONGs",
      "Consultoría externa en administración y finanzas públicas",
      "Asesoría legislativa e institucional de alto nivel",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Maestría en Administración Pública en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "diplomado-gestion-administrativa",
    title: "Diplomado en Gestión Administrativa",
    shortTitle: "Diplomado en Gestión Administrativa",
    category: "Educación Continua",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/diplomado-gestion-administrativa.webp",
    shortDescription: "Actualiza tus competencias de gestión, organización y liderazgo en el ámbito administrativo.",
    objective: "Formar a los participantes en técnicas modernas de administración, control interno y optimización de recursos empresariales.",
    description: "El Diplomado en Gestión Administrativa está diseñado como formación de actualización para profesionales y emprendedores que buscan optimizar los procesos organizacionales y fortalecer la toma de decisiones estratégicas.",
    highlights: [
      "Actualización profesional en herramientas administrativas",
      "Enfoque práctico en planeación y control interno",
      "Desarrollo de habilidades de liderazgo y toma de decisiones",
      "Modalidad diseñada para la vida laboral activa",
    ],
    profile: [
      "Profesionales de áreas administrativas",
      "Emprendedores buscando estructurar su negocio",
      "Público interesado en actualizar competencias de gestión",
    ],
    careerField: [
      "Administración y control operativo de negocios",
      "Supervisión de equipos y procesos",
      "Asesoría en desarrollo organizacional de MiPyMEs",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Diplomado en Gestión Administrativa en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "diplomado-perfilacion-criminal",
    title: "Diplomado en Perfilación Criminal",
    shortTitle: "Diplomado en Perfilación Criminal",
    category: "Educación Continua",
    modality: "Por confirmar",
    duration: "Por confirmar",
    image: "/images/programas/diplomado-perfilacion-criminal.webp",
    shortDescription: "Profundiza en las técnicas científicas de análisis conductual e investigación criminológica avanzada.",
    objective: "Capacitar en el análisis de patrones conductuales y reconstrucción de perfiles criminales aplicados a la procuración de justicia.",
    description: "El Diplomado en Perfilación Criminal ofrece una aproximación metodológica de actualización para comprender la mente criminal y analizar escenas del crimen bajo un enfoque forense y multidisciplinario.",
    highlights: [
      "Actualización especializada en análisis y perfilación conductual",
      "Estudio y reconstrucción metodológica de casos reales",
      "Aproximación forense y criminalística avanzada",
      "Enfoque multidisciplinario orientado a la actualización profesional",
    ],
    profile: [
      "Licenciados o estudiantes en Derecho, Criminología o afines",
      "Profesionales del área forense y seguridad pública/privada",
      "Interés en las ciencias de análisis conductual forense",
    ],
    careerField: [
      "Colaboración técnica en peritajes independientes",
      "Asesoría en seguridad corporativa y de contexto delictivo",
      "Fortalecimiento de competencias en fiscalías o defensorías",
    ],
    differentiators: generalDifferentiators,
    whatsappMessage: "Hola, quiero información sobre Diplomado en Perfilación Criminal en UC Universidad Continental.",
    status: "active",
  },
  {
    id: "centro-idiomas",
    title: "Centro de Idiomas UC",
    shortTitle: "Centro de Idiomas",
    category: "Centro de Idiomas",
    modality: "Presencial",
    duration: "Niveles de 4 meses · 3 horas semanales",
    image: "/images/programas/centro-idiomas.webp",
    shortDescription: "Aprende idiomas con acompañamiento académico y enfoque práctico.",
    objective: "Fortalecer competencias comunicativas en idiomas mediante procesos formativos claros, prácticos y orientados al desarrollo académico y profesional.",
    description: "El Centro de Idiomas de la Universidad Continental brinda programas presenciales para el aprendizaje de lenguas extranjeras (Inglés y Francés), promoviendo el dominio práctico en niveles de A1 a C1.",
    highlights: [
      "Idiomas: Inglés y Francés",
      "Niveles basados en el Marco Común Europeo (A1 a C1)",
      "Duración estructurada: 4 meses por nivel (3 horas semanales)",
      "Enfoque práctico centrado en la comunicación oral y escrita",
    ],
    profile: [
      "Interés en aprender o perfeccionar un segundo idioma",
      "Estudiantes, profesionales y público general",
      "Disposición para el aprendizaje colaborativo e interactivo",
    ],
    careerField: [
      "Vinculación académica y laboral internacional",
      "Acceso a becas y posgrados en el extranjero",
      "Acreditación y certificación de dominio del idioma",
      "Mejora del perfil profesional y oportunidades globales",
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
    duration: "Según programa",
    image: "/images/programas/estudia-en-linea.webp",
    shortDescription: "Estudia con mayor flexibilidad a través de programas diseñados para adaptarse a tu ritmo.",
    objective: "Ofrecer una alternativa flexible de formación académica para estudiantes que buscan avanzar profesionalmente mediante modalidad en línea.",
    description: "La UC Virtual ofrece un ecosistema de aprendizaje en línea que permite combinar estudios con actividades laborales y personales, mediante un sólido acompañamiento académico y tecnológico.",
    highlights: [
      "Licenciatura en Educación (Modalidad en línea)",
      "Licenciatura en Lenguas Extranjeras (Modalidad en línea)",
      "Maestría en Lenguas Extranjeras (Modalidad en línea)",
      "Plataforma de aprendizaje accesible las 24 horas del día",
      "Acompañamiento tutorial continuo de docentes calificados",
    ],
    profile: [
      "Personas interesadas en continuar su educación superior de manera flexible",
      "Profesionales que laboran y requieren autogestión del tiempo",
      "Interés en el uso de plataformas y herramientas digitales de estudio",
    ],
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
