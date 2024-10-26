"use server";
import "server-only";
import database from ".";
import { Product, RawSubscription } from "@/lib/models";
import { Files, Products, Subscriptions } from "./schema";

export const createSubscription = async (subscription: RawSubscription) => {
  const [sub] = await database
    .insert(Subscriptions)
    .values({
      fullname: subscription.fullname,
      businessEmail: subscription.businessEmail,
      phone: subscription.phone,
      country: subscription.country,
      requirement: subscription.requirement,
    })
    .returning();

  return sub;
};

export const uploadFile = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const [uploadedFile] = await database
    .insert(Files)
    .values({
      filename: file.name,
      mimeType: file.type,
      data: buffer,
      size: file.size,
    })
    .returning();

  return uploadedFile;
};

export const createProduct = async (product: Product) => {
  const [addedProduct] = await database
    .insert(Products)
    .values({
      productName: product.productName,
      productType: product.productType,
      icon: product.icon,
      description: product.description,
      readmeMarkup: product.readmeMarkup,
      repositoryLink: product.repositoryLink,
      technologies: product.technologies,
      apkLink: product.apkLink ?? null,
      websiteLink: product.websiteLink ?? null,
    })
    .returning();

  return addedProduct;
};

export const getProducts = async () => {
  const products = await database.query.Products.findMany();

  return products;
};
