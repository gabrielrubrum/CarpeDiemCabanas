'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/wordpress';

interface BlogSectionClientProps {
  posts: BlogPost[];
}

export default function BlogSectionClient({ posts }: BlogSectionClientProps) {

  if (posts.length === 0) {
    return null;
  }

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <section className="py-24 lg:py-32 xl:py-36 px-6 lg:px-10 xl:px-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Header Editorial */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.30em] text-black/45 mb-4">Blog</p>
            <h2 className="font-serif font-normal text-[#171714] tracking-[-0.035em] leading-[0.90] text-[clamp(3rem,12vw,4.2rem)] lg:text-[clamp(3.7rem,5vw,5.6rem)] max-w-[600px]">
              Histórias &
              <br />
              inspirações
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-black/55 hover:text-black transition-colors duration-300"
          >
            Ver todos os posts →
          </Link>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 items-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="lg:col-span-7">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px]">
                {featuredPost.featuredImage ? (
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10" />
                )}
              </div>
            </Link>
          </div>

          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <p className="text-[9px] uppercase tracking-[0.26em] text-black/40 mb-4">
              {featuredPost.category}
            </p>
            <h3 className="font-serif text-[clamp(2.2rem,3vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-[#171714] mb-5">
              {featuredPost.title}
            </h3>
            <p className="max-w-[440px] text-[14px] lg:text-[15px] leading-[1.7] text-black/55 mb-8">
              {featuredPost.excerpt}
            </p>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="text-[10px] uppercase tracking-[0.20em] text-black/60 hover:text-black transition-colors duration-300"
            >
              Ler história →
            </Link>
          </div>
        </motion.div>

        {/* Divisor */}
        <div className="border-t border-black/10 my-16 lg:my-20" />

        {/* Secondary Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 xl:gap-x-14 gap-y-14">
          {secondaryPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] mb-6">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10" />
                  )}
                </div>
                <div>
                  <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-black/40 mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-serif text-[clamp(1.9rem,2.2vw,2.8rem)] leading-[1.05] tracking-[-0.02em] text-[#171714] mb-4">
                    {post.title}
                  </h3>
                  <p className="max-w-[520px] text-[14px] leading-[1.7] text-black/55 mb-6">
                    {post.excerpt}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.20em] text-black/55 hover:text-black transition-colors duration-300">
                    Ler história →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
