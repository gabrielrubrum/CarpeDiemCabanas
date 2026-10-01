import { Cabin, Location } from '@/types/cabin';

export const cabins: Cabin[] = [
  {
    id: 'pr-01',
    region: 'parana',
    name: 'Cabana Romântica com Hidro',
    slug: 'cabana-01',
    location: 'Campo Largo, Paraná',
    heroImage: '/images/cabins/parana/pr-01/cover.jpg',
    gallery: [
      '/images/cabins/parana/pr-01/cover.jpg',
      '/images/cabins/parana/pr-01/01.jpg',
      '/images/cabins/parana/pr-01/02.jpg',
      '/images/cabins/parana/pr-01/03.jpg',
      '/images/cabins/parana/pr-01/04.jpg',
    ],
    description: 'Cabana romântica com banheira de hidromassagem privativa, ideal para casais. Localizada em Campo Largo, Paraná, oferece self check-in, Wi-Fi, cozinha completa e estacionamento gratuito em uma região tranquila.',
    features: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      amenities: [
        'Banheira de hidromassagem',
        'Self check-in',
        'Região tranquila',
        'Cozinha',
        'Wi-Fi',
        'Estacionamento gratuito',
        'Jacuzzi privativa',
      ],
    },
    rating: 4.92,
    reviewCount: 24,
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1403049730359012341',
  },
  {
    id: 'pr-02',
    region: 'parana',
    name: 'Cabana Romântica em meio a natureza',
    slug: 'cabana-02',
    location: 'Campo Largo, Paraná',
    heroImage: '/images/cabins/parana/pr-02/cover.jpg',
    gallery: [
      '/images/cabins/parana/pr-02/cover.jpg',
      '/images/cabins/parana/pr-02/01.jpg',
      '/images/cabins/parana/pr-02/02.jpg',
      '/images/cabins/parana/pr-02/03.jpg',
      '/images/cabins/parana/pr-02/04.jpg',
    ],
    description: 'Cabana romântica com banheira/jacuzzi privativa em meio à natureza. Com TV de 50 polegadas, self check-in, Wi-Fi, cozinha e estacionamento gratuito. Ambiente tranquilo perfeito para desconectar.',
    features: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      amenities: [
        'Banheira/Jacuzzi privativa',
        'Self check-in',
        'Ambiente tranquilo',
        'Cozinha',
        'Wi-Fi',
        'Estacionamento gratuito',
        'TV de 50 polegadas',
      ],
    },
    rating: 4.96,
    reviewCount: 47,
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1073480283238243483',
  },
  {
    id: 'sc-01',
    region: 'santa-catarina',
    name: 'Cabana do lago',
    slug: 'cabana-01',
    location: 'Benedito Novo, Santa Catarina',
    heroImage: '/images/cabins/santa-catarina/sc-01/cover.jpg',
    gallery: [
      '/images/cabins/santa-catarina/sc-01/cover.jpg',
      '/images/cabins/santa-catarina/sc-01/01.jpg',
      '/images/cabins/santa-catarina/sc-01/02.jpg',
      '/images/cabins/santa-catarina/sc-01/03.jpg',
      '/images/cabins/santa-catarina/sc-01/04.jpg',
    ],
    description: 'Cabana do lago com piscina, localizada em Benedito Novo, Santa Catarina. Com self check-in, região tranquila e vistas deslumbrantes. Perfeita para quem busca conexão com a natureza.',
    features: {
      guests: 2,
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      amenities: [
        'Piscina',
        'Self check-in',
        'Região tranquila',
      ],
    },
    rating: 5.0,
    reviewCount: 13,
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1502725732524921064',
  },
  {
    id: 'sc-02',
    region: 'santa-catarina',
    name: 'Cabana do Bosque',
    slug: 'cabana-02',
    location: 'Benedito Novo, Santa Catarina',
    heroImage: '/images/cabins/santa-catarina/sc-02/cover.jpg',
    gallery: [
      '/images/cabins/santa-catarina/sc-02/cover.jpg',
      '/images/cabins/santa-catarina/sc-02/01.jpg',
      '/images/cabins/santa-catarina/sc-02/02.jpg',
      '/images/cabins/santa-catarina/sc-02/03.jpg',
      '/images/cabins/santa-catarina/sc-02/04.jpg',
    ],
    description: 'Cabana do Bosque em Benedito Novo, Santa Catarina. Refúgio em meio à natureza com arquitetura contemporânea. Self check-in e região tranquila.',
    features: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      amenities: [
        'Self check-in',
        'Região tranquila',
      ],
    },
    rating: null,
    reviewCount: null,
    airbnbUrl: 'https://www.airbnb.com.br/rooms/1502770501209272623',
  },
];

export const locations: Location[] = [
  {
    region: 'parana',
    name: 'Paraná',
    location: 'Campo Largo',
    description: 'Refúgios imersos na natureza de Campo Largo, Paraná, onde o silêncio e a paisagem criam uma experiência de descanso.',
    cabinCount: 2,
    heroImage: '/images/cabins/parana/pr-01/cover.jpg',
  },
  {
    region: 'santa-catarina',
    name: 'Santa Catarina',
    location: 'Benedito Novo',
    description: 'Cabanas nas montanhas de Benedito Novo, Santa Catarina, combinando arquitetura contemporânea com vistas deslumbrantes.',
    cabinCount: 2,
    heroImage: '/images/cabins/santa-catarina/sc-01/cover.jpg',
  },
];

export const getCabinsByRegion = (region: string): Cabin[] => {
  return cabins.filter(cabin => cabin.region === region);
};

export const getCabinBySlug = (region: string, slug: string): Cabin | undefined => {
  return cabins.find(cabin => cabin.region === region && cabin.slug === slug);
};
