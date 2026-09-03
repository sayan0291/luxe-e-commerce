import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button, Filter, RapidApiProducts,Loader } from "../components";
import useProduct from "../hooks/useProducts";

export const categoryMapping = {
        "mens-wear": "menswear",
        "womens-wear": "womenswear",
        "watches": "watches",
        "laptop": "laptops",
        "kids-wear": "kidswear",
        "mens-footwear": "malefootwear",
        "womens-footwear": "femalefootwear"
};

export const Shoping = () => {
    const [searchParams] = useSearchParams()
    const [open,setOpen] = useState(false);
    const [showCount,setShowCount] =  useState(gt10);
    // const [category,setCategory] = useState();
    const [btn,setbtn] =  useState(true);
    const { products,loading,category,setCategory } = useProduct()
    const queryTerm = searchParams.get('category') || "mens-wear";

    useEffect(() => {
        if (categoryMapping[queryTerm]) {
            setCategory(categoryMapping[queryTerm]);
        }
    },[queryTerm,setCategory])
    
    return(
        <div className="py-20">
            <Button varient="filterBtn" onClick={() => setOpen(prevOpen => !prevOpen)}>
                <span className="material-symbols-outlined text-[18px]">tune</span> Filters
            </Button>
            <Filter open={open} setOpen={setOpen} />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg px-lg py-xl">
                {loading ? (
                    <div className="flex-jc-ic h-[50vh] w-screen">
                        <Loader />
                    </div>
                ) : products?.length ? (
                    products.slice(0,showCount).map((obj) => (
                        <div key={obj.id} className="group">
                            <RapidApiProducts obj={obj} />
                        </div>
                    ))
                ) : (
                    <p className="col-span-full font-body-md text-body-md text-secondary">No products found.</p>
                )}
            </div>
            <div className="flex-jc-ic gap-sm flex-col md:flex-row">
                {
                    products.length > 11 && (<div className="flex-jc-ic">
   <Button className="bg-red-500" varient="homeBtn" onClick={()=> {setShowCount(prevCount => prevCount += 10);setbtn(false);}} >
                                                                Load More
                                                </Button>
                                            </div>)
                }
                {
                    !btn && (<div className="flex-jc-ic">
                        <Button className="bg-gray-800" varient="homeBtn" onClick={() => {setShowCount(prevCount => prevCount -= 10);}} >
                                        Load less
                        </Button>
                    </div>)
                }
            </div>
        </div>
    )
}
