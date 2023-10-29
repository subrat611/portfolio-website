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
      <main className="bg-slate-950 h-screen max-h-full">
        <Header />
        <HeroSection />
      </main>
    </>
  );
}
