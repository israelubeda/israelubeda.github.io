# Auditoría del sitio israelubeda.github.io

Fecha de corte: 29 de octubre de 2026  
Repositorio auditado: `https://github.com/israelubeda/israelubeda.github.io`  
Sitio publicado: `https://israelubeda.github.io/`  
Rama original: `master` (`05578ba`)  
Rama de modernización: `modernizacion-astro`

## Resumen ejecutivo

El sitio actual es una instalación de Beautiful Jekyll de 2016 con contenido añadido hasta septiembre de 2024. Publica correctamente desde GitHub Pages, pero su base técnica, su presentación y sus metadatos ya no representan el perfil profesional buscado. La migración a Astro es recomendable porque mantiene el modelo estático, reduce JavaScript en cliente, permite conservar Markdown y rutas existentes, y elimina la dependencia de una cadena Ruby/Jekyll obsoleta.

La migración no debe eliminar los archivos originales hasta validar la nueva compilación. Los artículos, imágenes y certificados se consideran patrimonio histórico. La nueva implementación los copiará a una estructura de contenido moderna y conservará los permalinks de los 18 artículos que aparecen en el RSS publicado.

## Estado de Git y publicación

- El repositorio es público, no está archivado y tiene GitHub Pages activo.
- La rama predeterminada y fuente histórica es `master`.
- No existe un workflow de GitHub Actions en el repositorio auditado.
- El despliegue actual depende del build implícito de Jekyll de GitHub Pages.
- El clon mostró `_posts/2023-12-03-Script-Odoo-17.md` como eliminado inmediatamente después del checkout, aunque el archivo existe en `HEAD` y en el sitio publicado. Se preservará recuperándolo desde Git antes de migrar.
- No se ha hecho push, merge ni cambio de configuración remota.

## Inventario técnico

### Dependencias y versiones

- Jekyll 3.3.1.
- `github-pages` 106.
- `jekyll-paginate` 1.1.0.
- Kramdown 1.11.1 y Rouge 1.11.1.
- Beautiful Jekyll, revisión identificada en `_config.yml`.
- Bootstrap 3.3.4 y Bootstrap Social incluidos en el repositorio.
- jQuery 1.11.2 incluido en el repositorio.
- Font Awesome 4.6 cargado desde MaxCDN.
- Google Fonts (Lora y Open Sans) cargadas externamente.
- Dockerfile basado en `mangar/jekyll:1.0`, con múltiples gems antiguas instaladas globalmente.

### Estructura

- `_posts/`: 18 artículos publicados y un artículo recuperable desde Git.
- `_layouts/`, `_includes/`, `_plugins/`: layouts Liquid, navegación, redes sociales y generador de etiquetas.
- `img/`: 19 imágenes, aproximadamente 1,9 MB; incluye capturas de Odoo, recursos del blog y avatar.
- `cursos/`: 17 certificados PDF más un archivo de prueba, aproximadamente 10,6 MB.
- `css/` y `js/`: dependencias vendorizadas y estilos del tema.
- `index.html`, `Sobre mi.md`, `proyectos.md`, `404.html`, `feed.xml`: páginas principales.

### Proceso de build actual

`bundle exec jekyll serve` mediante Ruby/Bundler o el Dockerfile incluido. GitHub Pages compila Jekyll automáticamente desde `master`. No hay lockfile o configuración moderna para Node, pruebas, lint, comprobación de tipos ni auditoría de enlaces.

## Contenido y rutas existentes

El RSS publicado confirma estos permalinks, que deben preservarse:

- `/2024-09-20-Servidor-_Minetest/`
- `/2024-09-13-LLM-local/`
- `/2023-12-03-Script-Odoo-17/`
- `/2023-09-19-Instalar_ODOO_16/`
- `/2023-09-06-escribiendo-desde-vsc-android/`
- `/2023-06-16-Proyecto-Package-python/`
- `/2023-06-11-Crear-libreria-python/`
- `/2021-12-02-Modificar-vistas-existentes/`
- `/2021-08-29-Tipos-de-Campos-ODOO/`
- `/2021-08-25-Campos-Personalizados-computados/`
- `/2020-06-07-Lame/`
- `/2015-02-28-test-markdown/`
- `/2015-02-26-flake-it-till-you-make-it/`
- `/2015-02-13-hamlet-monologue/`
- `/2015-01-27-dear-diary/`
- `/2015-01-19-soccer/`
- `/2015-01-15-pirates/`
- `/2015-01-04-first-post/`

