"use server";
import {
  createProduct,
  createSubscription,
  getProducts,
  uploadFile,
} from "@/database/operations";
import { ProductType } from "@/lib/enums";
import { Product, Subscription, UploadedFile } from "@/lib/models";
import { ActionResult, APIStatus } from "@/lib/network";
import "server-only";

export const submitSubscrition = async (
  formData: FormData,
): Promise<ActionResult<Subscription>> => {
  const fullname = formData.get("fullname")!.toString();
  const businessEmail = formData.get("businessEmail")!.toString();
  const phone = formData.get("phone")!.toString();
  const country = formData.get("country")!.toString();
  const requirement = formData.get("requirement")!.toString();

  try {
    const subscription = await createSubscription({
      fullname,
      businessEmail,
      phone,
      country,
      requirement,
    });

    return {
      status: APIStatus.Success,
      message: "Subscribed successfully.",
      data: subscription,
    };
  } catch (error: unknown) {
    console.log(error);
    return { status: APIStatus.Error, message: (error as Error).message };
  }
};

export const submitProduct = async (
  formData: FormData,
): Promise<ActionResult<Product>> => {
  try {
    const productName = formData.get("productName")?.toString() ?? "";
    const productType = formData.get("productType")?.toString() ?? "";
    const icon = formData.get("icon") as File;
    const description = formData.get("description")?.toString() ?? "";
    const readmeMarkup = formData.get("readmeMarkup")?.toString() ?? "";
    const repositoryLink = formData.get("repositoryLink")?.toString() ?? "";
    const technologies = formData.get("technologies")?.toString() ?? "";
    const apk = (formData.get("apk") as File) ?? undefined;
    const websiteLink = formData.get("websiteLink")?.toString() ?? undefined;

    const uploadedIcon = await uploadFile(icon);

    let uploadedAPK: UploadedFile;
    if (apk) {
      uploadedAPK = await uploadFile(apk);
    }

    const addedProduct = await createProduct({
      productName,
      productType: productType as ProductType,
      icon: `/api/file/${uploadedIcon.fileId}`,
      description,
      readmeMarkup,
      repositoryLink,
      technologies,
      apkLink: apk ? `/api/file/${uploadedAPK!.fileId}` : undefined,
      websiteLink,
    });

    return {
      status: APIStatus.Success,
      message: `Product Added.`,
      data: addedProduct as Product,
    };
  } catch (error: unknown) {
    console.log(error);
    return {
      status: APIStatus.Error,
      message: (error as Error).message,
    };
  }
};

export const fetchProducts = async () => {
  try {
    const products = await getProducts();
    return products;
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
};
