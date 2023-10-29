import Head from "next/head";

// components
import HeroSection from "@/components/HeroSection/HeroSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Header from "@/components/Header/Header";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subrat Jena | Portfolio 1.0</title>
      </Head>
      <main className="bg-slate-950 h-screen max-h-full">
        <Header />
        {/* <HeroSection /> */}
      </main>
    </>
  );
}
