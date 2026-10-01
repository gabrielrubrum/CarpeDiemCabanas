import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/wordpress';

const SITE_URL = 'https://carpediemcabanas.com.br';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const staticRoutes = [
    '',
    '/parana',
    '/parana/cabana-01',
    '/parana/cabana-02',
    '/santa-catarina',
    '/santa-catarina/cabana-01',
    '/santa-catarina/cabana-02',
    '/blog',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
    })),
  ];
}
