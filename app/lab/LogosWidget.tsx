import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    name: "Supabase",
    icon: "supabase-wordmark-light.png",
  },
  {
    name: "Next.js",
    icon: "nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss.svg",
  },
  {
    name: "Framer Motion",
    icon: "framermotion.svg",
  },
];

function Logo({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex w-[200px] h-20 justify-center items-center px-4">
      <Image
        className="object-contain object-center"
        src={`/logos/${icon}`}
        alt={name}
        width={180}
        height={120}
      />
    </div>
  );
}

export default function LogosWidget() {
  const duration = 20;

  const animation1 = {
    x: ["0%", "-100%"],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };
  const animation2 = {
    x: ["100%", "0%"],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <>
      <motion.div className="relative max-w-md flex overflow-x-hidden mx-auto">
        <div className="w-12 h-full absolute left-0 top-0 z-10 bg-gradient-to-r from-white to-white/0"></div>
        <motion.div animate={animation1} className="flex">
          {logos.map((logo, index) => {
            return <Logo key={index} name={logo.name} icon={logo.icon} />;
          })}
        </motion.div>
        <motion.div animate={animation2} className="flex absolute top-0">
          {logos.map((logo, index) => {
            return <Logo key={index} name={logo.name} icon={logo.icon} />;
          })}
        </motion.div>
        <div className="w-24 h-full absolute right-0 top-0 z-10 bg-gradient-to-l from-white to-white/0"></div>
      </motion.div>
    </>
  );
}
