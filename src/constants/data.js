// Technologies Images
import cssLogo from "../assets/technologies/cssLogo.png";
import firebaseLogo from "../assets/technologies/firebaseLogo.png";
import gitLogo from "../assets/technologies/gitLogo.png";
import htmlLogo from "../assets/technologies/htmlLogo.png";
import javaLogo from "../assets/technologies/javaLogo.png";
import javascriptLogo from "../assets/technologies/javascriptLogo.png";
import mySqlLogo from "../assets/technologies/mySqlLogo.png";
import reactLogo from "../assets/technologies/reactLogo.png";
import tailwindLogo from "../assets/technologies/tailwindLogo.png";
import myImage from "../assets/myImage.jpg";

// Projects Images
import homiefix from "../assets/projects/homiefix.png";
import aiImage from "../assets/projects/aiImage.png";
import booking from "../assets/projects/booking.png";

// Socials Images
import githubLogo from "../assets/socials/githubLogo.png";
import gmailLogo from "../assets/socials/gmailLogo.png";
import instagramLogo from "../assets/socials/instagramLogo.png";
import linkedInLogo from "../assets/socials/linkedInLogo.png";
import leetcodeLogo from "../assets/socials/leetcodeLogo.png";

export const headerData = {
  websiteName: "Portfolio",
  menuItems: [
    { id: "#home", title: "Home" },
    { id: "#resume", title: "Resume" },
    { id: "#experience", title: "Experience" },
    { id: "#project", title: "Projects" },
    { id: "#social", title: "Social" },
    { id: "#contact", title: "Contact Me" },
  ],
};

export const heroData = {
  id: "home",
  name: "Swapnil Raj",
  info: `I’m a dedicated software developer with a strong background in web development and a solid foundation in front-end technologies like 
  HTML, CSS, JavaScript, and ReactJS. Alongside development, I also enjoy working as a UI/UX designer, bringing intuitive and visually appealing 
  interfaces to life. Driven by curiosity and a passion for creating meaningful digital experiences, I’m currently strengthening my backend 
  development skills using Node.js, Express.js, and MongoDB. I'm also proficient in SQL and Java, aiming to become a well-rounded full-stack 
  developer capable of building robust, end-to-end applications.
    `,
  profileImage: {
    src: myImage,
    alt: `Swapnil Raj's Image`,
  },
};

export const resumeData = {
  id: "resume",
  sectionHeading: "Resume",
  content: `You can view or download my resume using the link below. It outlines my skills, experience, and projects in more detail.`,
  resumeLink: "https://drive.google.com/file/d/1Gv6WgQ4ZaS1I8hiNKx_QZc__OHGFIqgt/view",
};


export const experienceData = {
  id: "experience",
  sectionHeading: "Experiences",
  expList: [
    {
      company: "Celebal Technologies",
      timeline: "June 2024 - August 2024",
      jobTitle: "Web Dveloper Intern",
      location: "Remote",
      description: `
        During my internship at Celebal Technologies, I worked as a web developer on real-world projects, focusing on building and optimizing 
        interactive web applications using ReactJS. This role enhanced my proficiency in component-based architecture and responsive design 
        principles. The experience also deepened my understanding of clean UI/UX practices and reinforced the importance of writing efficient, 
        maintainable code in a collaborative team environment.
    `,
    },

    {
      company: "TechBairn Research Pvt. Ltd",
      timeline: "March 2023 - July 2023",
      jobTitle: "Campus Ambassador",
      location: "Bhubaneswar, Odisha",
      description: `
        I collaborated with the marketing team to design and develop targeted, visually engaging advertisements aligned with client branding 
        strategies, boosting user engagement and conversions. Additionally, I supported the delivery of services to over 50 clients by working 
        with cross-functional teams to tailor solutions and ensure timely project completion, contributing to campaigns that enhanced clients’ 
        online presence and reach.
    `,
    },

    {
      company: "TED x KIIT University",
      timeline: "December 2023 - August 2024",
      jobTitle: "Public Relations",
      location: "Bhubaneswar, Odisha",
      description: `
      Spearheaded external communications to effectively promote TEDxKIIT University events, boosting audience engagement and participation. 
      Cultivated and nurtured strong relationships with sponsors and partners, ensuring enhanced visibility and the overall success of the events.
    `,
    },
  ],
};

