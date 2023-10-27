import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 left-1/2 z-50 hidden -translate-x-1/2 items-center justify-center gap-2 rounded-full border-2 border-theme-d-blue bg-theme-white bg-opacity-70 px-4 text-theme-d-blue shadow-2xl backdrop-blur-md md:flex">
      <Link
        className="flex items-center justify-center py-2 text-lg font-semibold hover:text-black"
        href="#firstSection"
      >
        About
      </Link>
      <p>•</p>
      <Link
        className="flex items-center justify-center py-2 text-lg font-semibold hover:text-black"
        href="#secondSection"
      >
        Experience
      </Link>
      <p>•</p>
      <Link
        className="flex items-center justify-center py-2 text-lg font-semibold hover:text-black"
        href="#thirdSection"
      >
        Social
      </Link>
    </nav>
  );
};

export default Navbar;
