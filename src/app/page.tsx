/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Navbar from './components/navbar';
import Footer from './components/footer';


export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="">

      <div className="px-5 flex md:flex-row justify-between items-end sm:h-[0vh] md:h-[10vh] pb-10">
      </div>
      <div className='px-5 tracking-tighter'>
        <div className='pt-8'>
          <ProjectGrid />
        </div>
      </div>

      <Footer />
    </main>
    </div>
  );
}
