import { ProductType } from "./enums";

export interface Product {
  productId?: string;
  productType: ProductType;
  icon: string;
  productName: string;
  description: string;
  technologies: string;
  readmeMarkup: string;
  repositoryLink: string;
  apkLink?: string | null;
  websiteLink?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Subscription = {
  subscriptionId: string;
  fullname: string;
  businessEmail: string;
  phone: string;
  country: string;
  requirement: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RawSubscription = {
  fullname: string;
  businessEmail: string;
  phone: string;
  country: string;
  requirement: string;
};

export type UploadedFile = {
  data: Buffer;
  createdAt: Date;
  updatedAt: Date;
  fileId: string;
  filename: string;
  mimeType: string;
  size: number;
};
