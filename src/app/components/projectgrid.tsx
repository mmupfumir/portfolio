/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-key */

export default function ProjectGrid() {
  const projects = [
    {
      name: "Trading With Mat",
      page: "/TWM",
      image: "/images/twm.png",
      link: "https://www.tradingwithmat.com/",
    },
    {
      name: "Car Fluent",
      page: "/Carfluent",
      image: "/images/carfluent.png",
      link: "https://www.car-fluent.com/",
    },
    {
      name: "Portfolio Design",
      page: "/Portfolio",
      image: "/images/portfolio.jpg",
    },
  ];

  return (
    <main className="py-8">
      <h1 className="text-black/30 text-xs tracking-tighter font-normal pb-5 text-center">SELECTED WORKS</h1>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {projects.map(project => (
          <a href={project.page} className="bg-[#f9f9f9] hover:ring-1 ring-black/15 rounded-lg p-20 text-center flex flex-col justify-center items-center">
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
