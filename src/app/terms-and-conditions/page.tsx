import { pageMetadata } from "@/lib/metadata";
import { termsData } from "@/lib/static-data";
export const metadata = pageMetadata(
  "Terms and conditions",
  "Read the terms and conditions for using NMT Solutions services.",
  "/terms-and-conditions",
);
export default function Terms() {
  return (
    <article className="shell prose-page legal-page">
      <p className="eyebrow">NMT SOLUTIONS</p>
      <h1>Terms & conditions</h1>
      {termsData.map((section, index) => (
        <section key={section.title}>
          {index === 0 && section.title.includes("Last updated") ? (
            <p className="legal-updated">{section.title}</p>
          ) : (
            <h2>{section.title}</h2>
          )}
          {section.content.split("\n\n").map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
