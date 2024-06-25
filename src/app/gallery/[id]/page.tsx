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
import { CloudinaryContext, Video } from 'cloudinary-react';
import FancyButton from '@/components/FancyButton';

const GalleryItemPage: FC = () => {
  const { id } = useParams() as { id: string };
  const item = galleryItems.find((item: GalleryItem) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
    
    <Navbar />
    <div className="max-w-6xl overflow-hidden mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <Carousel className="mb-8 mx-8">
        <CarouselContent>
          {item.media.map((media, index) => (
            <CarouselItem key={index}>
              {media.type === 'image' ? (
                <Image
                  src={media.src}
                  width={800}
                  height={600}
                  alt={media.alt || 'Artwork'}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              ) : (
                <CloudinaryContext cloud_name="danimtxr1">
                  <Video
                    publicId={media.src}
                    width="100%"
                    controls
                   
                  />
                </CloudinaryContext>
              )}
            </CarouselItem>
          ))}
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
          <p className="text-gray-500">{item.description}</p>
       
          
        </div>
        <div className="flex flex-col justify-between">
          
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
            <FancyButton
              link={item.shoplink}
              text="Buy Now"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default GalleryItemPage;
