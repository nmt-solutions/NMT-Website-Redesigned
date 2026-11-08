import LoadingFallback from "@/components/LoadingFallback";
import React from "react";

export const dynamic = "force-static";

const Loading = () => {
  return (
    <section className="shell route-loading">
      <LoadingFallback />
    </section>
  );
};

export default Loading;
