/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Navbar from '../components/navbar';
import PhotoGrid from '../components/photogrid';
import Footer from '../components/footer';


export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="container">
        {/* <div className='flex flex-col text-center justify-center items-center sm:h-[80vh] md:h-[70vh]'>
          <div>
            <h1 className='text-[#161616] sm:text-7xl pb-5 md:text-9xl leading-none font-light tracking-tighter'>photographer.</h1>
          </div>
          <p className='tracking-tight pb-5 sm:py-5 md:pt-8 font-light text-black sm:text-md md:text-xl max-w-3xl'>I'm Milton, a multidisciplinary artist with 4+ years of experience in photogrpahy and film. As a Freelance Photographer based in Connecticut / New Jersey,  I am forever passionate about capturing moments that last a lifetime.</p>
        </div> */}
      <div className='tracking-tight'>
      </div>
      <PhotoGrid />
      <Footer />
    </main>
    </div>
  );
}
