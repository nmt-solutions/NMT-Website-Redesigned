import React from "react";
import ContentHeading from "@/components/ContentHeading";
import MaxWidth from "@/components/MaxWidth";
import NMTTextLogo from "@/components/NMTTextLogo";
import { policies } from "@/lib/static-data";

export const dynamic = "force-static";

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="min-h-[calc(100vh-4rem)]">
      <MaxWidth className="py-4">
        <div className="bg-gray-50 py-4 rounded-md px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="flex items gap-2 justify-center mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900">
              <NMTTextLogo />
            </h1>
            <ContentHeading heading="Privacy Policy" />
          </div>
          <div>
            <section className="privacy-policy">
              <p className="text-gray-500">Last updated on : 01/03/2023</p>
              {policies.map((policy) => (
                <section
                  key={policy.name}
                  className="my-8 text-lg text-gray-700 space-y-4"
                >
                  <h1 className="my-4 text-3xl font-bold text-black">
                    {policy.name}
                  </h1>
                  <h3 className="my-2 text-sm md:text-md lg:text-lg">
                    {policy.content1}
                  </h3>
                  <h3 className="my-2 text-sm md:text-md lg:text-lg">
                    {Array.isArray(policy.content2) ? (
                      <ul>
                        {policy.content2.map((content, index) => (
                          <ol key={index}>
                            {index + 1}. {content}
                          </ol>
                        ))}
                      </ul>
                    ) : (
                      policy.content2
                    )}
                  </h3>
                </section>
              ))}
            </section>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default PrivacyPolicy;
