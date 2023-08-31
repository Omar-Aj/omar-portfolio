import MenuIcon from "@/public/assets/icons/menu.svg";
import Image from "next/image";

export default function Menu({ setIsMenuOpen }) {
  return (
    <div
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="fixed bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer items-center gap-2 rounded-full border-2 border-theme-d-blue bg-theme-white bg-opacity-50 px-4 text-theme-d-blue shadow-2xl backdrop-blur-md md:hidden"
    >
      <Image src={MenuIcon} className="py-2" />
      <p className="py-2 text-lg font-semibold">Menu</p>
    </div>
  );
}