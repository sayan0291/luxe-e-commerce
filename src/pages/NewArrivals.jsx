import { useState } from "react"
import { NavLink } from "react-router-dom"
import { ProductCardDetail, Header, Button } from "../components"
import { Products } from "../data/productData"
import { allData } from "../api/apiHandle"

export const NewArrivals = () => {
    const [showCount,setShowCount] =  useState(8);
    const [btn,setbtn] =  useState(true);
    {allData()}

    return(
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg">
            <div className="flex flex-col md:flex-row justify-between items-end mb-lg border-b border-outline-variant/30 p-sm mt-23">
                <div>
                    <Header title="New Arrivals" />
                    <p className="text-secondary font-body-md">Curated seasonal staples and avant-garde silhouettes. Designed for the modern minimalist.</p>
                </div>
                <div className="mt-sm md:mt-0 flex items-center gap-sm">
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
                        <Button className="bg-red-500" varient="homeBtn" onClick={()=> {setShowCount(Products.length);setbtn(!btn);}} >
                                        Load More
                        </Button>
                    </div>
                ) : (<div className="flex-jc-ic mt-lg mb-xl">
                        <Button className="bg-gray-800" varient="homeBtn" onClick={() => {setShowCount(8);setbtn(!btn);}} >
                                        Load less
                        </Button>
                    </div>)
            }
        </main>
    )
}