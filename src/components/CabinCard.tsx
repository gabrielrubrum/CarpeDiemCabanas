'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Cabin } from '@/types/cabin';

interface CabinCardProps {
  cabin: Cabin;
  index: number;
}

export default function CabinCard({ cabin, index }: CabinCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden ${
        isEven ? 'lg:col-span-7' : 'lg:col-span-8'
      } ${isEven ? '' : 'lg:order-2'}`}>
        <Image
          src={cabin.heroImage}
          alt={cabin.name}
          fill
          className="object-cover hover:scale-[1.02] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
        />
      </div>

      <div className={`space-y-8 ${
        isEven ? 'lg:col-span-5' : 'lg:col-span-4'
      } ${isEven ? '' : 'lg:order-1'}`}>
        <div>
          <p className="text-xs tracking-[0.3em] text-foreground/40 mb-4 uppercase">
            0{index + 1} · {cabin.region === 'parana' ? 'Paraná' : 'Santa Catarina'}
          </p>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
            {cabin.name}
          </h3>
          {cabin.location && (
            <p className="text-sm text-foreground/50 mb-6">
              {cabin.location}
            </p>
          )}
          {cabin.rating && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-foreground font-serif text-xl">{cabin.rating}</span>
              <span className="text-foreground/30">★</span>
              {cabin.reviewCount && (
                <span className="text-xs text-foreground/40">({cabin.reviewCount} avaliações)</span>
              )}
            </div>
          )}
          <p className="text-foreground/60 leading-relaxed text-lg">
            {cabin.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${cabin.region}/${cabin.slug}`}
            className="text-xs tracking-[0.15em] px-8 py-4 border border-black/30 hover:border-black/60 hover:bg-black hover:text-white transition-all duration-500 rounded-full uppercase"
          >
            Conhecer cabana
          </Link>
          <a
            href={cabin.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 rounded-full uppercase"
          >
            Reservar no Airbnb
          </a>
        </div>
      </div>
    </motion.div>
  );
}
