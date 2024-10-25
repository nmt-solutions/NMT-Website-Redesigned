import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const SkewedHeading = ({
  children,
  skewedText = true,
  className,
}: { skewedText?: boolean; className?: string } & PropsWithChildren) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br font-medium from-nmtstart via-nmt to-nmtend p-4 text-center items-center flex justify-center skew-y-2 skew-x-3 text-white",
        className,
      )}
    >
      {React.Children.map(children, (child, index) => (
        <span
          key={index}
          className={cn({ "-skew-y-2 -skew-x-3": !skewedText })}
        >
          {child}
        </span>
      ))}
    </div>
  );
};

export default SkewedHeading;
