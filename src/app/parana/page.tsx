import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCabinsByRegion } from '@/data/cabins';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Campo Largo, Paraná | Carpe Diem',
  description: 'Refúgios contemporâneos em Campo Largo, Paraná. Cabanas românticas com hidromassagem e jacuzzi, imersas na natureza.',
};

export default function ParanaPage() {
  const cabins = getCabinsByRegion('parana');

  return (
    <div className="flex flex-col min-h-screen">
      <Header variant="light" />
      <main className="flex-1">
        {/* Hero Cinematográfico */}
        <section className="relative h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/cabins/parana/pr-01/cover.jpg"
              alt="Cabana Romântica com Hidro - Campo Largo"
              fill
              className="object-cover object-[50%_center]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 flex items-end h-[100svh] pb-16 lg:pb-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/70 mb-6">
                Paraná
              </p>
              <h1 className="font-serif font-normal text-white leading-[0.86] tracking-[-0.045em] text-[clamp(4.5rem,7vw,8rem)] mb-6">
                Campo Largo
              </h1>
              <p className="font-serif text-[clamp(1.6rem,2.3vw,2.5rem)] text-white/80 leading-[0.95]">
                Dois refúgios.
                <br />
                Uma forma diferente de estar.
              </p>
            </div>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-24 lg:py-32 px-5 md:px-8 lg:px-12 bg-[#F4F1EA]">
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-2">
                PARANÁ
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45">
                CAMPO LARGO
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <h2 className="font-serif text-[clamp(3.8rem,5vw,6rem)] leading-[0.92] tracking-[-0.04em] text-[#171714] mb-7">
                Um lugar para desacelerar.
              </h2>
              <p className="max-w-[620px] text-[16px] lg:text-[17px] leading-[1.7] text-black/60">
                Entre natureza, silêncio e arquitetura contemporânea,
                as cabanas Carpe Diem em Campo Largo foram pensadas
                para transformar alguns dias longe da rotina em uma
                experiência de presença, conforto e conexão.
              </p>
            </div>
          </div>
        </section>

        {/* Cabana 01 */}
        <section className="py-24 lg:py-32 px-5 md:px-8 lg:px-12 bg-[#F4F1EA]">
          <div className="max-w-[1360px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
              {/* Foto Principal */}
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/cabins/parana/pr-01/04.jpg"
                    alt="Cabana Romântica com Hidro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="lg:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/35 mb-4">
                  01 / CAMPO LARGO
                </p>
                <h2 className="font-serif font-normal text-[clamp(3.5rem,4.5vw,5.5rem)] leading-[0.92] tracking-[-0.04em] text-[#171714] mb-7">
                  Cabana Romântica com Hidro
                </h2>
                <p className="max-w-[440px] text-[16px] leading-[1.7] text-black/60 mb-8">
                  Um refúgio íntimo cercado pela natureza,
                  pensado para dois.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] lg:text-[14px] text-black/60 mb-10">
                  <span>2 hóspedes</span>
                  <span>·</span>
                  <span>1 quarto</span>
                  <span>·</span>
                  <span>1 cama</span>
                  <span>·</span>
                  <span>1 banheiro</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/parana/cabana-01"
                    className="inline-flex h-12 px-7 items-center justify-center rounded-full bg-[#171714] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-black transition-all duration-300"
                  >
                    Conhecer a cabana
                  </Link>
                  <a
                    href={cabins[0].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-black/70 hover:text-black underline underline-offset-4 transition-all duration-300"
                  >
                    Reservar no Airbnb ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Galeria Assimétrica */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mt-20 lg:mt-28">
              <div className="lg:col-span-8 relative aspect-[16/10]">
                <Image
                  src="/images/cabins/parana/pr-01/02.jpg"
                  alt="Interior Cabana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="lg:col-span-4 relative aspect-[4/5]">
                <Image
                  src="/images/cabins/parana/pr-01/03.jpg"
                  alt="Exterior Cabana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divisão */}
        <div className="my-24 lg:my-36 px-5 md:px-8 lg:px-12 bg-[#F4F1EA]">
          <div className="max-w-[1360px] mx-auto border-t border-black/10" />
        </div>

        {/* Cabana 02 */}
        <section className="py-24 lg:py-32 px-5 md:px-8 lg:px-12 bg-[#F4F1EA]">
          <div className="max-w-[1360px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
              {/* Conteúdo */}
              <div className="lg:col-span-5 lg:order-1">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/35 mb-4">
                  02 / CAMPO LARGO
                </p>
                <h2 className="font-serif font-normal text-[clamp(3.3rem,4.2vw,5.2rem)] leading-[0.94] tracking-[-0.04em] text-[#171714] mb-7">
                  Cabana Romântica em meio à natureza
                </h2>
                <p className="max-w-[440px] text-[16px] leading-[1.7] text-black/60 mb-8">
                  Imersão total na natureza com conforto contemporâneo.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] lg:text-[14px] text-black/60 mb-10">
                  <span>2 hóspedes</span>
                  <span>·</span>
                  <span>1 quarto</span>
                  <span>·</span>
                  <span>1 cama</span>
                  <span>·</span>
                  <span>1 banheiro</span>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/parana/cabana-02"
                    className="inline-flex h-12 px-7 items-center justify-center rounded-full bg-[#171714] text-white text-[11px] tracking-[0.12em] uppercase hover:bg-black transition-all duration-300"
                  >
                    Conhecer a cabana
                  </Link>
                  <a
                    href={cabins[1].airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-black/70 hover:text-black underline underline-offset-4 transition-all duration-300"
                  >
                    Reservar no Airbnb ↗
                  </a>
                </div>
              </div>

              {/* Foto Principal */}
              <div className="lg:col-span-7 lg:order-2">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/cabins/parana/pr-02/cover.jpg"
                    alt="Cabana Romântica em meio a natureza"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              </div>
            </div>

            {/* Galeria Assimétrica */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mt-20 lg:mt-28">
              <div className="lg:col-span-5 relative aspect-[4/5]">
                <Image
                  src="/images/cabins/parana/pr-02/03.jpg"
                  alt="Estrutura Cabana 02"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="lg:col-span-7 relative aspect-[16/10]">
                <Image
                  src="/images/cabins/parana/pr-02/01.jpg"
                  alt="Paisagem Cabana 02"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Clean Simplificado */}
        <section className="py-20 lg:py-28 px-5 md:px-8 lg:px-12 bg-[#F4F1EA] border-t border-black/10">
          <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            {/* Esquerda */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-black/45 mb-8">
                CARPE DIEM · CAMPO LARGO
              </p>
              <h2 className="font-serif text-[clamp(4.5rem,6vw,7.2rem)] leading-[0.88] tracking-[-0.045em] text-[#171714] max-w-[900px]">
                Seu próximo refúgio
                <br />
                começa aqui.
              </h2>
            </div>

            {/* Direita */}
            <div>
              <p className="font-sans text-[16px] lg:text-[17px] leading-[1.6] text-black/60 max-w-[320px] mb-8">
                Dois refúgios em Campo Largo
                <br />
                para sair do ritmo e ficar.
              </p>
              <Link
                href="/parana"
                className="inline-flex h-12 px-7 items-center justify-center rounded-full bg-[#171714] text-white text-[11px] font-medium uppercase tracking-[0.12em] hover:bg-black/80 transition-all duration-300"
              >
                Explorar cabanas →
              </Link>
            </div>
          </div>

          {/* Linha Editorial Fina */}
          <div className="mt-20 lg:mt-24 border-t border-black/15 pt-5 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.24em] text-black/40">
              PARANÁ · CAMPO LARGO
            </p>
            <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.24em] text-black/40">
              2 CABANAS · CARPE DIEM
            </p>
          </div>
        </section>

        {/* Spacer Entre CTA e Footer */}
        <div
          aria-hidden="true"
          className="h-20 lg:h-28 bg-[#F4F1EA]"
        />
      </main>
      <Footer />
    </div>
  );
}
