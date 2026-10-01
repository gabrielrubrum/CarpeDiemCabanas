import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/wp/wp-admin/'],
    },
    sitemap: 'https://carpediemcabanas.com.br/sitemap.xml',
  };
}
