import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@components/shadcn/Carousel";

import Autoplay from "embla-carousel-autoplay";

export function HeroComponent() {
  const mapping = [1, 2, 3, 4, 5];
  const genre = ["Comedy", "18+", "Shounen AI"];
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    const update = () => {
      setSnaps(api.scrollSnapList());
      setCurrent(api?.selectedScrollSnap());
    };

    update();
    api.on("select", update);
    api.on("reInit", update);

    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <div className="flex flex-col w-full">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="">
          {mapping.map((testing) => (
            <CarouselItem
              key={testing}
              className="pt-36 md:pt-48 px-10 md:px-14 h-lvh overflow-hidden relative text-neutral-900"
            >
              <div className="absolute -z-10 w-full h-[100rem] inset-0 after:absolute after:bg-neutral-950/70 after:z-10 after:inset-0">
                <Image
                  src={`https://mangadex.org/covers/3e7d016d-43c8-4270-b83e-cbbe9d890505/627151a8-46e7-41aa-a2dc-9bcf80915d20.jpg`}
                  alt="Image"
                  className="object-fill blur-md"
                  fill
                />
              </div>

              <div className="md:flex items-center justify-between">
                <div className="relative z-10">
                  <div className="md:max-w-[50rem]">
                    <div className="flex items-center gap-x-2 mb-4">
                      {genre.map((genres) => (
                        <span
                          key={genres}
                          className="text-xs  bg-yellow-500 min-w-max px-2.5 rounded-full py-1"
                        >
                          {genres}
                        </span>
                      ))}
                    </div>
                    <span className="bg-yellow-400 mt-2 px-3 py-1 rounded-md inline-block text-sm md:text-base mb-4">
                      Manhwa
                    </span>
                    <h2 className="text-3xl font-bold text-yellow-500">
                      Manhwa Mangadex
                    </h2>

                    <p className="mt-2 text-neutral-300">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur perferendis eos nulla neque atque, incidunt
                      voluptatibus sit totam voluptatem in facere consequatur
                      molestiae error eum eligendi, quidem asperiores itaque
                      hic.
                    </p>

                    <button className="bg-yellow-400 inline-block px-6 py-2 rounded-sm font-semibold mt-10 text-base">
                      Baca Sekarang
                    </button>
                  </div>
                </div>

                <div className="relative w-72 h-80 lg:h-96 mr-0 xl:mr-32 hidden md:block">
                  <Image
                    src={`https://mangadex.org/covers/3e7d016d-43c8-4270-b83e-cbbe9d890505/627151a8-46e7-41aa-a2dc-9bcf80915d20.jpg`}
                    alt="Image"
                    className="object-fill"
                    fill
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center md:justify-end gap-3 relative z-20 -mt-10 md:mr-20">
        {snaps.map((snap, index) => (
          <button
            aria-current={index === current ? "true" : undefined}
            aria-label={`Go to slide ${index + 1}`}
            className={`size-3 rounded-full data-[current]:bg-[#FFA500] data-[current]:w-9 bg-neutral-500`}
            data-current={index === current ? "" : undefined}
            key={snap}
            onClick={() => api?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
