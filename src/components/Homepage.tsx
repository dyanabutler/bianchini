"use client"
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FC } from 'react';
import Hero2 from './Hero2';

interface GalleryItem {
  src: string;
  alt: string;
  link: string;
}

const galleryItems: GalleryItem[] = [
  { src: '/placeholder.svg', alt: 'Artwork 1', link:'/gallery' },
  { src: '/placeholder.svg', alt: 'Artwork 2', link:'/gallery' },
  { src: '/placeholder.svg', alt: 'Artwork 3', link:'/gallery'},
  { src: '/placeholder.svg', alt: 'Artwork 4', link:'/gallery' },
  { src: '/placeholder.svg', alt: 'Artwork 5', link:'/gallery' },
  { src: '/placeholder.svg', alt: 'Artwork 6', link:'/gallery' },
];

const HomePage: FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    
      <main className="flex-1">
        <section className="w-full">
          <Image
            src="https://ucarecdn.com/35800b66-11eb-452c-ac8b-6054c1b58f8c/-/preview/1000x750/"
            width={1920}
            height={1080}
            alt="Hero Image"
            className="w-full h-[60vh] object-cover object-center"
          />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                a window into my soul, a reflection into yours
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Discover the timeless beauty and craftsmanship of our artists unique creations. Explore their journey
                and passion for traditional art.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">About the Artist</h2>
              <p className="text-gray-500 md:text-base/relaxed dark:text-gray-400">
                John Doe is a renowned traditional artist with over 20 years of experience. His work is known for its
                intricate details, vibrant colors, and timeless elegance. Inspired by the rich cultural heritage of his
                homeland, John dedicates himself to preserving and sharing the beauty of traditional art.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 space-y-8">
            {/* <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Gallery</h2>
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Explore the stunning collection of traditional artwork created by our talented artist.
              </p>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((item, index) => (
                <Link key={index} href="#" className="relative group overflow-hidden rounded-lg" prefetch={false}>
                  <Image
                    src={item.src}
                    width={600}
                    height={400}
                    alt={item.alt}
                    className="aspect-[3/2] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="text-white font-bold">View Artwork</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Hero2 />
      </main>
      
    </div>
  );
};

const BrushIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  );
};

export default HomePage;
