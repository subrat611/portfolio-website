import { useContext } from "react";
import Image from "next/image";

import { DocIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/utils/icons";

import { ThemeContext } from "@/context/ThemeModeContext";

const HeroSection = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <section className="w-11/12 max-w-[780px] mx-auto px-4 md:px-0">
      <h1 className="text-4xl text-slate-50 font-bold w-[220px]">
        Subrat Kumar Jena
      </h1>
      <p className="text-base text-gray-300 mt-1">
        Fullstack JavaScript Developer from 🇮🇳
      </p>
      <div className="flex flex-col sm:flex-row mt-3">
        <div className="ml-1 mt-2 sm:ml-5">
          <div className="my-3">
            <a
              className={`cursor-pointer flex items-center ${themeMode} group`}
              href="https://github.com/subrat611"
              target="_blank"
            >
              <GithubIcon />
              <span className="text-gray-400 ml-2 font-medium group-hover:text-gray-300">
                GitHub Profile
              </span>
            </a>
          </div>
          <div className="my-3">
            <a
              className={`cursor-pointer flex items-center ${themeMode} group`}
              href="https://www.linkedin.com/in/subratkumarjena/"
              target="_blank"
            >
              <LinkedinIcon />
              <span className="text-gray-400 ml-2 font-medium group-hover:text-gray-300">
                Linkedin Profile
              </span>
            </a>
          </div>
          <div className="my-3">
            <a
              className={`cursor-pointer flex items-center ${themeMode} group`}
              href="https://twitter.com/nikhil88950"
              target="_blank"
            >
              <TwitterIcon />
              <span className="text-gray-400 ml-2 font-medium group-hover:text-gray-300">
                Twitter Profile
              </span>
            </a>
          </div>
          <div className="my-3">
            <a
              className={`cursor-pointer flex items-center ${themeMode} group`}
            >
              <DocIcon />
              <span className="text-gray-400 ml-2 font-medium group-hover:text-gray-300">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* <p className="mt-6 text-slate-200">Hi, I am Subrat Kumar Jena.</p> */}
    </section>
  );
};

export default HeroSection;
