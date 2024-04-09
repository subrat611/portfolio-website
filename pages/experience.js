import Head from "next/head";
import Image from "next/image";

import Header from "@/components/Header/Header";

import { experiences } from "@/utils";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Home | Subrat Jena</title>
      </Head>
      <main className="bg-[#111] h-full min-h-screen">
        <div className="w-11/12 max-w-[780px] mx-auto">
          <Header />
          <section className="pb-10 flex flex-col items-start mt-10">
            <p className="text-2xl sm:text-3xl text-gray-200 font-semibold">
              Experience <span className="text-green-400">(2 yrs.)</span>
            </p>
            <div className="py-5">
              {experiences.map((experience, i) => {
                const { imgpath, name, position, desc, link, duration, type } =
                  experience;

                return (
                  <div
                    className="group bg-[#212529] my-5 p-6 rounded-sm hover:cursor-default"
                    key={`${name}-${i}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-slate-300 font-medium group-hover:text-slate-200">
                        <span className="text-base md:text-lg text-green-400">
                          Duration: {duration}{" "}
                        </span>{" "}
                        <br />
                        <span className="text-xl">
                          {position}{" "}
                          <a
                            href={link}
                            target="_blank"
                            className="text-cyan-400 font-medium group-hover:text-cyan-300 hover:underline hover:underline-offset-4"
                          >
                            @{name}
                          </a>{" "}
                        </span>
                        <br />
                        <span className="text-xs font-normal uppercase md:text-sm text-slate-300">
                          {type}
                        </span>
                      </p>

                      <Image
                        src={imgpath}
                        height={50}
                        width={50}
                        className="rounded-full"
                        alt="company-logo"
                      />
                    </div>

                    <ul className="list-disc ml-4 mt-5">
                      {desc.map((item, i) => (
                        <li
                          className="text-gray-300 group-hover:text-gray-300 my-2 text-base"
                          key={`${item}-${i}`}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Experience;
