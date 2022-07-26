import React from "react";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import { Navbar } from "../../components";

import { images } from "../../constants/index";

const Header = () => {
  return (
    <section className="h-screen flex flex-col" id="home">
      <div className="flex-1 flex justify-center items-center">
        <header className="p-5 md:p-10  max-w-screen-xl mx-auto flex flex-col md:flex-row items-center ">
          <motion.div
            whileInView={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="mx-auto md:mx-0 pb-5 w-60 md:w-1/2 mt-12 md:mt-0">
              <img src={images.devLogo} alt="" className="w-full" />
            </div>
            <h1 className="pb-3 font-poppins text-primary text-2xl sm:text-3xl  lg:text-5xl lg:font-extrabold font-bold text-center sm:text-left">
              Emil Joseph
            </h1>
            <div className="flex text-primary text-xl justify-center md:justify-start">
              <a
                href="https://github.com/ejoseph89?tab=repositories"
                className="transition ease-in hover:text-accent duration-150 mr-3"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ejoseph89/"
                className="transition ease-in hover:text-accent duration-150 mr-3"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:emiljoseph89@gmail.com"
                className="transition ease-in hover:text-accent duration-150 mr-3"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="font-poppins text-center md:text-left mt-8 md:mt-0 text-primary"
          >
            <p className="text-accent font-semibold">&lt;hello&gt;</p>
            <h2 className="text-xl md:text-3xl xl:text-4xl py-2">
              I'm a frontend developer from Calgary, Alberta.
            </h2>
            <p className="font-light lg:text-xl py-3">
              I have a passion for bringing good design to life! I am currently
              working as a web developer at Amped2Play.
            </p>
          </motion.div>
        </header>
      </div>
    </section>
  );
};

export default Header;
