import { motion } from "motion/react";


export const Loader = () => {
  return(
    <motion.div 
      className="spinner"
      animate={{ transform: "rotate(360deg)" }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}
