import rss from '@astrojs/rss';
import { getPublishedPosts, postPath } from '@/lib/blog';

export async function GET(context) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'Blog',
    description: 'A personal blog.',
    site: new URL(import.meta.env.BASE_URL, context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
  });
}
