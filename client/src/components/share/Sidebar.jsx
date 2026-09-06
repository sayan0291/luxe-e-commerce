import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { navBtns } from "./Navbar";
import { Sliding } from "../../components"
import { NavLink } from "react-router-dom";

export const Sidebar = ({open,setOpen}) => {

    return(
        <>
            <AnimatePresence>
                {
                    open && (
                        <Sliding setOpen={setOpen}>
                            <div className="filter-section-1 flex-ic flex-col h-screen">
                                {navBtns.map((obj) => (
                                    <NavLink
                                        key={obj.id}
                                        to={obj.to}
                                        className={({ isActive }) =>
                                            `nav-btns p-2 ${isActive ? "bg-primary/20 p-1" : ""}`
                                        }
                                    >
                                        {obj.btnName}
                                    </NavLink>
                                ))}
                                <NavLink className="nav-btns" to="/user" >
                                    user
                                </NavLink>
                            </div>
                        </Sliding>
                    )
                }
            </AnimatePresence>
        </>
    )
}