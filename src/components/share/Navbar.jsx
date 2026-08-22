import { NavLink } from "react-router-dom";

const navBtns = [
    {id:1,btnName: "Collections",to: "/collections"},
    {id:2,btnName: "New Arrivals",to: "/new-arrivals"},
    {id:3,btnName: "Lookbook",to: "/lookbook"},
    {id:4,btnName: "About",to: "/about"},
]

export const NavBar = () => (
        <header className="nav-bar">
            <nav>
                <div className="flex-ic gap-xl">
                    <NavLink to="/home" ><h1>LUXE</h1></NavLink>                    
                    <div className="hidden md:flex gap-md">
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
                </div>
                <div className="flex-ic gap-md">
                    <NavLink to="/cart" >
                        <span className="material-symbols-outlined text-primary">shopping_bag</span>
                    </NavLink>
                    <NavLink to="/user">
                        <span className="material-symbols-outlined text-primary">person</span>
                    </NavLink>
                    <button className="md:hidden">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </nav>
        </header>
);
