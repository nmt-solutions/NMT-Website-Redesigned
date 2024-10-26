import { Product } from "@/lib/models";
import { APIResponse } from "@/lib/network";
import { APIRoutes } from "@/routes/routes";
import { createStore } from "zustand/vanilla";

export type ProductsState = {
  products: Product[];
};

export type ProductsActions = {
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
};

export type ProductsStore = ProductsState & ProductsActions;

export const defaultInitState: ProductsState = {
  products: [],
};

const fetchInitialState = async (set: {
  (
    partial:
      | ProductsStore
      | Partial<ProductsStore>
      | ((state: ProductsStore) => ProductsStore | Partial<ProductsStore>),
    replace?: false,
  ): void;
  (
    state: ProductsStore | ((state: ProductsStore) => ProductsStore),
    replace: true,
  ): void;
}) => {
  const isServer = typeof window === "undefined";
  const baseUrl = isServer
    ? process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000" // Adjust the default URL and port as needed
    : "";

  const res = await fetch(`${baseUrl}${APIRoutes.Products}`);

  const parsedResponse: APIResponse<Product[]> = await res.json();
  set((state) => ({ ...state, products: parsedResponse.data as Product[] }));
};

const createProductsStore = (initState: ProductsState = defaultInitState) => {
  return createStore<ProductsStore>()((set) => {
    fetchInitialState(set);
    return {
      ...initState,
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      removeProduct: (product) =>
        set((state) => ({
          products: state.products.filter(
            (prod) => prod.productId !== product.productId,
          ),
        })),
      updateProduct: (updatedProduct) =>
        set((state) => {
          const index = state.products.findIndex(
            (prod) => prod.productId === updatedProduct.productId,
          );
          state.products[index] = updatedProduct;
          return {
            products: [...state.products],
          };
        }),
    };
  });
};

export default createProductsStore;

// const useProducts = create<ProductsState>((set) => ({
//   products: [],
//   addProduct: (product) =>
//     set((state) => ({
//       products: [
//         ...state.products,
//         { ...product, productId: state.products.length + 1 },
//       ],
//     })),
//   removeProduct: (product) =>
//     set((state) => ({
//       products: state.products.filter(
//         (prod) => prod.productId !== product.productId,
//       ),
//     })),
//   updateProduct: (updatedProduct) =>
//     set((state) => {
//       const index = state.products.findIndex(
//         (prod) => prod.productId === updatedProduct.productId,
//       );
//       state.products[index] = updatedProduct;
//       return {
//         products: [...state.products],
//       };
//     }),
// }));

// export default useProducts;
