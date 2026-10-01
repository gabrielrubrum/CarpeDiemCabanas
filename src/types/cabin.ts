export type Region = 'parana' | 'santa-catarina';

export interface Cabin {
  id: string;
  region: Region;
  name: string;
  slug: string;
  location: string;
  heroImage: string;
  gallery: string[];
  description: string;
  features?: {
    guests?: number;
    bedrooms?: number;
    beds?: number;
    bathrooms?: number;
    amenities?: string[];
  };
  rating?: number | null;
  reviewCount?: number | null;
  airbnbUrl: string;
}

export interface Location {
  region: Region;
  name: string;
  location: string;
  description: string;
  cabinCount: number;
  heroImage: string;
}
