import { pageMetadata } from "@/lib/metadata";
import { policies } from "@/lib/static-data";
export const metadata = pageMetadata(
  "Privacy policy",
  "Read the NMT Solutions privacy policy and contact information for privacy questions.",
  "/privacy-policy",
);
export default function Privacy() {
  return (
    <article className="shell prose-page legal-page">
      <p className="eyebrow">NMT SOLUTIONS</p>
      <h1>Privacy policy</h1>
      <p className="legal-updated">Last updated: 1 March 2023</p>
      {policies.map((policy) => (
        <section key={policy.name}>
          <h2>{policy.name}</h2>
          <p>{policy.content1}</p>
          {Array.isArray(policy.content2) ? (
            <ul>
              {policy.content2.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          ) : (
            <p>{policy.content2}</p>
          )}
        </section>
      ))}
    </article>
  );
}
