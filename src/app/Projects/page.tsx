/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import { Back } from "../components/back";
export default function Projects() {
  const projects = [
    {
      name: "Web Design / Development",
      page: "/Portfolio",
      image: "/images/port.png",
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
    <main className="px-5">
      <div className="sticky top-0 py-5">
        <Back />
      </div>
      <div className="flex justify-between items-center pb-5">
      </div>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
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
