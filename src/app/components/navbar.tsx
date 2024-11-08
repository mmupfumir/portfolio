import Link from "next/link";


export default function Navbar() {
  return (

    <div className="py-10 sticky top-0">
      <div className="container tracking-tight flex flex-row items-center justify-center gap-1 font-light">
        <div className="flex flex-row gap-3 items-center text-xs md:text-sm">
          <Link href="/" className="hover:ring-1 ring-black/10 bg-black/5 backdrop-blur-md p-2 px-3 rounded-full text-black transition duration-500">Software</Link>
          <Link href="/Photography" className="hover:ring-1 ring-black/10 bg-black/5 backdrop-blur-md p-2 px-3 rounded-full text-black transition duration-500 font-normal">Photography</Link>
        </div>
      </div>
    </div>
  );
}
