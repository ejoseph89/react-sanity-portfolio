import React, {useState} from "react";

import { Toggle } from "../../utils/index";

import { HiMenuAlt4, HiX } from "react-icons/hi";


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 text-primary bg-secondary z-10">
      <section className="max-w-screen-xl mx-auto flex justify-between">
        <a href="#home">
          <span className="font-poppins text-lg font-semibold text-accent">
            &lt;EmilJoseph&gt;
          </span>
        </a>
        {/* menu */}
        <div className="hidden sm:flex">
          <ul className="flex mr-24">
            {["home", "about", "skills", "work", "contact"].map((item) => (
              <li
                key={`link-${item}`}
                className="ml-6 ext-primary flex flex-col items-center"
              >
                <a
                  href={`#${item}`}
                  className="peer transition ease-in duration-150 "
                >
                  {item}
                </a>
                <div className="h-2 w-2 rounded-full invisible transition ease-in peer-hover:visible duration-150 bg-accent "></div>
              </li>
            ))}
          </ul>
          <Toggle />
        </div>
        {/* mobile menu */}
        <section className="sm:hidden flex">
          {!toggle && (
            <HiMenuAlt4
              onClick={() => setToggle(true)}
              className="mt-1 cursor-pointer"
            />
          )}

          {toggle && (
            <div className="flex flex-col justify-end items-end text-right">
              <HiX
                onClick={() => setToggle(false)}
                className="mt-1 mb-4 cursor-pointer"
              />
              <Toggle />
              <ul className="flex flex-col pt-4">
                {["home", "about", "skills", "work", "contact"].map((item) => (
                  <li key={`link-${item}`} className="py-2">
                    <a
                      href={`#${item}`}
                      className="hover:text-accent"
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
