import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 items-center justify-center gap-1 rounded-full bg-theme-white bg-opacity-60 p-2 shadow-2xl backdrop-blur-sm">
      <Link
        className="flex h-12 items-center justify-center rounded-full bg-theme-blue px-2 py-1 font-semibold text-white shadow-sm md:gap-1"
        href="#firstSection"
      >
        <span className="drop-shadow-sm">👋🏼</span>
        <p className="drop-shadow-sm">About</p>
      </Link>
      <Link
        className="flex h-12 items-center justify-center rounded-full bg-theme-white px-2 py-1 font-semibold shadow-sm md:gap-1"
        href="#secondSection"
      >
        <span className="drop-shadow-sm">💻</span>
        <p className="drop-shadow-sm">Projects</p>
      </Link>
      <Link
        className="flex h-12 items-center justify-center rounded-full bg-theme-white px-2 py-1 font-semibold shadow-sm md:gap-1"
        href="#thirdSection"
      >
        <span className="drop-shadow-sm">📧</span>
        <p className="drop-shadow-sm">Social</p>
      </Link>
    </nav>
  );
}
