import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderFooterProvider from "@/providers/HeaderFooterProvider";
import ProductsStoreProvider from "@/providers/ProductsStoreProvider";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NMT Solutions",
  description: "NMT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.className} antialiased`}>
        <ClerkProvider>
          <ProductsStoreProvider>
            <HeaderFooterProvider>{children}</HeaderFooterProvider>
          </ProductsStoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
