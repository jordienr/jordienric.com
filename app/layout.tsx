import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { HeaderLinks } from "@/components/header-links";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="selection:bg-yellow-200 antialiased [&_a]:cursor-default tracking-[-0.017em] bg-slate-50/70">
        <header className="pt-12 px-1 container">
          <h1 className="font-semibold text-xl px-3">Jordi Enric</h1>
          <h4 className="flex px-3 text-lg items-center gap-1 text-slate-500">
            Frontend at{" "}
            <Link
              href="https://supabase.com?ref=jordienric"
              target="_blank"
              className="transition-all text-slate-900 font-medium inline-flex items-center gap-1.5 hover:underline px-1"
            >
              <Image
                src="/logos/supabase-logo-icon.svg"
                height="16"
                width="16"
                alt="Supabase logo"
              />
              Supabase
            </Link>
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <HeaderLinks />
          </div>
        </header>

        {children}

        <footer className="mt-12 flex justify-center opacity-30">
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
