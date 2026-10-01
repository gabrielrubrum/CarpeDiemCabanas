'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[680px] lg:min-h-[720px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta/cta-carpe-diem.webp"
          alt="Refúgio contemporâneo à beira do lago"
          fill
          className="object-cover object-[65%_center] lg:object-[60%_center]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 flex items-end min-h-[680px] lg:min-h-[720px] pb-16 lg:pb-20 xl:pb-24">
        <motion.div
          className="max-w-[800px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] lg:text-[11px] uppercase tracking-[0.30em] text-white/75 mb-6">
            SEU PRÓXIMO REFÚGIO
          </p>
          <h2 className="font-serif font-normal text-white leading-[0.92] tracking-[-0.035em] text-[clamp(3rem,13vw,4.4rem)] lg:text-[clamp(4rem,5.3vw,6.1rem)] mb-8">
            Seu próximo refúgio
            <br />
            começa aqui.
          </h2>
          <p className="max-w-[470px] text-base lg:text-lg leading-[1.6] text-white/75 mb-10">
            Entre Paraná e Santa Catarina,
            <br />
            existe um lugar esperando pelo seu próximo momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <Link
              href="/parana"
              className="text-[12px] font-medium px-8 py-4 bg-[#F7F4EE] text-[#171714] rounded-full uppercase tracking-[0.08em] hover:bg-white transition-all duration-300"
            >
              Explorar cabanas
            </Link>
          </div>
          <div className="flex items-center gap-7 text-[10px] tracking-[0.24em] text-white/70 uppercase">
            <span>Paraná</span>
            <span className="text-white/35">•</span>
            <span>Santa Catarina</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
