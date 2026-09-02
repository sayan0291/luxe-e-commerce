import { Outlet } from "react-router-dom";
import { NavBar,Footer } from "../../components";

export const MainLayouts = () => {
    return(
        <div className="flex flex-col">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
