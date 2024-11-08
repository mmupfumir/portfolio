"use client";
import { motion } from "framer-motion";

const worksData = [
  {
    text: "Web Development",
    name: "SWE",

  },
  {
    text: "Photography",
    name: "SWE",
  },
  {
    text: "Design",
    name: "Designer",
  },
  {
    text: "Branding",
    name: "Branding",
  }
];

export default function Works() {
  return (
    <section className="pb-56">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ring-1 ring-black/10 sm:py-5 md:py-5 ">
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex sm:gap-3 md:gap-8 flex-none"
        >
          {[...worksData, ...worksData].map((work) => (
            <div
              key={work.name}
            >
              <div className="pb-2 font-normal text-black/80 sm:text-4xl tracking-tighter md:text-2xl">
                {work.text}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
