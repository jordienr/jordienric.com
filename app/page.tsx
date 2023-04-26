"use client";

import PhotosWidget from "@/components/PhotosWidget";
import UIWidget from "@/components/UIWidget";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaInstagram,
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
    {
      name: "Instagram",
      url: "https://instagram.com/jordi.enr",
      icon: <FaInstagram />,
      delay: 1.2,
    },
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen p-4">
      <header className="text-xl pt-12 text-center">
        <span className="text-orange-500">⌘</span>
        <h1 className="font-semibold">Jordi Enric</h1>
        <h4 className="text-slate-500">UI Engineer</h4>
      </header>

      <motion.section
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.2,
          delay: 0.8,
          type: "spring",
        }}
        className="mt-12 flex justify-center divide-x gap-2"
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
            className="p-2.5 text-slate-600 bg-white shadow-sm hover:text-blue-600 text-xl rounded-xl border border-slate-200"
            key={link.name}
            href={link.url}
            target="_blank"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.section>

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

      {/* <section id="uiWidget" className="my-4 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <div>
            <UIWidget />
          </div>
          <p className="text-xs text-center mt-1">Latest UI Work</p>
        </motion.div>
      </section> */}

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
                  Joined as the first frontend engineer and built the first
                  iterations of our websites. Went from 0 to €1M in 3 months.
                  Added +30 meme stickers to slack in the first week.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
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
                  Designed & developed TypeScript libraries, component
                  libraries, web trading application and more.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-1">Work</p>
        </motion.div>
      </section>

      <section id="spotifyWidget" className="my-4 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <iframe
            src="https://open.spotify.com/embed/album/1gu4P2JcclHD1BvDXx2pqq?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <p className="text-xs text-center mt-1">Fav 2022 album</p>
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
