"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";

const Greeting = () => {
  const { user } = useUser();
  return (
    <section id="greeting">
      <h1 className="text-center text-xl font-semibold md:text-2xl lg:text-3xl lg:text-start">
        Hello {user?.fullName} 👋!!!
      </h1>
      <h3 className="text-md text-center md:texl-xl lg:text-2xl  lg:text-start">
        Manage your Products here...
      </h3>
    </section>
  );
};

export default Greeting;
