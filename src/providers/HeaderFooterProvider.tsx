import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { PropsWithChildren } from "react";
export default function HeaderFooterProvider({ children }: PropsWithChildren) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
