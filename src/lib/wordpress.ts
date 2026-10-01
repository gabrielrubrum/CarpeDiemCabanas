import { BlogPost } from '@/data/blog-fallback';
import { fallbackPosts, getFallbackPostBySlug } from '@/data/blog-fallback';

// WordPress REST API Types
interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;
const IS_STRICT_WORDPRESS_BUILD = process.env.NODE_ENV === 'production' || process.env.CI === 'true';

// Helper to strip HTML tags for plain text extraction
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

// Helper to format date in Brazilian Portuguese uppercase (e.g. 01 OUT 2026)
function formatDate(dateString: string | null | undefined): string | null {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return null;
  }

  const day = date.getDate().toString().padStart(2, '0');
  const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

// Helper to calculate read time
function calculateReadTime(content: string): string {
  const plainText = stripHtml(content);
  const words = plainText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} MIN`;
}

// Normalize WordPress post to BlogPost format
function normalizeWordPressPost(wpPost: WordPressPost): BlogPost {
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0];
  let category = wpPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'JOURNAL';
  const categorySlug = wpPost._embedded?.['wp:term']?.[0]?.[0]?.slug || null;

  if (!category || category.trim().toLowerCase() === 'uncategorized' || category.trim().toLowerCase() === 'sem categoria') {
    category = 'JOURNAL';
  }

  const rawDate = wpPost.date || (wpPost as unknown as { date_gmt?: string }).date_gmt;

  return {
    id: wpPost.id.toString(),
    slug: wpPost.slug,
    title: stripHtml(wpPost.title.rendered),
    excerpt: stripHtml(wpPost.excerpt.rendered),
    content: wpPost.content.rendered,
    date: formatDate(rawDate),
    category: category.toUpperCase(),
    categorySlug,
    featuredImage: featuredMedia?.source_url || null,
    readTime: calculateReadTime(wpPost.content.rendered),
  };
}

// Check if WordPress is configured
function isWordPressConfigured(): boolean {
  return !!WORDPRESS_API_URL;
}

function handleWordPressError(message: string, error?: unknown): BlogPost[] {
  console.error(message, error ?? '');

  if (IS_STRICT_WORDPRESS_BUILD) {
    throw new Error(message);
  }

  return fallbackPosts;
}

// Get posts (WordPress or fallback)
export async function getPosts(params?: {
  per_page?: number;
  page?: number;
}): Promise<BlogPost[]> {
  if (isWordPressConfigured()) {
    try {
      const perPage = Math.min(params?.per_page || 100, 100);
      const searchParams = new URLSearchParams();
      searchParams.append('per_page', perPage.toString());
      searchParams.append('_embed', '1');
      searchParams.append('status', 'publish');
      searchParams.append('orderby', 'date');
      searchParams.append('order', 'desc');

      let allPosts: WordPressPost[] = [];
      const page = 1;
      let totalPages = 1;

      // Fetch first page
      const firstResponse = await fetch(
        `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${searchParams.toString()}&page=${page}`,
        { cache: 'force-cache' }
      );

      if (!firstResponse.ok) {
        return handleWordPressError(`WordPress API error: ${firstResponse.status}`);
      }

      const firstPagePosts: WordPressPost[] = await firstResponse.json();
      allPosts = [...allPosts, ...firstPagePosts];

      // Check if there are more pages
      const totalPagesHeader = firstResponse.headers.get('X-WP-TotalPages');
      if (totalPagesHeader) {
        totalPages = parseInt(totalPagesHeader, 10);
      }

      // Fetch remaining pages if needed
      if (totalPages > 1) {
        for (let pageNum = 2; pageNum <= totalPages; pageNum++) {
          const response = await fetch(
            `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${searchParams.toString()}&page=${pageNum}`,
            { cache: 'force-cache' }
          );

          if (!response.ok) {
            return handleWordPressError(`WordPress API error on page ${pageNum}: ${response.status}`);
          }

          const pagePosts: WordPressPost[] = await response.json();
          allPosts = [...allPosts, ...pagePosts];
        }
      }

      return allPosts.map(normalizeWordPressPost);
    } catch (error) {
      return handleWordPressError('Error fetching posts from WordPress', error);
    }
  }

  return fallbackPosts;
}

// Get latest posts (WordPress or fallback)
export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  if (isWordPressConfigured()) {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append('per_page', count.toString());
      searchParams.append('_embed', '1');
      searchParams.append('status', 'publish');
      searchParams.append('orderby', 'date');
      searchParams.append('order', 'desc');

      const response = await fetch(
        `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?${searchParams.toString()}`,
        { cache: 'force-cache' }
      );

      if (!response.ok) {
        return handleWordPressError(`WordPress API error: ${response.status}`).slice(0, count);
      }

      const wpPosts: WordPressPost[] = await response.json();
      return wpPosts.map(normalizeWordPressPost);
    } catch (error) {
      return handleWordPressError('Error fetching latest posts from WordPress', error).slice(0, count);
    }
  }

  return fallbackPosts.slice(0, count);
}

// Get post by slug (WordPress or fallback)
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isWordPressConfigured()) {
    try {
      const response = await fetch(
        `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed=1&status=publish`,
        { cache: 'force-cache' }
      );

      if (!response.ok) {
        handleWordPressError(`WordPress API error: ${response.status}`);
        return null;
      }

      const wpPosts: WordPressPost[] = await response.json();
      if (wpPosts.length === 0) {
        return IS_STRICT_WORDPRESS_BUILD ? null : getFallbackPostBySlug(slug) || null;
      }

      return normalizeWordPressPost(wpPosts[0]);
    } catch (error) {
      handleWordPressError('Error fetching post from WordPress', error);
      return null;
    }
  }

  return getFallbackPostBySlug(slug) || null;
}

// Export BlogPost type for use in components
export type { BlogPost };
