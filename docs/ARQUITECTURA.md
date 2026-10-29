# Arquitectura del portafolio

## Objetivos

El sitio debe ser estático, rápido, accesible, desplegable en GitHub Pages y sencillo de mantener sin backend obligatorio. La arquitectura separa contenido, presentación, selección editorial y validación.

## Flujo

```text
Markdown histórico ─┐
Datos de proyectos ─┼─> Astro build ─> HTML/CSS/JS mínimo ─> GitHub Pages
Páginas Astro ──────┘       │
                            ├─> RSS
                            ├─> Sitemap
                            └─> pruebas de rutas y enlaces
```

## Capas

### Contenido

`src/content/blog/` contiene los artículos migrados. La colección permite metadatos antiguos opcionales y deriva la fecha desde el nombre histórico. `legacySlug` resuelve excepciones sin cambiar la URL pública.

### Dominio editorial

`src/data/projects.ts` es la fuente controlada del catálogo. Un proyecto sólo aparece si `published` es verdadero. `projectDrafts` conserva candidatos sin evidencia pública y evita su publicación accidental.

### Presentación

`BaseLayout.astro` centraliza SEO, datos estructurados, tema y estructura global. Header, footer, tarjetas y títulos de sección son componentes reutilizables. La interfaz usa tokens CSS y utilidades Tailwind sin librería de componentes externa.

### Rutas

- Páginas principales: `/`, `/sobre-mi/`, `/experiencia/`, `/proyectos/`, `/casos/`, `/blog/`, `/contacto/`.
- Detalle de proyectos: `/proyectos/[slug]/`.
- Artículos históricos: ruta raíz generada por `[...legacy].astro`.
- Compatibilidad: `/Sobre%20mi/` redirige a `/sobre-mi/`; `/proyectos/` reemplaza la página histórica en la misma URL.
- Recursos: `/feed.xml`, `/robots.txt`, sitemap generado y `/404.html`.

## JavaScript en cliente

Sólo se utiliza para el tema, menú móvil, filtros del catálogo, búsqueda local del blog y aparición progresiva de elementos. El contenido principal y la navegación funcionan como HTML estático. Las animaciones se anulan con `prefers-reduced-motion`.

## GitHub en build

La primera versión utiliza datos editoriales verificados y versionados para evitar fallos por rate limit. Una actualización futura puede incorporar un script de build con token opcional sólo en CI, ETag, caché del último resultado válido, exclusión de forks y fallback a los datos locales. No se necesita una llamada a GitHub desde el navegador.

## Accesibilidad

- idioma español y jerarquía semántica;
- navegación por teclado y estados de foco visibles;
- enlace para saltar al contenido;
- contraste definido por tokens para ambos temas;
- textos alternativos en imágenes editoriales;
- reducción de movimiento según preferencia del sistema;
- controles con nombre accesible y anuncios `aria-live` en filtros.

## SEO

El layout genera canonical HTTPS, descripción, Open Graph y Twitter Cards. Astro genera sitemap; endpoints generan robots y RSS. Las páginas de proyecto y artículos tienen metadatos individuales. La entidad personal se describe con JSON-LD `Person` sin títulos ni credenciales inventadas.

## Despliegue

CI valida cualquier rama o pull request. El workflow de Pages es manual para respetar la autorización de despliegue. El artefacto es `dist/` y no requiere servidor.

## Decisiones y límites

- Los previews verificados de los repositorios se almacenan en `public/projects/` para evitar dependencias de red durante la navegación. Conviene reemplazarlos por capturas propias del producto cuando estén disponibles.
- GitHub Pages no permite definir cabeceras HTTP arbitrarias como CSP desde este repositorio.
- Los artículos históricos se conservan aunque algunos tutoriales estén desactualizados; el sitio los identifica como archivo.
- Los certificados PDF se preservan, pero no se promocionan en la navegación principal por privacidad y peso.
