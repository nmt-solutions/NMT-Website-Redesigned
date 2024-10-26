import ContentHeading from "@/components/ContentHeading";
import LoadingFallback from "@/components/LoadingFallback";
import MarkDown from "@/components/MarkDown";
import MaxWidth from "@/components/MaxWidth";
import TechBadges from "@/components/TechBadges";
import { getProduct } from "@/database/operations";
import { CodeXml, Earth, FileCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Product = async ({ productId }: { productId: string }) => {
  const product = await getProduct(productId);

  return (
    <section id={`product-${product?.productId}`}>
      <div className="bg-muted rounded-md p-12 mb-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center my-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <Image
              src={product?.icon as string}
              alt="Icon"
              height={160}
              width={160}
              className="h-32 w-32 md:h-42 md:w-42 rounded-full object-cover"
            />
            {/* <ContentHeading heading={product?.productName as string} /> */}
            <div className="inline-block my-6 p-4 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-nmtstart via-nmt to-nmtend rounded-md">
              {product?.productName}
            </div>
          </div>
          <div>
            <div className="bg-muted-foreground text-white p-2 px-4 rounded-full font-medium text-center">
              {product?.productType} App
            </div>
            <div className="my-4">
              <TechBadges technologies={product!.technologies} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              {product?.websiteLink && (
                <Link
                  href={product.websiteLink}
                  target="_blank"
                  className="flex gap-2 items-center text-primary hover:underline underline-offset-4 text-sm md:text-lg font-medium"
                >
                  <Earth color="cyan" /> Visit Website
                </Link>
              )}
              {product?.repositoryLink && (
                <Link
                  href={product.repositoryLink}
                  target="_blank"
                  className="flex gap-2 items-center text-primary hover:underline underline-offset-4 text-sm md:text-lg font-medium"
                >
                  <CodeXml color="green" /> Source Code
                </Link>
              )}
              {product?.apkLink && (
                <Link
                  href={product.apkLink}
                  target="_blank"
                  className="flex gap-2 items-center text-primary hover:underline underline-offset-4 text-sm md:text-lg font-medium"
                >
                  <FileCog color="orange" /> Download APK
                </Link>
              )}
            </div>
          </div>
        </div>
        <p className="mt-12 text-sm bg-gradient-to-br from-nmtstart via-nmt to-nmtend p-4 rounded-md text-white md:text-lg font-medium">
          {product?.description}
        </p>
      </div>
      <div className="bg-muted md:p-4 rounded-md">
        <Suspense fallback={<LoadingFallback />}>
          <MarkDown source={product?.readmeMarkup} />
        </Suspense>
      </div>
    </section>
  );
};

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <section id="product-detail" className="min-h-[calc(100vh-4rem)] md:p-4">
      <MaxWidth className="px-4 md:px-0 py-4">
        <Suspense fallback={<LoadingFallback />}>
          <Product productId={(await params).productId} />
        </Suspense>
      </MaxWidth>
    </section>
  );
};

export default ProductDetails;
