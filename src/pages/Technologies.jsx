import React from "react";
import { technologyData } from "../constants/data";
import { bodyStyles, secondaryCard, subHeadingStyles } from "../styles";
import { scaleIn } from "../animations/variant";
import { motion } from "framer-motion";
import { horizontalSlide } from "../animations/variant";

const Technologies = () => {
  // UI Data for Technologies
  const { sectionHeading, bodyText, techList } = technologyData;

  return (
    <div className="flex flex-col gap-8 pt-6">
      <h1 className={subHeadingStyles}>{sectionHeading}</h1>
      <motion.div
        className="overflow-hidden"
        variants={horizontalSlide("right")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <p className={bodyStyles}>{bodyText}</p>
      </motion.div>

      <div className="flex flex-wrap gap-4">
        {techList.map((tech, index) => (
          <motion.div
            key={index}
            className="relative h-16 w-16 flex justify-center items-center group"
            variants={scaleIn(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
          >
            <img
              className={`p-2 h-14 w-14 object-contain rounded-xl shadow-lg ${tech.shadow} group-hover:h-16 group-hover:w-16 transition-all duration-300`}
              src={tech.imgSrc}
              alt={tech.stack + " Logo"}
            />

            <label
              className={`${secondaryCard} text-xs font-thin text-onBackground font-mcLaren absolute hidden z-10 top-20 text-center transition-all duration-300 group-hover:inline`}
            >
              {tech.stack}
            </label>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
