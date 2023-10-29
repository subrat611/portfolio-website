import Head from "next/head";

// components
import Header from "@/components/Header/Header";

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