export const technologyData = {
  sectionHeading: "Technologies",
  bodyText: `
  My technical journey has been centered around web development, where I have honed my skills in creating scalable and efficient front-end 
  solutions. I am also strengthening my backend development skills and working with SQL to expand my expertise. Additionally, I focus on front-end 
  development, using tools like React and Tailwind CSS to design visually engaging and interactive user interfaces.
  `,
  techList: [
    { imgSrc: javaLogo, shadow: "shadow-red-500", stack: "Java" },
    { imgSrc: htmlLogo, shadow: "shadow-orange-500", stack: "HTML" },
    { imgSrc: cssLogo, shadow: "shadow-blue-500", stack: "CSS" },
    {
      imgSrc: javascriptLogo,
      shadow: "shadow-yellow-500",
      stack: "JavaScript",
    },
    { imgSrc: reactLogo, shadow: "shadow-blue-400", stack: "React" },
    { imgSrc: tailwindLogo, shadow: "shadow-blue-500", stack: "Tailwind CSS" },
    { imgSrc: mySqlLogo, shadow: "shadow-white", stack: "MySQL" },
    { imgSrc: firebaseLogo, shadow: "shadow-yellow-500", stack: "Firebase" },
    { imgSrc: gitLogo, shadow: "shadow-orange-700", stack: "Git" },
  ],
};

export const projectData = {
  id: "project",
  sectionHeading: "Projects",
  projectList: [
    {
      image: homiefix,
      title: "HomieFix",
      stack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Deployed on Vercel and Render"],
      githubLink: "https://github.com/SWAPNIL2804RAJ/HomieFix",
      description: `
      HomieFix is a comprehensive home service platform that connects users with skilled professionals for various services, including plumbing, 
      electrical work, and cleaning. The platform features a user-friendly interface, allowing users to easily book services, track their requests, 
      and communicate with service providers. With a focus on reliability and convenience, HomieFix aims to simplify the process of finding and 
      hiring trusted professionals for home maintenance needs.
    `,
    },

    {
      image: aiImage,
      title: "Ai- Image Generator",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "Tailwind CSS",
        "Deployed on Vercel and Render",
      ],
      githubLink: "https://github.com/SWAPNIL2804RAJ/Ai_ImageGenerator",
      description: `
      Imagino.ai is a web application that allows users to generate stunning images through AI using text prompts. It has been built using the MERN 
      stack (MongoDB, Express.js, React.js, Node.js), this project focuses on seamless UI/UX and smooth performance with authentication of user and 
      while integrating with AI-based image generation API [CLIPDROP API]. `,
    },

    {
      image: booking,
      title: "Booking App",
      stack: ["HTML", "CSS", "JavaScript", "React","Firebase" , "Deployed on Vercel"],
      githubLink: "https://github.com/SWAPNIL2804RAJ/My-Booking",
      description: `
      MyBooking is a comprehensive travel booking platform built with ReactJS. It allows users to seamlessly book cabs, hotels, and flights through an intuitive and 
      responsive interface. The application includes secure user authentication using Firebase Cloud Platform, ensuring safe access and personalized 
      experiences. With a focus on user convenience, the app streamlines the booking process by bringing multiple travel services into a single 
      platform.
         `,
    },
  ],
};

export const socialData = {
  id: "social",
  sectionHeading: "Socials",
  content: `
      Connecting with people is at the heart of growth and collaboration. From showcasing my projects on GitHub to networking on LinkedIn and sharing creative moments on Instagram, these platforms represent my journey. Let's connect and create something impactful together!
  `,
  socialList: [
    {
      type: "LinkedIn",
      name: "Swapnil Raj",
      url: "https://www.linkedin.com/in/swapnil-raj-2804sr/",
      logo: linkedInLogo,
    },
    {
      type: "GitHub",
      name: "SWAPNIL2804RAJ",
      url: "https://github.com/SWAPNIL2804RAJ",
      logo: githubLogo,
    },
    {
      type: "Leetcode",
      name: "rajswapnil50",
      url: "https://leetcode.com/u/rajswapnil50/",
      logo: leetcodeLogo,
    },
    {
      type: "Instagram",
      name: "raj_.swapnil",
      url: "https://www.instagram.com/raj_.swapnil?igsh=aXpzeWlubzAwMHl0",
      logo: instagramLogo,
    },
    {
      type: "Email",
      name: "rajswapnil50@gmail.com",
      url: "mailto:rajswapnil50@gmail.com",
      logo: gmailLogo,
    },
  ],
};

export const contactData = {
  id: "contact",
  sectionHeading: "Contact Me",
  content: `
      Feel free to reach out for project collaborations, freelance opportunities, or professional queries. 
      I'm always excited to connect with like-minded individuals!
  `,
  accessKey: "9b43fa10-d199-4643-b0df-88821e368d62",
};
