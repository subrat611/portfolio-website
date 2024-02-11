import pinnedProjects from "@/utils/projects";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

const ProjectSection = () => {
  return (
    <section className="pb-10 flex flex-col items-start">
      <p className="text-2xl sm:text-3xl text-gray-200 font-semibold">
        Pinned Projects
      </p>
      <div className="py-5">
        {pinnedProjects.map(
          (
            { project_name, description, tech, gitLink, liveLink, images },
            i
          ) => (
            <div key={i}>
              <div className="border-b border-gray-600" />
              <div className="py-7 flex items-start relative flex-col-reverse md:flex-row">
                <div className="pr-4 w-[90%]">
                  <p className="text-xl text-gray-400 font-semibold py-2">
                    {project_name}
                  </p>
                  <p className="text-2xl text-gray-200 pb-5">{description}</p>
                  <div className="flex flex-wrap items-center mb-2">
                    {tech.map(({ name, icon }, i) => (
                      <div
                        key={`${name}-${i}`}
                        className="text-gray-200 font-medium flex items-center px-[10px] py-[5px] border border-gray-700 mr-2 mb-3 rounded-md text-sm"
                      >
                        {icon}
                        <span className="ml-2">{name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={gitLink}
                      target="_blank"
                      className="bg-transparent border border-gray-700 p-2 text-gray-200 rounded-md hover:bg-gray-600/30"
                      aria-label="link to project repository"
                    >
                      View project
                    </a>
                    <a
                      href={liveLink}
                      target="_blank"
                      className="bg-transparent border border-gray-700 p-2 text-gray-200 rounded-md hover:bg-gray-600/30"
                      aria-label="link to live site"
                    >
                      Live site
                    </a>
                  </div>
                </div>

                <div className="relative max-w-[350px] w-[100%] h-[200px]">
                  <ImageSlider images={images} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <Link
        type="button"
        href="/projects"
        className="border border-gray-700 rounded-md bg-gray-800/40 text-gray-100 py-2 px-3 self-center"
      >
        View all projects
      </Link>
    </section>
  );
};

export default ProjectSection;
