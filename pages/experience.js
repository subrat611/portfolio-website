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
              Experience <span className="text-green-300">(2 years)</span>
            </p>
            <div className="py-5">
              {experiences.map((experience, i) => {
                const { imgpath, name, position, desc } = experience;

                return (
                  <div
                    className="group bg-[#111] border border-gray-700 my-5 p-6 rounded-xl hover:cursor-default"
                    key={`${name}-${i}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-slate-300 font-medium group-hover:text-slate-200 text-xl">
                        {position}{" "}
                        <a
                          href="https://marktine.com/"
                          target="_blank"
                          className="text-cyan-400 font-medium group-hover:text-cyan-300 hover:underline hover:underline-offset-4"
                        >
                          @{name}
                        </a>
                      </p>

                      <Image
                        src={imgpath}
                        height={50}
                        width={50}
                        className="rounded-full"
                        alt="company-logo"
                      />
                    </div>

                    <ul className="list-decimal ml-4 mt-5">
                      {desc.map((item, i) => (
                        <li
                          className="text-gray-300 group-hover:text-gray-300 my-2"
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
      {/* <section className="bg-slate-950 pb-6 h-full min-h-screen">
        <Header />
        <div className="w-11/12 max-w-[780px] mx-auto">
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
                  <p className="text-slate-300 font-medium group-hover:text-slate-200 text-lg">
                    {position}{" "}
                    <a
                      href="https://marktine.com/"
                      target="_blank"
                      className="text-cyan-400 font-medium group-hover:text-cyan-300 hover:underline hover:underline-offset-4"
                    >
                      @{name}
                    </a>
                  </p>
                  <ul className="list-disc ml-4">
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
      </section> */}
    </>
  );
};

export default Experience;
