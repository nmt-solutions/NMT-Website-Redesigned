import { fetchProducts } from "./../server/actions";
import { Product } from "@/lib/models";
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
  const products = await fetchProducts();
  set((state) => ({ ...state, products: products as Product[] }));
};

const createProductsStore = (initState: ProductsState = defaultInitState) => {
  return createStore<ProductsStore>()((set) => {
    fetchInitialState(set);
    return {
      ...initState,
      addProduct: (product) =>
        set((state) => ({
          products: [
            ...state.products,
            { ...product, productId: (state.products.length + 1).toString() },
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
