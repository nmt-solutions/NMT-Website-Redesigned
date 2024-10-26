import React, { Suspense } from "react";
import ContentHeading from "@/components/ContentHeading";
import MaxWidth from "@/components/MaxWidth";
import ProductCarousel from "@/components/ProductCarousel";
import LoadingFallback from "@/components/LoadingFallback";

const OurProducts = () => {
  return (
    <section
      id="our-products"
      className="min-h-[calc(100vh-4rem)] flex justify-center items-center w-full mb-24"
    >
      <MaxWidth className="py-4 w-full h-full">
        <ContentHeading heading="Our Products" className="mb-20" />
        <Suspense fallback={<LoadingFallback />}>
          <ProductCarousel />
        </Suspense>
      </MaxWidth>
    </section>
  );
};

export default OurProducts;
