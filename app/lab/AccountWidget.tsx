import {
  ChevronUp,
  Coffee,
  LogOut,
  Outdent,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function AccountWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: <LogOut size={19} />,
      label: "Log out",
    },
    {
      icon: <Settings size={19} />,
      label: "Settings",
    },
    {
      icon: <Coffee size={19} />,
      label: "Projects",
    },
    {
      icon: <User size={19} />,
      label: "Profile",
    },
  ];

  return (
    <div className="relative inline-flex">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.9,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="absolute bg-gradient-to-b from-white/80 to-slate-50 backdrop-blur-md w-full border-[.5px] border-slate-300 bottom-[67px] z-20 rounded-2xl shadow-sm shadow-slate-300 p-1 flex flex-col-reverse gap-1"
          >
            {menuItems.map((item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                key={item.label}
                className={`
                ${
                  item.label === "Log out"
                    ? "hover:bg-red-500 hover:from-red-400 hover:to-red-600"
                    : " hover:from-blue-400 hover:to-blue-600"
                }
                hover:bg-gradient-to-b group flex items-center gap-3 p-1.5 rounded-xl transition-all cursor-pointer text-sm
              `}
              >
                <span className="text-slate-400 group-hover:text-blue-100 pl-1.5">
                  {item.icon}
                </span>
                <span className="text-slate-800 group-hover:text-white">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex gap-3 items-center bg-gradient-to-b from-slate-50 to-slate-100 shadow-inner shadow-white p-2 rounded-2xl w-64 border-[.5px] border-slate-300 hover:border-blue-400"
      >
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 drop-shadow-md font-serif text-white w-12 h-12 rounded-xl flex items-center justify-center">
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
