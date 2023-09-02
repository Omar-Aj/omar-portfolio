import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import PersonalImg from "@/public/assets/images/personal-image.jpg";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="flex h-screen flex-col bg-gradient-radial from-theme-blue to-theme-d-blue md:h-sectionH">
      <div className="container flex h-full flex-col-reverse items-center justify-center text-theme-white md:flex-row md:justify-around">
        <article className="flex flex-col text-center md:text-left">
          <p className="text-md mb-4">
            Hello Everyone<span className="text-4xl">👋🏻</span>. I am
          </p>
          <h1 className={`mb-2 text-7xl font-extrabold lg:text-8xl`}>
            Omar Ajaj
          </h1>
          <p className="text-sm font-bold text-neutral-300">
            Software Engineering Student | Frontend Developer
          </p>
        </article>
        <Image
          alt="personal-image"
          src={PersonalImg}
          className="mb-16 w-64 rounded-full border-4 border-theme-sky drop-shadow-2xl md:mb-0 md:block lg:w-72 xl:w-96"
        />
      </div>
    </section>
  );
}
