import { useContext } from "react";
import Image from "next/image";

import { DocIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/utils/icons";

import { ThemeContext } from "@/context/ThemeModeContext";

const HeroSection = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <section className="w-11/12 max-w-[780px] mx-auto px-4 md:px-0">
      <h1 className="text-4xl text-slate-50 font-bold w-[220px] sm:w-full">
        Subrat Kumar Jena
      </h1>
      <p className="text-base text-gray-300 mt-1">
        Fullstack JavaScript Developer from 🇮🇳
      </p>
      <div className="flex flex-col sm:flex-row mt-3">
        <div className="ml-1 mt-2 sm:ml-0">
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

      <div className="py-8">
        <p className="text-slate-50 font-semibold text-2xl">About me</p>
        <p className="text-gray-300 text-lg mt-2">
          <span className="text-cyan-300">
            🚀 Passionate Frontend Developer | Open Source Enthusiast{" "}
          </span>
          <br />
          <span>
            Hello there! I'm Subrat Kumar Jena, a final year B.Tech student with
            a keen passion for front-end development and a touch of backend
            expertise. I thrive in the world of web technologies, specializing
            in crafting seamless user experiences and robust applications.
          </span>
          <br />
          <span className="mt-3">
            💻 Technical Expertise: <br />
            Languages:{" "}
            <span className="text-cyan-300">
              C++, JavaScript, TypeScript, and Java.
            </span>
            <br />
            Front-end technologies:{" "}
            <span className="text-cyan-300">
              React.js, Vue.js, HTML, CSS, SCSS, Material UI, Next.js, Nuxt.js,
              and Redux Toolkit
            </span>
            <br />
            Backend technologies:{" "}
            <span className="text-cyan-300">Node.js, MongoDB.</span> <br />
            I'm well-versed in version control systems like Git and platforms
            like GitHub and Bitbucket. Additionally, I also have some
            familiarity with Docker and Firebase.
          </span>
        </p>
        {/* <p className="text-gray-300 mt-3 hidden">
          With 2 impactful 6-month internships under my belt, I've honed my
          skills in real-world scenarios, working extensively with the
          technologies mentioned above. During my internships, I not only
          developed robust applications but also collaborated with
          cross-functional teams, ensuring seamless project delivery. Outside of
          work, I'm proud to have contributed to open-source initiatives like
          HackOctoberFest and GSSOC 2023, where I collaborated with fellow
          developers on meaningful projects.
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;
