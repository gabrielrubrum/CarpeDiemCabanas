'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { locations } from '@/data/cabins';

export default function LocationSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-10 xl:px-12">
      <div className="max-w-[1320px] lg:max-w-[1360px] mx-auto">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs tracking-[0.4em] text-foreground/50 mb-6 uppercase">Nossas Localizações</p>
          <h2 className="font-serif font-normal tracking-tight text-5xl lg:text-6xl text-foreground leading-tight">
            Dois destinos,
            <br />
            uma experiência
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {locations.map((location, index) => (
            <motion.div
              key={location.region}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative aspect-[16/10] overflow-hidden ${
                index === 0 ? 'lg:col-span-7' : 'lg:col-span-8'
              } ${index === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={location.heroImage}
                  alt={location.name}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                />
              </div>

              <div className={`space-y-8 ${
                index === 0 ? 'lg:col-span-5' : 'lg:col-span-4'
              } ${index === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <p className="text-xs tracking-[0.3em] text-foreground/40 mb-4 uppercase">
                    0{index + 1} · {location.name}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
                    {location.name}
                  </h3>
                  {location.location && (
                    <p className="text-sm text-foreground/50 mb-4">
                      {location.location}
                    </p>
                  )}
                  <p className="text-foreground/60 leading-relaxed text-lg">
                    {location.description}
                  </p>
                </div>

                <Link
                  href={`/${location.region}`}
                  className="inline-block text-xs tracking-[0.15em] px-8 py-4 border border-black/30 hover:border-black/60 hover:bg-black hover:text-white transition-all duration-500 rounded-full uppercase"
                >
                  Explorar {location.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
