export interface Destination {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  gallery?: string[];
  highlights: string[];
}

export interface TourPackage {
  id: string;
  title: string;
  destinationId: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  includes: string[];
  category: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}
