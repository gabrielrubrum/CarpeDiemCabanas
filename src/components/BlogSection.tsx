import BlogSectionClient from '@/components/BlogSectionClient';
import { getLatestPosts } from '@/lib/wordpress';

export default async function BlogSection() {
  const posts = await getLatestPosts(3);

  return <BlogSectionClient posts={posts} />;
}
