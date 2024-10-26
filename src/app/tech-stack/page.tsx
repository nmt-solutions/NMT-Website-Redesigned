import React from "react";
import MaxWidth from "@/components/MaxWidth";
import Image from "next/image";
import ContentHeading from "@/components/ContentHeading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { techOfferings } from "@/lib/static-data";

const TechOfferingCard = (props: {
  id: string;
  name: string;
  icon: string;
  animation: string;
  externalLink: string;
  description: string;
}) => {
  const { id, name, icon, externalLink, description, animation } = props;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          key={id}
          className="group relative p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 h-full"
        >
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col items-center h-full justify-center">
              <div className="w-16 h-16 mb-4">
                <Image
                  src={icon}
                  alt={name}
                  width={64}
                  height={64}
                  className={cn("object-contain", {
                    "group-hover:animate-spin": animation === "spin",
                    "group-hover:animate-bounce": animation === "scale",
                  })}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {name}
              </h3>
            </div>
          </a>
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-muted-foreground max-w-96">
        <p className="text-md">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-8">
      <TooltipProvider>
        <MaxWidth>
          <ContentHeading heading="Our Tech Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techOfferings.map((techGroup) =>
              techGroup.offerings.map((tech, index) => (
                <div
                  key={tech.id}
                  className={`${
                    index % 7 === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <TechOfferingCard {...tech} />
                </div>
              )),
            )}
          </div>
        </MaxWidth>
      </TooltipProvider>
    </section>
  );
};

export default TechStack;
