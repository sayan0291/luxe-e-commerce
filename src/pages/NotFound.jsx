import { Button } from "../components"
import { NavLink } from "react-router-dom"

export const PageNotFound = () => {
    return(
        <>
            <div className="overflow-hidden h-screen w-screen">
                <NavLink className="absolute top-5 right-20 cursor-pointer font-semibold overflow-hidden z-100 border border-red-500 group px-8 py-2" to="/"  >
                    <span class="relative z-10 text-red-500 group-hover:text-white text-xl duration-500">Home</span>
                    <span class="absolute w-full h-full bg-red-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span class="absolute w-full h-full bg-red-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </NavLink>
                <img className="h-full w-full" src="/page_not_found.svg" alt="" />
            </div>
        </>
    )
}