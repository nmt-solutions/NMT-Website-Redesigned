"use client";
import ProductForm from "./ProductForm";
import { Card } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ProductCard from "./ProductCard";
import { useProductsStore } from "@/providers/ProductsStoreProvider";

const Products = () => {
  const products = useProductsStore((store) => store.products);
  return (
    <section id="our-products-list">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Sheet key={product.productId}>
              <SheetTrigger>
                <ProductCard product={product} />
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="rounded-xl max-h-screen overflow-auto"
              >
                <ProductForm
                  productType={product.productType}
                  defaultProduct={product}
                />
              </SheetContent>
            </Sheet>
          ))}
        </div>
      ) : (
        <Card className="border border-dashed p-6 h-32 flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            No Product Available.
          </p>
        </Card>
      )}
    </section>
  );
};

export default Products;
