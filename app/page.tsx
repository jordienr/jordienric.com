"use client";

import PhotosWidget from "@/components/PhotosWidget";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaSpotify,
} from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { IoGlassesOutline } from "react-icons/io5";

export default function Home() {
  const about =
    "Self-taught software engineer focused on building beautiful, snappy user interfaces.";

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jordienric/",
      icon: <FaLinkedinIn />,
      delay: 0.9,
    },
    {
      name: "GitHub",
      url: "https://github.com/jordienr",
      icon: <FaGithubAlt />,
      delay: 1,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/jordienr",
      icon: <FaTwitter />,
      delay: 1.1,
    },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen p-4">
      <header className="text-xl pt-12 text-center">
        <span className="text-orange-500">⌘</span>
        <h1 className="font-semibold">Jordi Enric</h1>
        <h4 className="text-slate-500">UI Engineer</h4>
      </header>

      {/* <motion.section
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.8,
          type: "spring",
        }}
        className="mt-12 flex gap-4"
      >
        {links.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: link.delay,
              type: "spring",
            }}
            className="w-full flex items-center border shadow-sm text-2xl bg-slate-100 rounded-2xl justify-center"
            key={link.name}
          >
            <div className="w-full flex justify-center text-slate-700 rounded-xl bg-white py-2">
              {link.icon}
            </div>
          </motion.a>
        ))}
      </motion.section> */}

      <section id="aboutWidget" className="my-4 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <div className="p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-sm border">
            <div className="text-orange-500 rounded-xl text-2xl">
              <IoGlassesOutline />
            </div>
            <p className="mt-2 text-slate-800 font-serif">
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
                  delay: 2.2,
                  type: "ease",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  repeatType: "reverse",
                }}
                className="h-5 w-1 -mb-0.5 bg-orange-500 inline-block"
              ></motion.span>
            </p>
          </div>
          <p className="text-xs text-center mt-1">About me</p>
        </motion.div>
      </section>

      <section id="workWidget" className="my-4 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <div className="p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-sm border">
            <div className="flex gap-4">
              <Image
                className="rounded-full border border-blue-200 h-10 w-10"
                src="/clidrive.jpeg"
                alt="NinetyNine logo"
                width={40}
                height={40}
              />

              <div className="flex flex-col">
                <h3 className="font-serif">
                  Currently Frontend Lead at Clidrive
                </h3>
                <p className="text-xs text-slate-600">
                  Building stuff with NextJS, TypeScript, TRPc, Tailwind, Zod,
                  Turborepo
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Image
                className="rounded-full h-10 w-10"
                src="/ninetyninej.jpeg"
                alt="NinetyNine logo"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h3 className="font-serif">
                  Previously, Frontend Lead at Ninety Nine
                </h3>
                <p className="text-xs text-slate-600">
                  Built component libraries and a brokerage web platform
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-1">Work</p>
        </motion.div>
      </section>

      <section id="weatherSpotifyWidgets" className="flex gap-4 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.15,
            type: "ease",
          }}
          className=""
        >
          <div className="w-36 h-36 rounded-2xl p-3 bg-gradient-to-b from-blue-400 to-blue-700 border border-blue-600 shadow-inner shadow-blue-400 text-white">
            <div className="w-12 h-12 text-2xl bg-white bg-opacity-30 rounded-xl flex justify-center items-center">
              🌞
            </div>
            <p className="font-medium mt-1">Mallorca</p>
            <div className="flex items-end gap-2 mt-3">
              <p className="text-2xl font-semibold">19º</p>
              <p className="">Sunny</p>
            </div>
          </div>
          <p className="text-xs text-center mt-1">Weather</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.15,
            delay: 0.15,
            type: "ease",
          }}
          className="w-full"
        >
          <Link
            href="https://open.spotify.com/album/1gu4P2JcclHD1BvDXx2pqq?si=Yed2LL0xTGWK9MXvh9dwBQ"
            target="_blank"
            className="rounded-2xl p-2 text-white bg-gradient-to-t via-black from-black to-green-700 border border-green-700 shadow-inner shadow-green-700 flex gap-2 flex-col h-36"
          >
            <div className="flex justify-between">
              <Image
                src="/flipturn_shadowglow_album_cover.jpeg"
                width="80"
                height="80"
                alt="Flipturn - Shadowglow"
                className="rounded-xl shadow-sm"
              ></Image>
              <div className="p-2 text-green-300">
                <FaSpotify />
              </div>
            </div>
            <div>
              <h2 className="text-xs tracking-wider font-bold text-green-300">
                2022 FAV ALBUM
              </h2>
              <h3 className="font-normal">Flipturn - Shadowglow</h3>
            </div>
          </Link>
          <p className="text-center text-xs mt-1">Spotify</p>
        </motion.div>
      </section>

      <section id="projectsWidgets">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.15,
            delay: 0.3,
            type: "ease",
          }}
          className="mt-8 mb-4 font-semibold text-xl"
        >
          Projects
        </motion.h2>
        <div className="flex gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.15,
              delay: 0.4,
              type: "ease",
            }}
            className=""
          >
            <Link target="_blank" href="https://weekops.com">
              <div className="border w-16 h-16 rounded-2xl flex justify-center items-center text-2xl font-serif bg-gradient-to-b from-white to-slate-50 shadow-sm">
                W
              </div>
              <div className="text-center text-xs mt-1">WeekOps</div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.15,
              delay: 0.5,
              type: "ease",
            }}
            className=""
          >
            <Link
              target="_blank"
              href="https://astro-design-system.vercel.app/"
            >
              <div className="w-16 h-16 rounded-2xl flex justify-center items-center text-3xl font-serif bg-gradient-to-br from-blue-400 to-blue-800 shadow-inner shadow-blue-400 border border-blue-500 text-white">
                <GiAstronautHelmet />
              </div>
              <div className="text-center text-xs mt-1">ADS</div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.15,
              delay: 0.6,
              type: "ease",
            }}
            className=""
          >
            <Link target="_blank" href="https://www.toolhunt.dev/">
              <div className="w-16 h-16 rounded-2xl flex justify-center items-center text-2xl font-semibold bg-gradient-to-tr from-indigo-500 to-black text-slate-100 border border-indigo-700 shadow-inner shadow-indigo-500">
                T
              </div>
              <div className="text-center text-xs mt-1">Toolhunt</div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.15,
              delay: 0.7,
              type: "ease",
            }}
            className=""
          >
            <Link
              target="_blank"
              href="https://jordienr.notion.site/Jordi-Enric-UI-Portfolio-ac3517bcd82544289caf07c4603bddfd"
            >
              <div className="h-16 w-16 rounded-2xl flex justify-center items-center text-2xl bg-gradient-to-b from-orange-100 to-orange-300 text-orange-600 font-semibold border border-orange-300 drop-shadow-sm">
                UI
              </div>
              <div className="text-center text-xs mt-1">UI Portfolio</div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="photosWidget" className="mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.15,
            delay: 1.2,
            type: "spring",
          }}
        >
          <PhotosWidget />
        </motion.div>
      </section>

      <section id="mapWidget" className="mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.15,
            delay: 1.2,
            type: "spring",
          }}
        >
          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-sm border">
            <div className="relative">
              <Image
                className="rounded-xl w-full h-52 object-cover"
                src="/map.png"
                width="300"
                height="300"
                alt="Map of Mallorca"
              />
              <div className="px-2 py-1 absolute bottom-2 left-2 bg-white rounded-xl bg-opacity-80 backdrop-blur-sm text-slate-800">
                Mallorca
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-1">Location</p>
        </motion.div>
      </section>

      <footer className="mt-24 p-12 rounded-lg flex justify-center">
        <Image src="/signature.svg" width="180" height="100" alt="Signature" />
      </footer>
    </div>
  );
}
