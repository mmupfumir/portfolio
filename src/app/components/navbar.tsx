import Link from "next/link";

export default function Navbar() {
  return (

    <div className="bg-white sticky top-0 px-5 py-5 tracking-tight flex flex-row items-center justify-between gap-10">
      <h1 className="text-black text-xs transition duration-500">MILTON M</h1>
      <div className="flex flex-row gap-5 items-center">
        <Link href="/Projects" className="text-black/60 hover:text-black/20 text-xs transition duration-500">Projects</Link>
        <Link href="/Cv" className="text-black/60 hover:text-black/20 text-xs transition duration-500">About</Link>
        <Link href="mailto:mmupfumir@hartford.edu" className="bg-black hover:bg-blue-600 p-1 px-2 rounded-full text-white text-xs transition duration-500">Get in touch</Link>
      </div>
    </div>
  );
}
