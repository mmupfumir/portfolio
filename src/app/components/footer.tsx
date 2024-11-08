/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
export default function Footer() {
  return (
    <div className="flex items-center h-screen">
      <div className="tracking-tighter">
        <div className='flex sm:flex-col md:flex-row items-stretch md:gap-80'>
          <h1 className="sm:text-3xl md:text-5xl tracking-tighter text-black pb-2 max-w-2xl font-light">I'm available for selected collaborations. Let's connect.</h1>
        </div>
        <div className="sm: text-xs md:text-sm flex flex-row gap-10 pt-10 ">
          <Link
            href="https://www.linkedin.com/in/milton-mupfumira"
            target="_blank"
            rel="noopener noreferrer/"
            className="hover:ring-1 ring-black/50 bg-black/5 p-3 rounded-full transition duration-500"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:mmupfumir@hartford.edu"
            className="hover:ring-1 ring-black/50 bg-black/5 p-3 rounded-full transition duration-500"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
