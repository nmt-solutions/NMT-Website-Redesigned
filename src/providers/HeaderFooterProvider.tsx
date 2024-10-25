"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import routes, { matchRoute } from "@/routes/routes";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

const HeaderFooterProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const showHeader = routes.find((route) =>
    matchRoute(route.path, pathname),
  )?.showHeader;

  const showFooter = routes.find((route) =>
    matchRoute(route.path, pathname),
  )?.showFooter;

  return (
    <div className="h-screen w-screen overflow-auto">
      {showHeader && <Header />}
      <main
        className={cn("mt-16", {
          "mb-16": !showFooter,
          "mb-0": showFooter,
        })}
      >
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default HeaderFooterProvider;
