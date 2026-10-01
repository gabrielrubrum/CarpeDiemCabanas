import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCabinsByRegion } from '@/data/cabins';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Benedito Novo, Santa Catarina | Carpe Diem',
  description: 'Refúgios contemporâneos em Benedito Novo, Santa Catarina. Cabanas com piscina e vistas deslumbrantes entre montanhas e natureza.',
};

export default function SantaCatarinaPage() {
  const cabins = getCabinsByRegion('santa-catarina');

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="light" />
      <main className="flex-1">
        {/* Hero Cinematográfico */}
        <section className="relative h-[100svh] min-h-[720px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cabins/santa-catarina/sc-01/cover.jpg"
              alt="Cabana do Lago - Benedito Novo"
              fill
              className="object-cover object-[50%_center]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 flex items-end h-[100svh] min-h-[720px] pb-16 lg:pb-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/70 mb-6">
                Santa Catarina
              </p>
              <h1 className="font-serif font-normal text-white leading-[0.84] tracking-[-0.05em] text-[clamp(4.8rem,7.5vw,8.8rem)] mb-6">
                Benedito
                <br />
                Novo
              </h1>
              <p className="font-serif text-[clamp(1.6rem,2.3vw,2.5rem)] text-white/80 leading-[0.95]">
                Entre montanhas,
                <br />
                água e silêncio.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução - Título Esquerda */}
        <section className="w-full pt-28 lg:pt-36 pb-24 lg:pb-32 px-6 lg:px-10 xl:px-12 bg-[#F4F1EA]">
          <div className="mx-auto w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-x-10 xl:gap-x-16">
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-2">
                CARPE DIEM · SANTA CATARINA
              </p>
              <h2 className="font-serif text-[clamp(4.5rem,6.2vw,7.5rem)] leading-[0.88] tracking-[-0.045em] text-[#171714] max-w-[900px] mb-8">
                Onde a paisagem
                <br />
                dita o ritmo.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-base xl:text-lg leading-relaxed text-black/60 max-w-[380px]">
                Entre montanhas, mata e água, os refúgios Carpe Diem em Benedito Novo foram criados para aproximar arquitetura contemporânea e natureza.
              </p>
            </div>
          </div>
        </section>

        {/* Cabana 01 - Lago */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-10 xl:px-12 bg-[#F4F1EA]">
          <div className="mx-auto w-full max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 items-center">
              {/* Foto Principal */}
              <div className="lg:col-span-7">
                <div className="relative w-full h-[520px] lg:h-[580px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-01/04.jpg"
                    alt="Cabana do Lago"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="lg:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/35 mb-4">
                  01 / BENEDITO NOVO
                </p>
                <h2 className="font-serif font-normal text-[clamp(3.8rem,5vw,6.5rem)] leading-[0.88] tracking-[-0.04em] text-[#171714] mb-7">
                  Cabana
                  <br />
                  do Lago
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[1.7] text-black/60 mb-8">
                  Refúgio com piscina e vista para as montanhas.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-black/60 mb-10">
                  <span>3 hóspedes</span>
                  <span>·</span>
                  <span>1 quarto</span>
                  <span>·</span>
                  <span>2 camas</span>
                  <span>·</span>
                  <span>1 banheiro</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/santa-catarina/cabana-01"
                    className="inline-flex h-[52px] px-[28px] items-center justify-center rounded-full bg-[#171714] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-black transition-all duration-300"
                  >
                    CONHECER A CABANA →
                  </Link>
                  <a
                    href={cabins[0].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-black/70 hover:text-black transition-all duration-300"
                  >
                    Reservar no Airbnb ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Galeria Assimétrica */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mt-6">
              <div className="lg:col-span-7 lg:row-span-2 relative w-full h-[500px] lg:h-[650px]">
                <Image
                  src="/images/cabins/santa-catarina/sc-01/02.jpg"
                  alt="Interior Cabana do Lago"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
                <div className="relative w-full h-[300px] lg:h-[313px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-01/03.jpg"
                    alt="Piscina Cabana do Lago"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="relative w-full h-[300px] lg:h-[313px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-01/01.jpg"
                    alt="Detalhe Cabana do Lago"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frase de Transição */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-10 xl:px-12 bg-[#F4F1EA]">
          <div className="mx-auto w-full max-w-[1360px]">
            <div className="w-10 h-px bg-black/30 mb-8" />
            <h2 className="font-serif text-[clamp(3.5rem,5vw,6rem)] leading-[0.9] tracking-[-0.04em] text-[#171714] max-w-[900px]">
              Entre a água e o bosque,
              <br />
              o tempo encontra outro ritmo.
            </h2>
          </div>
        </section>

        {/* Cabana 02 - Bosque */}
        <section className="w-full py-24 lg:py-32 px-6 lg:px-10 xl:px-12 bg-[#F4F1EA]">
          <div className="mx-auto w-full max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 items-center">
              {/* Conteúdo */}
              <div className="lg:col-span-4 lg:order-1">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/35 mb-4">
                  02 / BENEDITO NOVO
                </p>
                <h2 className="font-serif font-normal text-[clamp(3.8rem,5vw,6.5rem)] leading-[0.88] tracking-[-0.04em] text-[#171714] mb-7">
                  Cabana
                  <br />
                  do Bosque
                </h2>
                <p className="text-[16px] lg:text-[18px] leading-[1.7] text-black/60 mb-8">
                  Imersão total na natureza com conforto contemporâneo.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-black/60 mb-10">
                  <span>3 hóspedes</span>
                  <span>·</span>
                  <span>1 quarto</span>
                  <span>·</span>
                  <span>2 camas</span>
                  <span>·</span>
                  <span>1 banheiro</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/santa-catarina/cabana-02"
                    className="inline-flex h-[52px] px-[28px] items-center justify-center rounded-full bg-[#171714] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-black transition-all duration-300"
                  >
                    CONHECER A CABANA →
                  </Link>
                  <a
                    href={cabins[1].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-black/70 hover:text-black transition-all duration-300"
                  >
                    Reservar no Airbnb ↗
                  </a>
                </div>
              </div>

              {/* Foto Principal */}
              <div className="lg:col-span-8 lg:order-2">
                <div className="relative w-full h-[560px] lg:h-[650px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-02/cover.jpg"
                    alt="Cabana do Bosque"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>

            {/* Galeria Assimétrica Invertida */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mt-6">
              <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
                <div className="relative w-full h-[280px] lg:h-[310px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-02/02.jpg"
                    alt="Interior Cabana do Bosque"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="relative w-full h-[280px] lg:h-[310px]">
                  <Image
                    src="/images/cabins/santa-catarina/sc-02/03.jpg"
                    alt="Exterior Cabana do Bosque"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 relative w-full h-[576px] lg:h-[636px]">
                <Image
                  src="/images/cabins/santa-catarina/sc-02/01.jpg"
                  alt="Paisagem Cabana do Bosque"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-28 lg:py-36 px-6 lg:px-10 xl:px-12 bg-[#F4F1EA]">
          <div className="mx-auto w-full max-w-[1360px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
            {/* Esquerda */}
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-8">
                CARPE DIEM · SANTA CATARINA
              </p>
              <h2 className="font-serif text-[clamp(4.5rem,6vw,7.5rem)] leading-[0.88] tracking-[-0.045em] text-[#171714] max-w-[900px]">
                Seu próximo refúgio
                <br />
                começa aqui.
              </h2>
            </div>

            {/* Direita */}
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="font-sans text-[16px] lg:text-[17px] leading-[1.6] text-black/60 max-w-[340px] mb-8">
                Dois refúgios em Benedito Novo para escolher como desacelerar.
              </p>
              <Link
                href="/santa-catarina"
                className="inline-flex h-[52px] px-[28px] items-center justify-center rounded-full bg-[#171714] text-white text-[11px] font-medium uppercase tracking-[0.12em] hover:bg-black/80 transition-all duration-300"
              >
                EXPLORAR CABANAS →
              </Link>
            </div>
          </div>

          {/* Barra Preta Editorial */}
          <div className="mx-auto w-full max-w-[1360px] mt-12 min-h-[88px] bg-[#171714] flex items-center px-6 lg:px-10 xl:px-12">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 text-white py-4 lg:py-0">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                SANTA CATARINA · BENEDITO NOVO
              </p>
              <div className="flex gap-6 lg:gap-12">
                <Link
                  href="/santa-catarina/cabana-01"
                  className="text-[10px] uppercase tracking-[0.24em] text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  CABANA DO LAGO ↗
                </Link>
                <Link
                  href="/santa-catarina/cabana-02"
                  className="text-[10px] uppercase tracking-[0.24em] text-white/70 hover:text-white transition-colors whitespace-nowrap"
                >
                  CABANA DO BOSQUE ↗
                </Link>
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/70 whitespace-nowrap">
                2 REFÚGIOS
              </p>
            </div>
          </div>
        </section>

        {/* Spacer Entre CTA e Footer */}
        <div
          aria-hidden="true"
          className="h-16 lg:h-24 bg-[#F4F1EA]"
        />
      </main>
      <Footer />
    </div>
  );
}
