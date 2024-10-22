import Image from "next/image";
import { Back } from "../components/back";

export default function Portfolio() {
  return (
    <section className="container">
      <div className="py-14 sticky top-0">
        <Back />
      </div>

      <h1 className="tracking-tight font-medium">
        Simple Portfolio Design
      </h1>
      <p className="text-black/80 text-xs md:text-sm py-5">
      A Product Manager Portfolio template designed in Figma. Through this project, I embraced a minimalist yet purposeful design approach. My background in architectural design has trained me to create spaces with intention and care, skills I’ve successfully applied to my design work in the tech world.
      </p>

        <div className="rounded-md pt-5">
          <Image
            src="/images/portfolio.jpg"
            width={500}
            height={500}
            alt="im-1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
    </section>
  );
}
