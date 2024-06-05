// data/galleryItems.ts
import { GalleryItem } from './types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'starry-night',
    src: '/placeholder.svg',
    alt: 'Artwork 1',
    title: 'Starry Night',
    artist: 'Vincent van Gogh',
    medium: 'Oil on canvas',
    size: '73.7 cm × 92.1 cm',
    year: 1889,
    description: 'Starry Night is one of the most iconic paintings by the Dutch post-impressionist artist Vincent van Gogh. Painted in 1889, it depicts a swirling night sky over a small village with a church steeple. The painting is known for its expressive, almost hallucinatory quality, with the stars and moon appearing to dance across the canvas.',
    owner: 'Museum of Modern Art',
    value: '$100 million',
    location: 'New York, USA',
    shoplink: '#'
  },
  // Add more items here
];
