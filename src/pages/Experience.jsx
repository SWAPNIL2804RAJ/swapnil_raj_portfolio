import React, { useState } from "react";
import { experienceData } from "../constants/data";
import {
  subHeadingStyles,
  titleStyles,
  captionStyles,
  bodyStyles,
  primaryCard,
  primaryButtonStyles,
} from "../styles";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { easeInOut, motion } from "framer-motion";
import { verticalStaggeredAnimation } from "../animations/variant";

const ExperienceItem = ({
  experience: { company, timeline, jobTitle, location, description },
}) => {
  // Expanding State Variables and helper functions
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded((prev) => !prev);

  return (
    // Card Container
    <div className={primaryCard}>
      {/* Company and the Location is defined here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={titleStyles}>{company}</p>

        <div className="flex gap-2 items-center">
          <p className={captionStyles}>{location}</p>

          <div onClick={toggle} className={`${primaryButtonStyles} p-1`}>
            {isExpanded ? (
              <IoIosArrowDropup className="h-5 w-5" />
            ) : (
              <IoIosArrowDropdown className="h-5 w-5" />
            )}
          </div>
        </div>
      </div>

      {/* Position and the Timeline is shown here */}
      <div className="flex gap-2 justify-between items-baseline">
        <p className={captionStyles}>{jobTitle}</p>
        <p className={captionStyles}>{timeline}</p>
      </div>

      {/* Description is shown here if the user expands the card */}
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={isExpanded ? { height: "auto" } : { height: 0 }}
        transition={{ duration: 0.3, easings: easeInOut }}
      >
        <p className={bodyStyles}>{description}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  // UI Data for Experience
  const { id, sectionHeading, expList } = experienceData;

  return (
    // Experience Container
    <div id={id} className="flex flex-col gap-8 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {expList.map((experience, index) => (
          <motion.div
            key={index}
            variants={verticalStaggeredAnimation(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
          >
            <ExperienceItem experience={experience} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
