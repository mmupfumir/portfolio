/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Navbar from './components/navbar';
import Footer from './components/footer';


export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="pt-3">
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
