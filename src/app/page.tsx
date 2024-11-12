/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import ProjectGrid from './components/projectgrid';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Clock from './components/clock';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4">
          <div className="relative text-white text-2xl">
            <div className="flex flex-col text-center justify-center items-center sm:h-[80vh] md:h-[60vh]">
              <div>
                <Clock />
                <h1 className="text-black/80 sm:text-7xl pb-5 md:text-9xl leading-none font-light tracking-tighter">
                 Jr. Software Engineer
                </h1>
              </div>
              <p className="tracking-tight pb-5 sm:py-5 md:pt-8 font-light text-black/80 sm:text-sm md:text-xl max-w-3xl">
                Computer Science student with 2+ years of experience in end-to-end software development. Currently a Program Management Co-op at{' '}
                <a
                  href="https://www.collinsaerospace.com"
                  className="hover:text-black transition duration-300 text-black/40 border-b border-black/40"
                >
                  RTX Collins Aerospace
                </a>
                , crafting impactful solutions to the unbuilt environment.
              </p>
            </div>
          </div>

        <div className="tracking-tight">
          <ProjectGrid />
        </div>
        <Footer />
      </main>
    </div>
  );
}
