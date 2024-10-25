import MaxWidth from "@/components/MaxWidth";
import React from "react";

const ProductDetails = ({}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <section id="product-detail" className="h-[calc(100vh-4rem)]">
      <MaxWidth className="px-4 md:px-0 py-4">
        <div></div>
      </MaxWidth>
    </section>
  );
};

export default ProductDetails;
