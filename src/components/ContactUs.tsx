import Link from "next/link";
import ContactUsForm from "./ContactUsForm";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";
import ContentHeading from "./ContentHeading";
import MaxWidth from "./MaxWidth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GlobalNetwork from "@/assets/images/global-network.jpg";
import SkewedHeading from "./SkewedHeading";

const ContactUs = () => {
  return (
    <section id="subscribe" className="relative min-h-screen p-4">
      <Image
        src={GlobalNetwork}
        alt="Global Network"
        fill
        className="h-screen w-screen z-[-10] object-cover"
      />
      <MaxWidth className="text-white">
        <ContentHeading heading="Contact Us" />
        <div className="flex flex-col md:flex-row md:items-center my-16 gap-8">
          <div className="mb-4 md:w-1/2 flex flex-col">
            <SkewedHeading skewedText={false}>
              <article className="text-lg font-semibold text-start">
                Still Got Questions?
                <br />
                Clarify your queries by emailing us
                <br />
                on address below
                <br />
                <Link
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "text-sm md:text-md lg:text-xl text-white",
                    "ml-[-1rem]",
                  )}
                  href="mailto: nanomacrotech.solutions@gmail.com"
                >
                  nanomacrotech.solutions@gmail.com
                </Link>
              </article>
            </SkewedHeading>
          </div>
          <SkewedHeading skewedText={false} className="md:w-1/2">
            <Card className="bg-transparent border-none text-white shadow-none">
              <ContactUsForm />
            </Card>
          </SkewedHeading>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ContactUs;
