import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderFooterProvider from "@/providers/HeaderFooterProvider";
import { site } from "@/lib/site-content";
import "./globals.css";
import "./glass.css";
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});
const display = localFont({
  src: "./fonts/SpaceGrotesk-latin.woff2",
  variable: "--font-display",
  weight: "300 700",
  display: "swap",
});
const bodyFont = localFont({
  src: "./fonts/Manrope-latin.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NMT Solutions | Web, mobile and IoT development",
    template: "%s | NMT Solutions",
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: "NMT Solutions | Web, mobile and IoT development",
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NMT Solutions | Web, mobile and IoT development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og-image.png"],
  },
  alternates: {
    types: {
      "text/plain": [
        {
          url: "/llms.txt",
          title: "NMT Solutions information for AI assistants",
        },
      ],
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${display.variable} ${bodyFont.variable}`}
      >
        <HeaderFooterProvider>{children}</HeaderFooterProvider>
      </body>
    </html>
  );
}
