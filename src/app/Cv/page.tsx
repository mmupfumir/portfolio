import { Back } from "../components/back";

export default function Cv() {
  const jobs = [
    {
      title: "Collins Aerospace",
      subtitle: "Program Management Co-op",
      date: "2025",
      link : "https://www.collinsaerospace.com/",
    },
    {
      title: "Trading With Mat",
      subtitle: "Software Engineer (Contract)",
      date: "2024",
      link: "https://www.tradingwithmat.com/",
    },
    {
      title: "Car Fluent",
      subtitle: "Software Engineering Intern",
      date: "2024",
      link: "https://www.car-fluent.com/",
    },

  ];

  // const photos = [
//   {
//     image: "/images/nsbe.jpg",
//     title: "NSBE National Convention 2024",
//     position: "Vice President"
//   },
//   {
//     image: "/images/pcm.jpg",
//     title: "University of Hartford Protestant Campus Ministry",
//     position: "Student Speaker & Media Director"
//   },
//   {
//     image: "/images/men.jpg",
//     title: "Mens Leadership Group Retreat",
//     position: "Co-Founder & President"
//   },
//   {
//     image: "/images/ra.jpg",
//     title: "Fall Move-In 2024",
//     position: "Resident Assistant"
//   },
//   {
//     image: "/images/nomas.jpg",
//     title: "National Organization of Minority Architecture Students Eboard '23",
//     position: "Executive Board Treasurer"
//   },
//   {
//     image: "/images/sga.jpg",
//     title: "Presidential Campus Victory Summit '23",
//     position: "Upperclassmen Residential Chair"
//   }
// ];

  return (
    <div>
      <div className="container">
        <div className="py-14 sticky top-0">
          <Back />
        </div>

          {jobs.map(({ title, subtitle, date, link }) => (
            <div key={title} className="flex justify-between items-baseline pt-2 pb-4 ">
              <div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-black hover:text-black/50 transition-hover duration-300"
                >
                  {title}
                </a>
                <h1 className="text-xs text-black/50">{subtitle}</h1>
              </div>
              <h1 className="text-xs text-black/50">{date}</h1>
            </div>
          ))}

          {/* <h1 className="text-sm text-black pt-8 pb-1 tracking-tight">
            Leadership Gallery
          </h1>
          {photos.map(({ image, title, position }) => (
            <div key={title} className="pt-2 pb-4 ">
              <div>
                <img src={image} className="w-auto rounded-lg" />
                <h1 className="text-sm tracking-tight text-black/80 pt-3">{title}</h1>
                <h1 className="text-xs text-black/50 pb-5">{position}</h1>
              </div>
            </div>
          ))} */}
        </div>
      </div>
  );
}
