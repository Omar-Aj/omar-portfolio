"use client";
import { useState } from "react";
import MenuButton from "@/components/MenuButton";
import Link from "next/link";

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <MenuButton setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed bottom-[66px] left-1/2 w-32 -translate-x-1/2 flex-col rounded-lg border-2 border-theme-d-blue bg-theme-white bg-opacity-50 text-theme-d-blue shadow-2xl backdrop-blur-md transition-all`}
      >
        <Link
          href="#firstSection"
          className="flex items-center justify-center border-b border-theme-sky py-2 font-semibold hover:text-black"
        >
          About
        </Link>
        <Link
          href="#secondSection"
          className="flex items-center justify-center border-b border-theme-sky py-2 font-semibold hover:text-black"
        >
          Projects
        </Link>
        <Link
          href="#thirdSection"
          className="flex items-center justify-center py-2 font-semibold hover:text-black"
        >
          Social
        </Link>
      </nav>
    </div>
  );
}
