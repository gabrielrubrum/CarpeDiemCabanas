import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getPosts } from '@/lib/wordpress';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado - Carpe Diem',
    };
  }

  return {
    title: `${post.title} - Carpe Diem`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="light" />
      <main className="flex-1">
        {/* Featured Image Grande */}
        {post.featuredImage && (
          <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        {/* Article Content */}
        <article className="max-w-[760px] mx-auto px-5 md:px-8 lg:px-12 py-20 lg:py-32">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-[11px] uppercase tracking-[0.16em] text-black/50 hover:text-black transition-colors duration-300"
            >
              ← Voltar ao blog
            </Link>
          </div>

          <header className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-4">
              CARPE DIEM · JOURNAL
            </p>
            <p className="text-[10px] uppercase tracking-[0.26em] text-black/40 mb-6">
              {post.category} · {formatDate(post.date)}
            </p>
            <h1 className="font-serif font-normal text-[clamp(3.8rem,6vw,7rem)] leading-[0.9] tracking-[-0.04em] text-[#171714] mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-[11px] tracking-[0.20em] text-black/40 uppercase">
              <span>{post.readTime || '5 min'} de leitura</span>
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 pt-12 border-t border-black/10">
            <Link
              href="/blog"
              className="text-[11px] uppercase tracking-[0.16em] text-black/70 hover:text-black transition-colors duration-300"
            >
              Ver todas as histórias →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
