import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Filter = ({ open, setOpen }) => {
  const [price,setPrice] = useState(1000)

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 1. Dark Backdrop Overlay */}
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
            className="absolute top-0 right-0 h-full w-100 bg-white shadow-lg z-50 overflow-y-auto p-6"
          >
            <div className="flex-bw-ic px-lg py-md border-b border-outline-variant/30">
              <h2 className="font-headline-md text-primary uppercase tracking-wider">
                Filters
              </h2>
            </div>
            <div className="flex-1 p-lg space-y-xl">
              <section>
                <h3 className="font-label-md text-primary uppercase mb-md tracking-widest">
                  Category
                </h3>
                <div className="flex flex-wrap gap-sm">
                  <button className="px-md py-xs border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    Tops
                  </button>
                  <button className="px-md py-xs border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    Bottoms
                  </button>
                  <button className="px-md py-xs border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    Outerwear
                  </button>
                  <button className="px-md py-xs border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    Accessories
                  </button>
                </div>
              </section>
              <section>
                <h3 className="font-label-md text-primary uppercase mb-md tracking-widest">
                  Size
                </h3>
                <div className="grid grid-cols-5 gap-xs">
                  <button className="aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    XS
                  </button>
                  <button className="aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    S
                  </button>
                  <button className="aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    M
                  </button>
                  <button className="aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    L
                  </button>
                  <button className="aspect-square flex items-center justify-center border border-outline-variant rounded-DEFAULT text-label-md hover:border-primary transition-colors">
                    XL
                  </button>
                </div>
              </section>
              <section>
                <h3 className="font-label-md text-primary uppercase mb-md tracking-widest">
                  Price Range
                </h3>
                <div className="space-y-md">
                  <input
                    className="w-full accent-primary cursor-pointer"
                    max="2000"
                    min="0"
                    step="50"
                    type="range"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <div className="flex justify-between text-label-sm text-secondary">
                    <span>₹0</span>
                    <span>₹{price}</span>
                    <span>₹2,000+</span>
                  </div>
                </div>
              </section>
            </div>
            <div className="border-t border-outline-variant/30 grid grid-cols-2 gap-md">
              <button className="py-sm text-label-md uppercase tracking-widest border border-outline-variant hover:bg-surface-container transition-colors rounded-DEFAULT">
                Clear All
              </button>
              <button className="py-sm text-label-md uppercase tracking-widest bg-primary text-on-primary hover:opacity-90 transition-opacity rounded-DEFAULT">
                Apply Filters
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
