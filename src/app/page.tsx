import type { Metadata } from "next";
import HomeExperience from "@/components/revamp/HomeExperience";
import {
  StructuredData,
  organizationSchema,
} from "@/components/revamp/StructuredData";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <HomeExperience />
    </>
  );
}
