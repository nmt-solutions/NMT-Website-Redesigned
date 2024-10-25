import { Product } from "@/lib/enums";
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

const createProductsStore = (initState: ProductsState = defaultInitState) => {
  return createStore<ProductsStore>()((set) => ({
    ...initState,
    addProduct: (product) =>
      set((state) => ({
        products: [
          ...state.products,
          { ...product, productId: state.products.length + 1 },
        ],
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
  }));
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
