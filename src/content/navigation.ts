export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const navigationItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Oferta Académica",
    href: "/oferta-academica",
    children: [
      { label: "Bachillerato", href: "/oferta-academica/bachillerato" },
      { label: "Posgrados", href: "/oferta-academica/posgrados" },
      { label: "Diplomados", href: "/oferta-academica/diplomados" },
      { label: "Cursos de inglés", href: "/oferta-academica/ingles" },
      { label: "Cursos de francés", href: "/oferta-academica/frances" },
    ]
  },
  {
    label: "Licenciaturas",
    href: "/licenciaturas",
    children: [
      { label: "Administración de Empresas", href: "/licenciaturas/administracion-de-empresas" },
      { label: "Educación", href: "/licenciaturas/educacion" },
      { label: "Criminología y Criminalística", href: "/licenciaturas/criminologia-y-criminalistica" },
      { label: "Contabilidad y Fiscalización", href: "/licenciaturas/contabilidad-y-fiscalizacion" },
      { label: "Lenguas Extranjeras", href: "/licenciaturas/lenguas-extranjeras" },
    ]
  },
  { label: "Admisiones", href: "/admisiones" },
  { label: "Vida UC", href: "/vida-uc" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export const footerNavigation = {
  institucion: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Vida UC", href: "/vida-uc" },
    { label: "Blog", href: "/blog" },
  ],
  ofertaAcademica: [
    { label: "Bachillerato", href: "/oferta-academica/bachillerato" },
    { label: "Licenciaturas", href: "/licenciaturas" },
    { label: "Posgrados", href: "/oferta-academica/posgrados" },
    { label: "Educación Continua", href: "/oferta-academica/diplomados" },
    { label: "Idiomas", href: "/oferta-academica/idiomas" },
  ],
  contacto: [
    { label: "Admisiones", href: "/admisiones" },
    { label: "Ubicación", href: "/contacto" },
    { label: "Contacto", href: "/contacto" },
  ]
}