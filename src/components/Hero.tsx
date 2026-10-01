'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-carpe-diem.webp"
          alt="Refúgio Aconchegante à Beira do Lago - Carpe Diem"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      <div className="absolute top-0 inset-x-0 h-[180px] bg-gradient-to-b from-black/45 via-black/15 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-5 lg:px-12 max-w-[1440px] mx-auto flex items-end min-h-[100svh] pb-16 lg:pb-20">
        <motion.div
          className="max-w-[780px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.32em] text-white/85 mb-8">
            Refúgios Contemporâneos
          </p>
          <h1 className="font-serif font-normal text-white tracking-[-0.025em] leading-[0.96] text-[clamp(2.5rem,11vw,3.6rem)] lg:text-[clamp(3rem,3.7vw,4.35rem)] mb-8">
            Entre o silêncio da natureza
            <br />
            e o conforto de estar
            <br />
            exatamente onde você queria.
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-7 items-start sm:items-center">
            <Link
              href="/parana"
              className="font-sans text-[13px] font-medium px-8 py-3.5 bg-[#F7F4EE] text-[#171717] rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.02]"
            >
              Explorar cabanas
            </Link>
            <div className="flex items-center gap-7">
              <div className="w-px h-7 bg-white/30"></div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.20em] text-white/75 font-medium">
                <span>Paraná</span>
                <span className="text-white/40">•</span>
                <span>Santa Catarina</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
