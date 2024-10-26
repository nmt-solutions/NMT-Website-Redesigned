import Image from "next/image";
import MaxWidth from "./MaxWidth";
import { cn, isOdd } from "@/lib/utils";
import ContentHeading from "./ContentHeading";
import SkewedHeading from "./SkewedHeading";
import { expertises } from "@/lib/static-data";

const ExpertiseCard = ({
  icon,
  heading,
  description,
  itemNumber,
}: {
  icon: string;
  heading: string;
  description: string;
  itemNumber: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col group/card hover:scale-105 duration-300 cursor-pointer group-hover/grid:[&:not(:hover)]:scale-95 group/grid",
        {
          "md:flex-row-reverse": isOdd(itemNumber),
          "md:flex-row": !isOdd(itemNumber),
        },
      )}
    >
      <div className="flex flex-col md:w-1/2 items-center gap-4 mb-2">
        <Image
          src={icon}
          alt={heading}
          height={100}
          width={100}
          className="graphic h-14 w-14 md:h-24 md:w-24"
        />
        <SkewedHeading className="text-sm sm:text-md lg:text-lg font-bold text-white">
          {heading}
        </SkewedHeading>
      </div>
      <div className="flex items-center md:w-1/2 p-8 text-sm text-justify text-muted-foreground hover:bg-slate-200 group-hover/card:text-black rounded-md">
        {description}
      </div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <section id="our-expertise">
      <MaxWidth>
        <ContentHeading heading="What We Offer" />
        <div className="grid grid-cols-1 duration-300 gap-12 group/grid mb-12">
          {expertises.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.heading}
              {...expertise}
              itemNumber={index + 1}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default OurExpertise;

// ("md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 group/grid gap-6");
