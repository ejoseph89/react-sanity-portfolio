import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == 'projects']`;

    client.fetch(query).then((data) => setProjects(data));
  }, []);

  return (
    <motion.div
      whileInView={{ x: [150, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <section className="font-poppins text-primary flex flex-col justify-center md:flex-row flex-wrap z-0">
        {projects.map((project, index) => (
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            key={project._id}
          >
            <article className="bg-primary m-5 drop-shadow-xl rounded-md overflow-hidden hover:scale-105 transition ease-in duration-150">
              <div className="p-5 pb-0">
                <h3 className="font-semibold text-secondary tracking-wide ">
                  {project.projectTitle}
                </h3>
                <h4 className="text-xs text-accent tracking-wider">{project.techStack}</h4>
              </div>
              <div className="w-72 h-80 relative">
                <img
                  src={urlFor(project.screenShot).url()}
                  alt=""
                  className="w-full absolute top-20 -bottom-10 origin-center -rotate-12"
                />
              </div>
            </article>
          </a>
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;
