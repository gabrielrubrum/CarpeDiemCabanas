import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog - Carpe Diem',
  description: 'Histórias, inspirações e experiências sobre natureza, viagem e refúgios contemporâneos.',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
};

export default async function BlogPage() {
  const posts = await getPosts({ per_page: 100 });

  if (posts.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header variant="light" />
        <main className="flex-1">
          {/* Hero Cinematográfico */}
          <section className="relative h-[100svh] min-h-[760px] max-h-[1000px] overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/cabins/parana/pr-01/cover.jpg"
                alt="Carpe Diem - Refúgios Contemporâneos"
                fill
                className="object-cover object-[45%_center]"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 flex items-end h-[100svh] min-h-[760px] max-h-[1000px] pb-16 lg:pb-20">
              <div className="max-w-[820px]">
                <p className="text-[11px] uppercase tracking-[0.30em] text-white/80 mb-6">
                  CARPE DIEM · JOURNAL
                </p>
                <h1 className="font-serif font-normal text-white leading-[0.88] tracking-[-0.035em] text-[clamp(4.5rem,6.8vw,7rem)] mb-6">
                  Histórias para
                  <br />
                  desacelerar.
                </h1>
                <p className="font-serif text-[clamp(1.25rem,1.7vw,1.75rem)] text-white/85 leading-[1.12] max-w-[720px]">
                  Natureza, arquitetura e pequenos momentos
                  <br />
                  entre Paraná e Santa Catarina.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F3F0E8]">
            <div className="max-w-[1360px] mx-auto text-center">
              <p className="text-black/60 text-lg">Novas histórias em breve.</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const featuredPost = posts[0];
  const secondaryPosts = posts.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="light" />
      <main className="flex-1">
        {/* Hero Cinematográfico */}
        <section className="relative h-[100svh] min-h-[760px] max-h-[1000px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cabins/parana/pr-01/cover.jpg"
              alt="Carpe Diem - Refúgios Contemporâneos"
              fill
              className="object-cover object-[45%_center]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-black/55 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 flex items-end h-[100svh] min-h-[760px] max-h-[1000px] pb-16 lg:pb-20">
            <div className="max-w-[820px]">
              <p className="text-[11px] uppercase tracking-[0.30em] text-white/80 mb-6">
                CARPE DIEM · JOURNAL
              </p>
              <h1 className="font-serif font-normal text-white leading-[0.88] tracking-[-0.035em] text-[clamp(4.5rem,6.8vw,7rem)] mb-6">
                Histórias para
                <br />
                desacelerar.
              </h1>
              <p className="font-serif text-[clamp(1.25rem,1.7vw,1.75rem)] text-white/85 leading-[1.12] max-w-[720px]">
                Natureza, arquitetura e pequenos momentos
                <br />
                entre Paraná e Santa Catarina.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução com Featured Post */}
        <section className="w-full py-28 lg:py-36 px-6 lg:px-10 xl:px-12 bg-[#F3F0E8]">
          <div className="w-full max-w-[1320px] mx-auto">
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-4">
              01 · HISTÓRIA EM DESTAQUE
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-end">
              {/* Imagem */}
              <div className="lg:col-span-7 relative aspect-[16/10] max-h-[650px] overflow-hidden">
                {featuredPost.featuredImage ? (
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-sand to-beige" />
                )}
              </div>

              {/* Texto */}
              <div className="lg:col-span-4 lg:col-start-9 pb-4">
                <p className="text-[10px] uppercase tracking-[0.26em] text-black/40 mb-4">
                  DESTINOS · {featuredPost.category}
                </p>
                <h2 className="font-serif text-[clamp(42px,4vw,68px)] leading-[0.91] tracking-[-0.035em] text-[#171714] mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[1.65] text-black/60 mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-[11px] tracking-[0.16em] text-black/40 uppercase mb-8">
                  <span>{formatDate(featuredPost.date)}</span>
                  <span className="text-black/30">•</span>
                  <span>{featuredPost.readTime || '5 min'} de leitura</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex border-b border-black/40 pb-1 text-[11px] uppercase tracking-[0.16em] text-black/70 hover:border-black hover:text-black transition-all duration-300"
                >
                  LER HISTÓRIA ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mais Histórias - Grid Editorial */}
        <section className="w-full py-28 lg:py-36 px-6 lg:px-10 bg-[#F3F0E8]">
          <div className="w-full max-w-[1240px] mx-auto">
            {/* Cabeçalho Editorial */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 mb-16 lg:mb-20">
              {/* Esquerda */}
              <div className="lg:col-span-7">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#8B857B] mb-4">
                  CARPE DIEM · JOURNAL
                </p>
                <h2 className="font-serif text-[clamp(3rem,4.5vw,5rem)] leading-[0.90] tracking-[-0.035em] text-[#171714]">
                  Mais histórias,
                  <br />
                  outros ritmos.
                </h2>
              </div>

              {/* Direita */}
              <div className="lg:col-span-4 lg:col-start-9 flex items-end">
                <p className="text-sm leading-relaxed text-[#6F6A62] max-w-[320px]">
                  Natureza, arquitetura, destinos e experiências
                  <br />
                  para aproveitar cada refúgio.
                </p>
              </div>
            </div>

            {/* Linha divisória */}
            <div className="border-t border-[#171714]/15 mb-16 lg:mb-20" />

            {/* Grid de Posts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-20">
              {secondaryPosts.map((post, index) => {
                const isPrimary = index % 2 === 0;
                const showOffset = index === 1 || index === 3;

                return (
                  <article key={post.id} className={`${isPrimary ? 'lg:col-span-7' : 'lg:col-span-5'}${showOffset ? ' lg:mt-16' : ''}`}>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      {/* Imagem */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.97]"
                            sizes="(max-width: 768px) 100vw, 58vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-sand to-beige" />
                        )}
                      </div>

                      {/* Conteúdo */}
                      <div className={isPrimary ? 'mt-5' : 'mt-4'}>
                        {/* Categoria */}
                        <p className="text-[10px] uppercase tracking-[0.24em] font-medium text-[#938C80] mb-3">
                          DESTINOS · {post.category}
                        </p>

                        {/* Título */}
                        <h3 className={`font-serif leading-[0.95] tracking-[-0.025em] text-[#171714] mb-3 max-w-[95%] ${isPrimary ? 'text-[clamp(2rem,2.7vw,3rem)]' : 'text-[clamp(1.65rem,2vw,2.25rem)] leading-[0.98] tracking-[-0.02em]'}`}>
                          {post.title}
                        </h3>

                        {/* Descrição */}
                        <p className="mt-3 max-w-[520px] text-[14px] lg:text-[15px] leading-[1.55] text-[#6B665E] line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Metadata */}
                        <div className="mt-5 flex items-center gap-3 text-[9px] lg:text-[10px] uppercase tracking-[0.18em] text-[#989186]">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime || '5 min'} de leitura</span>
                        </div>

                        {/* Link */}
                        <div className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.20em] font-medium text-[#171714] border-b border-[#171714]/35 pb-1 group-hover:border-[#171714] group-hover:gap-3 transition-all duration-300">
                          LER HISTÓRIA ↗
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final - Transição Elegante */}
        <section className="w-full py-24 lg:py-32 border-t border-black/10 px-6 lg:px-10 xl:px-12 bg-[#F3F0E8]">
          <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            {/* Esquerda */}
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-8">
                CARPE DIEM · REFÚGIOS
              </p>
              <h2 className="font-serif text-[clamp(48px,5vw,72px)] leading-[0.88] tracking-[-0.045em] text-[#171714]">
                Talvez seja hora
                <br />
                de viver a história.
              </h2>
            </div>

            {/* Direita */}
            <div className="lg:col-span-4 lg:col-start-9 self-end">
              <p className="font-sans text-[17px] leading-relaxed text-black/60 mb-8">
                Conheça nossos refúgios no Paraná
                <br />
                e em Santa Catarina.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="/parana"
                  className="inline-flex py-4 border-b border-black/25 text-[12px] uppercase tracking-[0.14em] hover:border-black hover:text-black transition-all duration-300"
                >
                  EXPLORAR PARANÁ ↗
                </Link>
                <Link
                  href="/santa-catarina"
                  className="inline-flex py-4 border-b border-black/25 text-[12px] uppercase tracking-[0.14em] hover:border-black hover:text-black transition-all duration-300"
                >
                  EXPLORAR SANTA CATARINA ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
