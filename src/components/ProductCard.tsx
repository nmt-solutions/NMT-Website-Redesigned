import Image from "next/image";
import Link from "next/link";
import { truncateString } from "@/lib/utils";
import { Card } from "./ui/card";
import { Product } from "@/lib/models";
import TechBadges from "./TechBadges";

const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) => {
  return (
    <Card className="cursor-pointer hover:bg-slate-50" onClick={onClick}>
      <section
        id={`product-${product.productId}`}
        className="w-full h-full p-6 min-h-72 flex flex-col justify-between items-start"
      >
        <div className="flex items-center gap-8">
          <Image
            src={product.icon}
            alt="Icon Preview"
            height={96}
            width={96}
            className="max-h-16 min-h-16 max-w-16 min-w-16 object-cover rounded-full"
            priority
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h3 className="text-lg font-medium">{product.productName}</h3>
              <p className="text-muted-foreground text-sm">
                {product.productType} App
              </p>
            </div>
            <TechBadges technologies={product.technologies} />
          </div>
        </div>
        <p className="my-4 text-muted-foreground text-sm text-start">
          {truncateString(product.description)}
        </p>
        <div className="text-sm flex justify-around items-center w-full">
          {product.websiteLink && (
            <Link
              href={product.websiteLink}
              className="text-primary hover:underline"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              View Website
            </Link>
          )}
          {product.apkLink && (
            <Link
              href={product.apkLink}
              className="text-primary hover:underline"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Download APK
            </Link>
          )}
          {product.repositoryLink && (
            <Link
              href={product.repositoryLink}
              className="text-primary hover:underline"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              View Source Code
            </Link>
          )}
        </div>
      </section>
    </Card>
  );
};
export default ProductCard;
