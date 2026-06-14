"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithubAlt, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export const HeaderLinks = () => {
  const iconProps = {
    size: 16,
  };
  const links = [
    {
      name: "@jordienr",
      url: "https://x.com/jordienr",
      icon: <FaXTwitter {...iconProps} />,
      target: "_blank",
    },
    {
      name: "jordienr",
      url: "https://github.com/jordienr",
      icon: <FaGithubAlt {...iconProps} />,
      target: "_blank",
    },
  ];

  return (
    <div className="flex space-x-2">
      {links.map((link, index) => (
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="group p-1.5 gap-3 flex items-center px-3 transition-all font-medium hover:bg-slate-100/70 text-slate-800 bg-slate-100 rounded-full size-10 hover:text-blue-500"
          key={link.name}
          href={link.url}
          target={link.target}
          title={link.name}
        >
            {link.icon}
        </motion.a>
      ))}
    </div>
  );
};
