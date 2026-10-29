# Informe de pruebas

Fecha: 29 de octubre de 2026

## Alcance

La validación cubre formato, lint, tipos Astro/TypeScript, build estático, rutas críticas, enlaces locales y flujos Playwright en escritorio y móvil.

## Matriz

| Comprobación             | Comando                | Resultado                                     |
| ------------------------ | ---------------------- | --------------------------------------------- |
| Instalación reproducible | `npm ci`               | Aprobada: 402 paquetes instalados             |
| Dependencias             | `npm audit`            | Aprobada: 0 vulnerabilidades conocidas        |
| Formato                  | `npm run format:check` | Aprobada                                      |
| ESLint                   | `npm run lint`         | Aprobada                                      |
| Astro/TypeScript         | `npm run check`        | Aprobada: 0 errores, 0 advertencias y 1 aviso |
| Build                    | `npm run build`        | Aprobada: 34 páginas estáticas                |
| Rutas                    | `npm run test:routes`  | Aprobada: 30 rutas críticas                   |
| Enlaces locales          | `npm run test:links`   | Aprobada: enlaces de 34 páginas               |
| Playwright               | `npm run test:e2e`     | Aprobada: 8/8 en escritorio y móvil           |
| Revisión visual          | capturas Playwright    | Aprobada en 1440 px y emulación Pixel 7       |
| Lighthouse               | manual/CI futuro       | No medido; los objetivos siguen siendo metas  |

El aviso de `astro check` corresponde a la firma obsoleta de `tseslint.config`; no afecta el build ni produce errores de tipos. Los objetivos Lighthouse no se declaran alcanzados porque no se ejecutó una medición estable en este entorno.

## Rutas bajo prueba

Las pruebas incluyen las ocho secciones, recursos SEO, 404, redirección de “Sobre mí” y los 18 permalinks publicados en el RSS histórico.

## Flujos E2E

- la portada presenta propuesta de valor y proyectos;
- el catálogo abre una ficha de proyecto;
- la búsqueda del blog filtra contenido;
- el selector de tema responde al teclado;
- los mismos flujos se ejecutan en viewport de escritorio y móvil.

## Incidencias del entorno

- El primer `npm ci` encontró el binario de Lightning CSS bloqueado por el servidor de vista previa local. Tras cerrar exclusivamente ese proceso, la instalación reproducible finalizó correctamente.
- El antivirus bloqueó durante el build una copia HTML del script administrativo del artículo histórico sobre Odoo 17. El Markdown original se conserva intacto en `_posts/`; la versión migrada mantiene fecha, título, URL y contexto, pero enlaza al original en lugar de reproducir el script ejecutable.
- La aplicación de ChatGPT/Codex reportó una desconexión WebSocket con respuesta 400 de Cloudflare. Es un incidente de transporte TLS/HTTPS compatible con inspección del antivirus y no procede del sitio Astro ni de sus dependencias.

## Evidencia visual

- `artifacts/home-desktop-final.png`
- `artifacts/home-mobile-final.png`
- `artifacts/projects-desktop-final.png`

Las capturas verifican la portada completa, el comportamiento responsive, el catálogo y la ficha editorial del proyecto Chess Encryption con su atribución como fork.
