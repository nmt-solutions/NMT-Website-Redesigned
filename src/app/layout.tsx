import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderFooterProvider from "@/providers/HeaderFooterProvider";
import { site } from "@/lib/site-content";
import "./globals.css";
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
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NMT Solutions — Software, thoughtfully connected",
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
    title: "NMT Solutions — Software, thoughtfully connected",
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NMT Solutions — Software, thoughtfully connected",
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
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <HeaderFooterProvider>{children}</HeaderFooterProvider>
      </body>
    </html>
  );
}
