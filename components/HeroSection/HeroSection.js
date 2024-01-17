import { useContext } from "react";
import Image from "next/image";

import {
  DocIcon,
  GithubIcon,
  IconBuddyLeetCodeIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/utils/icons";

import { ThemeContext } from "@/context/ThemeModeContext";

const HeroSection = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <section className="h-full min-h-[80vh] flex flex-col pt-10 md:pt-20">
      <div>
        <p className="capitalize text-xl text-green-300 font-medium">
          frontend developer
        </p>
        <label className="relative inline-flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={true}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
          <span className="ms-3 text-sm font-medium text-gray-200">
            Available for work
          </span>
        </label>
      </div>
      <div className="mt-5 flex items-center space-x-3">
        <a
          href="https://github.com/subrat611/"
          target="_blank"
          className="text-gray-400 hover:text-gray-50"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/subratkumarjena/"
          target="_blank"
          className="text-gray-400 hover:text-gray-50"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://leetcode.com/s1jena/"
          target="_blank"
          className="text-gray-400 hover:text-gray-50"
        >
          <IconBuddyLeetCodeIcon />
        </a>
        <a
          href="https://twitter.com/nikhil88950"
          target="_blank"
          className="text-gray-400 hover:text-gray-50"
        >
          <TwitterIcon />
        </a>
      </div>
      <div className="my-4">
        <p className="text-2xl text-gray-400 leading-8 md:leading-10 md:text-3xl">
          Hello there! I'm{" "}
          <span className="text-gray-200 font-medium">Subrat Kumar Jena</span>,
          a final year B.Tech student with a keen passion for frontend
          development and a touch of backend expertise. I thrive in the world of
          web technologies, specializing in crafting seamless user experiences
          and robust applications.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
