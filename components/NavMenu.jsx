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
        } fixed bottom-[60px] left-1/2 z-50 w-32 -translate-x-1/2 flex-col overflow-hidden rounded-lg border-2 border-theme-d-blue bg-theme-white bg-opacity-70 text-theme-d-blue shadow-2xl backdrop-blur-md transition-all`}
      >
        <Link
          href="#firstSection"
          className="flex items-center justify-center border-b border-neutral-700 py-2 font-semibold hover:bg-theme-white hover:bg-opacity-30 hover:text-black"
        >
          About
        </Link>
        <Link
          href="#secondSection"
          className="flex items-center justify-center border-b border-neutral-700 py-2 font-semibold hover:bg-theme-white hover:bg-opacity-30 hover:text-black"
        >
          Experience
        </Link>
        <Link
          href="#thirdSection"
          className="flex items-center justify-center py-2 font-semibold hover:bg-theme-white hover:bg-opacity-30 hover:text-black"
        >
          Social
        </Link>
      </nav>
    </div>
  );
}
