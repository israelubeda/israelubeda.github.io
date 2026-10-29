export const site = {
  name: 'Israel Ubeda',
  title: 'Israel Ubeda — Software, automatización e inteligencia artificial',
  description:
    'Portafolio de Israel Ubeda: desarrollo de software, automatización con Python, Odoo, inteligencia artificial y herramientas para el ecosistema tributario chileno.',
  url: 'https://israelubeda.github.io',
  email: 'israel.ubedabravo@gmail.com',
  github: 'https://github.com/israelubeda',
  x: 'https://twitter.com/israel_ubeda',
  location: 'Santiago, Chile',
} as const;

export const navigation = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
  { href: '/experiencia/', label: 'Experiencia' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/casos/', label: 'Casos' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

export const technologies = [
  'Python',
  'Odoo ERP',
  'FastAPI',
  'PostgreSQL',
  'Docker',
  'APIs',
  'Ollama',
  'LLM locales',
  'Linux',
  'Astro',
] as const;
