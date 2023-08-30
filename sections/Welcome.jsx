import Image from "next/image";
import person from "@/public/assets/icons/person.svg";
import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Welcome() {
  return (
    <div className="container mx-auto flex h-sectionH flex-col-reverse items-center justify-evenly py-24">
      <p
        className={`${dancing_script.className} bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-center text-8xl font-extrabold`}
      >
        Omar Ajaj
      </p>
      <Image
        src={person}
        className="w-32 rounded-full border border-slate-600 bg-white shadow-md md:w-60"
      />
    </div>
  );
}
