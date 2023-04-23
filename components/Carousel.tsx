/* eslint-disable @next/next/no-img-element */
"use client";

import photos from "../public/photos.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Carousel() {
  const images = photos.map((photo) => "/photos/" + photo);
  let [index, setIndex] = useState(0);

  const getPrevImage = () => {
    if (index > 0) {
      return images[index - 1];
    } else {
      return images[images.length - 1];
    }
  };

  const getNextImage = () => {
    if (index + 1 < images.length) {
      return images[index + 1];
    } else {
      return images[0];
    }
  };

  function nextImage() {
    if (index + 1 < images.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function prevImage() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.button
            className="bg-white z-10 w-full flex items-center justify-center"
            onClick={() => prevImage()}
          >
            <ChevronLeftIcon />
          </motion.button>
        </AnimatePresence>
        <div className="flex gap-4">
          <motion.div
            animate={{ x: `-${index * 240}px` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex relative w-[480px] h-[480px]"
          >
            {images.map((img, i) => (
              <img
                key={img}
                src={img}
                alt=""
                className={`
                    w-[240px]
                    object-cover 
                    rounded-md 
                    transition
                    relative
                    left-[120px]
                    ${
                      i === index
                        ? "scale-100 shadow-md z-10"
                        : "scale-75 opacity-80 blur-sm"
                    }`}
              />
            ))}
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          <motion.button
            className="bg-white z-10 w-full flex items-center justify-center text-slate-400 hover:text-slate-800 transition"
            onClick={() => nextImage()}
          >
            <ChevronRightIcon />
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
}
