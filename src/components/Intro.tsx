"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import FancyButton from './FancyButton';

const Intro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Add overflow-hidden to body
    document.body.classList.add('overflow-hidden');
    
    // Remove overflow-hidden when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <main
      className={`flex h-screen w-full items-center justify-center bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 animate-fade-in">
        <div className="flex flex-col items-center">
          <Image 
            src="https://ucarecdn.com/cfe89d1c-fbc4-47f8-a993-cc16134af6f5/vase.png" 
            alt="Welcome to our Store" 
            width={200} 
            height={200} 
            className="object-fill animate-fade-in"
          />
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <FancyButton 
            link="/home" 
            text="Enter"
            />

            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
