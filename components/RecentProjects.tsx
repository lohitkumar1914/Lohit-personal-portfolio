"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20 w-full">
        <h1 className="heading">
          My <span className="text-purple"> projects</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 w-full px-4">
          {projects.map((item) => (
            <div
              className="rounded-3xl bg-[#13162D] overflow-hidden"
              key={item.id}
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex-1">
                    <h1 className="font-bold text-xl">{item.title}</h1>
                  </div>
                  <div>
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple transition-colors p-2 rounded-full "
                      >
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#BEC1DD] text-sm mb-4 line-clamp-2">
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center -space-x-3">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                      >
                        <img src={icon} alt={`tech-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple hover:opacity-80 transition-opacity text-sm"
                  >
                    Live Site
                    <FaLocationArrow className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
