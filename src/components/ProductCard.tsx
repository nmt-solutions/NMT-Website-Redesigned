import { technologiesOptions } from "@/lib/static-data";
import { truncateString } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Product } from "@/lib/enums";

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
          />
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <h3 className="text-lg font-medium">{product.productName}</h3>
              <p className="text-muted-foreground text-sm">
                {product.productType} App
              </p>
            </div>
            <div className="flex gap-1 flex-wrap">
              {technologiesOptions
                .filter((tech) => product.technologies.includes(tech.value))
                .map((tech) => (
                  <Badge key={tech.value}>{tech.label}</Badge>
                ))}
            </div>
          </div>
        </div>
        <p className="my-4 text-muted-foreground text-sm text-start">
          {truncateString(product.description)}
        </p>
        <div className="text-sm flex justify-around items-center">
          {product.websiteLink && (
            <Link href={product.websiteLink}>View Website</Link>
          )}
          {product.apkLink && (
            <Link href={product.apkLink} className="text-primary">
              Download APK
            </Link>
          )}
          {product.repositoryLink && (
            <Link href={product.repositoryLink} className="text-primary">
              View Source Code
            </Link>
          )}
        </div>
      </section>
    </Card>
  );
};
export default ProductCard;
