import { pageMetadata } from "@/lib/metadata";
import TechStack from "@/components/revamp/TechStack";
import MotionProvider from "@/components/revamp/MotionProvider";
import ContactUs from "@/components/ContactUs";
export const metadata = pageMetadata(
  "Our technology stack",
  "Explore the tools NMT Solutions uses for web, mobile, APIs, and IoT: React, Next.js, Flutter, Python, PostgreSQL, Cloudflare Tunnel, and Raspberry Pi.",
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
