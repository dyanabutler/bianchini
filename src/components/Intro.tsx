"use client"
import Link from 'next/link';

const Intro: React.FC = () => {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/placeholder.svg")' }}
    >
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Welcome to our Store
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/home"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-2 text-base font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            prefetch={false}
          >
            Enter
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-md border border-transparent bg-gray-900 px-6 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            prefetch={false}
          >
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
