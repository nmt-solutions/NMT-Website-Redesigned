export enum Roles {
  Admin = "admin",
}

export enum ProductType {
  IoT = "IoT",
  Web = "Web",
  Mobile = "Mobile",
}

export interface Product {
  productId?: string | number;
  productType: ProductType;
  icon: string;
  productName: string;
  description: string;
  technologies: string;
  readmeMarkup: string;
  repositoryLink: string;
  apkLink?: string;
  websiteLink?: string;
}
