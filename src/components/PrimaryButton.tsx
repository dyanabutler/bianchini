import React from 'react';
import Link from 'next/link';

interface PrimaryButton {
  text: string;
  link: string;
}

const DynamicButton: React.FC<PrimaryButton> = ({ text, link }) => {
  return (
    <Link href={link} passHref>
      <div className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-sm shadow-xl group hover:ring-1 hover:ring-red-500">
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600 via-red-600 to-yellow-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-sm opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">{text}</span>
      </div>
    </Link>
  );
};

export default DynamicButton;
