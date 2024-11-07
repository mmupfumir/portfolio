/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Works from './components/works';

export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="pt-3">
        <h1 className=' px-5 pt-40 sm:text-6xl md:text-[12.5rem] leading-none text-[#eaeaea] font-normal tracking-tighter'>photographer</h1>
        <h1 className='px-5 pb-5 sm:text-6xl md:text-[12.5rem] leading-none text-[#eaeaea] font-normal tracking-tighter text-right'>and product developer</h1>
        <Works />
      <div className='px-5 tracking-tighter'>
        <div className=''>
          <ProjectGrid />
        </div>
      </div>
      <Footer />
    </main>
    </div>
  );
}
