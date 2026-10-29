import { access } from 'node:fs/promises';
import { join } from 'node:path';

const routes = [
  '/',
  '/sobre-mi/',
  '/experiencia/',
  '/proyectos/',
  '/casos/',
  '/blog/',
  '/contacto/',
  '/404.html',
  '/feed.xml',
  '/robots.txt',
  '/sitemap-index.xml',
  '/Sobre mi/',
  '/2024-09-20-Servidor-_Minetest/',
  '/2024-09-13-LLM-local/',
  '/2023-12-03-Script-Odoo-17/',
  '/2023-09-19-Instalar_ODOO_16/',
  '/2023-09-06-escribiendo-desde-vsc-android/',
  '/2023-06-16-Proyecto-Package-python/',
  '/2023-06-11-Crear-libreria-python/',
  '/2021-12-02-Modificar-vistas-existentes/',
  '/2021-08-29-Tipos-de-Campos-ODOO/',
  '/2021-08-25-Campos-Personalizados-computados/',
  '/2020-06-07-Lame/',
  '/2015-02-28-test-markdown/',
  '/2015-02-26-flake-it-till-you-make-it/',
  '/2015-02-13-hamlet-monologue/',
  '/2015-01-27-dear-diary/',
  '/2015-01-19-soccer/',
  '/2015-01-15-pirates/',
  '/2015-01-04-first-post/',
];

function outputPath(route) {
  if (route === '/') return join('dist', 'index.html');
  const clean = decodeURIComponent(route).replace(/^\//, '').replace(/\/$/, '');
  if (/\.[a-z0-9]+$/i.test(clean)) return join('dist', clean);
  return join('dist', clean, 'index.html');
}

const missing = [];
for (const route of routes) {
  try {
    await access(outputPath(route));
  } catch {
    missing.push(`${route} -> ${outputPath(route)}`);
  }
}
if (missing.length) {
  console.error(`Rutas faltantes:\n${missing.join('\n')}`);
  process.exit(1);
}
console.log(`OK: ${routes.length} rutas críticas generadas.`);
