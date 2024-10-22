import Image from "next/image";
import { Back } from "../components/back";

export default function Cv() {
  const jobs = [
    {
      title: "Trading With Mat",
      subtitle: "Contracted Full-Stack Engineer",
      date: "Now",
      link: "https://www.tradingwithmat.com/",
    },
    {
      title: "Car Fluent",
      subtitle: "Backend Software Engineer Intern",
      date: "2024",
      link: "https://www.car-fluent.com/",
    },
    {
      title: "University of Hartford, CETA",
      subtitle: "IT Admin",
      date: "2023",
      link: "https://www.hartford.edu/academics/schools-colleges/ceta/default.aspx",
    },
  ];

  const extracurriculars = [
    {
      title: "National Society of Black Engineers",
      subtitle: "Vice President | Executive Board Treasurer '23",
      date: "Now",
    },
    {
      title: "University of Hartford, Reslife",
      subtitle: "Resident Assistant",
      date: "Now",
    },
    {
      title: "National Organization of Minority Architecture Students",
      subtitle: "Treasurer",
      date: "2023",
    },
    {
      title: "Harvard University",
      subtitle: "CS50X Computer Science Scholar",
      date: "2023",
    },
    {
      title: "Save our Streets",
      subtitle: "Python Instructor",
      date: "2023",
    },
    {
      title: "SGA",
      subtitle: "Upperclassmen Representative",
      date: "2022",
    },
  ];

  const photos = [
    {
      image: "/images/nsbe.jpg",
      title: "NSBE National Convention 2024",
      position: "Vice President",
      description: "As the Executive Board Treasurer for the 2023/24 academic year, I have established and maintained a partnership with Epic Hire, providing student members with valuable exposure to strategic business practices and industry insights. In my role, I managed an $18,000 budget over two semesters, ensuring the organization’s financial stability and supporting its initiatives. I also independently coordinated the Hartford Chapter’s attendance at the 50th National NSBE Conference in Atlanta, offering student engineers the opportunity to network with industry leaders and advance their professional development. I now serve as the 24/25 Vice President.",
    },
    {
      image: "/images/pcm.jpg",
      title: "University of Hartford Protestant Campus Ministry",
      position: "Student Speaker & Media Director",
      description: "UHart PCM has been a home for me throughout my time as a student, providing the sense of belonging and community that we all deserve. Over time, I’ve taken on the role of student speaker, occasionally delivering the Tuesday night message.With confidence honed through my experience in Architecture presentations and social media content creation, which has attracted an audience of 14,000 followers, public speaking has become a natural and integral part of my leadership journey."
    },
    {
      image: "/images/men.jpg",
      title: "Mens Leadership Group Retreat",
      position: "Co-Founder & President",
      description: "As someone attuned to my emotions and always striving to understand underlying issues, I believe emotional intelligence is of paramount importance. In the fall of 2023, I co-founded a Men’s Leadership Group on campus, alongside co-founder & president - David Ngethe (all black outfit). This initiative aimed to help men gain deeper self-awareness and positioning them to become more effective leaders. Today, over 30 men contribute to the group's mission."
    },
    {
      image: "/images/ra.jpg",
      title: "Fall Move-In 2024",
      position: "Resident Assistant",
      description: "Leading a vibrant community of 160 residents has taught me the importance of proactive communication and conflict resolution. In my role as a Resident Assistant at the University of Hartford, I not only manage resident records and incident documentation daily but also design engaging social programs that foster connection and growth. Through bi-weekly floor meetings, I encourage open dialogue and problem-solving, ensuring a more functional and cohesive environment—key skills that directly align with the demands of program management."
    },
    {
      image: "/images/nomas.jpg",
      title: "National Organization of Minority Architecture Students Eboard '23",
      position: "Executive Board Treasurer",
      description: "During my time as Executive Board Treasurer for the National Organization of Minority Architecture Students from August 2023 to May 2024, I was responsible for managing a $2,000 budget over two semesters. I also led campus fundraisers tailored to Architecture students, successfully raising over $3,000 to support the group’s efforts and initiatives."
    },
    {
      image: "/images/sga.jpg",
      title: "Presidential Campus Victory Summit '23",
      position: "Upperclassmen Residential Chair",
      description: "As the Upperclassmen Residential Representative for the Student Government Association from August 2022 to August 2023, I independently represented over 2,000 residents, providing support and addressing their concerns regarding residential life. I participated in weekly senate meetings alongside the Executive Board, contributing to initiatives designed to improve campus life. In June 2023, I had the opportunity to attend the Campus Victory Summit at the Capitol Building in Washington, D.C., as one of three SGA representatives, where I engaged with SGA presidents and vice presidents from across the country to discuss leadership strategies for fostering positive change."
    }
  ];

  return (
    <div>
      <div className="container">
        <div className="py-14 sticky top-0">
          <Back />
        </div>

          <h1 className="text-sm text-black pt-8 pb-1">Work</h1>
          {jobs.map(({ title, subtitle, date, link }) => (
            <div key={title} className="flex justify-between pt-2 pb-4 border-t border-black/10">
              <div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-black hover:text-white transition-hover duration-300"
                >
                  {title}
                </a>
                <h1 className="text-xs text-black/50">{subtitle}</h1>
              </div>
              <h1 className="text-xs text-black/50">{date}</h1>
            </div>
          ))}

          <h1 className="text-sm text-black pt-8 pb-1">
            Extra Curriculars
          </h1>
          {extracurriculars.map(({ title, subtitle, date }) => (
            <div key={title} className="flex justify-between pt-2 pb-4 border-t border-black/10">
              <div>
                <h1 className="text-xs font-medium text-black">{title}</h1>
                <h1 className="text-xs text-black/50">{subtitle}</h1>
              </div>
              <h1 className="text-xs text-black/50">{date}</h1>
            </div>
          ))}

          <h1 className="text-sm text-black pt-8 pb-1 tracking-tight">
            Leadership Gallery
          </h1>
          {photos.map(({ image, title, position, description }) => (
            <div key={title} className="pt-2 pb-4 ">
              <div>
                <Image src={image} alt={title} className="w-auto rounded-lg" />
                <h1 className="text-sm tracking-tight text-black/80 pt-3">{title}</h1>
                <h1 className="text-xs text-black/50 pb-5">{position}</h1>
              </div>
              <h1 className="text-xs text-black/50 pb-5">{description}</h1>
            </div>
          ))}
          <h1 className="text-xs text-black py-3 text-center font-semibold">To whom much is given, much is expected.</h1>
        </div>
      </div>
  );
}
