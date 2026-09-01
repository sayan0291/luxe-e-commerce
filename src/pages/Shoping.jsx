import { useState } from "react";
import { Button, Filter, RapidApiProducts } from "../components";
import useProduct from "../hooks/useProducts";

export const Shoping = () => {
    const [open,setOpen] = useState(false);
    const { products,loading } = useProduct()
    
    return(
        <div className="pt-20">
            <Button varient="filterBtn" onClick={() => setOpen(prevOpen => !prevOpen)}>
                <span className="material-symbols-outlined text-[18px]">tune</span> Filters
            </Button>
            <Filter open={open} setOpen={setOpen} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg px-lg py-xl">
                {loading ? (
                    <p className="col-span-full font-body-md text-body-md text-secondary">Loading products...</p>
                ) : products?.length ? (
                    products.slice(0,10).map((obj) => (
                        <div key={obj.id} className="group">
                            <RapidApiProducts obj={obj} />
                        </div>
                    ))
                ) : (
                    <p className="col-span-full font-body-md text-body-md text-secondary">No products found.</p>
                )}
            </div>
        </div>
    )
}
