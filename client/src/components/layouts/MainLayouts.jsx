import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavBar,Footer,Sidebar } from "../../components";

export const MainLayouts = () => {
    const [open,setOpen] = useState(false)


    return(
        <div className="flex flex-col">
            <NavBar open={open} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
