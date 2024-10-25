"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { CirclePlus } from "lucide-react";
import { ProductType } from "@/lib/enums";
import ProductForm from "./ProductForm";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const AddProducts = () => {
  const [productType, setProductType] = useState<ProductType | null>(null);

  return (
    <section
      id="add-products"
      className="flex gap-8 items-center my-8 justify-center md:justify-start flex-wrap"
    >
      <Sheet>
        <SheetTrigger asChild>
          <Card
            className="border-dashed h-32 w-32 hover:cursor-pointer hover:bg-slate-50 flex flex-col gap-2 justify-center items-center"
            onClick={() => setProductType(ProductType.IoT)}
          >
            <CirclePlus color="grey" />
            <p className="text-xs">Add IoT App</p>
          </Card>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="rounded-xl max-h-screen overflow-auto"
        >
          {productType && <ProductForm productType={productType} />}
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Card
            className="border-dashed h-32 w-32 hover:cursor-pointer hover:bg-slate-50 flex flex-col gap-2 justify-center items-center"
            onClick={() => setProductType(ProductType.IoT)}
          >
            <CirclePlus color="grey" />
            <p className="text-xs">Add IoT App</p>
          </Card>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="rounded-xl max-h-screen overflow-auto"
        >
          {productType && <ProductForm productType={productType} />}
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger asChild>
          <Card
            className="border-dashed h-32 w-32 hover:cursor-pointer hover:bg-slate-50 flex flex-col gap-2 justify-center items-center"
            onClick={() => setProductType(ProductType.Mobile)}
          >
            <CirclePlus color="grey" />
            <p className="text-xs">Add Mobile App</p>
          </Card>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="rounded-xl max-h-screen overflow-auto"
        >
          {productType && <ProductForm productType={productType} />}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default AddProducts;
