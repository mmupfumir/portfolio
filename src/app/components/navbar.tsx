import Link from "next/link";

export default function Navbar() {
  return (

    <div className="py-5 sticky top-0">
      <div className="container tracking-tight flex flex-row items-center justify-center gap-1 font-light">
        <div className="flex flex-row gap-3 items-center text-xs md:text-sm">
          <Link href="/Cv" className="bg-black/10 backdrop-blur-md p-2 px-3 rounded-full text-black transition duration-500">Software</Link>
          <Link href="mailto:mmupfumir@hartford.edu" className="bg-black/10 backdrop-blur-md p-2 px-3 rounded-full text-black transition duration-500 font-normal">Film</Link>
        </div>
      </div>
    </div>
  );
}
