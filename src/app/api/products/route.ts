import { getProducts } from "@/database/operations";
import { Product } from "@/lib/models";
import { APIResponse, APIStatus } from "@/lib/network";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const products = await getProducts();
    return NextResponse.json(
      {
        status: APIStatus.Success,
        message: "Products Fetched.",
        data: products,
      } as APIResponse<Product[]>,
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: APIStatus.Error,
        message: (error as Error).message,
      } as APIResponse<Product[]>,
      { status: 500 },
    );
  }
};
