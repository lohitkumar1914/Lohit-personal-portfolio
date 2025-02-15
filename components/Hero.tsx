import { FaLocationArrow, FaDownload } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import profile from "../public/profile.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="pb-12 sm:pb-20 pt-24 sm:pt-32 h-auto">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-[90vh]"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/**
         *  UI: grid
         *  change bg color to bg-black-100 and reduce grid color from
         *  0.2 to 0.03
         */}
        <div
          className="h-[90vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient for the container to give a faded look */}
          <div
            // chnage the bg to bg-black-100, so it matches the bg color and will blend in
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-4 sm:my-8 z-10">
          <div className="max-w-[95vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <Image
              src={profile}
              alt="lohit kumar"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
            />
            {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Hi! I'm Lohit,  I'm a full-stack Software Engineer"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p
              className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl 
             px-4 sm:px-0 space-y-1"
            >
              Aspiring full stack developer passionate about building modern and
              efficient web applications, Currently learning AI/ML and Devops
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-4">
              <a href="#contact">
                <MagicButton
                  title="contact me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="/lohit_CV.pdf" download>
                <MagicButton
                  title="Resume"
                  icon={<FaDownload />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
