import {
  createProduct,
  deleteFileLocal,
  deleteProduct,
  getProduct,
  updateProduct,
  uploadFilesLocal,
} from "@/database/operations";
import { ProductType } from "@/lib/enums";
import { Product } from "@/lib/models";
import { APIResponse, APIStatus } from "@/lib/network";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const productName = formData.get("productName")?.toString() ?? "";
    const productType = formData.get("productType")?.toString() ?? "";
    const icon = formData.get("icon") as File;
    const description = formData.get("description")?.toString() ?? "";
    const readmeMarkup = formData.get("readmeMarkup")?.toString() ?? "";
    const repositoryLink = formData.get("repositoryLink")?.toString() ?? "";
    const technologies = formData.get("technologies")?.toString() ?? "";
    const apk = (formData.get("apk") as File) ?? undefined;
    const websiteLink = formData.get("websiteLink")?.toString() ?? undefined;

    let uploadedIconURL: string;
    if (icon) {
      uploadedIconURL = await uploadFilesLocal(icon);
    }

    let uploadedAPKURL: string;
    if (apk) {
      uploadedAPKURL = await uploadFilesLocal(apk);
    }

    const addedProduct = await createProduct({
      productName,
      productType: productType as ProductType,
      icon: uploadedIconURL!,
      description,
      readmeMarkup,
      repositoryLink,
      technologies,
      apkLink: apk ? uploadedAPKURL! : undefined,
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
    const icon = formData.get("icon") as File;
    const description = formData.get("description")?.toString() ?? "";
    const readmeMarkup = formData.get("readmeMarkup")?.toString() ?? "";
    const repositoryLink = formData.get("repositoryLink")?.toString() ?? "";
    const technologies = formData.get("technologies")?.toString() ?? "";
    const apk = (formData.get("apk") as File) ?? undefined;
    const websiteLink = formData.get("websiteLink")?.toString() ?? undefined;

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

    try {
      if (icon && icon.size > 0) {
        await deleteFileLocal(product.icon);
      }

      if (apk && product.apkLink) {
        await deleteFileLocal(product.apkLink);
      }
    } catch (error: unknown) {
      console.log(error as Error);
    }

    let uploadedIconURL: string;
    if (icon && icon.size > 0) {
      uploadedIconURL = await uploadFilesLocal(icon);
    }

    let uploadedAPKURL: string;
    if (apk) {
      uploadedAPKURL = await uploadFilesLocal(apk);
    }

    const updatedProduct = await updateProduct({
      productId,
      productName,
      productType: productType as ProductType,
      icon: icon && icon.size > 0 ? uploadedIconURL! : product.icon,
      description,
      readmeMarkup,
      repositoryLink,
      technologies,
      apkLink: apk ? uploadedAPKURL! : product.apkLink,
      websiteLink,
    });

    return NextResponse.json(
      {
        status: APIStatus.Error,
        message: "Product Updated.",
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

    try {
      await deleteFileLocal(product.icon);

      if (product.apkLink) {
        await deleteFileLocal(product.apkLink);
      }
    } catch (error: unknown) {
      console.log(error as Error);
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
