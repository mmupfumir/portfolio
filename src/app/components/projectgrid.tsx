/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

/* eslint-disable react/jsx-key */
export default function ProjectGrid() {
  const projects = [
    {
      name: "Carfluent",
      job: "Software Engineering Intern",
      page: "/Carfluent",
      image: "/images/carfluent.png",
      link: "https://www.car-fluent.com/",
    },
    {
      name: "Trading With Mat",
      page: "/TWM",
      image: "/images/twm.png",
      description: "Software Engineer",
      job: "Software Engineer",
      link: "https://www.tradingwithmat.com/",
    },
    {
      name: "Design",
      page: "/Portfolio",
      image: "/images/portfolio.png",
    },
  ];

  return (
    <main className="">
      <div className="flex justify-between items-center pb-5">
      </div>
      <h1 className="tracking-tighter text-center text-black/20 sm:text-xs md:text-sm py-5 font-light">Selected Works</h1>
      <ul className="">
        {projects.map(project => (

          <div className="pb-5 text-center">
            <a href={project.page} className="bg-[#f9f9f9] break-inside-avoid hover:ring-1 ring-black/5 transition duration-300 rounded-3xl p-20 flex flex-col justify-center items-center">
            <div className="ring-1 ring-black/30 py-1.5 px-2 rounded-full tracking-tighter text-black sm:text-xs md:text-sm font-light">{project.name}</div>
              <img src={project.image} className=" pt-10 w-auto max-h-96" />
            </a>
          </div>
        ))}
      </ul>
    </main>
  );
}
