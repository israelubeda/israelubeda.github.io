import type { CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export function postSlug(post: BlogEntry): string {
  if (post.data.legacySlug) return post.data.legacySlug;
  const filename = post.filePath?.split(/[\\/]/).at(-1);
  if (filename) return filename.replace(/\.(md|mdx)$/i, '');
  return post.id.replace(/\.(md|mdx)$/i, '');
}

export function postDate(post: BlogEntry): Date {
  const match = postSlug(post).match(/^(\d{4})-(\d{2})-(\d{2})-/);
  if (!match) return new Date('1970-01-01T12:00:00-03:00');
  return new Date(`${match[1]}-${match[2]}-${match[3]}T12:00:00-03:00`);
}

export function postTitle(post: BlogEntry): string {
  if (post.data.title) return post.data.title;
  return postSlug(post)
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function postUrl(post: BlogEntry): string {
  return `/${postSlug(post)}/`;
}

export function postCategories(post: BlogEntry): string[] {
  if (post.data.categories.length) return post.data.categories;
  const source = `${postTitle(post)} ${post.data.tags.join(' ')}`.toLowerCase();
  const categories = new Set<string>();
  if (source.includes('odoo')) categories.add('Odoo');
  if (source.includes('python') || source.includes('libreria') || source.includes('package')) {
    categories.add('Python');
  }
  if (source.includes('llm') || source.includes('llama')) categories.add('Inteligencia artificial');
  if (source.includes('linux') || source.includes('servidor') || source.includes('ubuntu')) {
    categories.add('Linux y Docker');
  }
  if (source.includes('automat')) categories.add('Automatización');
  if (postDate(post).getFullYear() >= 2020) categories.add('Tutoriales');
  if (!categories.size) categories.add('Archivo histórico');
  return [...categories];
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Santiago',
  }).format(date);
}
