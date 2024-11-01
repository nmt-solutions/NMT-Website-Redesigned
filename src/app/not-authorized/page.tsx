import { ShieldX } from "lucide-react";
import React from "react";

const NotAuthorized = () => {
  return (
    <section id="not-authorized" className="min-h-screen p-6">
      <div className="h-96 flex flex-col justify-center items-center bg-muted rounded-md gap-4 md:flex-row">
        <ShieldX color="red" size={48} className="animate-pulse" />
        <h3 className="text-sm p-4 text-center md:text-xl font-bold">
          You are not authorized to visit this page.
        </h3>
      </div>
    </section>
  );
};

export default NotAuthorized;
