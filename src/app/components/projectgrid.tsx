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
      image: "/images/Carfluent.png",
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
      <ul className="">
        {projects.map(project => (

          <div className="pb-5 text-center">
            <a href={project.page} className="bg-[#f9f9f9] break-inside-avoid hover:ring-1 ring-black/5 transition duration-300 rounded-xl p-20 flex flex-col justify-center items-center">
              <img src={project.image} className="w-auto max-h-96" />
            </a>
          </div>
        ))}
      </ul>
    </main>
  );
}
