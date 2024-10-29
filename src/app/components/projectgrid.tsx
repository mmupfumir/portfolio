/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import Link from "next/link";
export default function ProjectGrid() {
  const projects = [
    {
      name: "Web Design / Development",
      page: "/Portfolio",
      image: "/images/port.jpg",
    },
    {
      name: "Web Design / Development",
      page: "/TWM",
      image: "/images/twm.png",
      link: "https://www.tradingwithmat.com/",
    },
    {
      name: "Web Development",
      page: "/Carfluent",
      image: "/images/carfluent.png",
      link: "https://www.car-fluent.com/",
    },
    {
      name: "Design",
      page: "/Portfolio",
      image: "/images/portfolio.jpg",
    },
  ];

  return (
    <main className="py-5 border-t border-black/5">
      <div className="flex justify-between items-center pb-5">
        <h1 className="text-black/50 text-sm tracking-tighter font-normal">Selected Works</h1>
        <div>
          <Link href="/Workflow" className="bg-black tracking-tighter hover:bg-black/20 py-1 px-2 rounded-full text-white sm:text-xs transition duration-500">Design Workflow</Link>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map(project => (
          <a href={project.page} className="bg-[#f9f9f9] hover:ring-1 ring-black/5 transition   duration-300 rounded-lg p-20 text-center flex flex-col justify-center items-center">
            {/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text, jsx-a11y/alt-text */}
            <img src={project.image} className="w-auto max-h-96 pb-5" />
            <span className="bg-black/10 py-1 px-3 rounded-full text-xs">
              {project.name}
            </span>
          </a>
        ))}
      </ul>
    </main>
  );
}
