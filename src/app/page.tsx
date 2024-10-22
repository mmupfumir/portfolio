/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import ProjectGrid from './components/projectgrid';
import Clock from './components/clock';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="px-5">
      <div className=" bg-[#f9f9f9] rounded-xl p-10 flex flex-col justify-center items-center sm:h-[50vh] md:h-[89vh]">
        <Clock />
        <div className='text-black flex flex-col sm:text-xl md:text-7xl tracking-tighter font-sans text-center font-normal pb-5'>
          <h1>
            DESIGNER
          </h1>
          <h1>
            SOFTWARE ENGINEER
          </h1>
          <h1 className="text-black/30">
            & PHOTOGRAPHER
          </h1>
        </div>
        <div className="pb-1 px-3 bg-blue-600 hover:bg-black/20 text-white hover:text-black transition duration-500 rounded-full">
          <Link href="/Cv" className="text-xs">About Me</Link>
        </div>
      </div>
      <ProjectGrid />
    </main>
    </div>
  );
}
