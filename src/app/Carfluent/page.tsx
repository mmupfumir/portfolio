/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Back } from "../components/back";

/**
 * Work is a Next.js page component that displays a page for a personal project.
 *
 * @returns A JSX element representing the Work page.
 */
export default function Carfluent() {
  return (
    <section className="container">

      <div className="py-14 sticky top-0">
        <Back />
      </div>

      <h1 className="font-medium tracking-tight">
        Carfluent
      </h1>
      <h1 className="text-xs text-black/30">Backend Engineering Intern</h1>
      <div className="text-black/80 text-xs md:text-sm py-5 flex flex-col gap-5">
        <p>
          <span className="text-black/50 flex text-xs pb-2">Company</span>
          CarFluent is a dealership management system that integrates all aspects of business, from DMS and dealer CRM to Digital Retail and Accounting.
        </p>
        <p>
          <span className="text-black/50 flex text-xs pb-2">Context</span>
          I joined the Backend Engineering team in the month of July 2024, where I worked on improving the efficiency of the Inventory Management system. During the time, I was introduced to ASP.Net and C# as well as collaboration tools like Slack and Azure Devops.
        </p>
      </div>

      <div className="p-3 bg-black/10 rounded-md">
        <div className="">
          <h1 className="text-black/50 text-xs">The Art of Debugging</h1>
          <div className="text-black pt-2 pb-5 tracking-tight font-semibold leading-5">
            <h1>Cultivating a Reliable Routine</h1>
          </div>
        </div>
        <h1 className="text-black/50 text-xs py-2">Debugging Tools</h1>
        <div className="flex flex-col gap-2">
          <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2 flex flex-col gap-1">
            Swagger UI
            <span className="text-white/50">I used Swagger UI to visually explore, test, and document APIs, making it easy to interact with endpoints,
            view request and response formats, and validate backend behavior.</span>
          </h1>
          <h1 className="text-white tracking-tight text-xs bg-black/80 rounded-sm p-2 flex flex-col gap-1">
            Chrome developer inspector
            <span className="text-white/50">I used Chrome Developer Inspector to debug and analyze network requests, inspect API responses, and
              troubleshoot issues in real-time, working alongside Swagger UI to ensure smooth backend interactions.</span>
          </h1>
        </div>
      </div>
      <div className="py-5">
      <div className=" bg-black/5 ring-4 ring-white/20 rounded-md p-3 flex flex-col gap-5">
        <a href="https://www.car-fluent.com/" target="_blank" rel="noopener noreferrer" className="text-xs">
          <h1>Launch Site</h1>
        </a>
        </div>
      </div>

      <div className="py-5">
        <div className="bg-black/10 rounded-md p-5 flex flex-col gap-5">
          <Image
            src="/images/im.png"
            width={500}
            height={500}
            alt="im-1"
            className="w-full h-full object-cover rounded-md"
          />
          <Image
            src="/images/im2.png"
            width={500}
            height={500}
            alt="im2-1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
