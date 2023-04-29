/* eslint-disable @next/next/no-img-element */
"use client";

import photos from "../public/photos.json";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Carousel() {
  const images = photos.map((photo) => "/photos/" + photo);
  let [index, setIndex] = useState(0);

  const SIZE = 320;

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
      <div className="flex justify-center overflow-hidden max-w-full">
        <AnimatePresence initial={false}>
          <motion.button
            className="bg-white z-10 flex items-center justify-center w-full px-2"
            onClick={() => prevImage()}
          >
            <ChevronLeftIcon />
          </motion.button>
        </AnimatePresence>
        <div className="flex gap-4">
          <motion.div
            animate={{ x: `-${index * (SIZE / 2)}px` }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className={`flex relative w-[${SIZE}px] h-[${SIZE}px]`}
          >
            {images.map((img, i) => (
              <Image
                key={img}
                src={img}
                alt=""
                width={SIZE / 2}
                height={SIZE / 2}
                className={`
                    w-[${SIZE / 2}px]
                    object-cover 
                    rounded-md 
                    transition
                    relative
                    left-[${SIZE / 2}px]
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
            className="bg-white z-10 flex items-center justify-center text-slate-400 hover:text-slate-800 transition w-full px-2"
            onClick={() => nextImage()}
          >
            <ChevronRightIcon />
          </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
}
