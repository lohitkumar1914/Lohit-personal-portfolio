"use client";

import React from "react";
import { skillsData } from "@/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center mx-auto max-w-[53rem] scroll-mt-28 text-center py-8 sm:py-16 px-3 sm:px-6"
    >
      <h1 className="heading pb-6 sm:pb-10">
        My <span className="text-purple">Skills</span>
      </h1>
      <ul className="flex flex-wrap justify-center gap-1.5 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-lg sm:rounded-xl px-2 py-1.5 sm:px-5 sm:py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
