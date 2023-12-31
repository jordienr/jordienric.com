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

export default function Home() {
  const about =
    "I'm a frontend developer focused on building beautiful, snappy user interfaces and performant, scalable web applications.";

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jordienric/",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
    {
      name: "GitHub",
      url: "https://github.com/jordienr",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jordienr",
      icon: <FaTwitter />,
      target: "_blank",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/jordi.enr",
      icon: <FaInstagram />,
      target: "_blank",
    },
    {
      name: "Layers",
      url: "https://layers.to/jordi",
      icon: <Layers />,
      target: "_blank",
    },
  ];

  return (
    <div className="min-h-screen p-4 bg-slate-50">
      <div className="max-w-xl mx-auto">
        <header className="text-xl pt-12 max-w-xl mx-auto">
          <span className="text-orange-500">⌘</span>
          <h1 className="font-semibold">Jordi Enric</h1>
          <h4 className="text-slate-400">
            Frontend at{" "}
            <Link
              href="https://supabase.com"
              target="_blank"
              className="underline cursor-alias text-emerald-500"
            >
              Supabase
            </Link>
          </h4>
          <div className="mt-4 flex divide-x gap-2">
            {links.map((link, index) => (
              <motion.a
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                }}
                className="h-10 w-10 text-slate-600 bg-white shadow-sm hover:text-blue-600 text-xl rounded-xl flex items-center justify-center border border-slate-200"
                key={link.name}
                href={link.url}
                target={link.target}
              >
                {link.icon}
              </motion.a>
            ))}
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

      <h2 className="text-center font-medium text-slate-600 text-xl mt-12">
        My work
      </h2>
      <div className="max-w-xl grid grid-cols-12 mx-auto mt-4 gap-4">
        {/* <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div>
        <div className="col-span-1 bg-blue-500 w-full h-4"></div> */}
        <div className="col-span-12">
          <div className="flex justify-center items-center">
            <div className="bg-white max-w-xl w-full rounded-xl shadow-sm border p-2">
              <LogosWidget />
            </div>
          </div>
        </div>
        <div className="col-span-12 bg-white border p-1 py-4 rounded-xl shadow-sm">
          <Carousel />
        </div>
        <div className="col-span-12 p-4 bg-white border rounded-xl shadow-sm flex items-center justify-center">
          <AccountWidget />
        </div>
        <div className="col-span-12">
          <Spotlight>
            <div className="text-center text-white text-xl cursor-context-menu flex flex-col justify-center items-center">
              Spotlight Hover
              <p className="text-xs mt-1 opacity-80 bg-slate-50/10 inline-block px-3 py-1 rounded-md">
                Doesn`t work on mobile
              </p>
            </div>
          </Spotlight>
        </div>
        <div className="col-span-12 bg-white p-4 rounded-xl shadow-sm border">
          <SwitchBoard />
        </div>

        <div className="col-span-12">
          <div className="bg-gradient-to-br from-slate-700 to-slate-900 items-center p-12 rounded-xl flex-grow max-w-full overflow-auto flex justify-center">
            <Navigation />
          </div>
        </div>
        <div className="col-span-12"></div>
        <div className="col-span-12 rounded-xl">
          <video
            src="/videos/bookmarks.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl"
          />
        </div>
        <div className="col-span-12">
          <video
            src="/videos/opensource.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="w-full rounded-xl shadow-sm border"
          />
        </div>
      </div>

      <footer className="mt-24 p-12 rounded-lg flex justify-center">
        <Image src="/signature.svg" width="180" height="100" alt="Signature" />
      </footer>
    </div>
  );
}
