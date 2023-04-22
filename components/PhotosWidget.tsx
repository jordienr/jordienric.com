"use client";

import Image from "next/image";
import { useState } from "react";
import photos from "../public/photos.json";
import exif from "../public/exif.json";
import Link from "next/link";
import {
  FaDownload,
  FaImage,
  FaMapMarkerAlt,
  FaInfo,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function PhotosWidget() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [path, setPath] = useState("/photos/" + photos[0]);

  async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function nextPhoto() {
    if (photoIndex < photos.length - 1) {
      setPhotoIndex(photoIndex + 1);
      setPath("/photos/" + photos[photoIndex + 1]);
      await wait(1000);
    } else {
      setPhotoIndex(0);
      setPath("/photos/" + photos[0]);
    }
  }
  async function previousPhoto() {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
      setPath("/photos/" + photos[photoIndex - 1]);
      await wait(1000);
    } else {
      setPhotoIndex(photos.length - 1);
      setPath("/photos/" + photos[photos.length - 1]);
    }
  }

  function onLoad() {
    console.log("loaded");
  }
  function onLoadStart() {
    console.log("loading");
  }

  function getMapUrl(imgExif: any): string {
    // https://www.google.com/maps/search/N+47.75996111111111+E+13.361622222222222?sa=X&ved=2ahUKEwiC86zkhfn6AhWZgs4BHYbxBMYQ8gF6BAgJEAE

    const latRef = imgExif.tags.GPSLatitudeRef;
    const lngRef = imgExif.tags.GPSLongitudeRef;
    const lat = imgExif.tags.GPSLatitude;
    const lng = imgExif.tags.GPSLongitude;

    if (!lat || !lng || !latRef || !lngRef) {
      return "";
    }

    return `https://www.google.com/maps/search/${latRef}+${lat}+${lngRef}+${lng}`;
  }

  const variants = {
    transitioning: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    transitioned: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="relative border rounded-2xl p-1 bg-white shadow-sm">
        <AnimatePresence>
          <motion.span
            animate={isTransitioning ? "transitioning" : "transitioned"}
            exit="exit"
            custom={1}
            variants={variants}
          >
            <Image
              key={path}
              className="rounded-xl h-[600px] w-full object-cover"
              src={path}
              placeholder="blur"
              loading="lazy"
              blurDataURL={path}
              width={600}
              onLoad={onLoad}
              height={800}
              sizes="(max-width: 600px) 100vw, 600px"
              alt=""
            />
          </motion.span>
        </AnimatePresence>

        {!isTransitioning && (
          <div className="absolute left-3 bottom-3 bg-white flex justify-start gap-1 p-1 rounded-lg">
            <button onClick={previousPhoto} className="photo-btn">
              <FaChevronLeft />
            </button>
            <button onClick={nextPhoto} className="photo-btn">
              <FaChevronRight />
            </button>
          </div>
        )}

        <div className="absolute right-3 bottom-3 bg-white flex justify-end p-1 rounded-lg gap-1 font-mono">
          {showInfo && (
            <ul className="text-xs absolute right-0 bottom-11 bg-white p-1 px-2 rounded-lg gap-2 flex flex-col text-slate-600 w-52">
              <li>{exif[photoIndex].name}</li>
              <li className="font-mono">
                {exif[photoIndex].imageSize.height +
                  " x " +
                  exif[photoIndex].imageSize.width}
              </li>
              <li className="font-mono">{exif[photoIndex].tags.LensModel}</li>
            </ul>
          )}
          <button onClick={() => setShowInfo(!showInfo)} className="photo-btn">
            <FaInfo />
          </button>
          {getMapUrl(exif[photoIndex]) && (
            <Link
              target="_blank"
              rel="noreferrer"
              className="photo-btn"
              href={getMapUrl(exif[photoIndex])}
              title="Open in Google Maps"
            >
              <FaMapMarkerAlt />
            </Link>
          )}
          <Link
            className="photo-btn"
            target="_blank"
            rel="noreferrer"
            href={exif[photoIndex].path}
            title="Open in new tab"
          >
            <FaImage />
          </Link>
          <Link
            className="photo-btn"
            target="_blank"
            rel="noreferrer"
            download={exif[photoIndex].name}
            href={exif[photoIndex].path}
            title="Download"
          >
            <FaDownload />
          </Link>
        </div>
      </div>
      <h2 className="text-xs mt-1 text-center">Photos</h2>
    </>
  );
}
