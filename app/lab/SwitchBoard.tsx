import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SwitchBoard() {
  const text = [
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  ];

  const [hover, setHover] = useState(false);

  function getVariants(index: number) {
    const variants = {
      hover: {
        backgroundColor: "#3B82F6",
        boxShadow: "0 0 8px 2px #C3DAFF",
        transition: {
          duration: 0.2,
          ease: "easeInOut",
          delay: index * 0.05,
        },
      },
      default: {
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      },
    };

    return variants;
  }

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="max-w-md border shadow-md shadow-slate-200 rounded-md p-4 mx-auto scale-75 md:scale-100"
    >
      <div className="group ">
        {text.map((row, i) => (
          <div key={i} className="flex justify-center gap-4">
            {row.map((col, j) => (
              <motion.div
                variants={getVariants(j)}
                animate={hover && col ? "hover" : "default"}
                key={j}
                className={`w-1 h-1 my-2 bg-slate-100 rounded-full transition-all`}
              ></motion.div>
            ))}
          </div>
        ))}
        <div className="mt-3 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Next.js 13</h2>
            <p className="mt-1 text-slate-500">
              The power of full-stack to the
              <br /> frontend. Read the release notes.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <button className="p-2 rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-500 transition-all">
              <ArrowRight size="16" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
