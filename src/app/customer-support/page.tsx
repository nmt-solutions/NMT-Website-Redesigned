import { pageMetadata } from "@/lib/metadata";
import ContactUs from "@/components/ContactUs";
import { site } from "@/lib/site-content";
export const metadata = pageMetadata(
  "Customer support",
  "Contact NMT Solutions for application maintenance, integration questions, and technical support.",
  "/customer-support",
);
export default function Support() {
  return (
    <>
      <section className="shell prose-page">
        <p className="eyebrow">Customer support</p>
        <h1>Application support</h1>
        <p className="page-intro">
          Email {site.email} for help with an application or connected device.
          Include the details below so we can investigate.
        </p>
        <ul className="support-list">
          <li>Tell us which application or device you need help with.</li>
          <li>Describe what you expected and what happened instead.</li>
          <li>
            Include the steps to reproduce the issue and any relevant error
            message.
          </li>
          <li>
            Keep passwords, API keys, and other private credentials out of your
            message.
          </li>
        </ul>
      </section>
      <ContactUs />
    </>
  );
}
