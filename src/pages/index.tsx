import Head from "next/head";
import Link from "next/link";

import { FooterComponent } from "@components/FooterComponent";

import { CarouselCompletedSeries } from "@components/home/CarouselCompletedSeries";
import { CarouselNewSeries } from "@components/home/CarouselNewSeries";
import { CardUpdateComics } from "@components/home/CardUpdateComics";
import { HeroComponent } from "@components/home/HeroComponent";

import { ArrowRight, SparkleIcon } from "lucide-react";

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

        {/* Update Series */}
        <div className="mt-32 px-5 md:px-20">
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl font-bold flex items-center gap-x-2">
            <SparkleIcon className="w-5 sm:w-6" />
            Update Comics
          </h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-6">
            {Array.from({ length: 10 }, (_, index) => (
              <CardUpdateComics key={index} />
            ))}
          </div>

          <Link
            href=""
            className="flex items-center duration-150 text-sm justify-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-neutral-900 gap-x-1.5 py-1.5 max-w-max px-4 mx-auto mt-5 rounded-lg"
          >
            Lihat Semua <ArrowRight className="w-5" />
          </Link>
        </div>

        {/* New Series */}
        <div className="mt-20 px-5 md:px-20 mb-20">
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl font-bold flex items-center gap-x-2">
            <SparkleIcon className="w-5 sm:w-6" />
            New Series
          </h2>

          <div>
            <CarouselNewSeries />
          </div>
        </div>

        {/* Completed Series */}
        <div className="mt-20 px-5 md:px-20 mb-20">
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl font-bold flex items-center gap-x-2">
            <SparkleIcon className="w-5 sm:w-6" />
            Completed Series
          </h2>

          <div>
            <CarouselCompletedSeries />
          </div>
        </div>

        <FooterComponent />
      </main>
    </>
  );
}
