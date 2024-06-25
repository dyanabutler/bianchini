// src/components/FancyButton.tsx

import { FC } from 'react';
import Link from 'next/link';

interface FancyButtonProps {
  text: string;
  link: string;
}

const FancyButton: FC<FancyButtonProps> = ({ text, link }) => {
  return (
    <Link href={link} passHref>
      <div className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-slate-100 border border-gray-300 rounded-lg shadow-inner group cursor-pointer">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-slate-900 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">{text}</span>
      </div>
    </Link>
  );
};

export default FancyButton;
