import React, {useState, useEffect} from 'react'

import { motion } from 'framer-motion';

import { images } from '../../constants';

import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = `*[_type == "skills"]`

    client.fetch(query)
      .then((data) =>   setSkills(data))
  }, [])

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
            src={images.skills}
            className="w-2/3 md:w-full mx-auto"
            alt="Outdoors"
          />
        </motion.div>
        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mt-8 md:mt-0 md:w-2/3 md:pl-5 text-primary "
        >
          <p className="text-accent font-semibold">&lt;skills&gt;</p>
          <h2 className="text-xl md:text-2xl xl:text-4xl py-2 mb-4">
            Here are some tools that I have worked with.
          </h2>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 items-center justify-items-center md:justify-items-start">
            {skills.map((skill, index) => (
              <div key={skill._id} className="w-8 md:w-12">
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills