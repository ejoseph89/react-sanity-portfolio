import React from 'react'

import { motion } from 'framer-motion';

import { images } from '../../constants';

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-primary flex justify-center items-center md:pt-0"
    >
      <div className="max-w-screen-xl  flex flex-col-reverse md:flex-row justify-between items-center">
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mb-8 text-primary md:w-1/2 md:pr-5"
        >
          <img
            src={images.aboutOutdoors}
            className="w-2/3 md:w-full mx-auto"
            alt="Outdoors"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mt-8 md:mt-0 md:w-2/3 md:pl-5 text-primary "
        >
          <p className="text-accent font-semibold">skills</p>
          <h2 className="text-xl md:text-2xl xl:text-4xl py-2">
            Here are some of the tools and technologies that I have worked with.
          </h2>
          <div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills