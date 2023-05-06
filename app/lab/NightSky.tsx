import { motion } from "framer-motion";

export default function NightSky() {
  const total = 20;
  const stars = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 20)
  );

  return (
    <div className="relative bg-gradient-to-br from-black to-blue-700 p-24 rounded-md">
      {stars.map((star, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1],
            scale: [0.8, 1.5, 0.8],
            rotate: [0, 360, 0],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 4,
            repeat: Infinity,
          }}
          key={i}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            top: `${Math.floor(Math.random() * 100)}%`,
            left: `${Math.floor(Math.random() * 100)}%`,
          }}
        />
      ))}
    </div>
  );
}
