import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { HeaderLinks } from "@/components/header-links";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
import { author, siteDescription, siteName, siteUrl } from "@/lib/seo";

const mainFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [author],
  creator: author.name,
  publisher: author.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
  };

  return (
    <html lang="en" className={mainFont.className}>
      <body className="selection:bg-yellow-200 antialiased [&_a]:cursor-default tracking-[-0.017em] bg-slate-50/70">
        <Script
          defer
          data-domain="jordienric.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <header className="container">
          <div className="mt-12 py-4">
            <h1 className="font-semibold text-xl px-3">Jordi Enric</h1>
            <p className="px-3 text-lg gap-1 text-slate-500">
              Software Engineer at{" "}
              <Link
                href="https://supabase.com?ref=jordienric"
                target="_blank"
                className="transition-all text-slate-900 font-medium inline-flex items-center gap-1.5 ml-1.5 hover:underline"
              >
                <Image
                  src="/logos/supabase-logo-icon.svg"
                  height="16"
                  width="16"
                  alt="Supabase logo"
                />
                Supabase
              </Link>
            </p>
          </div>
          <div className="flex">
            <HeaderLinks />
          </div>
        </header>

        {children}

        <footer className="my-12 flex justify-center">
          <Image
            src="/signature.svg"
            alt="Jordi Enric"
            width="100"
            height="100"
            className="py-12"
          />
        </footer>
      </body>
    </html>
  );
}
