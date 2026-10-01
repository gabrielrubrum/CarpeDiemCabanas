'use client';

import { motion } from 'framer-motion';
import { cabins } from '@/data/cabins';
import CabinCard from './CabinCard';

export default function CabanasSection() {
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
          <p className="text-xs tracking-[0.4em] text-foreground/50 mb-6 uppercase">As Cabanas</p>
          <h2 className="font-serif font-normal tracking-tight text-5xl lg:text-6xl text-foreground leading-tight">
            Quatro refúgios,
            <br />
            infinitas possibilidades
          </h2>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {cabins.map((cabin, index) => (
            <CabinCard key={cabin.id} cabin={cabin} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
