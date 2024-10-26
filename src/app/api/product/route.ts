import { createProduct, uploadFile } from "@/database/operations";
import { ProductType } from "@/lib/enums";
import { Product, UploadedFile } from "@/lib/models";
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

    console.log(formData);
    console.log(apk);
    console.log(typeof apk);

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
