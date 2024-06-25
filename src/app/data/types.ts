// types.ts
export interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

export interface GalleryItem {
  
    id: string;
    alt: string;
    title: string;
    artist: string;
    medium: string;
    size: string;
    year: number;
    description: string;
    owner: string;
    value: string;
    location: string;
    shoplink: string;
    media: MediaItem[];
  }