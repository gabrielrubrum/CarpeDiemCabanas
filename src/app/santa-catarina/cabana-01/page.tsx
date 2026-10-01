import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CabinGallery from '@/components/CabinGallery';
import { getCabinBySlug } from '@/data/cabins';
import Link from 'next/link';

const cabin = getCabinBySlug('santa-catarina', 'cabana-01');

export const metadata: Metadata = {
  title: cabin ? `${cabin.name} em ${cabin.location} | Carpe Diem` : 'Cabana - Carpe Diem',
  description: cabin?.description,
};

export default function CabanaPage() {
  if (!cabin) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-sand/30">
            <div className="w-full h-full bg-gradient-to-br from-sand/50 via-beige/30 to-sand/50" />
          </div>
          <div className="relative z-10 w-full px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Link href="/santa-catarina" className="text-xs tracking-[0.3em] text-foreground/40 hover:text-foreground/60 transition-colors uppercase block mb-6">
                  ← Voltar para Santa Catarina
                </Link>
                <p className="text-xs tracking-[0.4em] text-foreground/50 mb-6 uppercase">
                  {cabin.region === 'parana' ? 'Paraná' : 'Santa Catarina'}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 leading-tight">
                  {cabin.name}
                </h1>
                {cabin.location && (
                  <p className="text-sm text-foreground/50 mb-8">
                    {cabin.location}
                  </p>
                )}
                {cabin.rating && (
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-foreground font-serif text-2xl">{cabin.rating}</span>
                    <span className="text-foreground/30 text-xl">★</span>
                    {cabin.reviewCount && (
                      <span className="text-sm text-foreground/40">({cabin.reviewCount} avaliações)</span>
                    )}
                  </div>
                )}
                <a
                  href={cabin.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs tracking-[0.15em] px-10 py-5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 rounded-full uppercase"
                >
                  Reservar no Airbnb
                </a>
              </div>
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative aspect-[3/4] bg-sand/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sand to-beige" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-foreground/20 text-xs tracking-[0.3em] uppercase">
                      Imagem da cabana
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CabinGallery images={cabin.gallery} cabinName={cabin.name} />

        <section className="py-32 lg:py-48 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-20 lg:mb-32">
              <p className="text-xs tracking-[0.4em] text-foreground/50 mb-6 uppercase">Sobre</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12 leading-tight">
                {cabin.name}
              </h2>
              <p className="text-foreground/60 leading-relaxed text-xl">
                {cabin.description}
              </p>
            </div>

            {cabin.features && (
              <div className="space-y-16">
                <div>
                  <h3 className="font-serif text-3xl text-foreground mb-8">Características</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {cabin.features.guests && (
                      <div>
                        <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mb-2">Hóspedes</p>
                        <p className="text-foreground font-serif text-3xl">{cabin.features.guests}</p>
                      </div>
                    )}
                    {cabin.features.bedrooms && (
                      <div>
                        <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mb-2">Quartos</p>
                        <p className="text-foreground font-serif text-3xl">{cabin.features.bedrooms}</p>
                      </div>
                    )}
                    {cabin.features.beds && (
                      <div>
                        <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mb-2">Camas</p>
                        <p className="text-foreground font-serif text-3xl">{cabin.features.beds}</p>
                      </div>
                    )}
                    {cabin.features.bathrooms && (
                      <div>
                        <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mb-2">Banheiros</p>
                        <p className="text-foreground font-serif text-3xl">{cabin.features.bathrooms}</p>
                      </div>
                    )}
                  </div>
                </div>

                {cabin.features.amenities && cabin.features.amenities.length > 0 && (
                  <div>
                    <h3 className="font-serif text-3xl text-foreground mb-8">Comodidades</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cabin.features.amenities.map((amenity, index) => (
                        <li key={index} className="text-foreground/60 text-base flex items-center gap-3">
                          <span className="w-1 h-1 bg-foreground/40 rounded-full" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="mt-24 text-center">
              <a
                href={cabin.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs tracking-[0.15em] px-10 py-5 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 rounded-full uppercase"
              >
                Confira disponibilidade no Airbnb
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
