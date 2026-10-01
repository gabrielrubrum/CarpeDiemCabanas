'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExperienceSection() {
  const experiences = [
    {
      label: 'Natureza',
      description: 'Silêncio, paisagem e conexão com o entorno.',
      image: '/images/cabins/santa-catarina/sc-01/02.jpg',
    },
    {
      label: 'Privacidade',
      description: 'Espaços pensados para momentos só seus.',
      image: '/images/cabins/parana/pr-01/02.jpg',
    },
    {
      label: 'Arquitetura',
      description: 'Design contemporâneo integrado à natureza.',
      image: '/images/cabins/santa-catarina/sc-02/03.jpg',
    },
    {
      label: 'Descanso',
      description: 'Conforto para desacelerar e aproveitar.',
      image: '/images/cabins/parana/pr-01/01.jpg',
    },
  ];

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
          <p className="text-xs tracking-[0.4em] text-foreground/50 mb-6 uppercase">A Experiência</p>
          <h2 className="font-serif font-normal tracking-tight text-5xl lg:text-6xl text-foreground leading-tight">
            Mais que uma acomodação,
            <br />
            um estado de espírito
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.label}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.label}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {experience.label}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
