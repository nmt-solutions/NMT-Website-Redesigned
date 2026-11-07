import { pageMetadata } from "@/lib/metadata";
import ContactUs from "@/components/ContactUs";
export const metadata = pageMetadata(
  "Customer support",
  "Contact NMT Solutions for application maintenance, integration questions, and technical support.",
  "/customer-support",
);
export default function Support() {
  return (
    <>
      <section className="shell prose-page">
        <p className="eyebrow">HERE FOR WHAT COMES NEXT</p>
        <h1>
          Let’s keep things
          <br />
          working together.
        </h1>
        <p className="page-intro">
          Need help with an application or connected system? Email
          support@nmt-solutions.in so we can understand what is happening.
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
