"use client";

import PhotosWidget from "@/components/PhotosWidget";
import { motion } from "framer-motion";
import { FlaskRound, Layers } from "lucide-react";
import Image from "next/image";

import {
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter,
  FaInstagram,
  FaGuitar,
} from "react-icons/fa";

export default function Home() {
  const about =
    "Self-taught software engineer, focused on building beautiful, snappy, user interfaces. Based in Mallorca 🏝️";

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
    <div className="max-w-2xl mx-auto min-h-screen p-2">
      <header className="text-xl mt-32 px-2">
        <span className="text-orange-500">
          <FaGuitar />
        </span>
        <h1 className="font-semibold mt-1">Jordi Enric</h1>
        <h4 className="text-slate-500">UI Engineer</h4>
      </header>

      <section className="mt-4 flex gap-1">
        {links.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
            }}
            className="h-10 w-10 text-slate-600 hover:text-blue-600 text-xl rounded-xl flex items-center justify-center"
            key={link.name}
            href={link.url}
            target={link.target}
          >
            {link.icon}
          </motion.a>
        ))}
      </section>

      <section id="aboutWidget" className="my-4 mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <div className="p-2">
            <p className="mt-2 text-slate-800 font-serif text-xl max-w-sm">
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

      <footer className="mt-24 p-12 rounded-lg flex justify-center">
        <Image src="/signature.svg" width="180" height="100" alt="Signature" />
      </footer>
    </div>
  );
}
