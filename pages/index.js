import Head from "next/head";

// components
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Subrat Jena</title>
      </Head>
      <main className="bg-[#111] h-full min-h-screen">
        <div className="w-11/12 max-w-[780px] mx-auto">
          <Header />
          <HeroSection />
        </div>
      </main>
    </>
  );
}
