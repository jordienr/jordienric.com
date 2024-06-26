"use client";

import { motion } from "framer-motion";
import { FlaskRound, Layers, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Carousel from "@/components/Carousel";
import LogosWidget from "./lab/LogosWidget";
import AccountWidget from "./lab/AccountWidget";
import Spotlight from "./lab/Spotlight";
import SwitchBoard from "./lab/SwitchBoard";
import { Navigation } from "./lab/Navigation";
import RotatingGradient from "./lab/RotatingGradient";
import StreaksWidget from "@/components/StreaksWidget";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  const about =
    "I'm a frontend developer focused on building beautiful, snappy user interfaces and performant, scalable web applications.";

  const links = [
    {
      name: "Twitter",
      url: "https://twitter.com/jordienr",
      icon: <FaTwitter />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/jordienr",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jordienric/",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-slate-50">
      <div className="max-w-xl mx-auto">
        <header className="text-xl pt-12 max-w-xl mx-auto">
          <span className="text-orange-500">⌘</span>
          <h1 className="font-semibold">Jordi Enric</h1>
          <h4 className="text-slate-400 flex items-center gap-1">
            Frontend at{" "}
            <Link
              href="https://supabase.com?ref=jordienric"
              target="_blank"
              className=" hover:bg-emerald-100 rounded-full px-2 pr-3 py-1 border border-transparent hover:border-emerald-400 transition-all cursor-alias text-emerald-500 inline-flex items-center gap-1.5"
            >
              <Image
                src="/logos/supabase-logo-icon.svg"
                height="18"
                width="18"
                alt="Supabase logo"
              />
              Supabase
            </Link>
          </h4>
          <div className="mt-4 flex gap-2">
            {links.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                }}
                className="h-10 w-10 text-slate-600 bg-white shadow-sm hover:text-blue-400 text-xl rounded-xl flex items-center justify-center border border-slate-200"
                key={link.name}
                href={link.url}
                target={link.target}
              >
                {link.icon}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                type: "spring",
              }}
            >
              <Link
                className="h-10 px-4 bg-white text-slate-700 hover:text-blue-500 font-medium rounded-xl flex items-center border border-slate-200 shadow-sm text-sm"
                href="/blog"
              >
                Blog
              </Link>
            </motion.div>
          </div>
        </header>

        <section id="aboutWidget" className="my-4 mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
            }}
          >
            <div className="px-4 py-3 rounded-xl bg-white shadow-sm border">
              <div className="flex gap-1.5 text-xs items-center font-mono font-medium text-orange-500">
                about_me.md
              </div>
              <p className="mt-2 text-slate-800 font-mono">
                {about.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.05,
                        delay: index * 0.025,
                        type: "spring",
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.15,
                    delay: 3,
                    type: "ease",
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    repeatType: "reverse",
                  }}
                  className="h-5 w-1 -mb-0.5 bg-orange-500 inline-block"
                ></motion.span>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
      <motion.div
        className="max-w-xl mx-auto mt-12"
        initial={{ opacity: 0, scale: 0.7, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "spring",
        }}
      >
        <h2 className="font-medium text-slate-400 text-xl">My work</h2>
        <div className="max-w-xl flex flex-col gap-4 mx-auto mt-4">
          <div className="">
            <div className="flex justify-center items-center">
              <div className="bg-white max-w-xl w-full rounded-xl shadow-sm border p-2">
                <LogosWidget />
              </div>
            </div>
          </div>
          <div className=" bg-white border p-1 py-4 rounded-xl shadow-sm">
            <Carousel />
          </div>
          <div className=" p-4 bg-white border rounded-xl shadow-sm flex items-center justify-center">
            <AccountWidget />
          </div>
          <div className="">
            <Spotlight>
              <div className="text-center text-white text-xl flex flex-col justify-center items-center">
                Spotlight Hover
                <p className="text-xs mt-1 opacity-80 bg-slate-50/10 inline-block px-3 py-1 rounded-md">
                  Doesn&apos;t work on mobile
                </p>
              </div>
            </Spotlight>
          </div>
          <div className=" bg-white p-4 rounded-xl shadow-sm border">
            <SwitchBoard />
            <div className="text-xs mt-4 text-slate-400 text-center">
              Doesn&apos;t work on mobile
            </div>
          </div>

          <div className="">
            <div className="bg-white border shadow-sm  items-center p-12 rounded-xl flex-grow max-w-full overflow-auto flex justify-center">
              <Navigation />
            </div>
          </div>
          <div className=""></div>
          {/* <div className=" rounded-xl">
          <video
            src="/videos/bookmarks.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl"
          />
          <p
            className="
            mt-2 text-right text-blue-500 text-sm
          "
          >
            <Link
              href="https://github.com/jordienr/bookmarks-menubar"
              target="_blank"
              className="underline p-2"
            >
              Bookmarks menubar
            </Link>
          </p>
        </div> */}
          <div className="">
            <video
              src="/videos/opensource.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="w-full rounded-xl shadow-sm border"
            />
            <p
              className="
            mt-2 text-right text-blue-500 text-sm
          "
            >
              <Link
                href="https://zenblog.com"
                target="_blank"
                className="underline p-2"
              >
                Zenblog.com
              </Link>
            </p>
          </div>
          <div>
            <Image
              src="/vercel-menubar.jpeg"
              width="1280"
              height="800"
              alt="Vercel menubar"
              className="rounded-xl w-full shadow-sm border"
            />
            <p className="mt-2 text-right text-blue-500 text-sm">
              <Link
                href="https://github.com/jordienr/vercel-menubar"
                target="_blank"
                className="underline p-2"
              >
                Vercel menubar
              </Link>
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto mt-12">
          <h2 className="mb-2">FAQ</h2>
          <FAQ />
        </div>

        <footer className="mt-24 p-12 rounded-lg flex justify-center">
          <Image
            src="/signature.svg"
            width="180"
            height="100"
            alt="Signature"
          />
        </footer>
      </motion.div>
    </div>
  );
}
