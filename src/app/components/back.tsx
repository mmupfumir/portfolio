import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export function Back() {
  return (
    <Link href="/" className="text-black/40">
      <div className="relative w-10 h-10 rounded-full bg-black/10 hover:bg-black/5 transition duration-300 backdrop-blur-md">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <FaArrowLeft className="text-black text-sm transition duration-300" />
        </div>
      </div>
    </Link>
  );
}