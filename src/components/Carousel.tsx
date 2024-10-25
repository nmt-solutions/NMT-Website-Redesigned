"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function CarouselPlugin<T>({
  carouselItems,
  render,
}: {
  carouselItems: T[];
  render: (item: T, index: number, items: T[]) => React.ReactNode;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section id="products-carousel" className="flex justify-center w-fu">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-3xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full">
          {carouselItems.map((item, index, items) => (
            <CarouselItem key={index} className="basis-2/3">
              <div className="p-1 w-full">
                <div className="flex items-center justify-center p-6 h-full w-full">
                  {render(item, index, items)}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default CarouselPlugin;
