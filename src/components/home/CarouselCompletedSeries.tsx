import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/shadcn/Carousel";

import { ArrowRight } from "lucide-react";

export function CarouselCompletedSeries() {
  return (
    <div>
      <Carousel className="w-full mt-7" opts={{ align: "start", loop: true }}>
        <CarouselContent className="items-center">
          {Array.from({ length: 10 }, (_, index) => (
            <CarouselItem
              key={index}
              className="basis-[40%] sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[13%]"
            >
              <div className="relative w-full h-52">
                <Image
                  src={`https://mangadex.org/covers/69aa984a-f5c0-4505-a11f-fe50e5fd16c9/a44cba6c-bd67-4b66-9fb9-4c3f0a8d941e.jpg`}
                  alt="Judul Series"
                  className="rounded-md"
                  fill
                />
              </div>
              <h2 className="mt-2">Judul Series</h2>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute mt-2 right-12 -top-10">
          <CarouselNext className="mr-4" />
          <CarouselPrevious />
        </div>
      </Carousel>

      <Link
        href=""
        className="flex items-center duration-150 text-sm justify-center border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-neutral-900 gap-x-1.5 py-1.5 max-w-max px-4 mx-auto mt-5 rounded-lg"
      >
        Lihat Semua <ArrowRight className="w-5" />
      </Link>
    </div>
  );
}
