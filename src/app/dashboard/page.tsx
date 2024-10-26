import AddProducts from "@/components/AddProducts";
import Greeting from "@/components/Greeting";
import LoadingFallback from "@/components/LoadingFallback";
import MaxWidth from "@/components/MaxWidth";
import Products from "@/components/Products";
import Subscriptions from "@/components/Subscriptions";
import React, { Suspense } from "react";

const Dashboard = () => {
  return (
    <section id="dashboard" className="min-h-[calc(100vh-4rem)]">
      <MaxWidth className="px-4 lg:px-0 py-4">
        <Greeting />
        <AddProducts />
        <h3 className="text-xl font-normal my-8">
          Manage Your Product Showcase
        </h3>
        <Products />
        <Suspense fallback={<LoadingFallback />}>
          <Subscriptions />
        </Suspense>
      </MaxWidth>
    </section>
  );
};

export default Dashboard;
