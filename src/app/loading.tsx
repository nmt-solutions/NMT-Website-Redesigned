import LoadingFallback from "@/components/LoadingFallback";
import MaxWidth from "@/components/MaxWidth";
import React from "react";

export const dynamic = "force-static";

const Loading = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)]">
      <MaxWidth className="py-4">
        <LoadingFallback />
      </MaxWidth>
    </section>
  );
};

export default Loading;
