import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { navBtns } from "./Navbar";
import { Sliding } from "../../components"

export const Sidebar = () => {

    const [open,setOpen] = useState(false);

    return(
        <>
            <AnimatePresence>
                {
                    open && (
                        <Sliding>
                            <div className="flex flex-col gap-md">
                                {navBtns.map((obj) => (
                                    <NavLink
                                        key={obj.id}
                                        to={obj.to}
                                        className={({ isActive }) =>
                                            `font-label-sm text-label-sm uppercase tracking-wider text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:border-on-primary transition-colors duration-200 ${isActive ? "border-b border-primary pb-1" : ""}`
                                        }
                                    >
                                        {obj.btnName}
                                    </NavLink>
                                ))}
                            </div>
                        </Sliding>
                    )
                }
            </AnimatePresence>
        </>
    )
}