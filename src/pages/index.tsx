import Head from "next/head";

import { CardNewComics } from "@components/home/CardNewComics";
import { HeroComponent } from "@components/home/HeroComponent";

import { SparkleIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Welcome to Lexadex is Comic Application the Popular</title>
      </Head>
      <main className="">
        <div className="flex items-center ">
          <HeroComponent />
        </div>

        <div className="mt-32 px-5 md:px-20 mb-20">
          <h2 className="text-neutral-200 text-xl sm:text-2xl font-bold flex items-center gap-x-2">
            <SparkleIcon className="w-5 sm:w-6" />
            Update Comics
          </h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-6">
            {Array.from({ length: 10 }, (_, index) => (
              <CardNewComics key={index} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
