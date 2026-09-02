import { motion } from "motion/react";

export const FadeUp = ({children,className=""}) => {
    return(
        <>
            <motion.div className={className}
                initial={{opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once:false ,amount: 0.25 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    mass: 0.8,
                    duration: 1.5
                }}
                whileHover={{ 
                    y: -6, 
                    scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" } 
                }}
                whileTap={{ scale: 0.98 }}
                style={{ cursor: "pointer" }}
            >
                {children}
            </motion.div>
        </>
    )
}