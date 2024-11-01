import Banner from "@/components/Banner";
import CampaignBanner from "@/components/CampaignBanner";
import ContactUs from "@/components/ContactUs";
import OurExpertise from "@/components/OurExpertise";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Banner />
      <CampaignBanner />
      <OurExpertise />
      <ContactUs />
    </>
  );
}
