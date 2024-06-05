"use client"
import { useParams } from 'next/navigation';
import { FC } from 'react';
import { galleryItems } from '../../data/galleryItems';
import { GalleryItem } from '../../data/types';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GalleryItemPage: FC = () => {
  const { id } = useParams() as { id: string };
  const item = galleryItems.find((item: GalleryItem) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
    
    <Navbar />
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Carousel className="mb-8">
        <CarouselContent>
          <CarouselItem>
            <Image
              src={item.src}
              width={800}
              height={600}
              alt={item.alt}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
          <p className="text-gray-500 mb-4">by {item.artist}</p>
          <p className="text-lg mb-2">Medium: {item.medium}</p>
          <p className="text-lg mb-2">Size: {item.size}</p>
          <p className="text-lg mb-2">Year: {item.year}</p>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About the Artist</h2>
            <div className="flex items-center mb-4">
              <Avatar className="mr-4">
                <Image src="/placeholder.svg" alt={item.artist} width={40} height={40} />
                <AvatarFallback>{item.artist.split(' ').map(name => name[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-bold">{item.artist}</h3>
                <p className="text-gray-500">Artist details here</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Additional information about the artist can be added here.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 mb-1">Current Owner</p>
                <p className="font-bold">{item.owner}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Estimated Value</p>
                <p className="font-bold">{item.value}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Year Completed</p>
                <p className="font-bold">{item.year}</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Current Location</p>
                <p className="font-bold">{item.location}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href={item.shoplink}
              className="inline-block px-6 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default GalleryItemPage;
