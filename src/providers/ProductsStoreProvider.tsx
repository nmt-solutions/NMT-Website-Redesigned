"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import createProductsStore, { type ProductsStore } from "@/stores/products";

export type ProductsStoreApi = ReturnType<typeof createProductsStore>;

export const ProductsStoreContext = createContext<ProductsStoreApi | undefined>(
  undefined,
);

export interface ProductsStoreProviderProps {
  children: ReactNode;
}

const ProductsStoreProvider = ({ children }: ProductsStoreProviderProps) => {
  const storeRef = useRef<ProductsStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createProductsStore();
  }

  return (
    <ProductsStoreContext.Provider value={storeRef.current}>
      {children}
    </ProductsStoreContext.Provider>
  );
};

export default ProductsStoreProvider;

export const useProductsStore = <T,>(
  selector: (store: ProductsStore) => T,
): T => {
  const productsStoreContext = useContext(ProductsStoreContext);

  if (!productsStoreContext) {
    throw new Error(
      `useProductsStore must be used within ProductsStoreProvider`,
    );
  }

  return useStore(productsStoreContext, selector);
};
