import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function AccountWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute bg-white w-full border-[.5px] "
        >
          menu
        </motion.div>
      )} */}
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
        <div className="ml-auto mr-2 group-hover:opacity-100 opacity-0 mt-2 group-hover:mt-0 transition-all text-blue-500">
          <ChevronUp width={16} />
        </div>
      </button>
    </div>
  );
}
