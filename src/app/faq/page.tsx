import React from "react";
import MaxWidth from "@/components/MaxWidth";
import UnderConstruction from "@/components/UnderConstruction";

export const dynamic = "force-static";

const FAQ = () => {
  return (
    <section id="faq's" className="min-h-[calc(100vh-4rem)]">
      <MaxWidth className="py-4">
        <UnderConstruction />
      </MaxWidth>
    </section>
  );
};

export default FAQ;
