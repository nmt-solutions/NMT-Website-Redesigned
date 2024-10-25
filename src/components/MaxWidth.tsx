import { cn } from "@/lib/utils";
import { HTMLAttributes, PropsWithChildren } from "react";

const MaxWidth = ({
  className,
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto px-2", className)} {...props}>
      {children}
    </div>
  );
};

export default MaxWidth;
