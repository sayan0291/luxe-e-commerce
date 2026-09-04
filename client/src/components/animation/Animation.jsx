import { motion } from "motion/react";

export const FadeUp = ({children,className="",...props}) => {
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
                {...props}
            >
                {children}
            </motion.div>
        </>
    )
}

export const Sliding = ({children}) => {
    return(
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)} // Clicking outside closes the sidebar
                className="fixed inset-0 bg-black z-40"
            />

          {/* 2. Sliding Sidebar */}
            <motion.div
                initial={{ x: "100%" }} // Starts hidden on the right side
                animate={{ x: 0 }}       // Slides into view
                exit={{ x: "100%" }}     // Slides back out when closed
                transition={{ type: "tween", duration: 0.3 }} // Smooth animation style
                className="filter-section"
            >
                {children}
            </motion.div>
        </>
    )
}