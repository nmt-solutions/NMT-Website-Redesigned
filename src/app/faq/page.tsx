import { pageMetadata } from "@/lib/metadata";
import { faqs, site } from "@/lib/site-content";
import { StructuredData } from "@/components/revamp/StructuredData";
import ContactUs from "@/components/ContactUs";
export const metadata = pageMetadata(
  "Frequently asked questions",
  "Answers about NMT Solutions services, technology choices, IoT development, upcoming products, and how to get started.",
  "/faq",
);
export default function FAQ() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: `${site.url}/faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <section className="shell prose-page">
        <p className="eyebrow">NMT Solutions</p>
        <h1>Frequently asked questions</h1>
        <p className="page-intro">
          Read about our services, technologies, and project availability.
        </p>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ContactUs />
    </>
  );
}
