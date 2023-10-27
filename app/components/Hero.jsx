import Image from "next/image";
import PersonalImg from "@/public/assets/images/personal-image.jpg";
import Instagram from "@/public/assets/icons/instagram.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import At from "@/public/assets/icons/at.svg";

export default function Hero() {
  return (
    <section className="flex h-screen flex-col justify-center bg-gradient-hero bg-top bg-no-repeat md:h-[80vh]">
      <div className="container flex flex-col items-center justify-center md:flex-row-reverse md:justify-around">
        <Image
          alt="personal-image"
          src={PersonalImg}
          className="mb-4 w-56 rounded-full border-4 border-theme-sky drop-shadow-2xl md:mb-0 md:block lg:w-72 xl:w-96"
          priority
        />
        <article className="flex flex-col text-center md:text-left">
          <p className="text-md mb-2">
            Hello Everyone<span className="text-xl">👋🏻</span>. I am
          </p>
          <h1 className={`mb-3 text-6xl font-extrabold lg:text-8xl`}>
            Omar Ajaj
          </h1>
          <p className="text-md mb-4 font-bold text-neutral-500">
            Software Engineering Student • Frontend Developer
          </p>
          <div className="flex justify-center gap-2 md:justify-normal">
            <a
              href="https://www.linkedin.com/in/omar-ajaj-397475215/"
              target="_blank"
              className="flex items-center justify-center gap-1 rounded-md px-2 py-1 hover:bg-black hover:bg-opacity-10"
            >
              <Image src={Linkedin} alt="LinkedIn" />
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.instagram.com/omqr.aj/"
              target="_blank"
              className="flex items-center justify-center gap-1 rounded-md px-2 py-1 hover:bg-black hover:bg-opacity-10"
            >
              <Image src={Instagram} alt="Instagram" />
              <p>Instagram</p>
            </a>
            <a
              href="mailto:omar.aj.business@gmail.com"
              // target="_blank"
              className="flex items-center justify-center gap-1 rounded-md px-2 py-1 hover:bg-black hover:bg-opacity-10"
            >
              <Image src={At} alt="email" />
              <p>Email</p>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
