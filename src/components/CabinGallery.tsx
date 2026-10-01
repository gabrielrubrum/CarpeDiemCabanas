'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageLightbox from './ImageLightbox';

interface CabinGalleryProps {
  images: string[];
  cabinName: string;
}

export default function CabinGallery({ images, cabinName }: CabinGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="w-full py-16 lg:py-24 px-6 lg:px-10 xl:px-12 bg-[#F3F0E8]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.90] tracking-[-0.035em] text-[#171714] mb-8">
            Galeria
          </h2>
          <p className="text-[15px] lg:text-[16px] leading-relaxed text-[#6B665E] max-w-[620px] mb-12">
            Explore os refúgios através de nossas fotografias. Clique em qualquer imagem para ampliar.
          </p>

          {/* Grid de imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] overflow-hidden cursor-pointer group ${
                  index === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-[4/3]' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${cabinName} - Foto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm uppercase tracking-[0.20em]">Ver ↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
