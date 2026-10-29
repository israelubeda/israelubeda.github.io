# israelubeda.github.io

Portafolio profesional y blog técnico de Israel Ubeda, construido como sitio estático con Astro, TypeScript y Tailwind CSS.

## Estado

La modernización se desarrolla en la rama `modernizacion-astro`. El sitio publicado continúa usando la versión anterior hasta que se autorice el merge y el despliegue. El workflow de publicación sólo se ejecuta manualmente (`workflow_dispatch`).

## Stack

- Astro y TypeScript estricto.
- Tailwind CSS 4 con estilos y tokens propios.
- Markdown para el archivo histórico del blog.
- RSS, sitemap, robots, canonical, Open Graph y JSON-LD.
- ESLint, Prettier, Astro Check y pruebas de rutas/enlaces.
- Playwright para navegación en escritorio y móvil.
- GitHub Actions para CI y despliegue manual en GitHub Pages.

## Desarrollo rápido

Requisitos: Node.js 22 LTS y npm.

```bash
npm ci
npm run dev
```

Abrir `http://localhost:4321`.

## Comandos

```bash
npm run dev          # servidor local
npm run check        # comprobación TypeScript/Astro
npm run lint         # ESLint
npm run format:check # formato sin modificar archivos
npm run build        # genera dist/
npm run test:routes  # comprueba rutas históricas y actuales
npm run test:links   # comprueba enlaces y recursos locales
npm run test:e2e     # flujos principales con Playwright
npm run validate     # validación completa sin E2E
```

La primera vez que se ejecutan los E2E:

```bash
npx playwright install chromium
```

## Windows 11

1. Instalar Node.js 22 LTS.
2. Abrir PowerShell en el repositorio.
3. Ejecutar `npm ci` y `npm run dev`.
4. Si PowerShell bloquea scripts, usar los ejecutables `npm.cmd` y `npx.cmd`.

## WSL2

Se recomienda clonar el repositorio dentro del sistema de archivos Linux, por ejemplo `~/proyectos/israelubeda.github.io`, para evitar latencia y diferencias de permisos bajo `/mnt/c`.

```bash
sudo apt update
sudo apt install -y git
# Instalar Node 22 con el gestor de versiones preferido
npm ci
npm run dev -- --host 0.0.0.0
```

## Contenido

- `src/pages/`: páginas y rutas.
- `src/components/`: componentes reutilizables.
- `src/content/blog/`: copia migrada de los artículos históricos.
- `src/data/projects.ts`: selección, orden y estado editorial del catálogo.
- `public/img/` y `public/cursos/`: recursos históricos preservados.
- `docs/`: auditoría, arquitectura e informe de pruebas.
- `_posts/`, `_layouts/`, `_includes/`, `css/`, `js/`: respaldo de la versión Jekyll; no participa en el build Astro.

Los proyectos candidatos no verificables permanecen con `published: false`. Los forks no se publican como trabajo propio.

## Publicación

No ejecutar ni autorizar el workflow hasta validar la vista previa y aprobar el reemplazo del sitio actual.

Cuando exista autorización:

1. Revisar y fusionar la rama.
2. En GitHub: Settings → Pages → Build and deployment → Source → GitHub Actions.
3. Ejecutar manualmente “Publicar en GitHub Pages”.
4. Verificar portada, rutas históricas, RSS, sitemap y 404 en producción.

## Documentación

- [Auditoría inicial](docs/AUDITORIA_SITIO.md)
- [Arquitectura](docs/ARQUITECTURA.md)
- [Informe de pruebas](docs/INFORME_PRUEBAS.md)
