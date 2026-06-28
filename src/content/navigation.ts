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
      { label: "Licenciaturas", href: "/licenciaturas" },
      { label: "Posgrados", href: "/oferta-academica/posgrados" },
      { label: "Educación Continua", href: "/oferta-academica/educacion-continua" },
      { label: "Centro de Idiomas UC", href: "/oferta-academica/centro-idiomas" },
    ]
  },
  { label: "Estudia en Línea", href: "/estudia-en-linea" },
  { label: "Inscríbete", href: "/inscribete" },
  { label: "Vida UC", href: "/vida-uc" },
  { label: "Identidad UC", href: "/identidad-uc" },
  { label: "Contacto", href: "/contacto" },
]

export const footerNavigation = {
  institucion: [
    { label: "Identidad UC", href: "/identidad-uc" },
    { label: "Vida UC", href: "/vida-uc" },
    { label: "Blog", href: "/blog" },
  ],
  ofertaAcademica: [
    { label: "Bachillerato", href: "/oferta-academica/bachillerato" },
    { label: "Licenciaturas", href: "/licenciaturas" },
    { label: "Posgrados", href: "/oferta-academica/posgrados" },
    { label: "Educación Continua", href: "/oferta-academica/educacion-continua" },
    { label: "Centro de Idiomas UC", href: "/oferta-academica/centro-idiomas" },
  ],
  contacto: [
    { label: "Inscríbete", href: "/inscribete" },
    { label: "Ubicación", href: "/contacto" },
    { label: "Contacto", href: "/contacto" },
  ]
}