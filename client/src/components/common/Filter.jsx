import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";

const category = [
  {id:1,name: "Mens Ware",value: "mensware"},
  {id:2,name: "Womens Ware",value: "womensware"},
  {id:3,name: "Watches",value: "watches"},
  {id:4,name: "Laptop",value: "laptop"},
  {id:5,name: "Kids Ware",value: "kidsware"},
  {id:6,name: "Mens Footware",value: "mensfootware"},
  {id:7,name: "Womens Footware",value: "womensfootware"},
]

const size = [
  {id: 1,name: "XS",valeu: "xs"},
  {id: 2,name: "S",valeu: "s"},
  {id: 3,name: "M",valeu: "m"},
  {id: 4,name: "L",valeu: "l"},
  {id: 5,name: "XL",valeu: "xl"}
]

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
            className="filter-section"
          >
            <div className="filter-section-1">
              <h2 className="filter-h3">
                Filters
              </h2>
              <h4 className="filter-h3 cursor-pointer" onClick={() => setOpen(false)}>
                X
              </h4>
            </div>
            <div className="flex-1 p-lg space-y-xl">
              <section>
                <h3 className="filter-h3">
                  Category
                </h3>
                <div className="flex flex-wrap gap-sm">
                  {
                    category.map(obj => (<Button key={obj.id} varient="filterBtnCategory" >{obj.name}</Button>))
                  }
                </div>
              </section>
              <section>
                <h3 className="filter-h3">
                  Size
                </h3>
                <div className="grid grid-cols-5 gap-xs">
                  {
                    size.map(obj => (<Button key={obj.id} varient="filterBtnSize">{obj.name}</Button>))
                  }
                </div>
              </section>
              <section>
                <h3 className="filter-h3">
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
              <Button varient="clearBtn">
                Clear All
              </Button>
              <Button varient="applyBtn">
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
