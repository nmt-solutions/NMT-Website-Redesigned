import { Loader2 } from "lucide-react";
import React from "react";

const LoadingFallback = () => {
  return (
    <div className="flex items-center gap-3 justify-center h-48 bg-muted rounded-md">
      <Loader2 className="animate-spin text-primary" />
      <span>Loading Resources...</span>
    </div>
  );
};

export default LoadingFallback;
