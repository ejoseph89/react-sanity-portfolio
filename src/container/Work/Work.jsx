import React from 'react'

import { motion } from 'framer-motion';

import { Clients, Projects } from '../../components';


const Work = () => {
  

  return (
    <section
      id="work"
      className="min-h-screen bg-secondary flex flex-col justify-center items-center py-8 md:py-24"
    >
      <div>
        <div className="max-w-screen-xl  flex flex-col  justify-between items-center">
          <motion.div
            whileInView={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="p-5 md:p-10 font-poppins text-center  mt-8 md:mt-0 md:w-2/3 md:pl-5 text-primary "
          >
            <p className="text-accent font-semibold">&lt;projects&gt;</p>
            <h2 className="text-xl md:text-2xl xl:text-4xl py-2">
              Some projects that I have worked on recently.
            </h2>
            <p className="font-light lg:text-xl py-3">
              Most of the contracts I have taken on after graduating has been
              Wordpress websites for small businesses and organizations, but
              this has not prevented me from sharpening my coding skills by
              working on my own projects.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="w-3/4 flex justify-center items-center">
        <Projects />
      </div>
    </section>
  );
}

export default Work