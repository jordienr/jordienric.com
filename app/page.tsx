"use client";

import PhotosWidget from "@/components/PhotosWidget";
import { motion } from "framer-motion";
import { FlaskRound, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaInstagram,
  FaGuitar,
} from "react-icons/fa";
import { GiAstronautHelmet } from "react-icons/gi";
import { IoGlassesOutline } from "react-icons/io5";

export default function Home() {
  const about =
    "Senior Software Engineer focused on building beautiful, snappy user interfaces and performant, scalable web applications.";

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
    {
      name: "Lab",
      url: "/lab",
      icon: <FlaskRound />,
      target: "_self",
    },
  ];

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      <header className="text-xl pt-12">
        <span className="text-orange-500">⌘</span>
        <h1 className="font-semibold">Jordi Enric</h1>
        <h4 className="text-slate-500">UI Engineer</h4>
        <div className="mt-12 flex divide-x gap-2">
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
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full p-1 h-10 w-10"
                src="/supabase.png"
                alt="Supabase logo"
                width={40}
                height={40}
              />

              <div className="flex flex-col items-center">
                <h3 className="">Currently Frontend at Supabase</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                className="rounded-full border border-black h-10 w-10"
                src="/clibrain.jpeg"
                alt="Clibrain logo"
                width={40}
                height={40}
              />

              <div className="flex flex-col">
                <h3 className="font-serif">
                  Currently Frontend Lead at Clibrain
                </h3>
                <p className="text-xs text-slate-600">
                  Joined as the first frontend engineer to build our first
                  customer facing apps and websites. I am responsible for the
                  architecture, code quality, performance and scalability of our
                  frontend applications.
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
                  I led the frontend development of the web trading platform
                  focusing on performance, scalability and code quality. I also
                  built a TypeScript library and Web Component library to help
                  other businesses integrate with our APIs.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-1">Work</p>
        </motion.div>
      </section>

      {/* <section id="spotifyWidget" className="my-4 mt-12">
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
      </section> */}

      {/* <section id="projectsWidgets">
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
        <div className="flex gap-4 flex-wrap">
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
              delay: 0.8,
              type: "ease",
            }}
            className=""
          >
            <Link target="_blank" href="https://frets.jordienric.com">
              <div className="h-16 w-16 rounded-2xl flex justify-center items-center text-2xl bg-gradient-to-b from-emerald-400 to-emerald-600 text-emerald-50 font-semibold border border-emerald-500 drop-shadow-sm">
                <FaGuitar />
              </div>
              <div className="text-center text-xs mt-1">Frets</div>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="mt-12">
        <div>
          <h2 className="mt-8 mb-4 font-semibold text-xl">New side project</h2>
          <Link
            className="mt-4 p-1 border-[0.3px] shadow-sm block rounded-2xl bg-white hover:bg-orange-50 transition-all"
            href="https://zendo.blog"
          >
            <Image
              src="/zendoblogbg.jpg"
              width="480"
              height="270"
              className="rounded-xl shadow-sm border-[0.5px] border-slate-300"
              alt="Zendoblog"
            />
          </Link>
        </div>
      </section> */}

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

      {/* <section id="mapWidget" className="mt-12">
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
      </section> */}

      <footer className="mt-24 p-12 rounded-lg flex justify-center">
        <Image src="/signature.svg" width="180" height="100" alt="Signature" />
      </footer>
    </div>
  );
}
