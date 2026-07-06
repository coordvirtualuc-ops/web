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
      { label: "Bachillerato", href: "/oferta-academica?categoria=Bachillerato#catalogo" },
      { label: "Licenciaturas", href: "/oferta-academica?categoria=Licenciaturas#catalogo" },
      { label: "Posgrados", href: "/oferta-academica?categoria=Posgrados#catalogo" },
      { label: "Educación Continua", href: "/oferta-academica?categoria=Educación%20Continua#catalogo" },
      { label: "Centro de Idiomas UC", href: "/oferta-academica?categoria=Centro%20de%20Idiomas#catalogo" },
    ]
  },
  { label: "Estudia en Línea", href: "/oferta-academica?categoria=Estudia%20en%20Línea#catalogo" },
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
    { label: "Bachillerato", href: "/oferta-academica?categoria=Bachillerato#catalogo" },
    { label: "Licenciaturas", href: "/oferta-academica?categoria=Licenciaturas#catalogo" },
    { label: "Posgrados", href: "/oferta-academica?categoria=Posgrados#catalogo" },
    { label: "Educación Continua", href: "/oferta-academica?categoria=Educación%20Continua#catalogo" },
    { label: "Centro de Idiomas UC", href: "/oferta-academica?categoria=Centro%20de%20Idiomas#catalogo" },
  ],
  contacto: [
    { label: "Inscríbete", href: "/inscribete" },
    { label: "Ubicación", href: "/contacto" },
    { label: "Contacto", href: "/contacto" },
  ]
}