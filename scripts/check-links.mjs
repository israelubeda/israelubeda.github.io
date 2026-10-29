import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory() ? walk(join(directory, entry.name)) : [join(directory, entry.name)],
      ),
    )
  ).flat();
}

const htmlFiles = (await walk('dist')).filter((file) => extname(file) === '.html');
const broken = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const matches = html.matchAll(/(?:href|src)=["']([^"']+)["']/g);
  for (const [, value] of matches) {
    if (!value || /^(?:https?:|mailto:|tel:|data:|#|javascript:)/i.test(value)) continue;
    const pathname = decodeURIComponent(value.split(/[?#]/)[0]);
    if (!pathname) continue;
    const clean = pathname.replace(/^\//, '').replace(/\/$/, '');
    const candidates = extname(clean)
      ? [join('dist', clean)]
      : [join('dist', clean, 'index.html'), join('dist', clean)];
    let exists = false;
    for (const candidate of candidates) {
      try {
        await access(candidate);
        exists = true;
        break;
      } catch {
        /* probar siguiente */
      }
    }
    if (!exists) broken.push(`${relative('dist', file)} -> ${value}`);
  }
}
if (broken.length) {
  console.error(`Enlaces o recursos locales rotos:\n${[...new Set(broken)].join('\n')}`);
  process.exit(1);
}
console.log(`OK: enlaces locales de ${htmlFiles.length} páginas verificados.`);
