/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { describe } from "node:test";
import { FaArrowRight } from "react-icons/fa6";
export default function ProjectGrid() {
  const projects = [
    {
      name: "About",
      description: "I craft moments, impressions that linger, and ideas that transcend. Branding is not decoration, but translation—a fluid exchange between vision and reality, thought and creation. Join me as I reimagine the digital landscape. ",
      page: "/Cv",
    },
    {
      name: "Design",
      page: "/Portfolio",
      image: "/images/port.png",
    },
    {
      name: "Design / Development",
      page: "/TWM",
      image: "/images/twm.png",
      link: "https://www.tradingwithmat.com/",
    },

    {
      name: "Development",
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
    <main>
      <div className="flex justify-between items-center pb-5">
      </div>
      <ul className="columns-1 md:columns-3 lg:columns-3 gap-5 space-y-5">
        {projects.map(project => (
          <a href={project.page} className="bg-[#f9f9f9] break-inside-avoid hover:ring-1 ring-black/10 transition duration-300 rounded-xl py-14 px-14 text-center flex flex-col justify-center items-center">
            {/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text, jsx-a11y/alt-text */}
            <span className="py-1 px-3 rounded-full text-xs text-black ring-1 ring-black/50">
              {project.name}
            </span>
            <img src={project.image} className="w-auto max-h-96 pt-5" />
            <p className="text-xs md:text-sm text-black/40">{project.description}</p>
          </a>
        ))}
      </ul>
    </main>
  );
}
