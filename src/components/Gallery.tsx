"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const images: ImageData[] = [
  { src: 'https://res.cloudinary.com/danimtxr1/image/upload/v1718160760/amethyst_5_vedvof.png', alt: 'Artwork 1', title: 'Amethyst', description: 'Silk on Acrylic on Canvas', link: '/gallery/amethyst' },
  { src: '/placeholder.svg', alt: 'Artwork 2', title: 'Serenity Bloom', description: 'Watercolor', link: '/gallery/serenity-bloom' },
  { src: '/placeholder.svg', alt: 'Artwork 3', title: 'Whispers of the Wind', description: 'Acrylic on Canvas', link: '/gallery/whispers-of-the-wind' },
  { src: '/placeholder.svg', alt: 'Artwork 4', title: 'Ethereal Landscapes', description: 'Watercolor', link: '/gallery/ethereal-landscapes' },
  { src: '/placeholder.svg', alt: 'Artwork 5', title: 'Timeless Reflections', description: 'Oil on Canvas', link: '/gallery/timeless-reflections' },
  { src: '/placeholder.svg', alt: 'Artwork 6', title: 'Enchanted Moments', description: 'Acrylic on Canvas', link: '/gallery/enchanted-moments' }
];

const ImageGallery: FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
     
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-12 lg:gap-16">
          <section className="grid gap-6 lg:gap-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              a window into my soul
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl lg:text-lg xl:text-xl">
              a reflection of yours
            </p>
          </section>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <Link href={image.link} className="block" prefetch={false}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="aspect-square object-cover w-full"
                  />
                  <div className="bg-white p-4 dark:bg-gray-950">
                    <h3 className="font-bold text-lg">{image.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{image.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </div>
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

export default ImageGallery;
