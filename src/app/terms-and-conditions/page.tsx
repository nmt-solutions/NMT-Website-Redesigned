import React from "react";
import ContentHeading from "@/components/ContentHeading";
import MaxWidth from "@/components/MaxWidth";
import NMTTextLogo from "@/components/NMTTextLogo";
import { termsData } from "@/lib/static-data";

export const dynamic = "force-static";

const TermsAndConditions = () => {
  return (
    <section id="terms-and-conditions">
      <MaxWidth className="p-4">
        <div className="bg-gray-50 py-4 rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center">
              <h1 className="flex items-center gap-2 justify-center mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900">
                <NMTTextLogo />
              </h1>
              <ContentHeading heading="Terms & Conditions" />
            </div>
            {/* Content Sections */}
            <div className="mt-10">
              {termsData.map((section, index) => (
                <div key={index} className="mt-8">
                  {/* Special Handling for Last Updated Date */}
                  {index === 0 && section.title.includes("Last updated") ? (
                    <p className="text-gray-500">{section.title}</p>
                  ) : (
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  )}
                  {/* Content */}
                  <div className="mt-4 text-lg text-gray-700 space-y-4">
                    {section.content.split("\n\n").map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-justify text-sm md:text-md lg:text-lg"
                      >
                        {paragraph
                          .split("\n")
                          .reduce(
                            (total, line) =>
                              [
                                total,
                                <br key={line} />,
                                line,
                              ] as unknown as string,
                          )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default TermsAndConditions;
