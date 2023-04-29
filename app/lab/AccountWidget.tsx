import {
  ChevronUp,
  Coffee,
  LogOut,
  Outdent,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function AccountWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: <User size={19} />,
      label: "Profile",
      delay: 0.4,
    },
    {
      icon: <Coffee size={19} />,
      label: "Projects",
      delay: 0.3,
    },
    {
      icon: <Settings size={19} />,
      label: "Settings",
      delay: 0.2,
    },
    {
      icon: <LogOut size={19} />,
      label: "Log out",
      delay: 0.1,
    },
  ];

  return (
    <div className="relative inline-flex">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.2,
          }}
          className="absolute bg-white backdrop-blur-md w-full border-[.5px] bottom-[67px] z-20 rounded-2xl shadow-sm p-1"
        >
          {menuItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                delay: item.delay,
              }}
              key={item.label}
              className="group flex items-center gap-3 p-1.5 hover:bg-blue-50 rounded-xl transition-all cursor-pointer text-sm"
            >
              <span className="text-slate-400 group-hover:text-blue-400 pl-1.5">
                {item.icon}
              </span>
              <span className="text-slate-800 group-hover:text-blue-600">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex gap-3 items-center bg-gradient-to-b from-slate-50 to-slate-100 shadow-inner shadow-white p-2 rounded-2xl w-64 border-[.5px] hover:border-blue-400"
      >
        <div className="bg-blue-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold">
          JE
        </div>
        <div className="flex flex-col text-left">
          <span className="font-semibold">Jordi Enric</span>
          <span className="text-slate-600 -mt-1 ml-0.5">sup@jordi.com</span>
        </div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          className="ml-auto mr-2 group-hover:opacity-100 opacity-0 mt-2 group-hover:mt-0 transition-all text-blue-500"
        >
          <ChevronUp width={16} />
        </motion.div>
      </button>
    </div>
  );
}
