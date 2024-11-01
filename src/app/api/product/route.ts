import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "@/database/operations";
import { ProductType } from "@/lib/enums";
import { Product } from "@/lib/models";
import { APIResponse, APIStatus } from "@/lib/network";
import { NextRequest, NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const productName = formData.get("productName")?.toString() ?? "";
    const productType = formData.get("productType")?.toString() ?? "";
    const iconUrl = formData.get("icon")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const readmeMarkup = formData.get("readmeMarkup")?.toString() ?? "";
    const repositoryLink = formData.get("repositoryLink")?.toString() ?? "";
    const technologies = formData.get("technologies")?.toString() ?? "";
    const apkUrl = formData.get("apk")?.toString() ?? "";
    const websiteLink = formData.get("websiteLink")?.toString() ?? "";

    const addedProduct = await createProduct({
      productName,
      productType: productType as ProductType,
      icon: iconUrl,
      description,
      readmeMarkup,
      repositoryLink,
      technologies,
      apkLink: apkUrl,
      websiteLink,
    });

    return NextResponse.json(
      {
        status: APIStatus.Success,
        message: `Product Added.`,
        data: addedProduct as Product,
      } as APIResponse<Product>,
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: APIStatus.Error,
        message: (error as Error).message,
      } as APIResponse<Product>,
      { status: 500 },
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const productId = formData.get("productId")?.toString() ?? "";
    const productName = formData.get("productName")?.toString() ?? "";
    const productType = formData.get("productType")?.toString() ?? "";
    const icon = formData.get("icon")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const readmeMarkup = formData.get("readmeMarkup")?.toString() ?? "";
    const repositoryLink = formData.get("repositoryLink")?.toString() ?? "";
    const technologies = formData.get("technologies")?.toString() ?? "";
    const apk = formData.get("apk")?.toString() ?? "";
    const websiteLink = formData.get("websiteLink")?.toString() ?? undefined;
    const filesToDelete = formData.get("filesToDelete")?.toString() ?? "";

    const product = await getProduct(productId);

    if (!product) {
      return NextResponse.json(
        {
          status: APIStatus.Error,
          message: "Product not found.",
        } as APIResponse<Product>,
        { status: 404 },
      );
    }

    const utapi = new UTApi();

    const promises: [
      Promise<{
        productId: string;
        productName: string;
        productType: string;
        icon: string;
        description: string;
        readmeMarkup: string;
        repositoryLink: string;
        technologies: string;
        websiteLink: string | null;
        createdAt: Date;
        updatedAt: Date;
        apkLink: string | null;
      }>,
      Promise<{
        readonly success: boolean;
        readonly deletedCount: number;
      }>,
    ] = [
      updateProduct({
        productId,
        productName,
        productType: productType as ProductType,
        icon: icon,
        description,
        readmeMarkup,
        repositoryLink,
        technologies,
        apkLink: apk,
        websiteLink,
      }),
      utapi.deleteFiles(filesToDelete.split(";"), {
        keyType: "fileKey",
      }),
    ];
    const [updatedProduct, deletedFiles] = await Promise.all(promises);

    return NextResponse.json(
      {
        status: APIStatus.Success,
        message: `Product Updated. ${deletedFiles.deletedCount}`,
        data: updatedProduct as Product,
      } as APIResponse<Product>,
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: APIStatus.Error,
        message: (error as Error).message,
      } as APIResponse<Product>,
      { status: 500 },
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const { productId } = await req.json();

    if (!productId) {
      return NextResponse.json(
        {
          status: APIStatus.Error,
          message: "Attatch 'productId' in the body.",
        } as APIResponse<Product>,
        { status: 400 },
      );
    }

    const product = await deleteProduct(productId);

    if (!product) {
      return NextResponse.json(
        {
          status: APIStatus.Error,
          message: "Product not found.",
        } as APIResponse<Product>,
        { status: 404 },
      );
    }

    const utapi = new UTApi();

    const filesToDelete: string[] = [];

    if (product.icon) {
      const iconFileId = product.icon.split("/");
      if (iconFileId) {
        filesToDelete.push(iconFileId.pop() ?? "");
      }
    }

    if (product.apkLink) {
      const apkFileId = product.apkLink.split("/");
      if (apkFileId) {
        filesToDelete.push(apkFileId.pop() ?? "");
      }
    }

    if (filesToDelete.length > 0) {
      await utapi.deleteFiles(filesToDelete, { keyType: "fileKey" });
    }

    return NextResponse.json(
      {
        status: APIStatus.Success,
        message: `Product Removed.`,
      } as APIResponse<Product>,
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: APIStatus.Error,
        message: (error as Error).message,
      } as APIResponse<Product>,
      { status: 500 },
    );
  }
};
