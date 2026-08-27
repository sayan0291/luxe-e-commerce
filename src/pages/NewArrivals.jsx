import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ProductCardDetail, Header } from "../components"
import { Products } from "../data/productData"

export const NewArrivals = () => {
    const [showCount,setShowCount] =  useState(8);
    const [btn,setbtn] =  useState(true);

    const handleClick = () => {
        setShowCount(Products.length);
        setbtn(!btn);
    }

    return(
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg">
            <div className="flex flex-col md:flex-row justify-between items-end mb-lg border-b border-outline-variant/30 p-sm mt-23">
                <div>
                    <Header title="New Arrivals" />
                    <p className="text-secondary font-body-md">Curated seasonal staples and avant-garde silhouettes. Designed for the modern minimalist.</p>
                </div>
                <div className="mt-sm md:mt-0 flex items-center gap-sm">
                {/* <!-- Filters / Sort --> */}
                <button className="flex items-center gap-base text-label-md font-label-md text-primary border border-outline-variant px-sm py-xs rounded-DEFAULT hover:border-primary transition-colors duration-200">
                <span className="material-symbols-outlined text-[18px]">tune</span> Filters
                                </button>
                <select className="text-label-md font-label-md text-primary border border-outline-variant px-sm py-xs rounded-DEFAULT bg-transparent focus:ring-0 focus:border-primary cursor-pointer hover:border-primary transition-colors duration-200 appearance-none pr-8 relative">
                <option>Sort: Latest</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
                </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter mb-xl">
                {Products.slice(0,showCount).map(obj => (
                            <NavLink key={obj.id} to="/product-details">
                                <ProductCardDetail obj={obj} />
                            </NavLink>
                            )
                )}
            </div>
            {
                btn ? (
                    <div className="flex-jc-ic mt-lg mb-xl">
                        <button className="bg-primary text-on-primary font-label-md text-label-md px-lg py-sm rounded-DEFAULT hover:opacity-90 transition-opacity duration-200" onClick={handleClick} >
                                        Load More
                        </button>
                    </div>
                ) : ""
            }
        </main>
    )
}