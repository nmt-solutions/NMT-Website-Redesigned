import { pageMetadata } from "@/lib/metadata";
import TechStack from "@/components/revamp/TechStack";
import MotionProvider from "@/components/revamp/MotionProvider";
import ContactUs from "@/components/ContactUs";
export const metadata = pageMetadata(
  "Our technology stack",
  "Explore the NMT Solutions stack: React, Next.js, TypeScript, React Native, Expo, Flutter, Node.js, Python, PostgreSQL, Cloudflare, and Raspberry Pi.",
  "/tech-stack",
);
export default function StackPage() {
  return (
    <>
      <MotionProvider>
        <TechStack standalone />
      </MotionProvider>
      <ContactUs />
    </>
  );
}
