import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { HeaderLinks } from "@/components/header-links";
import { IBM_Plex_Sans } from "next/font/google";

const mainFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <head />
      <body className="selection:bg-yellow-200 antialiased [&_a]:cursor-default tracking-[-0.017em] bg-slate-50/70">
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
