import Image from "next/image";

import Header from "@/components/Header/Header";

import { experiences } from "@/utils";

const Experience = () => {
  return (
    <section className="bg-slate-950 pb-6 h-full min-h-screen">
      <Header />
      <div className="w-11/12 max-w-[780px] mx-auto mt-16">
        {experiences.map((experience, i) => {
          const { imgpath, name, position, desc } = experience;

          return (
            <div
              className="group flex flex-col items-start md:flex-row hover:cursor-default"
              key={`${name}-${i}`}
            >
              <Image
                src={imgpath}
                height={70}
                width={70}
                className="rounded-full"
              />
              <div className="md:ml-3 mt-2">
                <p className="text-slate-300 font-medium group-hover:text-slate-200">
                  {name}
                </p>
                <p className="text-cyan-400 font-medium group-hover:text-cyan-300">
                  {position}
                </p>
                <ul className="list-disc ml-3">
                  {desc.map((item, i) => (
                    <li
                      className="text-slate-400 font-medium group-hover:text-slate-300 my-2"
                      key={`${item}-${i}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
