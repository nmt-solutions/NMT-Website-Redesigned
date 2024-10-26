import React from "react";
import NMTTextLogo from "./NMTTextLogo";
import MaxWidth from "./MaxWidth";
import Link from "next/link";
import { Routes } from "@/routes/routes";

const footerNavs = [
  {
    name: "COMPANY",
    navs: [
      {
        name: "About Us",
        path: Routes.AboutUs,
        isNav: true,
        showHeader: true,
        showFooter: true,
      },
      {
        name: "Terms & Conditions",
        path: Routes.TermsAndConditions,
        showHeader: true,
        showFooter: true,
      },
      {
        name: "Privacy Policy",
        path: Routes.PrivacyPolicy,
        showHeader: true,
        showFooter: true,
      },
    ],
  },
  {
    name: "SOLUTIONS",
    navs: [
      {
        name: "Products",
        path: Routes.OurProducts,
        isNav: true,
        showHeader: true,
        showFooter: true,
      },
      {
        name: "Technologies",
        path: Routes.TechnologyStack,
        showHeader: true,
        showFooter: true,
      },
    ],
  },
  {
    name: "HELP",
    navs: [
      {
        name: "Customer Support",
        path: Routes.CustomerSupport,
        showHeader: true,
        showFooter: true,
      },
      {
        name: "FAQ's",
        path: Routes.FAQ,
        showHeader: true,
        showFooter: true,
      },
    ],
  },
];

const Dot = () => {
  return (
    <span className="inline-block h-1 w-1 md:h-2 md:w-2 rounded-full bg-white"></span>
  );
};

const Footer = () => {
  return (
    <>
      <h1 className="bg-nmt text-white text-2 flex items-center justify-around p-4">
        <span>IoT</span>
        <Dot />
        <span>WEB APPS</span>
        <Dot />
        <span>MOBILE APPS</span>
        <Dot />
        <span>SERVERS</span>
      </h1>
      <footer id="footer" className="text-white bg-black p-6 md:p-12 lg:p-24">
        <MaxWidth className="flex flex-col gap-8 md:flex-row">
          <section className="md:w-1/3 flex flex-col gap-4 justify-center">
            <NMTTextLogo />
            <h3 className="text-sm">
              Enjoy peace of mind knowing that your
              <br /> business tools are always in sync and taken care of.
            </h3>
          </section>
          <section className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {footerNavs.map((group) => (
              <div key={group.name} className="flex flex-col gap-6">
                <h3>{group.name}</h3>
                <div className="flex flex-col text-sm gap-1 text-muted-foreground">
                  {group.navs.map((nav) => (
                    <Link
                      key={nav.path}
                      href={nav.path}
                      className="hover:text-muted"
                    >
                      {nav.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* <div className="flex flex-col gap-6">
              <h3>COMPANY</h3>
              <div className="flex flex-col text-sm gap-1 text-muted-foreground">
                <Link href="#" className="hover:text-muted">
                  About Us
                </Link>
                <Link href="#" className="hover:text-muted">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover:text-muted">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3>SOLUTIONS</h3>
              <div className="flex flex-col text-sm gap-1 text-muted-foreground">
                <Link href="#" className="hover:text-muted">
                  Products
                </Link>
                <Link href="#" className="hover:text-muted">
                  Web Applications
                </Link>
                <Link href="#" className="hover:text-muted">
                  Mobile Application
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3>HELP</h3>
              <div className="flex flex-col text-sm gap-1 text-muted-foreground">
                <Link href="#" className="hover:text-muted">
                  Customer Support
                </Link>
                <Link href="#" className="hover:text-muted">
                  FAQ&apos;s
                </Link>
              </div>
            </div> */}
          </section>
        </MaxWidth>
        <MaxWidth>
          <section className="flex justify-between items-center mt-8 pt-4 border-t">
            <span className="flex gap-2 items-center text-muted-foreground">
              &copy; {new Date().getFullYear()} NMT Solutions
            </span>
            <span></span>
          </section>
        </MaxWidth>
      </footer>
    </>
  );
};

export default Footer;
