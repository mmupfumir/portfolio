import Link from "next/link";

export default function Navbar() {
  return (

    <div className="bg-white/80 backdrop-blur-lg sticky top-0 px-5 text-black py-3 tracking-tight flex flex-row items-center sm:justify-between md:justify-center gap-5">
      <Link href="/Gallery" className="text-black/40 hover:text-black/20 transition duration-500">GALLERY</Link>
      <h1 className="text-sm text-center">
        MM
      </h1>
    </div>
  );
}
