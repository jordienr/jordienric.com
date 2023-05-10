import { motion } from "framer-motion";

export default function RotatingGradient() {
  return (
    <div className="flex justify-center">
      <motion.button
        initial={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(14, 165, 233, 0) 0deg, #FFFFFF 63.75deg, #FFFFFF 360deg)",
          color: "black",
        }}
        animate={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(14, 165, 233, 0) 0deg, #333333 63.75deg, #FFFFFF 360deg)",
          color: "white",
        }}
        transition={{
          duration: 3,
        }}
        style={{
          background: "conic-gradient(red 4%, white 10%)",
        }}
        className="p-3 border shadow-sm rounded-md flex items-center gap-2"
      >
        Rotating Gradient
      </motion.button>
    </div>
  );
}
