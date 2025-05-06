import React, { useRef } from "react";
import {
  bodyStyles,
  primaryCard,
  subHeadingStyles,
  inputStyle,
  titleStyles,
  primaryButtonStyles,
} from "../styles";
import { contactData } from "../constants/data";
import { motion } from "framer-motion";
import { horizontalSlide } from "../animations/variant";

const Form = ({ accessKey }) => {
  const formRef = useRef(null);

  const onSubmitPressed = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      formRef.current.reset();
      alert("Mail sent successfully !");
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="w-2/3 min-w-[400px] max-w-[600px]">
        <form
          ref={formRef}
          className={`${primaryCard} items-center`}
          onSubmit={onSubmitPressed}
        >
          <p className={titleStyles}>Email Me</p>

          <input
            className={inputStyle}
            type="text"
            name="subject"
            placeholder="Enter Subject"
            required
          />

          <input
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="email"
            required
          />

          <textarea
            className={`${inputStyle} h-[200px]`}
            name="message"
            placeholder="Enter your Message"
            required
          />

          <button className={`${primaryButtonStyles} p-3 w-2/3`} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  // UI Data for Contact me Section
  const { id, sectionHeading, content, accessKey } = contactData;
  return (
    // Container for Contact Me Section
    <div id={id} className="flex flex-col gap-8 w-full pt-6">
      <h2 className={subHeadingStyles}>{sectionHeading}</h2>

      <motion.div
        className="overflow-hidden"
        variants={horizontalSlide("right")}
        initial="initial"
        whileInView="final"
        viewport={{ once: true }}
      >
        <p className={bodyStyles}>{content}</p>
      </motion.div>

      <Form accessKey={accessKey} />
    </div>
  );
};

export default Contact;
