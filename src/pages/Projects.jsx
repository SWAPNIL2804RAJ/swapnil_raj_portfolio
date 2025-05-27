import React from "react";
import {
  bodyStyles,
  captionStyles,
  primaryButtonStyles,
  primaryCard,
  secondaryCard,
  subHeadingStyles,
  titleStyles,
} from "../styles";
import { projectData } from "../constants/data";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { verticalStaggeredAnimation } from "../animations/variant";

const ProjectItem = ({
  project: { image, title, stack, githubLink, description },
}) => (
  // Card Container
  <div className={primaryCard}>
    {/* Project Image */}
    {image && (
      <img
        className="w-full rounded-lg object-contain"
        src={image}
        alt="Project Image"
      />
    )}

    {/* Title and Github Link Container */}
    <div className="flex flex-row gap-4 items-center justify-between">
      <h3 className={titleStyles}>{title}</h3>

      <a
        className={`${primaryButtonStyles} p-2`}
        href={githubLink}
        target="_blank"
      >
        <FaRegShareFromSquare />
      </a>
    </div>

    {/*Stack Tags Container*/}
    <div className="flex flex-row flex-wrap gap-2">
      {stack.map((stackItem, index) => (
        <div key={index} className={secondaryCard}>
          <p className={`${captionStyles} opacity-80`}>{stackItem}</p>
        </div>
      ))}
    </div>

    <p className={bodyStyles}>{description}</p>
  </div>
);

const Projects = () => {
  // UI Data for the projects Section
  const { id, sectionHeading, projectList } = projectData;

  return (
    // Projects Container
    <div id={id} className="flex flex-col gap-8 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={verticalStaggeredAnimation(index)}
            initial="initial"
            whileInView="final"
            viewport={{ once: true }}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
