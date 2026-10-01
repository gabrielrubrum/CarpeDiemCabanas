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
    title: `${post.title} - Carpe Diem Journal`,
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

  // Get related posts (exclude current post)
  const allPosts = await getPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#F6F3ED] text-[#171714]">
      {/* Header escuro em cima de fundo claro */}
      <Header variant="dark" />

      <main className="flex-1">
        {/* Article Intro - Cabeçalho Editorial */}
        <section className="pt-[140px] lg:pt-[160px] pb-12 lg:pb-16 px-6 lg:px-10">
          <div className="max-w-[1240px] mx-auto">
            {/* Botão Voltar */}
            <div className="mb-10 lg:mb-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#171714]/60 hover:text-[#171714] transition-colors duration-300 font-medium"
              >
                ← VOLTAR AO JOURNAL
              </Link>
            </div>

            {/* Metadata & Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] lg:text-[11px] uppercase tracking-[0.28em] text-[#8B857B] font-medium mb-6">
              <span>CARPE DIEM · JOURNAL</span>
              <span>·</span>
              <span>{post.category}</span>
              {post.date && (
                <>
                  <span>·</span>
                  <span>{post.date}</span>
                </>
              )}
            </div>

            {/* Title Editorial Grande */}
            <h1 className="font-serif font-normal text-[clamp(2.8rem,5.8vw,6.2rem)] leading-[0.92] tracking-[-0.04em] text-[#171714] max-w-[1100px] mb-8">
              {post.title}
            </h1>

            {/* Excerpt & Reading Time */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-4 border-t border-[#171714]/15">
              {post.excerpt ? (
                <p className="font-serif text-[clamp(1.15rem,1.6vw,1.45rem)] leading-[1.4] text-[#4A463F] max-w-[760px]">
                  {post.excerpt}
                </p>
              ) : (
                <div />
              )}
              {post.readTime && (
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#8B857B] font-medium whitespace-nowrap">
                  {post.readTime} DE LEITURA
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image (Se existir no WordPress) */}
        {post.featuredImage && (
          <section className="px-6 lg:px-10 mb-16 lg:mb-24">
            <div className="max-w-[1380px] mx-auto overflow-hidden rounded-[2px] relative aspect-[16/9] max-h-[720px]">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1440px) 100vw, 1380px"
              />
            </div>
          </section>
        )}

        {/* Corpo do Artigo */}
        <section className="px-6 pb-20 lg:pb-32">
          <article className="max-w-[760px] mx-auto">
            <div
              className="prose prose-lg max-w-none text-[#292824]
                prose-p:text-[17px] lg:prose-p:text-[19px] prose-p:leading-[1.75] prose-p:mb-8
                prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#171714] prose-headings:tracking-[-0.03em]
                prose-h2:text-[clamp(2.2rem,3.5vw,3.2rem)] prose-h2:leading-[1.05] prose-h2:mt-14 prose-h2:mb-6
                prose-h3:text-[clamp(1.75rem,2.5vw,2.4rem)] prose-h3:leading-[1.1] prose-h3:mt-10 prose-h3:mb-4
                prose-blockquote:border-l-2 prose-blockquote:border-[#171714] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:font-serif prose-blockquote:text-[1.25rem] prose-blockquote:text-[#4A463F] prose-blockquote:my-10
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-li:text-[17px] lg:prose-li:text-[18px]
                prose-a:text-[#171714] prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-black
                prose-strong:font-semibold prose-strong:text-[#171714]
                prose-img:rounded-[2px] prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Divisor final do artigo */}
            <div className="mt-16 pt-8 border-t border-[#171714]/15 flex items-center justify-between">
              <Link
                href="/blog"
                className="text-[11px] uppercase tracking-[0.20em] font-medium text-[#171714] border-b border-[#171714]/40 pb-1 hover:border-[#171714] transition-all duration-300"
              >
                ← VOLTAR A TODOS OS ARTIGOS
              </Link>
            </div>
          </article>
        </section>

        {/* Mais Histórias */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-24 lg:py-32 px-6 lg:px-10 bg-[#EFECE6] border-t border-[#171714]/10">
            <div className="max-w-[1240px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#8B857B] mb-3">
                    CONTINUE LENDO
                  </p>
                  <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.92] tracking-[-0.035em] text-[#171714]">
                    Mais histórias,
                    <br />
                    outros ritmos.
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="text-[11px] uppercase tracking-[0.20em] font-medium text-[#171714] border-b border-[#171714]/40 pb-1 hover:border-[#171714] transition-all duration-300 self-start md:self-end"
                >
                  VER TODAS AS HISTÓRIAS →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {relatedPosts.map((related) => (
                  <article key={related.id} className="group flex flex-col">
                    <Link href={`/blog/${related.slug}`} className="block flex-1">
                      <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 rounded-[2px] bg-[#E5E1D8]">
                        {related.featuredImage ? (
                          <Image
                            src={related.featuredImage}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-[#E2DDD3] to-[#D5CFC3]">
                            <span className="font-serif italic text-lg text-[#171714]/40">Carpe Diem</span>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#938C80] mb-2">
                        {related.category}
                      </p>
                      <h3 className="font-serif text-[1.4rem] leading-[1.1] tracking-[-0.02em] text-[#171714] mb-3 group-hover:opacity-80 transition-opacity">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="text-[14px] leading-[1.55] text-[#6B665E] line-clamp-2 mb-4">
                          {related.excerpt}
                        </p>
                      )}
                      <div className="mt-auto text-[10px] uppercase tracking-[0.20em] font-medium text-[#171714] border-b border-[#171714]/30 pb-1 inline-block">
                        LER HISTÓRIA ↗
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final Discreto */}
        <section className="w-full py-20 lg:py-28 px-6 lg:px-10 bg-[#F6F3ED] border-t border-[#171714]/10">
          <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#8B857B] mb-3">
                ENTRE A NATUREZA E O TEMPO
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.5rem)] leading-[0.95] tracking-[-0.035em] text-[#171714]">
                Conheça os refúgios Carpe Diem.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/parana"
                className="text-xs tracking-[0.18em] px-7 py-3.5 border border-black/60 text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full uppercase font-medium"
              >
                Refúgios Paraná ↗
              </Link>
              <Link
                href="/santa-catarina"
                className="text-xs tracking-[0.18em] px-7 py-3.5 border border-black/60 text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full uppercase font-medium"
              >
                Refúgios Santa Catarina ↗
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
