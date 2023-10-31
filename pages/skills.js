import Header from "@/components/Header/Header";
import { backendTools, frontendTools, managementTools } from "@/utils";

const skills = () => {
  return (
    <section className="bg-slate-950">
      <Header />
      <div className="w-11/12 max-w-[780px] mx-auto mt-16">
        <p className="text-slate-50 font-semibold text-2xl">Frontend Tools</p>
        <div className="flex flex-wrap my-5">
          {frontendTools.map((item, i) => (
            <img src={item.link} alt={item.alt} className="mr-2 mb-3" />
          ))}
        </div>

        <p className="text-slate-50 font-semibold text-2xl">Backend Tools</p>
        <div className="flex flex-wrap my-5">
          {backendTools.map((item, i) => (
            <img src={item.link} alt={item.alt} className="mr-2 mb-3" />
          ))}
        </div>

        <p className="text-slate-50 font-semibold text-2xl">Management Tools</p>
        <div className="flex flex-wrap my-5">
          {managementTools.map((item, i) => (
            <img src={item.link} alt={item.alt} className="mr-2 mb-3" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default skills;
