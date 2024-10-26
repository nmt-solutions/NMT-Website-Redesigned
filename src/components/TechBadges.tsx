import React from "react";
import { Badge } from "./ui/badge";
import { techOptions } from "@/lib/static-data";

const TechBadges = ({ technologies }: { technologies: string }) => {
  return (
    <div className="flex gap-1 flex-wrap">
      {techOptions
        .filter((tech) => technologies.includes(tech.value))
        .map((tech) => (
          <Badge key={tech.value}>{tech.label}</Badge>
        ))}
    </div>
  );
};

export default TechBadges;
