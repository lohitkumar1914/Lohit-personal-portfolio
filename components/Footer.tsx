import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center justify-between min-h-screen relative">
        {/* background grid - fixed at bottom */}
        <div className="w-full absolute left-0 bottom-0 min-h-96">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>

        {/* Main content - centered */}
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you.
          </p>
          <a href="mailto:lohitkumar1914@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Footer bottom section - fixed at bottom */}
        <div className="w-full border-t border-black-300 mt-16 pt-8 pb-4 z-10">
          <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-4">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2030 Lohit Kumar
            </p>

            <div className="flex items-center gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={info.img}
                    alt={`${info.id} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
