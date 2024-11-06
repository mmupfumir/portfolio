"use client";
import { motion } from "framer-motion";

const worksData = [
  {
    text: "Web Development",
    name: "SWE",

  },
  {
    text: "Design",
    name: "Designer",
  },
  {
    text: "Photography",
    name: "Photography",
  },
  {
    text: "Branding",
    name: "Branding",
  }
];

export default function Works() {
  return (
    <section className="px-5">
      <div className="flex overflow-hidden bg-[#f9f9f9] ring-1 ring-black/10 sm:py-5 md:py-5 rounded-3xl">
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="flex sm:gap-3 md:gap-8 flex-none"
        >
          {[...worksData, ...worksData].map((work) => (
            <div
              key={work.name}
            >
              <div className="pb-2 font-normal text-black/80 sm:text-5xl tracking-tighter md:text-9xl hover:text-black">
                {work.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
