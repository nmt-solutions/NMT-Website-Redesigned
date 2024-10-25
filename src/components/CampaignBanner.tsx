import React from "react";
import Image from "next/image";
import Network from "@/assets/images/network.jpg";

const CampaignBanner = () => {
  return (
    <section
      id="campaign-banner"
      className="relative flex flex-col h-screen bg-transparent text-white text-center p-8 md:p-16 lg:p-24 lg:py-44 gap-6 justify-center items-center"
    >
      <Image
        src={Network}
        alt="Network"
        fill
        className="h-screen w-screen z-[-10] object-cover"
      />
      <h1 className="text-2xl font-semibold md:text-3xl lg:text-6xl">
        Start to Simplify Your Business With NMT Solutions
      </h1>
      <h3 className="text-xl">
        Say goodbye to complexity and hello to simplicity as you embark on a
        journey <br />
        to streamline your business tools. With NMT Solutions your business has
        never been easier.
      </h3>
    </section>
  );
};

export default CampaignBanner;
