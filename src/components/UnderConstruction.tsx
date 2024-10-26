import { Cog, Construction, HardHat, Pickaxe } from "lucide-react";
import React from "react";

const UnderConstruction = () => {
  return (
    <section
      id="under-construction"
      className="h-96 flex flex-col justify-center items-center bg-muted rounded-md gap-4 md:flex-row"
    >
      <div className="flex md:flex-row gap-4">
        <Construction color="red" size={48} className="animate-bounce" />
        <Cog className="text-teal-600 animate-spin" size={48} />
      </div>
      <span className="text-md text-center md:text-2xl font-semibold">
        This page is under construction.
      </span>
      <div className="flex md:flex-row gap-4">
        <HardHat color="orange" size={48} className="animate-pulse" />
        <Pickaxe color="brown" size={48} className="animate-pulse" />
      </div>
    </section>
  );
};

export default UnderConstruction;
