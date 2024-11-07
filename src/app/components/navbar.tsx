import Link from "next/link";

export default function Navbar() {
  return (

    <div className="bg-white  px-5 py-5 tracking-tight flex flex-row items-center justify-between gap-1 font-light">
      <h1 className="p-2 px-3 ring-1 ring-black rounded-full text-black text-xs md:text-sm transition duration-500">Milton Mupfumira</h1>
      <div className="flex flex-row gap-3 items-center text-xs md:text-sm">
        <Link href="/Cv" className="bg-[#f9f9f9] p-2 px-3 rounded-full text-black transition duration-500">About Me</Link>
        <Link href="mailto:mmupfumir@hartford.edu" className="bg-black p-2 px-3 rounded-full text-white  rounded-fulltransition duration-500 font-normal">Contact</Link>
      </div>
    </div>
  );
}