También se conservarán `/Sobre%20mi/`, `/proyectos/`, `/feed.xml` y `/404.html`. Los artículos de demostración en inglés se mantendrán como archivo histórico, pero no se presentarán como experiencia profesional.

## Enlaces y multimedia

- Hay enlaces HTTP heredados a Markdown Tutorial, imágenes de Yelp, documentación antigua y el propio canonical.
- El artículo de prueba y el write-up LAME enlazan una imagen externa por HTTP; el recurso puede producir contenido mixto o estar caído.
- Los artículos técnicos enlazan a Nmap, PyPA, PyPI, Odoo, wkhtmltopdf, llama.cpp y Hugging Face.
- Las imágenes locales se encuentran en formatos JPG, PNG y GIF. `python.png` mide 2000×2000 y debe servirse con tamaños responsivos; `install-steps.gif` pesa aproximadamente 804 KB.
- Los certificados PDF contienen información personal verificable y se preservan, pero no se expondrán como llamada principal de la portada.

## SEO

Hallazgos confirmados en producción:

- Canonical de la portada en `http://israelubeda.github.io/`, no HTTPS.
- Descripción genérica: “Block, proyectos y mucho mas...”.
- `_config.yml` repite `url` y usa HTTP.
- No existe `/robots.txt`.
- No existe `/sitemap.xml`.
- El RSS existe, pero sus enlaces usan HTTP.
- No hay una estrategia coherente de Open Graph, Twitter Cards o JSON-LD.
- La zona horaria configurada es `America/Vancouver`, aunque el perfil público indica Santiago.
- Los títulos y descripciones mezclan español e inglés y contienen errores heredados.
- No hay catálogo indexable de proyectos ni páginas de detalle.

## Accesibilidad

- El documento publicado declara `lang="en"` aunque el contenido principal es español.
- En la portada publicada se detectaron cinco imágenes sin atributo `alt`.
- La navegación móvil heredada utiliza `href="javascript:void(0)"`.
- No existe enlace “saltar al contenido”.
- Los estados de foco dependen del tema Bootstrap y no están diseñados para la identidad actual.
- La jerarquía, textos de enlaces y controles de tema requieren revisión completa.
- No existe gestión de `prefers-reduced-motion`.

## Rendimiento

- Bootstrap, Bootstrap Social, Font Awesome y jQuery se cargan para páginas esencialmente estáticas.
- Se descargan dos familias de Google Fonts y una hoja de iconos de un CDN externo.
- Las imágenes no declaran dimensiones responsivas, `loading="lazy"` ni formatos modernos.
- No hay separación explícita de CSS crítico ni presupuestos de rendimiento.
- No se han ejecutado aún mediciones Lighthouse sobre la nueva versión. Los objetivos 90/95/95/95 son metas, no resultados.

## Seguridad y privacidad

- No se encontraron secretos activos en la configuración inspeccionada.
- La plantilla conserva campos de redes sociales de ejemplo y datos pertenecientes al autor original del tema; deben retirarse.
- Las dependencias vendorizadas son antiguas y amplían la superficie de riesgo.
- GitHub Pages no permite configurar todas las cabeceras HTTP de seguridad desde el repositorio; se priorizarán CSP-compatible markup, ausencia de scripts de terceros innecesarios y `rel="noopener noreferrer"`.
- Los PDF deben revisarse antes de promocionarlos públicamente porque pueden contener datos personales.

## GitHub y proyectos verificables

El perfil público declara Santiago, un blog en `israelubeda.github.io` y actividad desde 2018. La API pública reportó 243 repositorios. Muchos son forks; no deben presentarse como proyectos propios.

Repositorios propios, públicos y aptos para una primera selección editorial:

- `xml_to_pdf_DTE_Chile` — Python/Flask, conversión de DTE XML a PDF.
- `modulo_11` — aplicación Flask para validar RUT chileno.
- `inhabiles` — cálculo de días inhábiles de Chile.
- `calculadora-honorarios` — calculadora de boletas de honorarios; su referencia a tasas 2025 debe etiquetarse como histórica.
- `color_es` — librería Python para color de consola en español.
- `mods_minetest` — mods en Lua para Minetest.
- `meme-generator` — aplicación web; sin descripción pública suficiente para un caso de estudio.

Resultado de candidatos solicitados:

