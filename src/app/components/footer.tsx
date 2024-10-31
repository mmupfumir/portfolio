/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
export default function Footer() {
  return (
    <div className="pt-20 pb-5 px-5">
      <div className="bg-black rounded-xl px-5 text-xs text-white py-5 tracking-tighter">
        <div className='flex sm:flex-col md:flex-row items-stretch md:gap-80'>
          <h1 className="md:text-lg text-white/50 pb-2">Contact</h1>
          <div>
            <h1 className="text-lg md:text-2xl text-white pb-2">Let's start a conversation</h1>
            <p className="md:text-sm max-w-40 text-white/50 pb-5">
              Join me for a chat to talk about your business
            </p>
            <div className="pb-10">
              <Link
                href="mailto:mmupfumir@hartford.edu"
                className="bg-blue-500 hover:bg-black p-2 px-3 rounded-full text-white text-xs transition duration-500"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        <div className="md:text-sm flex flex-row gap-10 pt-10 ">
          <Link href="/" className="hover:text-white/20 transition duration-500">
            Home
          </Link>
          <Link
            href="/Cv"
            className="hover:text-white/20 transition duration-500"
          >
            About
          </Link>
          <Link
            href="https://www.linkedin.com/in/milton-mupfumira"
            target="_blank"
            rel="noopener noreferrer/"
            className="hover:text-white/20 transition duration-500"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:mmupfumir@hartford.edu"
            className="hover:text-white/20 transition duration-500"
          >
            Email
          </Link>
        </div>
      </div>
    </div>
  );
}
