import { IconBuddyInternetIcon } from "@/assets/icons";
import Header from "@/components/Header/Header";
import { GithubIcon } from "@/utils/icons";
import projects from "@/utils/projects";

const Projects = () => {
  return (
    <section className="bg-slate-950 pb-6 h-full min-h-screen">
      <Header />
      <div className="w-11/12 max-w-[780px] mx-auto px-4 md:px-0">
        <p className="text-slate-50 text-3xl font-bold">Projects</p>
        {projects.map((project, i) => {
          let { project_name, description, tech, gitLink, liveLink } = project;

          return (
            <div
              className="text-slate-50 bg-gray-900/30 border border-gray-600 mt-10 rounded-md py-4 px-5 flex flex-col"
              key={`${project_name}-${i}`}
            >
              {/* image */}
              <div>
                <p className="text-2xl font-semibold">{project_name}</p>
                <p className="mt-3 text-lg">{description}</p>
                <div className="mt-4">
                  {tech.map(({ name, clr }, i) => (
                    <span
                      key={`${name}-${i}`}
                      className={`text-${clr}-500 bg-${clr}-500/30 font-semibold px-2 py-1 rounded-md cursor-default me-2`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5 place-self-end flex">
                <a
                  href={liveLink}
                  target="_blank"
                  className="mx-3 text-slate-400 hover:text-slate-300"
                >
                  <IconBuddyInternetIcon />
                </a>
                <a
                  href={gitLink}
                  target="_blank"
                  className="text-slate-400 hover:text-slate-300"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
