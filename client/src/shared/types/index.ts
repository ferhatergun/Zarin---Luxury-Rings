export interface ProductImages {
  yellow: string;
  rose: string;
  white: string;
}

export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: ProductImages;
  price: number;
  popularityStars: number;
}

export type ColorOption = 'yellow' | 'rose' | 'white';
