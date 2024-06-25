// data/galleryItems.ts
import { GalleryItem } from './types';

export const galleryItems: GalleryItem[] = [
  {
    id: 'amethyst',
    alt: 'amethyst artwork',
    title: 'Amethyst',
    artist: 'Bianchini',
    medium: 'Silks and Acrylic on Canvas',
    size: '73.7 cm × 92.1 cm',
    year: 2022,
    description: 'Amethyst is one of my original pieces using only 2 colors for the entire thing.',
    owner: 'For Sale',
    value: '$6000',
    location: 'Massachussets, USA',
    shoplink: '#',
    media: [
      { type: 'image', src: 'https://res.cloudinary.com/danimtxr1/image/upload/v1718155303/amethyst_3_Large_cyxvql.png', alt: 'Artwork 1' },
      { type: 'image', src: 'https://res.cloudinary.com/danimtxr1/image/upload/v1718160745/amethyst_1_otseqf.png', alt: 'Artwork 2' },
      { type: 'image', src: 'https://res.cloudinary.com/danimtxr1/image/upload/v1718160760/amethyst_5_vedvof.png', alt: 'Artwork 3' },
      { type: 'video', src: 'https://res.cloudinary.com/danimtxr1/video/upload/v1718160778/amethyst_video_2_izzqpr.mov' }
    ]
  },
  // Add more items here
];
