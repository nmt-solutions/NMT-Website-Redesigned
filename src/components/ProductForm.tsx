import { Product, ProductType } from "@/lib/enums";
import { technologiesOptions } from "@/lib/static-data";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useRef, useState } from "react";
import ComboBox from "./ComboBox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SheetClose, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";
import { useProductsStore } from "@/providers/ProductsStoreProvider";

const formFields: { [key in ProductType]: string[] } = {
  [ProductType.IoT]: [
    "icon",
    "name",
    "description",
    "technologies",
    "readme",
    "repositoryLink",
  ],
  [ProductType.Web]: [
    "icon",
    "name",
    "description",
    "technologies",
    "readme",
    "websiteLink",
    "repositoryLink",
  ],
  [ProductType.Mobile]: [
    "icon",
    "name",
    "description",
    "technologies",
    "readme",
    "apk",
    "repositoryLink",
  ],
};

const ProductForm = ({
  productType,
  defaultProduct,
}: {
  productType: ProductType;
  defaultProduct?: Product;
}) => {
  const iconRef = useRef<HTMLInputElement | null>(null);
  // const { addProduct, updateProduct, removeProduct } = useProducts();
  const addProduct = useProductsStore((store) => store.addProduct);
  const updateProduct = useProductsStore((store) => store.updateProduct);
  const removeProduct = useProductsStore((store) => store.removeProduct);
  const [product, setProduct] = useState<Product>(
    defaultProduct ?? {
      icon: "",
      description: "",
      productName: "",
      productType,
      readmeMarkup: "",
      repositoryLink: "",
      technologies: "",
      apkLink: "",
      websiteLink: "",
    },
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.name === "apk") {
          setProduct((product) => ({
            ...product,
            apkLink: reader.result as string,
          }));
        } else {
          setProduct((product) => ({
            ...product,
            icon: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTechnologyChanged = (value: string) => {
    setProduct((product) => {
      let technologies = "";
      if (product.technologies.includes(value)) {
        technologies = product.technologies.replace(`${value},`, "");
      } else {
        technologies = product.technologies
          ? product.technologies + value + ","
          : value + ",";
      }
      return { ...product, technologies };
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setProduct((product) => ({ ...product, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    if (Boolean(defaultProduct)) {
      updateProduct(product);
    } else {
      addProduct(product);
    }
  };

  const handleDelete = () => {
    setTimeout(() => removeProduct(product), 300);
  };

  return (
    <>
      <SheetHeader>
        <SheetTitle>
          {defaultProduct ? "Update" : "Add"} {productType} App
        </SheetTitle>
      </SheetHeader>
      <form className="my-4 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center">
          <div>
            <Input
              ref={iconRef}
              name="icon"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className="hidden"
              onChange={handleFileChange}
            />
            {product.icon ? (
              <Image
                src={product.icon}
                alt="icon Preview"
                height={96}
                width={96}
                className="max-h-24 min-h-24 max-w-24 min-w-24 rounded-full object-cover border border-gray-300 cursor-pointer"
                onClick={() => iconRef.current?.showPicker()}
              />
            ) : (
              <div
                className="h-24 w-24 rounded-full text-xs flex flex-col gap-2 justify-center items-center border border-gray-300 cursor-pointer text-gray"
                onClick={() => iconRef.current?.showPicker()}
              >
                <Upload size={18} color="grey" />
                App Icon
              </div>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label>Product Name</Label>
            <Input
              name="productName"
              placeholder="Product Name"
              value={product.productName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                placeholder="Description"
                className="h-20 w-full"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="w-56 flex flex-col gap-2">
              <Label>Technologies</Label>
              <ComboBox
                name="Technologies"
                items={technologiesOptions}
                value={product.technologies}
                onValueChange={handleTechnologyChanged}
              />
              <div className="flex flex-wrap gap-2">
                {technologiesOptions
                  .filter((tech) => product.technologies.includes(tech.value))
                  .map((tech) => (
                    <Badge
                      key={tech.value}
                      className="text-xs text-white px-1 rounded-full flex items-center justify-between gap-1"
                    >
                      {tech.label}
                      <X
                        color="#fff"
                        size={12}
                        className="hover:cursor-pointer"
                        onClick={() => handleTechnologyChanged(tech.value)}
                      />
                    </Badge>
                  ))}
              </div>
            </div>
            {formFields[productType].includes("apk") && (
              <div>
                <Label>APK</Label>
                <Input
                  name="apk"
                  type="file"
                  accept=".apk"
                  // value={product.apkLink}
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            <Label>Read me (Markup)</Label>
            <Textarea
              name="readmeMarkup"
              placeholder="Markup md"
              className="h-48"
              value={product.readmeMarkup}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {formFields[productType].includes("websiteLink") && (
              <div className="w-full my-4">
                <Label>Website Link</Label>
                <Input
                  name="websiteLink"
                  placeholder="Website Link"
                  value={product.websiteLink}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="w-full my-4">
              <Label>Repository Link</Label>
              <Input
                name="repositoryLink"
                placeholder="Repository Link"
                value={product.repositoryLink}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <SheetFooter>
          <div className="flex justify-end items-centers gap-4">
            {Boolean(defaultProduct) && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" type="button">
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete{" "}
                      {product.productName} product and remove data from
                      servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <SheetClose asChild>
                      <AlertDialogAction
                        onClick={handleDelete}
                        className={buttonVariants({ variant: "destructive" })}
                      >
                        Confirm
                      </AlertDialogAction>
                    </SheetClose>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
            <SheetClose asChild>
              <Button onClick={handleSave}>Save</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </form>
    </>
  );
};

export default ProductForm;
