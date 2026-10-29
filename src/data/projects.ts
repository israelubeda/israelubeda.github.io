export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  technologies: string[];
  categories: string[];
  image: string;
  imageAlt: string;
  repository?: string;
  sourceRepository?: string;
  attribution?: string;
  status: string;
  verifiedAt: string;
  featured: boolean;
  order: number;
  facts: string[];
  published: boolean;
};

export const projects: Project[] = [
  {
    slug: 'xml-to-pdf-dte-chile',
    name: 'XML to PDF DTE Chile',
    eyebrow: 'Documentos tributarios',
    description:
      'Aplicación en Python y Flask para convertir documentos tributarios electrónicos XML en PDF mediante plantillas HTML y CSS.',
    longDescription:
      'El repositorio aborda una necesidad concreta del ecosistema tributario chileno: transformar la estructura de un DTE en una representación PDF legible. La documentación pública confirma el uso de Python, Flask y plantillas web.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'XML'],
    categories: ['Python', 'SII', 'Automatización'],
    image: '/projects/xml-to-pdf-dte-chile.png',
    imageAlt: 'Vista previa del repositorio XML to PDF DTE Chile en GitHub',
    repository: 'https://github.com/israelubeda/xml_to_pdf_DTE_Chile',
    status: 'Público · disponible como referencia',
    verifiedAt: '2026-10-29',
    featured: true,
    order: 1,
    facts: [
      'Repositorio público y no-fork verificado.',
      'Conversión desde XML de DTE a una salida PDF.',
      'Interfaz y plantillas construidas con tecnologías web.',
    ],
    published: true,
  },
  {
    slug: 'inhabiles',
    name: 'Inhábiles Chile',
    eyebrow: 'Automatización de calendario',
    description:
      'Herramienta web para calcular días no laborables considerando fines de semana y feriados oficiales de Chile.',
    longDescription:
      'Una aplicación enfocada en simplificar cálculos de calendario que suelen repetirse en procesos administrativos y de recursos humanos. La ficha se limita a lo descrito públicamente en el repositorio.',
    technologies: ['Python', 'Flask', 'HTML', 'Calendarios'],
    categories: ['Python', 'Automatización', 'Chile'],
    image: '/projects/inhabiles.png',
    imageAlt: 'Vista previa del repositorio Inhábiles en GitHub',
    repository: 'https://github.com/israelubeda/inhabiles',
    status: 'Público · disponible como referencia',
    verifiedAt: '2026-10-29',
    featured: true,
    order: 2,
    facts: [
      'Repositorio público y no-fork verificado.',
      'Considera fines de semana y días festivos.',
      'Orientado a automatizar cálculos repetitivos de fechas.',
    ],
    published: true,
  },
  {
    slug: 'modulo-11',
    name: 'Módulo 11',
    eyebrow: 'Validación de datos',
    description: 'Aplicación web para verificar RUT chilenos mediante el algoritmo de módulo 11.',
    longDescription:
      'Proyecto acotado que convierte una regla de validación chilena en una herramienta web. Es un ejemplo verificable de integración entre lógica Python, Flask y una interfaz accesible desde navegador.',
    technologies: ['Python', 'Flask', 'HTML', 'Algoritmos'],
    categories: ['Python', 'SII', 'Validación'],
    image: '/projects/modulo-11.png',
    imageAlt: 'Vista previa del repositorio Módulo 11 en GitHub',
    repository: 'https://github.com/israelubeda/modulo_11',
    status: 'Público · disponible como referencia',
    verifiedAt: '2026-10-29',
    featured: true,
    order: 3,
    facts: [
      'Repositorio público y no-fork verificado.',
      'Implementa validación de RUT mediante módulo 11.',
      'Expone la lógica a través de una aplicación Flask.',
    ],
    published: true,
  },
  {
    slug: 'calculadora-honorarios',
    name: 'Calculadora de honorarios',
    eyebrow: 'Herramientas tributarias',
    description:
      'Calculadora web en Flask para boletas de honorarios en Chile, documentada con tasas 2025.',
    longDescription:
      'Herramienta pública orientada al cálculo de boletas de honorarios. La tasa mencionada en el repositorio corresponde a 2025, por lo que debe verificarse antes de usarla para decisiones tributarias actuales.',
    technologies: ['Python', 'Flask', 'HTML'],
    categories: ['Python', 'SII', 'Finanzas'],
    image: '/projects/calculadora-honorarios.png',
    imageAlt: 'Vista previa del repositorio Calculadora de honorarios en GitHub',
    repository: 'https://github.com/israelubeda/calculadora-honorarios',
    status: 'Público · referencia histórica 2025',
    verifiedAt: '2026-10-29',
    featured: false,
    order: 4,
    facts: [
      'Repositorio público y no-fork verificado.',
      'La descripción pública especifica tasas del año 2025.',
      'Requiere actualización normativa antes de uso actual.',
    ],
    published: true,
  },
  {
    slug: 'color-es',
    name: 'color_es',
    eyebrow: 'Librería Python',
    description: 'Librería Python para aplicar color al texto de consola con una API en español.',
    longDescription:
      'Una librería pequeña enfocada en una interfaz en español. El proyecto también está conectado con artículos históricos del blog sobre creación y empaquetado de paquetes Python.',
    technologies: ['Python', 'PyPI', 'CLI'],
    categories: ['Python', 'Open source'],
    image: '/projects/color-es.png',
    imageAlt: 'Vista previa del repositorio color_es en GitHub',
    repository: 'https://github.com/israelubeda/color_es',
    status: 'Público · experimental',
    verifiedAt: '2026-10-29',
    featured: false,
    order: 5,
    facts: [
      'Repositorio público y no-fork verificado.',
      'API y documentación orientadas a usuarios hispanohablantes.',
      'Relacionado con el aprendizaje de packaging de Python.',
    ],
    published: true,
  },
  {
    slug: 'mods-minetest',
    name: 'Mods Minetest',
    eyebrow: 'Lua y juegos',
    description: 'Colección pública de modificaciones escritas en Lua para Minetest.',
    longDescription:
      'Repositorio de experimentación con Lua y Minetest. Complementa el artículo histórico sobre instalación de un servidor Minetest en Ubuntu.',
    technologies: ['Lua', 'Minetest', 'Linux'],
    categories: ['Lua', 'Proyectos personales'],
    image: '/projects/mods-minetest.png',
    imageAlt: 'Vista previa del repositorio Mods Minetest en GitHub',
    repository: 'https://github.com/israelubeda/mods_minetest',
    status: 'Público · experimental',
    verifiedAt: '2026-10-29',
    featured: false,
    order: 6,
    facts: [
      'Repositorio público y no-fork verificado.',
      'Código principal identificado como Lua.',
      'Vinculado al aprendizaje de administración de servidores Linux.',
    ],
    published: true,
  },
  {
    slug: 'chess-encryption',
    name: 'Chess Encryption',
    eyebrow: 'Exploración · ajedrez y criptografía',
    description:
      'Fork público de una herramienta Python que representa datos cifrados mediante partidas de ajedrez.',
    longDescription:
      'Este repositorio forma parte de las exploraciones públicas de Israel, pero no es una creación original suya. GitHub lo identifica como fork del proyecto Chess Encryption de WintrCat; se incluye por solicitud expresa y con atribución visible.',
    technologies: ['Python', 'Ajedrez', 'Criptografía'],
    categories: ['Python', 'Ajedrez', 'Exploraciones'],
    image: '/projects/chess-encryption.png',
    imageAlt: 'Vista previa del repositorio Chess Encryption en GitHub',
    repository: 'https://github.com/israelubeda/chessencryption',
    sourceRepository: 'https://github.com/WintrCat/chessencryption',
    attribution: 'Fork de WintrCat/chessencryption',
    status: 'Público · fork con atribución',
    verifiedAt: '2026-10-29',
    featured: false,
    order: 7,
    facts: [
      'GitHub lo identifica como fork, no como repositorio original.',
      'El proyecto de origen está atribuido a WintrCat.',
      'El lenguaje principal del repositorio de origen es Python.',
    ],
    published: true,
  },
];

export const projectDrafts: Project[] = [
  ['polypus-cli-context', 'Polypus CLI / Context'],
  ['polypus-living-office', 'Polypus Living Office'],
  ['project-grimoire', 'Project Grimoire'],
  ['crosspoint-eink', 'Ecosistema CrossPoint e-ink'],
  ['automatizaciones-odoo', 'Automatizaciones Odoo'],
  ['putaendo-polypus-tv', 'PUTAENDO / POLYPUS TV'],
].map(([slug, name], index) => ({
  slug,
  name,
  eyebrow: 'Borrador privado',
  description: 'Proyecto candidato pendiente de evidencia pública y documentación verificable.',
  longDescription:
    'Esta ficha editorial no se publica. Debe completarse únicamente cuando exista una fuente pública o documentación autorizada por Israel Ubeda.',
  technologies: [],
  categories: ['Pendiente de verificación'],
  image: '',
  imageAlt: '',
  status: 'No verificado · no publicar',
  verifiedAt: '2026-10-29',
  featured: false,
  order: 100 + index,
  facts: ['No localizado públicamente con el nombre indicado.'],
  published: false,
}));

export const visibleProjects = projects
  .filter((project) => project.published)
  .sort((a, b) => a.order - b.order);