- Polypus CLI / Context: no localizado públicamente con esos nombres.
- Polypus Living Office: no localizado públicamente.
- Project Grimoire: no localizado públicamente.
- Ecosistema CrossPoint e-ink: no localizado públicamente.
- Automatizaciones Odoo: no hay un repositorio público con ese nombre; sólo se verificaron artículos y repositorios de aprendizaje/instalación.
- Herramientas tributarias SII: existen proyectos públicos concretos (`xml_to_pdf_DTE_Chile`, `modulo_11`, `inhabiles`, `calculadora-honorarios`).
- `xml_to_pdf_DTE_Chile`: verificado, público y no-fork.
- `modulo_11`: verificado, público y no-fork.
- `inhabiles`: verificado, público y no-fork.
- WaloCoin: público, pero es un fork; no se atribuirá como creación propia.
- Chess Encryption: público y solicitado para el catálogo; es un fork de `WintrCat/chessencryption` y se publica únicamente como exploración con atribución explícita.
- PUTAENDO/POLYPUS TV: no localizado públicamente con esos nombres.

Los candidatos no verificables quedarán en configuración editorial como borradores `published: false`, sin publicarse en el sitio.

## Decisión tecnológica

Se adopta Astro con TypeScript, Tailwind CSS, contenido Markdown, GitHub Actions y GitHub Pages.

Motivos:

1. Astro genera HTML estático y envía JavaScript sólo cuando una interacción lo requiere.
2. La colección de contenido permite tipar metadatos sin reescribir el cuerpo histórico de los artículos.
3. Las rutas dinámicas estáticas permiten conservar los permalinks de Jekyll.
4. Sitemap, RSS, canonical, Open Graph y datos estructurados pueden centralizarse en un layout.
5. TypeScript, ESLint, Prettier y Playwright encajan en una única cadena Node reproducible en Windows, WSL2 y CI.
6. Tailwind aporta tokens y utilidades sin obligar a cargar un framework de componentes en el navegador.
7. El despliegue mediante Actions desacopla la versión de Astro de las versiones soportadas por el build Jekyll integrado de GitHub Pages.

Alternativas:

- Mantener Jekyll minimizaría cambios inmediatos, pero conservaría Ruby/Jekyll obsoleto, Liquid y una deuda de frontend significativa.
- Un framework SSR añadiría complejidad y backend sin aportar valor al portafolio estático.
- Un generador SPA perjudicaría la entrega inicial, el SEO y la resiliencia sin necesidad funcional.

## Riesgos de migración y mitigaciones

| Riesgo                                                    | Impacto | Mitigación                                                                                    |
| --------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| Cambiar permalinks históricos                             | Alto    | Generar explícitamente cada ruta antigua y probarlas en CI.                                   |
| Pérdida del artículo Odoo 17 en Windows                   | Alto    | Recuperar desde `HEAD` y añadir una prueba de ruta/contenido.                                 |
| Antivirus bloquea un comando destructivo del artículo     | Alto    | Conservar el original en `_posts/` y retirar sólo la eliminación forzada del ejemplo público. |
| Codificación mojibake en archivos antiguos                | Alto    | Tratar los originales como UTF-8, revisar títulos y no sobrescribir el cuerpo sin validación. |
| Atribuir forks como trabajo propio                        | Alto    | Selección explícita con `fork: false` verificado.                                             |
| Publicar datos no verificados de proyectos privados       | Alto    | Mantener borradores fuera del build público.                                                  |
| Exponer datos personales de certificados                  | Medio   | Preservar archivos, limitar su promoción y documentar revisión manual.                        |
| Diferencias entre Windows y Linux por mayúsculas/espacios | Alto    | Pruebas de rutas en CI Linux y nombres normalizados en código.                                |
| Cambiar la fuente de Pages antes de validar               | Alto    | Mantener despliegue manual y no hacer push ni activar Pages sin autorización.                 |
| Dependencias npm o acciones vulnerables                   | Medio   | Lockfile, `npm audit`, Dependabot y revisiones periódicas.                                    |
| Imágenes remotas de GitHub                                | Medio   | Caché de build y fallback visual; migrar previews a locales cuando exista material propio.    |

## Criterios para avanzar

- La auditoría existe y el contenido histórico tiene inventario.
- La decisión Astro está justificada.
- La nueva versión compila localmente sin depender de servicios de pago.
- Las rutas históricas principales tienen pruebas automáticas.
- El sitio puede previsualizarse antes de tocar la configuración remota de Pages.
