import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const GradientText = ({
  from,
  to,
  className,
  children,
}: { from?: string; to?: string; className?: string } & PropsWithChildren) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-nmtstart to-nmtend inline-block text-transparent bg-clip-text",
        "animate-gradient-flow bg-[length:200%_200%]",
        className,
        from && `from-${from}`,
        to && `to-${to}`,
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
