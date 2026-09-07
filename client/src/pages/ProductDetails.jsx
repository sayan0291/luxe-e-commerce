import { useState } from "react"
import { useLocation } from "react-router-dom"
import { size } from "../components/common/Filter"
import { Button,ColorSelector,DetailImageCard, SizeSelector } from "../components"

export const ProductDetails = () => {
    const [activeSizeId, setActiveSizeId] = useState(null);

    const location = useLocation();

    const obj = location.state?.product;

    if (!obj) {
        return <div>No product data found</div>;
    }
    console.log(obj)

    return(
        <div className="p-sm pt-30 flex-jc-ic flex-col gap-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div className="aspect-[1]">
                    <img className="w-full h-full" src={obj.Image} />
                </div>
                <div>
                    <section className="flex flex-col gap-sm">
                        <h2 className="font-label-md text-body-lg text-primary uppercase">{obj.Brand}</h2>
                        <p className="filter-h3 text-secondary lowercase mb-0" >{obj.Description}</p>
                        <h2 className="filter-h3 text-red-900 text-2xl" >{obj.Price}</h2>
                    </section>
                    <section className="flex flex-col gap-sm">
                        <ColorSelector />
                        <SizeSelector size={size} activeSizeId={activeSizeId} setActiveSizeId={setActiveSizeId} />
                    </section>
                    <section className="flex flex-col gap-sm mt-3">
                        <Button varient="homeBtn" className="bg-gray-900" >Add to Cart</Button>
                        <Button varient="homeBtn" className="bg-gray-100 !text-gray-900 border-1" >Add to Wishlist</Button>
                    </section>
                </div>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-margin-mobile md:pl-margin-desktop space-x-gutter pb-md">
                <DetailImageCard product="product1" />
                <DetailImageCard product="product2" />
                <DetailImageCard product="product3" />
                <DetailImageCard product="product4" />
            </div>
        </div>
    )
}