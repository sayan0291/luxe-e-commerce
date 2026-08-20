import { Outlet } from "react-router-dom";
import { NavBar } from "../share/Navbar";

export const MainLayouts = () => {
    return(
        <div className="flex flex-col">
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}