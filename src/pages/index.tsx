import Head from "next/head";

import { HeroComponent } from "@components/home/HeroComponent";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Welcome to Lexadex is Comic Application the Popular</title>
      </Head>
      <main className="">
        <div className="flex items-center mb-96">
          <HeroComponent />
        </div>
      </main>
    </>
  );
}
