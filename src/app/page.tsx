/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Footer from './components/footer';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="container">
        <div className='flex flex-col text-center justify-center items-center sm:h-[80vh] md:h-[70vh]'>
          <div>
            <h1 className='text-[#161616] sm:text-7xl pb-5 md:text-9xl leading-none font-light tracking-tighter'>Software Engineer</h1>
          </div>
          <p className='tracking-tight pb-5 sm:py-5 md:pt-8 font-light text-black sm:text-md md:text-xl max-w-3xl'>I'm Milton, a 3rd year computer science student with 2+ years of experience in end - end software development. Currently a Program Management Co-op at <span className='text-black/40 border-b border-black/40'>RTX Collins Aerospace</span>, crafting impactful solutions to the unbuilt environment.</p>
        </div>
      <div className='tracking-tight'>
          <ProjectGrid />
      </div>
      <Footer />
    </main>
    </div>
  );
}
