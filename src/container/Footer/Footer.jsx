import React, { useState } from "react";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-primary flex justify-center items-center md:pt-0"
    >
      <div className="max-w-screen-xl  flex flex-col-reverse md:flex-row justify-between md:items-start">
        <motion.div
          whileInView={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mt-8 md:mt-0 md:w-2/3 md:pl-5 text-primary "
        >
          <p className="text-accent font-semibold">&lt;contact&gt;</p>
          <h2 className="text-xl md:text-2xl xl:text-4xl pt-2">
            Need help with a project?
          </h2>
          <h3>Let's talk.</h3>
          <div className="my-4">
            {!isFormSubmitted ? (
              <form className="flex flex-col w-full">
                <input
                  className="mb-4 p-1 rounded w-full placeholder:font-thin placeholder:text-sm border"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={handleChangeInput}
                  name="name"
                />
                <input
                  className="mb-4 p-1 rounded w-full placeholder:font-thin placeholder:text-sm border "
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleChangeInput}
                  name="email"
                />
                <textarea
                  className="mb-4 p-1 w-full rounded placeholder:font-thin placeholder:text-sm border "
                  name="message"
                  id="message"
                  placeholder="message"
                  value={message}
                  onChange={handleChangeInput}
                  cols="40"
                  rows="10"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-1/2 mx-auto my-4 p-2 rounded text-sm bg-accent text-secondary"
                >
                  {loading ? "Sending" : "Send Message"}
                </button>
              </form>
            ) : (
              <div>
                <h3 className="text-xl md:text-2xl xl:text-4xl pt-2">
                  Thank you for getting in touch!
                </h3>
              </div>
            )}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [150, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="p-5 md:p-10 font-poppins text-center md:text-left mb-8 text-primary md:w-1/2 md:pr-5"
        >
          <img
            src={images.contact}
            className="w-2/3 md:w-full mx-auto"
            alt="Outdoors"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
