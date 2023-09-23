import Head from "next/head";

// components
import HeroSection from "@/components/HeroSection/HeroSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subrat Jena | Portfolio 1.0</title>
      </Head>
      <main className="main-container">
        <Header />
        <HeroSection />
        <ExperienceSection />
      </main>
    </>
  );
}
