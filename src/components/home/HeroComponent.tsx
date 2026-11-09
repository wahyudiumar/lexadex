import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/shadcn/Carousel";

export function HeroComponent() {
  const mapping = [1, 2, 3, 4, 5];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-[12rem] mx-auto"
    >
      <CarouselContent>
        {mapping.map((testing) => (
          <CarouselItem className="basis-1/2 ">
            <div>
              <p>{testing}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
