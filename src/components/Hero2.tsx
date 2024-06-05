import Image from 'next/image';
import { FC, SVGProps } from 'react';


const Component: FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/placeholder.svg"
          alt="Artist's Artwork"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-3xl font-bold">Vibrant Expressions</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Explore the captivating artwork of Jane Doe, a renowned artist known for her bold use of color and dynamic
          compositions. Her paintings invite you to immerse yourself in a world of vibrant emotions and boundless
          creativity.
        </p>
        <div className="flex items-center space-x-2">
          <UserIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-500 dark:text-gray-400">Jane Doe</span>
        </div>
      </div>
    </section>
  );
};

const UserIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Component;
