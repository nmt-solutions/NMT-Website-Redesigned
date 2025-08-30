import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import NMTLogo from "@/assets/svgs/nmt-logo.svg";
import HoneyComb from "@/assets/svgs/honeycomb.svg";
import MobileGraphic from "@/assets/images/mobile-development.png";
import GradientText from "./GradientText";

const Banner = () => {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 px-4 md:pt-0 h-[calc(100vh-4rem)]">
      <Image
        src={HoneyComb}
        alt="honeycomb"
        className="absolute top-0 left-0 h-[calc(100vh-4rem)] w-screen z-[-120] object-cover opacity-30"
        priority
      />
      <div className="flex flex-col justify-center items-center lg:hidden gap-8">
        <div className="flex gap-2 my-8 justify-center items-center font-bold text-2xl">
          <Image
            src={NMTLogo}
            alt="NMT Solutions"
            height={40}
            width={40}
            priority
          />
          <span className="bg-gradient-to-br from-nmtstart via-nmt to-nmtend bg-nmt px-2 rounded text-white animate-bounce">
            NMT
          </span>
          <GradientText>Solutions</GradientText>
        </div>
        <Image
          src={MobileGraphic}
          alt="Mobile Dev"
          height={250}
          width={350}
          className="w-[350px]"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center lg:items-start lg:ml-20 lg:mt-0">
        <div className="font-bold text-2xl md:text-3xl lg:text-6xl">
          <div className="hidden lg:flex gap-4 my-8 items-center">
            <Image
              src={NMTLogo}
              alt="NMT Solutions"
              height={65}
              width={65}
              priority
            />

            <span className="bg-gradient-to-br from-nmtstart via-nmt to-nmtend px-2 rounded-[0.5rem] text-white animate-bounce">
              NMT
            </span>

            <GradientText>Solutions</GradientText>
          </div>
          <div className="text-xl md:text-3xl lg:5xl">
            <GradientText>
              Internet of Things and Application Development
            </GradientText>
          </div>
        </div>
        <div className="text-sm lg:text-xl lg:text-md lg:items-start">
          Focus on your business.
          <br />
          Application development and maintenance is our responsibility.
        </div>
        <div className="flex gap-4">
          <Link
            href="#subscribe"
            className={buttonVariants({ variant: "default" })}
          >
            Subscribe
          </Link>
          <Link
            href="/tech-stack"
            className={buttonVariants({ variant: "outline" })}
          >
            Our Tech Stack
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center">
        <Image src={MobileGraphic} alt="Mobile Dev" height={731} width={1000} />
      </div>
    </section>
  );
};

export default Banner;
