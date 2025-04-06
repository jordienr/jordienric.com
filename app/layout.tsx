import Image from "next/image";
import "./globals.css";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn, FaGithubAlt, FaXTwitter } from "react-icons/fa6";

const iconProps = {
  size: 16,
};
const links = [
  {
    name: "@jordienr",
    url: "https://x.com/jordienr",
    icon: <FaXTwitter {...iconProps} />,
    target: "_blank",
  },
  {
    name: "jordienr",
    url: "https://github.com/jordienr",
    icon: <FaGithubAlt {...iconProps} />,
    target: "_blank",
  },
  {
    name: "jordienric",
    url: "https://www.linkedin.com/in/jordienric/",
    icon: <FaLinkedinIn {...iconProps} />,
    target: "_blank",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="selection:bg-yellow-200 antialiased [&_a]:cursor-default tracking-[-0.017em]">
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
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <a
                className="group p-1.5 gap-3 flex items-center border border-white rounded-full px-3 transition-all font-medium bg-white hover:border-slate-200"
                key={link.name}
                href={link.url}
                target={link.target}
                title={link.name}
              >
                <span className="text-slate-500 transition-all group-hover:text-slate-700 font-medium">
                  {link.icon}
                </span>
                <span className="text-sm">{link.name}</span>
                <span className="opacity-50 group-hover:opacity-100 transition-all">
                  <ArrowUpRight size="14" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <hr className="flex-1 border-t border-slate-200" />
            <span className="text-slate-300 font-medium pointer-events-none mb-1 text-xl font-serif">
              ~
            </span>
            <hr className="flex-1 border-t border-slate-200" />
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
