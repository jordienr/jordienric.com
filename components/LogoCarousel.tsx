import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

type ElementProps = {
  title: string;
  description: string;
  image: any;
};
function Element({ title, description, image }: ElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {});

  return (
    <motion.div
      transition={{ duration: 1 }}
      ref={ref}
      className="snap-center p-3 flex flex-col items-center min-w-full"
    >
      <div className="rounded-xl border h-64 w-full">{image}</div>
      <div>{title}</div>
      <div>{description}</div>
    </motion.div>
  );
}

export default function LogoCarousel() {
  const els = [
    {
      title: "title 1",
      description: "description 1",
      image: (
        <svg>
          <rect
            width="100"
            height="100"
            style={{
              fill: "rgb(0,0,255)",
              strokeWidth: 3,
              stroke: "rgb(0,0,0)",
            }}
          />
        </svg>
      ),
    },
    {
      title: "title 2",
      description: "description 2",
      image: "image 2",
    },
    {
      title: "title 3",
      description: "description 3",
      image: "image 3",
    },
    {
      title: "title 4",
      description: "description 4",
      image: "image 4",
    },
  ];

  return (
    <div className="flex border border-red-400 justify-center items-center flex-col">
      <div className="snap-mandatory snap-x flex overflow-auto w-full">
        {els.map((el, index) => (
          <Element {...el} key={index + "-el"} />
        ))}
      </div>
      <div className="flex gap-2 p-2">
        {els.map((el, index) => (
          <div
            key={index + "-dot"}
            className="h-3 w-3 rounded-full bg-slate-500"
          ></div>
        ))}
      </div>
    </div>
  );
}
