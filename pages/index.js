import Head from "next/head";

// components
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subrat Jena | Portfolio 1.0</title>
      </Head>
      <main>
        <HeroSection />
      </main>
    </>
  );
}
