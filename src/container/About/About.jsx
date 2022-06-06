import React from "react";

import { motion } from "framer-motion";

import { images } from "../../constants/index";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondary flex justify-center items-center md:pt-0"
    >
      <div className="max-w-screen-xl  flex flex-col md:flex-row justify-between items-center">
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mt-8 md:mt-0 md:w-2/3 md:pl-5 text-primary "
        >
          <p className="text-accent font-semibold">&lt;about me&gt;</p>
          <h2 className="text-xl md:text-2xl xl:text-4xl py-2">
            I'm a graduate of the web development certificate program at SAIT.
          </h2>
          <p className="font-light lg:text-xl py-3">
            After graduating and starting my career as a social worker, I
            discovered my interest in design and web development. I learned the
            basics from online courses and later, decided to enroll at{" "}
            <a
              href="https://www.sait.ca/"
              className="text-accent font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              SAIT
            </a>{" "}
            for formal training.
          </p>
          <p className="font-light lg:text-xl py-3">
            When I'm not working or learning, I enjoy spending time with my
            family, being outdoors, and reading.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mb-8 text-primary md:w-1/2 md:pr-5"
        >
          <img
            src={images.aboutOutdoors}
            className="w-2/3 md:w-full mx-auto"
            alt="Outdoors"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
