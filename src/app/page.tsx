/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Navbar from './components/navbar';
import Link from "next/link";


export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="">
      <div className='bg-white sticky top-0 px-5 font-light flex flex-col tracking-tighter text-right py-5 border-b border-black/5'>
        <h1 className='sm:text-sm md:text-xl'>
          Program Management Co-op
        </h1>
        <div className='text-sm md:text-xl text-black/50'>
           Collins Aerospace
        </div>
      </div>
      <div className="px-5 flex md:flex-row justify-between items-end sm:h-[30vh] md:h-[70vh] pb-10">
        <div className='text-black flex-col sm:text-4xl md:text-9xl tracking-tighter text-left font-light max-w-6xl'>
          <h1 className='text-black/40 sm:text-xs md:text-xl tracking-tight'>
            Cultivated Depth In
          </h1>
          <h1 className='text-black/10'>
            Branding
          </h1>
          <h1 className=' text-black/10'>
            Software Engineering
          </h1>
          <h1 className="text-black">
            Management
          </h1>
          <h1 className='text-black/10'>
            UI Design
          </h1>
        </div>
        <h1 className='text-xs tracking-tighter text-black/40 border-b border-black/10'>
          Bs Comp Sci '26
        </h1>
      </div>
      <img src="/images/building.jpg" alt="building" className="w-full" />
      <div className='px-5 tracking-tighter'>
        <h1 className='sm:text-lg md:text-2xl pt-10'>Reimagining the Digital Landscape</h1>
        <p className='text-black/50 text-2xl md:text-5xl max-w-5xl sm:pb-3 md:pb-5 font-light'>Elevating brands through innovative web development and captivating visual content, turning ideas into immersive digital experiences.</p>
        <Link href="Cv" className="bg-[#f9f9f9] hover:bg-black/20 ring-1 ring-black/10 p-1 px-2 rounded-full text-black sm:text-xs md:text-sm transition duration-500">About Me</Link>
        <div className='pt-8'>
          <ProjectGrid />
        </div>
      </div>
    </main>
    </div>
  );
}
