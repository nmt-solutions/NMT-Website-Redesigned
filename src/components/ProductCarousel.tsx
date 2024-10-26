"use client";

import React from "react";
import CarouselPlugin from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Routes } from "@/routes/routes";
import Link from "next/link";
import { useProductsStore } from "@/providers/ProductsStoreProvider";
import useCarouselOrientation from "@/hooks/useCarouselOrientation";

const ProductCarousel = () => {
  const products = useProductsStore((store) => store.products);
  const orientation = useCarouselOrientation();

  return (
    <>
      {products.length > 0 ? (
        <CarouselPlugin
          carouselItems={products}
          orientation={orientation}
          render={(product) => (
            <Link
              key={product.productId}
              href={Routes.Product.replace(
                "[productId]",
                (product.productId as number | string).toString(),
              )}
            >
              <ProductCard product={product} />
            </Link>
          )}
        />
      ) : (
        <Card className="border border-dashed p-6 h-32 flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            No Product Available.
          </p>
        </Card>
      )}
    </>
  );
};

export default ProductCarousel;
