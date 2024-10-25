import { cn } from "@/lib/utils";
import React from "react";
import SkewedHeading from "./SkewedHeading";

const ContentHeading = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  return (
    <div className="flex justify-center">
      <SkewedHeading
        className={cn(
          "inline-block my-12 text-3xl font-bold text-white",
          className,
        )}
      >
        {heading}
      </SkewedHeading>
    </div>
  );
};

export default ContentHeading;
