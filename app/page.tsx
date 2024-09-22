"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaPencilAlt,
} from "react-icons/fa";
import photos from "../public/photos.json";

const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

export default function Home() {
  const iconProps = {
    size: 16,
  };
  const links = [
    {
      name: "Twitter",
      url: "https://twitter.com/jordienr",
      icon: <FaTwitter {...iconProps} />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/jordienr",
      icon: <FaGithubAlt {...iconProps} />,
      target: "_blank",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jordienric/",
      icon: <FaLinkedinIn {...iconProps} />,
      target: "_blank",
    },
    {
      name: "Blog",
      url: "https://jordi.zenblog.com",
      icon: <FaPencilAlt />,
      target: "_blank",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 [&_a]:cursor-default">
      <div className="max-w-2xl px-6 mx-auto">
        <header className="pt-12">
          <h1 className="font-semibold text-xl px-1.5">Jordi Enric</h1>
          <h4 className="flex px-1.5 text-lg items-center gap-1 text-slate-500">
            Frontend at{" "}
            <Link
              href="https://supabase.com?ref=jordienric"
              target="_blank"
              className="transition-all text-emerald-500 inline-flex items-center gap-1.5 hover:underline"
            >
              <Image
                src="/logos/supabase-logo-icon.svg"
                height="15"
                width="15"
                alt="Supabase logo"
              />
              Supabase
            </Link>
          </h4>
          <div className="mt-4 grid">
            {links.map((link, index) => (
              <a
                className="group p-1.5 gap-3 flex items-center border-b hover:border-slate-400 transition-all"
                key={link.name}
                href={link.url}
                target={link.target}
                title={link.name}
              >
                <span className="text-slate-500 transition-all group-hover:text-slate-700">
                  {link.icon}
                </span>
                <span className="text-sm">{link.name}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight size="14" />
                </span>
              </a>
            ))}
          </div>
        </header>

        <section id="aboutWidget" className="my-4 mt-8">
          <div className="px-1.5">
            <div className="flex gap-1.5 text-xs items-center font-medium opacity-40">
              About me
            </div>
            <div className="mt-2 text-slate-800 space-y-3 text-xl">
              <p>
                I am a frontend developer from Mallorca, Spain 🏝️, passionate
                about creating beautiful and fast web applications.
              </p>
              <p>
                I have worked at both big tech companies and small startups.
                While I specialize in front end, I understand the full stack,
                from UI design to backend APIs and databases.
              </p>
              <p>
                I currently work at Supabase, an open-source Postgres
                development platform, focusing on observability and aiding
                developers in building better apps. I am also working on{" "}
                <Link
                  className="underline text-blue-500"
                  href="https://zenblog.com"
                  target="_blank"
                >
                  zenblog.com
                </Link>
                , an open-source headless CMS for blogging.
              </p>
              <p>
                Outside of work, I am a big fan of photography 📷 barbecuing 🍖
                playing music 🎸 traveling 🧳 hiking 🥾 and learning new things
                📚
              </p>
            </div>
          </div>
        </section>

        <footer className="py-12 px-4 rounded-lg flex justify-end">
          <Image
            src="/signature.svg"
            width="120"
            height="100"
            alt="Signature"
          />
        </footer>
      </div>
      <div className="hidden md:block sticky top-0 h-screen">
        <Image
          width={1000}
          height={1500}
          blurDataURL={`/photos/8-IMG_1758.jpg`}
          placeholder="blur"
          className="h-screen object-cover"
          src={`/photos/8-IMG_1758.jpg`}
          alt="Random photo"
        />
      </div>
    </div>
  );
}
