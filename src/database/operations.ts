"use server";
import "server-only";
import database from ".";
import { Product, RawSubscription } from "@/lib/models";
import { Products, Subscriptions } from "./schema";
import path from "path";
import { promises as fs } from "fs";
import mime from "mime-types";
import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";

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

// export const uploadFile = async (file: File) => {
//   const arrayBuffer = await file.arrayBuffer();
//   const buffer = Buffer.from(arrayBuffer);

//   const [uploadedFile] = await database
//     .insert(Files)
//     .values({
//       filename: file.name,
//       mimeType: file.type,
//       data: buffer,
//       size: file.size,
//     })
//     .returning();

//   return uploadedFile;
// };

export const uploadFilesLocal = async (file: File) => {
  // Read the file data
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Ensure the upload directory exists
  const uploadDir = path.join(process.cwd(), "public", "files");
  await fs.mkdir(uploadDir, { recursive: true });

  // Generate a unique filename
  const fileExtension = mime.extension(file.type) || "bin";
  const fileName = `${randomUUID()}.${fileExtension}`;
  const filePath = path.join(uploadDir, fileName);

  // Save the file
  await fs.writeFile(filePath, buffer);

  // Generate a URL to access the file
  const fileUrl = `/files/${fileName}`;

  return fileUrl;
};

export const deleteFileLocal = async (fileUrl: string) => {
  const deleteDir = path.join(process.cwd(), "public", fileUrl);
  await fs.unlink(deleteDir);
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

export const getProduct = async (productId: string) => {
  const product = await database.query.Products.findFirst({
    where: (columns, { eq }) => eq(columns.productId, productId),
  });

  return product;
};

export const updateProduct = async (product: Product) => {
  const [updatedProduct] = await database
    .update(Products)
    .set({
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
    .where(eq(Products.productId, product.productId!))
    .returning();

  return updatedProduct;
};

export const deleteProduct = async (productId: string) => {
  const [deletedProduct] = await database
    .delete(Products)
    .where(eq(Products.productId, productId))
    .returning();

  return deletedProduct;
};

export const getProducts = async () => {
  const products = await database.query.Products.findMany({
    orderBy: (columns, {}) => columns.createdAt,
  });

  return products;
};

export const getSubscriptions = async () => {
  const subs = await database.query.Subscriptions.findMany({
    orderBy: (columns, {}) => columns.createdAt,
  });

  return subs;
};
