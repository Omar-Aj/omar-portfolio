import Link from "next/link";
import MenuButton from "@/components/MenuButton";

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 hidden -translate-x-1/2 items-center justify-center gap-2 rounded-full border-2 border-theme-d-blue bg-theme-white bg-opacity-50 px-4 text-theme-d-blue shadow-2xl backdrop-blur-md md:flex">
      <Link
        className="flex items-center justify-center bg-opacity-50 py-2 text-lg font-semibold hover:text-black md:gap-1"
        href="#firstSection"
      >
        About
      </Link>
      <p>•</p>
      <Link
        className="flex items-center justify-center bg-opacity-50 py-2 text-lg font-semibold hover:text-black md:gap-1"
        href="#secondSection"
      >
        Projects
      </Link>
      <p>•</p>
      <Link
        className="flex items-center justify-center bg-opacity-50 py-2 text-lg font-semibold hover:text-black md:gap-1"
        href="#thirdSection"
      >
        Social
      </Link>
    </nav>
  );
}
