import Image from "next/image";
import MaxWidth from "./MaxWidth";
import WebIcon from "@/assets/svgs/web.svg";
import PhoneIcon from "@/assets/svgs/phone.svg";
import ServerIcon from "@/assets/svgs/server.svg";
import MaintenanceIcon from "@/assets/svgs/maintenance.svg";
import { cn, isOdd } from "@/lib/utils";
import ContentHeading from "./ContentHeading";
import SkewedHeading from "./SkewedHeading";

const expertises = [
  {
    icon: WebIcon,
    heading: "Web & Mobile App Development",
    description:
      "Our team of experienced developers specializes in creating custom web applications using cutting-edge technologies, ensuring high-performance, scalability, and security for your business needs.We offer native mobile app development services for both iOS and Android platforms.",
  },
  {
    icon: PhoneIcon,
    heading: "Internet of Things / CPS",
    description:
      "We specialize in providing state-of-the-art IoT and CPS (Cyber-Physical Systems) solutions to enhance connectivity, efficiency, and data-driven decision-making for your business. Explore our offerings and discover how we can help you harness the power of smart technology.",
  },
  {
    icon: ServerIcon,
    heading: "Server Integration",
    description:
      "Our team has extensive experience in server integration, enabling seamless data exchange, enhanced security, and improved scalability for your apps. We use the latest technologies and industry best practices to deliver the highest level of server integration for our clients.",
  },
  {
    icon: MaintenanceIcon,
    heading: "24X7 Maintenance & Support",
    description:
      "Our maintenance and support services ensure that your app remains up-to-date, secure, and optimized for peak performance. We offer flexible maintenance plans to meet the unique needs of your business, providing ongoing support to help you stay ahead of the competition.",
  },
];

const ExpertiseCard = ({
  icon,
  heading,
  description,
  itemNumber,
}: {
  icon: string;
  heading: string;
  description: string;
  itemNumber: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col group/card hover:scale-105 duration-300 cursor-pointer group-hover/grid:[&:not(:hover)]:scale-95 group/grid",
        {
          "md:flex-row-reverse": isOdd(itemNumber),
          "md:flex-row": !isOdd(itemNumber),
        },
      )}
    >
      <div className="flex flex-col md:w-1/2 items-center gap-4 mb-2">
        <Image
          src={icon}
          alt={heading}
          height={100}
          width={100}
          className="graphic h-14 w-14 md:h-24 md:w-24"
        />
        <SkewedHeading className="text-sm sm:text-md lg:text-lg font-bold text-white">
          {heading}
        </SkewedHeading>
      </div>
      <div className="flex items-center md:w-1/2 p-8 text-sm text-justify text-muted-foreground hover:bg-slate-200 group-hover/card:text-black rounded-md">
        {description}
      </div>
    </div>
  );
};

const OurExpertise = () => {
  return (
    <section id="our-expertise">
      <MaxWidth>
        <ContentHeading heading="What We Offer" />
        <div className="grid grid-cols-1 duration-300 gap-12 group/grid">
          {expertises.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.heading}
              {...expertise}
              itemNumber={index + 1}
            />
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};

export default OurExpertise;

// ("md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 group/grid gap-6");
