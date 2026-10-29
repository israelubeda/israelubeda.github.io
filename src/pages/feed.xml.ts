import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postDate, postTitle, postUrl } from '@/lib/content';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => postDate(b).valueOf() - postDate(a).valueOf(),
  );
  return rss({
    title: 'Blog técnico de Israel Ubeda',
    description: 'Python, Odoo, automatización, Linux e inteligencia artificial.',
    site: context.site,
    items: posts.map((post) => ({
      title: postTitle(post),
      description: post.data.subtitle ?? post.data.description ?? 'Artículo del archivo técnico.',
      pubDate: postDate(post),
      link: postUrl(post),
      categories: post.data.tags,
    })),
    customData: '<language>es-cl</language>',
  });
}
